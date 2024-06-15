<template>
  <div
    class="flex rounded-full h-auto px-[12.5px] justify-center items-center border border-[rgba(0, 2, 18, 0.5)] uppercase"
  >
    {{text}}
  </div>
</template>

<script>
export default {
   name: "Profession",
   props: {
      text: {
         type: String,
         required: true,
      }
   }
}
</script>