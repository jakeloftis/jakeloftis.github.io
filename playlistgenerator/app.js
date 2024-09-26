document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the "Generate List" button
    document.getElementById('generateList').addEventListener('click', () => {
        console.log('Generate List button clicked');
        
        // Get the text content from the textarea
        const songList = document.getElementById('songList').value.trim();
        
        if (!songList) {
            alert('Please enter a list of songs.');
            console.log('No songs entered.');
            return;
        }

        // Output the song list as-is
        document.getElementById('output').textContent = songList;
    });

    // Add event listener for the "Copy to Clipboard" button
    document.getElementById('copyText').addEventListener('click', () => {
        const outputText = document.getElementById('output').textContent;

        if (!outputText) {
            alert('No text to copy!');
            return;
        }

        // Check if clipboard API is supported
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(outputText)
                .then(() => {
                    alert('Text copied to clipboard!');
                })
                .catch(err => {
                    console.error('Error copying text to clipboard:', err);
                    alert('Failed to copy text to clipboard. Please try again.');
                });
        } else {
            // Fallback method for older browsers
            copyTextFallback(outputText);
        }
    });
});

// Fallback function for older browsers
function copyTextFallback(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; // Prevent scrolling to the bottom of the page in mobile browsers
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'Text copied to clipboard!' : 'Failed to copy text to clipboard.';
        alert(msg);
    } catch (err) {
        console.error('Fallback: Error copying text to clipboard', err);
        alert('Failed to copy text to clipboard. Please try again.');
    }

    document.body.removeChild(textArea);
}
