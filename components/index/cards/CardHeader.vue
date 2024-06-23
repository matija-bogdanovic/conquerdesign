<template>
  <h2 :class="computedClasses">{{ header }}</h2>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    header: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: '', // Default value if not provided
    },
  },
  computed: {
    computedClasses() {
      return [
        'lg:max-w-[65ch]',
        'text-[20px]',
        this.classes // Include any additional classes passed from props
      ];
    }
  }
};
</script>