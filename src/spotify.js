const Spotify = {
    token: "",
    deviceId: "",
    loggedIn: false,
    error: "",
    trackName: "Track Name",
    artistName: "Artist Name",
    albumName: "Album Name",
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
            this.artistName = currentTrack.artists.map(artist => artist.name).join(", ");;
            this.playing = playing
        } else {
            this.error ="Looks like you might have swapped to another device?";
        }
    },
    onPrevClick() {
        this.player.previousTrack();
    },  
    onPlayClick() {
        this.player.togglePlay();
    },  
    onNextClick() {
        this.player.nextTrack();
    }
}

export default Spotify;