<template>
  <h2 class="text-[24px]">{{ header }}</h2>
</template>

<script>
export default {
  name: "CardHeader",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
