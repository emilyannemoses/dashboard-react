const Spotify = {
    token: "",
    deviceId: "",
    loggedIn: false,
    error: "",
    trackName: "Track Name",
    artistName: "Artist Name",
    albumName: "Album Name",
    nextTrackAlbum: "",
    nextTrackArtist: "",
    nextTrackName: "",
    previousTrackAlbum: "",
    previousTrackArtist: "",
    previousTrackName: "",
    playing: false,
    position: 0,
    duration: 1,
    handleLogin: function(token){
        if (token !== "") {
            this.token = token;
            this.loggedIn = true;
            this.playerCheckInterval = setInterval(() => this.checkForPlayer(token), 1000);
        }
    },
    checkForPlayer(token) {
        if (window.Spotify !== null) {
            clearInterval(this.playerCheckInterval);
            this.player = new window.Spotify.Player({
                name: "Emily's Spotify Player",
                getOAuthToken: cb => { cb(token); },
            });
            this.createEventHandlers(token);
            this.player.connect();
        }
    },
    createEventHandlers(token) {
        this.player.on('initialization_error', e => { console.error(e); });
        this.player.on('authentication_error', e => {
          console.error(e);
          this.loggedIn = false;
        });
        this.player.on('account_error', e => { console.error(e); });
        this.player.on('playback_error', e => { console.error(e); });
        this.player.on('player_state_changed', state => this.onStateChanged(state));
        this.player.on('ready', async data => {
            let { device_id } = data;
            this.deviceId = device_id;
            this.transferPlaybackHere(this.deviceId, token);
        });
    },
    transferPlaybackHere(deviceId, token) {
        this.deviceId = deviceId;
        this.token = token;
        // https://beta.developer.spotify.com/documentation/web-api/reference/player/transfer-a-users-playback/
        fetch("https://api.spotify.com/v1/me/player", {
            method: "PUT",
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "device_ids": [ deviceId ],
                "play": true
            }),
        }).catch(error => console.log("There was an error", error));
    },
    onStateChanged(state) {
        if (state !== null) {
            const {
                current_track: currentTrack,
                previous_tracks: previousTracks,
                next_tracks: nextTracks
                // position,
                // duration,
            } = state.track_window;
            // const trackName = currentTrack.name;
            // const albumName = currentTrack.album.name;
            // const artistName = currentTrack.artists.map(artist => artist.name).join(", ");
            const playing = !state.paused;
            // this.position;
            // this.duration;
            this.trackName = currentTrack.name;
            this.albumName = currentTrack.album.name;
            this.artistName = currentTrack.artists.map(artist => artist.name).join(", ");
            this.playing = playing
            if (nextTracks.length > 0) {
                this.nextTrackArtist = nextTracks["0"].artists.map(artist => artist.name).join(", ") || nextTracks["0"].artists.name;
                this.nextTrackAlbum = nextTracks["0"].album.name;
                this.nextTrackName = nextTracks["0"].name;
            }
            if (previousTracks.length > 0) {
                this.previousTrackArtist = previousTracks["0"].artists.map(artist => artist.name).join(", ") || previousTracks["0"].artists.name;
                this.previousTrackAlbum = previousTracks["0"].album.name;
                this.previousTrackName = previousTracks["0"].name;
            }
        } else {
            this.error ="Looks like you might have swapped to another device?";
        }
    },
    onPrevClick() {
        Spotify.player.previousTrack();
        const newTrack = {
            trackName: this.previousTrackName,
            albumName: this.previousTrackAlbum,
            artistName: this.previousTrackArtist
        }
        return newTrack;
    },
    onPlayClick() {
        Spotify.player.togglePlay();
    },
    onNextClick() {
        Spotify.player.nextTrack();
        const newTrack = {
            trackName: this.nextTrackName,
            albumName: this.nextTrackAlbum,
            artistName: this.nextTrackArtist
        }
        return newTrack;
    }
}

export default Spotify;