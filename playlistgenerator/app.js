document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the "Generate List" button
    document.getElementById('generateList').addEventListener('click', () => {
        console.log('Generate List button clicked');
        const playlistUrl = document.getElementById('playlistUrl').value;
        const playlistId = extractPlaylistId(playlistUrl);

        if (!playlistId) {
            alert('Invalid playlist URL');
            console.log('Invalid playlist URL:', playlistUrl);
            return;
        }

        // Output the playlist ID as an example (since no API call will be made)
        const output = `Extracted Playlist ID: ${playlistId}`;
        document.getElementById('output').textContent = output;
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

// Function to extract the playlist ID from the Spotify URL
function extractPlaylistId(url) {
    const regex = /playlist\/([a-zA-Z0-9]+)(\?|$)/;
    const match = url.match(regex);
    console.log('Extracted Playlist ID:', match ? match[1] : 'None');
    return match ? match[1] : null;
}

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
