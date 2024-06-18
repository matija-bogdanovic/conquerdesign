<!-- components/global/CardText.vue -->
<template>
  <div>
    <p>{{ text }}</p>
  </div>
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
