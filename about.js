const video = document.getElementById("video");
const playPause = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const muteButton = document.getElementById("mute");
const volumeBar = document.getElementById("volume-bar");
const fullscreenButton = document.getElementById("fullscreen");

// Auto-update play button state
video.addEventListener("play", () => playPause.textContent = "⏸");
video.addEventListener("pause", () => playPause.textContent = "▶");

// Play/pause button
playPause.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Seek bar updates
video.addEventListener("timeupdate", () => {
    seekBar.value = (video.currentTime / video.duration) * 100;
});

seekBar.addEventListener("input", () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// Mute button
muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? "🔇" : "🔊";
});

// Volume control
volumeBar.addEventListener("input", () => {
    video.volume = volumeBar.value;
});

// Fullscreen toggle
fullscreenButton.addEventListener("click", () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
