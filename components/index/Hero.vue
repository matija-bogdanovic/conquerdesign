<template>
  <div class="container sticky top-0">
    <div class="py-[170px] flex flex-col gap-40">
      <div class="flex flex-row items-end">
        <h1
          class="font-light uppercase lg:text-[112px] testanimation md:text-[80px] xsm:text-[50px]"
        >
          we <strong class="font-bold">design</strong><br />
          tomorrow
        </h1>
          <div class="border-2 w-auto relative border-[#3E3AF2] p-[20px]">
            <div class="absolute top-[-5px] left-[-5px] bg-[#fff] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"></div>
            <div class="bg-[#fff] absolute top-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"></div>
            <div class="bg-[#fff] absolute bottom-[-5px] left-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"></div>
            <div class="bg-[#fff] absolute bottom-[-5px] right-[-5px] border-[2px] border-[#3E3AF2] h-[10px] w-[10px]"></div>
            <p class=" w-full font-bold uppercase lg:text-[112px] md:text-[80px] xsm:text-[50px] leading-[100%]">today</p>
            <div class="mt-[-20px] mb-[8px] border-b-[2px] border-b-[#3E3AF2] w-full"></div>
          </div>
      </div>
      <div class="flex xsm:flex-col lg:flex-row justify-between xsm:gap-[40px] lg:gap-0 lg:items-end">
        <div>
          <p>
            Empowering brands with intuitive,<br />
            scalable, and strategic design solutions<br />
            for impactful experiences.
          </p>
        </div>
        <div>
          <p class="color-primary-blue">
            Intuitive <span class="text-[#3E3AF2]">+</span> Strategy<span
              class="text-[#3E3AF2]"
              >+</span
            >
            Innovation
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.testanimation {
    cursor: pointer;
    position: relative;
    animation: slideAnimation 1s ease-in-out ;
}
  @keyframes slideAnimation {
    from {
      opacity: 0;
      left: -40px; /* Starting position */
    }
    to {
      opacity: 1;
      left: 0; /* Ending position */
    }
  }
</style>