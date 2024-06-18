<!-- components/global/Button.vue -->
<template>
  <button class="button flex flex-row uppercase items-center gap-5">
    {{ buttonText }}
    <img src="/assets/img/arrowlink.svg" alt='Arrow-link'>
  </button>
</template>

<script>
export default {
  name: "ButtonText",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>