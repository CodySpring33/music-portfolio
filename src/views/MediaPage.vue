<template>
  <div class="media-page">
    <h1>Media</h1>
    
    <div class="media-grid">
      <div class="video-section">
        <h2>Recent Performances</h2>
        <div class="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/your-video-id" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="audio-section">
        <h2>Audio Samples</h2>
        <div class="audio-tracks">
          <div class="audio-track">
            <h3>Symphony No. 1 - Movement I</h3>
            <audio controls>
              <source src="path-to-audio.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
          <!-- Add more audio tracks as needed -->
        </div>
      </div>

      <div class="gallery-section">
        <h2>Photo Gallery</h2>
        <div class="photo-grid">
          <img src="https://picsum.photos/300/200" alt="Performance 1">
          <img src="https://picsum.photos/301/200" alt="Performance 2">
          <img src="https://picsum.photos/302/200" alt="Performance 3">
          <img src="https://picsum.photos/303/200" alt="Performance 4">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.media-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1, h2 {
  text-align: center;
}

.media-grid {
  display: grid;
  gap: 3rem;
  margin-top: 2rem;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.audio-tracks {
  display: grid;
  gap: 1rem;
}

.audio-track {
  background: white;
  padding: 1rem;
  border-radius: 8px;
}
</style>