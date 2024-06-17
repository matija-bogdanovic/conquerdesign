<template>
  <div class="bg-[#3E3AF2] py-[19px] uppercase text-[#fff] flex gap-[36px] text-[16px] overflow-hidden">
    <div
      class="items-center justify-center flex animate-loop-scroll2 gap-[36px]"
    >
      <CardText text="Strategy" /> <span class="opacity-60">+</span>
      <CardText text="Design" /> <span class="opacity-60">+</span>
      <CardText text="Innovation" /> <span class="opacity-60">+</span>
      <CardText text="Intuitive" /> <span class="opacity-60">+</span>
    </div>
    <div
      class="flex items-center justify-center animate-loop-scroll2 gap-[36px]"
      aria-hidden="true"
    >
      <CardText text="Strategy" /> <span class="opacity-60">+</span>
      <CardText text="Design" /> <span class="opacity-60">+</span>
      <CardText text="Innovation" /> <span class="opacity-60">+</span>
      <CardText text="Intuitive" /> <span class="opacity-60">+</span>
    </div>
    <div
      class="flex items-center justify-center animate-loop-scroll2 gap-[36px]"
      aria-hidden="true"
    >
      <CardText text="Strategy" /> <span class="opacity-60">+</span>
      <CardText text="Design" /> <span class="opacity-60">+</span>
      <CardText text="Innovation" /> <span class="opacity-60">+</span>
      <CardText text="Intuitive" /> <span class="opacity-60">+</span>
    </div>
    <div
      class="flex items-center justify-center animate-loop-scroll2 gap-[36px]"
      aria-hidden="true"
    >
      <CardText text="Strategy" /> <span class="opacity-60">+</span>
      <CardText text="Design" /> <span class="opacity-60">+</span>
      <CardText text="Innovation" /> <span class="opacity-60">+</span>
      <CardText text="Intuitive" /> <span class="opacity-60">+</span>
    </div>
  </div>
</template>

<script>
import CardText from "@/components/index/cards/CardText.vue"

export default {
  components: {
    CardText,
  },
};
</script>
