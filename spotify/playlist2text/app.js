document.getElementById('generateList').addEventListener('click', async () => {
    const playlistUrl = document.getElementById('playlistUrl').value;
    const playlistId = extractPlaylistId(playlistUrl);
    
    if (!playlistId) {
        alert('Invalid playlist URL');
        return;
    }

    const token = 'YOUR_ACCESS_TOKEN'; // Replace with actual access token obtained through OAuth 2.0
    
    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${token}`
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

function extractPlaylistId(url) {
    const regex = /playlist\/([a-zA-Z0-9]+)(\?|$)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
