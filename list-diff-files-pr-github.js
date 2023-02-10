// Task - When we need a list of files that are changed in a PR for GITHUB
// Use Case - Required when we need to keep track of changes in a CR
(function () {
    const results = [];
    try {
        const nodes = document.querySelectorAll(".ActionList.ActionList--tree.ActionList--full .ActionList-item--hasSubItem.js-tree-node li");

        // If no diff files found 
        if (nodes.length === 0) {
            console.warn('Either the PR is empty or due to DOM changes script is ineffective');
            return;
        }

        for (const file of nodes) {
            for (const attr of file.attributes) {
                if (attr.name.startsWith("data-hydro-click-payload")) {
                    results.push(JSON.parse(attr.value).payload.data.path);
                }
            }
        }
        console.log(results)

        // In case user wants line-separated list of files 
        copy(results.join('\n'));
    } catch (e) {
        console.log(e)
    }
})();