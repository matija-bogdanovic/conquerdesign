<template>
  <div
    class="bg-white-primary xsm:flex-col flex lg:flex-row gap-20 container xsm:py-[40px] md:py-[80px] lg:py-[160px] relative overflow-visible z-[10]"
  >
    <div class="relative">
      <div class="sticky top-0 flex flex-col pt-[80px] items-start gap-[48px]">
        <div class="flex flex-col gap-[16px]">
          <IndexCardsCardText
            text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create impactful designs that resonate and engage."
          />
          <IndexCardsCardHeader
            class="xsm:text-[26px] md:text-[36px] lg:text-[56px]"
            header="Your Partner in Design Innovation"
          />
        </div>
        <Button buttonText="our solutions" />
      </div>
    </div>
    <div class="flex flex-col gap-[40px]">
      <div
        class="xsm:p-[20px] bg-white lg:p-[36px] flex flex-row items-center gap-[62px] shadow-cardShadow"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <img src="~/assets/img/gem.svg" alt="Gem" />
        </div>
        <div class="flex flex-col gap-[12px]">
          <IndexCardsCardHeader header="Driven by Purpose" />
          <IndexCardsCardText
            text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create impactful designs"
          />
        </div>
      </div>
      <div
        class="xsm:p-[20px] bg-white lg:p-[36px] flex flex-row items-center gap-[62px] shadow-cardShadow"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <img src="~/assets/img/partnerships.svg" alt="Partnerships" />
        </div>
        <div class="flex flex-col gap-[12px]">
          <IndexCardsCardHeader header="Partnerships" />
          <IndexCardsCardText
            text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create impactful designs "
          />
        </div>
      </div>
      <div
        class="xsm:p-[20px] bg-white lg:p-[36px] flex flex-row items-center gap-[62px] shadow-cardShadow"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <img src="~/assets/img/security.svg" alt="Security" />
        </div>
        <div class="flex flex-col gap-[12px]">
          <IndexCardsCardHeader header="Security &#38; Compliance" />
          <IndexCardsCardText
            text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create impactful designs"
          />
        </div>
      </div>
      <div
        class="xsm:p-[20px] bg-white lg:p-[36px] flex flex-row items-center gap-[62px] shadow-cardShadow"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <img src="~/assets/img/customsolutions.svg" alt="Custom Solutions" />
        </div>
        <div class="flex flex-col gap-[12px]">
          <IndexCardsCardHeader header="Custom Solutions" />
          <IndexCardsCardText
            text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability, consistency, and innovation to elevate your brand. Our partner are there to create impactful designs"
          />
        </div>
      </div>
    </div>
  </div>
</template>