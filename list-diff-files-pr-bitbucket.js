// Task - When we need a list of files that are changed in a PR for BITBUCKET
// Use Case - Required when we need to keep track of changes in a CR
(function () {
    try {
        const results = [];

        document.querySelectorAll(".jstree-open").forEach((folder) => {
            // Fetches the folderName
            let folderName = folder.querySelector('a').innerText.trim();

            // List therough all the files in the given folder
            folder.querySelectorAll('li').forEach((file) => {
                // Find the pathname inside the folder
                let fileName = file.querySelector('a').innerText.trim();
                // Append add filename with folderName to complete the absolute path
                results.push(`${folderName}/${fileName}`);
            });
        });

        console.log(results);
        // Copies list of files in clipboard - line separated
        copy(results.join('\n'));
    } catch (e) {
        console.log(e);
    }

})();
