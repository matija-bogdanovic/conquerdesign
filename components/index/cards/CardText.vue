<!-- components/global/CardText.vue -->
<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
