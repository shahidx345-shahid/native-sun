const Client = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');

async function deploy() {
    const sftp = new Client();
    
    // We use the direct IP address because your ISP is failing to resolve the IONOS hostname
    const config = {
        host: '74.208.236.116',
        port: 22,
        username: 'a1443682',
        password: 'NativeSun2026!'
    };
    
    try {
        console.log(`Connecting securely via SFTP to ${config.host}...`);
        await sftp.connect(config);
        console.log("✅ Successfully connected to IONOS via SFTP!");
        
        console.log("Emptying the root directory on the server (deleting old files)...");
        // We delete everything inside the current remote directory (root)
        const list = await sftp.list('.');
        for (const item of list) {
            if (item.name === '.' || item.name === '..') continue;
            
            console.log(`Deleting ${item.name}...`);
            if (item.type === 'd') {
                await sftp.rmdir(item.name, true); // recursive delete
            } else {
                await sftp.delete(item.name);
            }
        }
        console.log("✅ Old files deleted successfully.");
        
        console.log("Uploading your new Next.js website (out folder)... This might take a few minutes for 450MB!");
        
        // Upload the entire 'out' directory to the remote root '.'
        await sftp.uploadDir(path.join(__dirname, 'out'), '.');
        
        console.log("🎉 Upload complete! Your new Next.js website is LIVE!");
        
    } catch (err) {
        console.error("❌ An error occurred during deployment:", err.message);
    } finally {
        sftp.end();
    }
}

deploy();
