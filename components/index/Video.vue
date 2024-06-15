<template>
  <div class="container videocontainer">
    <video
      ref="videoPlayer"
      autoplay
      muted
      playsinline
      loop
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleVideoEnd"
    >
      <source src="/static/videos/conquer-designvideo.webm" type="video/webm" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoComponent",
  data() {
    return {
      scrollFactor: 1.5, // Adjust this value for faster growth (higher values mean quicker growth)
    };
  },
  methods: {
    handleLoadedMetadata() {
      const video = this.$refs.videoPlayer;
      video.play().catch((err) => {
        console.error("Autoplay was prevented:", err);
        video.controls = true;
      });
    },
    handleVideoEnd() {
      const video = this.$refs.videoPlayer;
      video.pause();
      video.currentTime = 0; // Reset the video to the beginning
    },
    handleScroll() {
      const video = this.$refs.videoPlayer;
      const videoRect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the percentage of the video in view
      const start = windowHeight - videoRect.top;
      const end = windowHeight + videoRect.height;
      const percentageInView = Math.min(Math.max(start / end, 0), 1);

      // Scale from 0.3 to 1 based on the percentage
      const scale = 0.3 + this.scrollFactor * percentageInView;
      video.style.width = `${scale * 100}%`;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Initial call to set the correct width on load
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.videocontainer {
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
}

video {
  z-index: 100;
  width: 30%; /* Initial width scale */
  height: auto;
  pointer-events: none; /* Make video non-hoverable */
  outline: none; /* Remove focus outline */
  transition: width 0.3s ease-in-out; /* Smooth transition for width */
}

.scale-100 {
  width: 100%; /* Scale to full width */
}

.scale-30 {
  width: 30%; /* Scale to 30% width */
}
</style>
