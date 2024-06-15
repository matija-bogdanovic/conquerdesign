<template>
  <AppHeader class="z-[100000] w-full" />
  <slot />
  <section>
    <AppFooter />
  </section>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue";
import AppFooter from "~/components/global/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
