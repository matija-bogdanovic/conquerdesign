<template>
  <div
    class="text-container flex rounded-full h-auto px-[12.5px] justify-center items-center border border-[rgba(0, 2, 18, 0.5)] uppercase"
  >
  <p class="reveal-text line">
  {{text}}
  </p>
  </div>
</template>

<script>
export default {
   name: "CardProfession",
   props: {
      text: {
         type: String,
         required: true,
      }
   }
}
</script>