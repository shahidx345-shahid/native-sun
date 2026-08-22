const { execSync } = require('child_process');

console.log("Starting robust batch uploader...");

// Get all untracked and modified files, fully flattened
let files = [];
try {
    const untracked = execSync('git ls-files --others --exclude-standard').toString();
    const modified = execSync('git ls-files -m').toString();
    files = [...untracked.split('\n'), ...modified.split('\n')]
        .filter(line => line.trim().length > 0)
        .map(line => line.trim().replace(/^"|"$/g, ''));
} catch (e) {
    console.error("Error getting files list:", e.message);
}

// Remove duplicates
files = [...new Set(files)];

console.log(`Found ${files.length} individual files to upload.`);

// Batch size (number of files per commit)
const BATCH_SIZE = 50; 
let batchCount = 0;
const totalBatches = Math.ceil(files.length / BATCH_SIZE);

for (let i = 0; i < files.length; i += BATCH_SIZE) {
    const chunk = files.slice(i, i + BATCH_SIZE);
    batchCount++;
    console.log(`\n--- Uploading Batch ${batchCount} / ${totalBatches} ---`);
    
    // Wrap paths in quotes to handle spaces
    const fileArgs = chunk.map(f => `"${f}"`).join(' ');
    
    try {
        console.log(`Adding ${chunk.length} files...`);
        execSync(`git add ${fileArgs}`);
        execSync(`git commit -m "Upload batch ${batchCount}"`);
    } catch (e) {
        // Ignore if already committed
    }
    
    let retries = 5;
    let success = false;
    
    while (retries > 0 && !success) {
        try {
            console.log(`Pushing batch ${batchCount} to GitHub...`);
            execSync('git push origin main');
            console.log(`✅ Batch ${batchCount} uploaded successfully!`);
            success = true;
        } catch (e) {
            console.error(`❌ Push failed. Internet dropped. Retrying...`);
            retries--;
            if (retries === 0) {
                console.error("Giving up.");
                process.exit(1);
            }
        }
    }
}
console.log("\n🎉 ALL DONE! GitHub upload is complete!");
