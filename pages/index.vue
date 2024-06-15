<template>
  <section>
    <Hero />
    <Video />
    <ShowcaseCards />
    <Work />
    <WorkEmbodyment />
  </section>
  <Quote />
  <section>
    <PoweringGrowth />
    <Slider />
  </section>
  <SliderText class="xsm:mt-[34px] md:mt-[68px] lg:mt-[136px]" />
  <section>
    <End />
  </section>
</template>

<script>
import Hero from "~/components/index/Hero.vue";
import Video from "~/components/index/Video.vue";
import ShowcaseCards from "~/components/index/ShowcaseCards.vue";
import Work from "~/components/index/Work.vue";
import WorkEmbodyment from "~/components/index/WorkEmbodyment.vue";
import Quote from "~/components/index/Quote.vue";
import PoweringGrowth from "~/components/index/PoweringGrowth.vue";
import Slider from "~/components/index/Slider.vue";
import End from "~/components/index/End.vue";
import SliderText from "~/components/index/SliderText.vue";

export default {
  components: {
    Hero,
    Video,
    ShowcaseCards,
    Work,
    WorkEmbodyment,
    Quote,
    PoweringGrowth,
    Slider,
    End,
    SliderText,
  },
};
</script>
