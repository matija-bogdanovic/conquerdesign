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
              }, index * 100);
            });
            observer.unobserve(entry.target); 
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
  <WrapperLogo />
    <div class="py-[210px] flex flex-col gap-40">
      <div class="flex flex-row items-end pb-[3px]">
        <div :class="elementClasses" class="box flex flex-row items-end justify-center">
          <h1 class="visible font-light uppercase lg:text-[112px] md:text-[80px] xsm:text-[50px]">
            we <strong class="font-bold">design</strong><br>
            tomorrow
          </h1>
        </div>
        <div class="ml-[50px] border-2 todayboxdesign w-auto relative border-[#3E3AF2] p-[20px] z-[1000]">
          <div class="absolute top-[-5px] left-[-5px] bg-[#fff] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute top-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute bottom-[-5px] left-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="bg-[#fff] absolute bottom-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"/>
          <div class="text-container">
          <div class="border-b-[2px] border-b-[#3E3AF2] w-full">
            <p class="w-full reveal-text font-bold uppercase lg:text-[112px] md:text-[80px] xsm:text-[50px]  line" data-direction="bottom-up">
              <span class="line leading-[100%] mb-[-19px]">today</span>
            </p>
          </div>
          </div>
        </div>
      </div>
      <div class="flex xsm:flex-col lg:flex-row justify-between xsm:gap-[40px] lg:gap-0 lg:items-end">
        <div class="text-container">
          <p class="reveal-text" data-direction="left-right">
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