// Get the stored access token from localStorage
const accessToken = localStorage.getItem('spotify_access_token');
console.log('Access Token:', accessToken);

if (accessToken) {
    // Token is available; proceed with the application logic
    document.getElementById('generateList').addEventListener('click', async () => {
        console.log('Generate List button clicked');
        const playlistUrl = document.getElementById('playlistUrl').value;
        const playlistId = extractPlaylistId(playlistUrl);

        if (!playlistId) {
            alert('Invalid playlist URL');
            console.log('Invalid playlist URL:', playlistUrl);
            return;
        }

        console.log('Fetching playlist with ID:', playlistId);

        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error fetching playlist data:', errorData);
                throw new Error('Failed to fetch playlist data');
            }

            const data = await response.json();
            const tracks = data.items;

            const output = tracks.map(track => {
                const songName = track.track.name;
                const artistName = track.track.artists.map(artist => artist.name).join(', ');
                return `${artistName} - ${songName}`;
            }).join('\n');

            document.getElementById('output').textContent = output;

        } catch (error) {
            console.error(error);
            alert('Error fetching playlist data. Please try again.');
        }
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
                    alert('Playlist text copied to clipboard!');
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
} else {
    // No access token, redirect to authorization URL
    const clientId = '7ed9c71c81c1491784d55516b4be7325'; // Replace this with your actual client ID
    const redirectUri = 'https://jakeloftis.github.io/spotify/playlist2text/callback.html';
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=playlist-read-private`;
    console.log('Redirecting to Spotify for authentication:', authUrl);
    window.location.href = authUrl;
}

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
        const msg = successful ? 'Playlist text copied to clipboard!' : 'Failed to copy text to clipboard.';
        alert(msg);
    } catch (err) {
        console.error('Fallback: Error copying text to clipboard', err);
        alert('Failed to copy text to clipboard. Please try again.');
    }

    document.body.removeChild(textArea);
}
