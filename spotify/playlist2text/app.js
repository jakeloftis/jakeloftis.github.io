const clientId = '7b110782f78e4908a2ca192d11a72935'; // Replace this with your actual client ID
const redirectUri = 'https://jakeloftis.github.io/spotify/playlist2text'; // Replace this with your registered redirect URI

// Step 1: Redirect the user to Spotify's authorization endpoint to get an access token
if (!window.location.hash.includes('access_token')) {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=playlist-read-private`;
    window.location.href = authUrl;
} else {
    // Step 2: Extract the access token from the URL hash
    const accessToken = new URLSearchParams(window.location.hash.substring(1)).get('access_token');

    document.getElementById('generateList').addEventListener('click', async () => {
        const playlistUrl = document.getElementById('playlistUrl').value;
        const playlistId = extractPlaylistId(playlistUrl);

        if (!playlistId) {
            alert('Invalid playlist URL');
            return;
        }

        try {
            const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
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
}

function extractPlaylistId(url) {
    const regex = /playlist\/([a-zA-Z0-9]+)(\?|$)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
