<template>
  <p :class="computedClasses">{{ text }}</p>
</template>

<script>
export default {
  name: "IndexCardsCardText",
  props: {
    text: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '', // Default value if not provided
    },
  },
  computed: {
    trimmedText() {
      return this.text.trim(); // Trim leading/trailing whitespace
    },
    computedClasses() {
      return [
        'leading-[120%]',
        'max-w-[35ch]',
        'font-light',
        'xsm:text-[30px]',
        'md:text-[36px]',
        'lg:text-[16px]',
        this.customClass // Include any additional classes passed from props
      ];
    }
  }
};
</script>

<style scoped>
/* Add scoped styles if necessary */
</style>
