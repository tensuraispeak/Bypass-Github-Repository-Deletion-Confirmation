(function () {
    const repoName = document.querySelector('p.text-bold.f3.mt-2')?.textContent.trim();

    if (!repoName) {
        alert('Repository name not found. Are you on the correct deletion page?');
        return;
    }

    const confirmationInput = document.querySelector('input[placeholder*="repository name"]') || 
                              document.querySelector('input[type="text"]') || 
                              document.querySelector('input');

    if (!confirmationInput) {
        alert('Confirmation input field not found.');
        return;
    }

    confirmationInput.value = repoName;
    confirmationInput.dispatchEvent(new Event('input', { bubbles: true }));

    const deleteButton = document.querySelector('button#repo-delete-proceed-button');
    if (!deleteButton) {
        alert('Delete button not found.');
        return;
    }

    deleteButton.disabled = false;
    deleteButton.click();
})();
