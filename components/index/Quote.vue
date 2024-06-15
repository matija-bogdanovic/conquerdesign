<template>
  <div class="bg-blue-primary xsm:py-[62.5px] md:py-[135px] lg:py-[270px] relative">
    <div class="container flex flex-col items-center justify-center xsm:px-[20px] md:px-[40px] lg:px-[0px]">
      <div class="flex flex-col gap-[24px]">
        <CardText
          class="leading-[120%] max-w-[35ch] font-light xsm:text-[30px] md:text-[36px] lg:text-[48px] text-[#fff]"
          text="
          “The team transformed our brand with innovative and user-friendly
          designs. They're professional, creative, and dedicated. Highly
          recommend for any design needs!”"
        />
        <div>
          <p class="text-[20px] text-[#fff]">James Lewis</p>
          <p class="text-[20px] opacity-50 text-[#fff]">CEO, Busses co.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardText from "./cards/CardText.vue";

export default {
  components: {
    CardText,
  },
};
</script>
