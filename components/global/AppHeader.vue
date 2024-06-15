<template>
  <nav
    class="bg-white-primary py-[20px] fixed top-0 left-0 right-0 flex flex-row justify-between items-center w-full xsm:px-[20px] md:px-[40px] lg:px-[80px]"
  >
  <div class="container flex flex-row justify-between items-center">
    <div
      class="flex flex-row items-center justify-between lg:w-auto xsm:w-full"
    >
      <a href="/">
        <img src="~/assets/img/conquerdesign.svg" alt="Conquer Design Logo" />
      </a>
      <div
        @click="toggleMobileNav"
        class="flex cursor-pointer flex-col gap-[8px]"
        :class="{
          'lg:hidden xsm:flex': !open,
          'lg:hidden xsm:hidden': open,
        }"
      >
        <div class="h-[3px] w-[33px] bg-blue-primary"></div>
        <div class="h-[3px] w-[33px] bg-blue-primary"></div>
        <div class="h-[3px] w-[33px] bg-blue-primary"></div>
      </div>
      <div
        @click="toggleMobileNav"
        class="cursor-pointer flex flex-col justify-center items-center relative w-[30px] h-[30px]"
        :class="{
          'xsm:flex lg:hidden': open,
          'lg:hidden xsm:hidden': !open,
        }"
      >
        <div
          class="h-[3px] w-[33px] bg-blue-primary rotate-[45deg] absolute"
        ></div>
        <div
          class="h-[3px] w-[33px] bg-blue-primary rotate-[-45deg] absolute"
        ></div>
      </div>
    </div>
    <ul
      class="bg-white-primary"
      :class="{
        'lg:flex lg:flex-row gap-[64px]': true,
        'lg:static xsm:flex-col justify-center xsm:absolute xsm:top-20 xsm:left-0 xsm:right-0 w-full':
          open,
        'xsm:hidden': !open,
      }"
    >
      <li class="text-center"><a href="/">Home</a></li>
      <li class="text-center"><a href="#">Work</a></li>
      <li class="text-center"><a href="#">About</a></li>
    </ul>
    <a class="lg:block xsm:hidden w-auto text-blue-primary" href="#"
      >Connect With Us</a
    >
  </div>
  </nav>
</template>

<script lang="ts">
export default defineComponent({
  name: "AppHeader",
  setup() {
    const open = ref(false);

    function toggleMobileNav() {
      open.value = !open.value;
    }

    return { open, toggleMobileNav };
  },
});
</script>
