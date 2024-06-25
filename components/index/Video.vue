<template>
  <div class="flex flex-col items-center justify-center w-full min-h-screen">
    <div class="container flex flex-col items-center mx-auto videocontainer">
      <video
        ref="videoPlayer"
        class="z-[10]"
        autoplay
        muted
        playsinline
        loop
        @loadedmetadata="handleLoadedMetadata"
        @ended="handleVideoEnd"
      >
        <source src="/static/videos/conquer-designvideo.webm" type="video/webm">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoComponent",
  data() {
    return {
      scrollFactor: 3,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
      video.currentTime = 0;
    },
    handleScroll() {
      const video = this.$refs.videoPlayer;
      const videoRect = video.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight - videoRect.top;
      const end = windowHeight + videoRect.height;
      const percentageInView = Math.min(Math.max(start / end, 0), 1);

      const scale = 0.3 + this.scrollFactor * percentageInView;
      video.style.width = `${scale * 100}%`;
    },
  },
};
</script>

<style scoped>
.videocontainer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100%;
}

video {
  z-index: 100;
  width: 40%; /* Initial width scale */
  height: auto;
  pointer-events: none; /* Make video non-hoverable */
  outline: none; /* Remove focus outline */
  transition: width 0.3s ease-in-out; /* Smooth transition for width */
}
</style>
