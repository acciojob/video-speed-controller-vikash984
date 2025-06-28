const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackSpeedSlider = document.querySelector('input[name="playbackSpeed"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

// Toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume control
function handleVolume() {
  video.volume = volumeSlider.value;
}

// Playback speed control
function handlePlaybackSpeed() {
  video.playbackRate = playbackSpeedSlider.value;
}

// Skip
function skip(e) {
  const skipValue = parseFloat(this.dataset.skip);
  video.currentTime += skipValue;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

volumeSlider.addEventListener('input', handleVolume);
playbackSpeedSlider.addEve
