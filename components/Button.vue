<!-- components/global/Button.vue -->
<template>
  <button class="button flex flex-row uppercase items-center gap-5">
    {{ buttonText }}
    <img src="/assets/img/arrowlink.svg" alt='Arrow-link' />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.button {
  border: 1px solid;
  border-color: #000212;
  background-color: transparent;
  color: #000212;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
