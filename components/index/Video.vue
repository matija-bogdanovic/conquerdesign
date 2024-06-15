<template>
  <div class="container">
    <video
    class="z-[10]"
      ref="videoPlayer"
      autoplay
      muted
      loop
      playsinline
      @loadedmetadata="handleLoadedMetadata"
    >
      <source src="/static/videos/conquer-designvideo.webm" type="video/webm" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoComponent",
  methods: {
    handleLoadedMetadata() {
      const video = this.$refs.videoPlayer;
      video.play().catch((err) => {
        console.error("Autoplay was prevented:", err);
        video.controls = true;
      });
    },
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 100;
  pointer-events: none; /* Make video non-hoverable */
  outline: none; /* Remove focus outline */
}
</style>
