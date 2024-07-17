document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const metaForm = document.getElementById('metaForm');
    const metaTagsTextarea = document.getElementById('metaTags');

    generateBtn.addEventListener('click', function() {
        const metaTitle = document.getElementById('metaTitle').value.trim();
        const metaDescription = document.getElementById('metaDescription').value.trim();
        const metaKeywords = document.getElementById('metaKeywords').value.trim();

        if (metaTitle === '' || metaDescription === '') {
            alert('Meta Title and Meta Description are required.');
            return;
        }

        // Construct meta tags
        let metaTags = `<meta name="title" content="${metaTitle}">\n`;
        metaTags += `<meta name="description" content="${metaDescription}">\n`;
        if (metaKeywords !== '') {
            metaTags += `<meta name="keywords" content="${metaKeywords}">\n`;
        }

        // Display meta tags
        metaTagsTextarea.value = metaTags;
    });

    copyBtn.addEventListener('click', function() {
        metaTagsTextarea.select();
        metaTagsTextarea.setSelectionRange(0, 99999); // For mobile devices
        document.execCommand('copy');
        alert('Meta tags copied to clipboard.');
    });
});
