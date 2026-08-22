<?php
// delete_all.php
// This script deletes everything in the current directory except itself.

function deleteDir($dirPath) {
    if (!is_dir($dirPath)) {
        return;
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);
}

$currentDir = __DIR__;
$items = scandir($currentDir);

foreach ($items as $item) {
    if ($item === '.' || $item === '..' || $item === 'delete_all.php') {
        continue;
    }
    
    $fullPath = $currentDir . DIRECTORY_SEPARATOR . $item;
    
    if (is_dir($fullPath)) {
        deleteDir($fullPath);
    } else {
        unlink($fullPath);
    }
}

echo "<h1>All old files and folders have been successfully deleted!</h1>";
echo "<p>You can now upload your new Next.js files.</p>";
?>
