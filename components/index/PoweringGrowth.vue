<template>
  <div class="container">
   <div class="flex flex-col gap-[32px] md:py-[65px] xsm:py-[32.5px] lg:py-[130px]">
    <CardHeader class="md:max-w-[20ch] xsm:text-[28px] md:text-[40px] lg:text-[56px]" header="Powering Growth:Our Partners in Success" />
    <CardText class="lg:max-w-[65ch] text-[20px]"
      text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create"
    />
   </div>
  </div>
</template>

<script>
import CardText from "./cards/CardText.vue";
import CardHeader from "./cards/CardHeader.vue";

export default {
  components: {
    CardText,
    CardHeader,
  },
};
</script>
