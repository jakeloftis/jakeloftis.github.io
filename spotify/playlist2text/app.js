const accessToken = localStorage.getItem('spotify_access_token');

if (accessToken) {
    // Token is available; proceed with the application logic
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
} else {
    // No access token, redirect to authorization URL
    const clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // Replace with your actual client ID
    const redirectUri = 'YOUR_REGISTERED_REDIRECT_URI'; // Replace with your registered redirect URI
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=playlist-read-private`;
    window.location.href = authUrl;
}
