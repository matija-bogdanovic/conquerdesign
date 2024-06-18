<script>
export default {
  name: "Hero",
  data() {
    return {
      isVisible: false,
      observer: null,
    };
  },
  computed: {
    elementClasses() {
      return {
        'box': true,
        'visible': this.isVisible,
        'today': this.isVisible,
        'todaybox': this.isVisible
      };
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isVisible) {
          this.isVisible = true;
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    // Observe the main observed element
    this.observer.observe(this.$refs.observedElement);

    // Observe additional text elements
    this.$nextTick(() => {
      const additionalTexts = document.querySelectorAll('.reveal-text');
      additionalTexts.forEach((textElement) => {
        this.observeElement(textElement);
      });
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    observeElement(element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.classList.add('visible');
              }, index * 100); // Staggered animation effect
            });
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      }, { threshold: 0.1 });
      observer.observe(element);
    }
  }
};
</script>


<template>
  <div ref="observedElement"  class="container sticky top-0">
    <div class="py-[210px] flex flex-col gap-40">
      <div class="flex flex-row items-end overflow-hidden">
        <div :class="elementClasses" class="box">
          <h1 class="visible font-light uppercase lg:text-[112px] md:text-[80px] xsm:text-[50px]">
            we <strong class="font-bold">design</strong><br>
            tomorrow
          </h1>
        </div>
        <div class="today todaybox border-2 another-class w-auto relative border-[#3E3AF2] p-[20px]">
          <div class="absolute top-[-5px] left-[-5px] bg-[#fff] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute top-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute bottom-[-5px] left-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute bottom-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <p class="w-full font-bold yet-another-class uppercase lg:text-[112px] md:text-[80px] xsm:text-[50px] leading-[100%]">
            today
          </p>
          <div class="mt-[-20px] mb-[8px] border-b-[2px] border-b-[#3E3AF2] w-full"/>
        </div>
      </div>
      <div class="flex xsm:flex-col lg:flex-row justify-between xsm:gap-[40px] lg:gap-0 lg:items-end">
        <div class="text-container">
          <p class="reveal-text" data-direction="bottom-up">
            <span class="line">Empowering brands with intuitive,</span>
            <span class="line">scalable, and strategic design solutions</span>
            <span class="line">for impactful experiences.</span>
          </p>
        </div>
        <div>
          <p class="reveal-text overflow-hidden color-primary-blue" data-direction="bottom-up2">
            <span class="line">Intuitive <span class="text-[#3E3AF2]">+</span>Strategy<span class="text-[#3E3AF2]">+</span> Innovation</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
