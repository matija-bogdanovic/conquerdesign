<template>
  <div class="z-[10] container bg-white-primary relative">
    <div class="flex flex-row items-center justify-center h-[100vh] sticky top-0">
      <img src="~/assets/img/work.png" alt="Work">
    </div>
    <div>
      <div
        class="z-[2] relative grid xsm:grid-cols-1 lg:grid-cols-[1fr_1fr] xsm:grid-rows-[] lg:grid-rows-[auto_auto_auto] gap-y-[150px]"
      >
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"/>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <IndexCardsCardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <IndexCardsCardProfession text="ui" />
                <IndexCardsCardProfession text="ux" />
                <IndexCardsCardProfession text="strategy" />
              </div>
            </div>
            <IndexCardsCardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr] lg:block xsm:hidden"/>
        <div class="w-[1fr] lg:block xsm:hidden"/>
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"/>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <IndexCardsCardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <IndexCardsCardProfession text="ui" />
                <IndexCardsCardProfession text="ux" />
                <IndexCardsCardProfession text="strategy" />
              </div>
            </div>
            <IndexCardsCardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"/>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <IndexCardsCardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <IndexCardsCardProfession text="ui" />
                <IndexCardsCardProfession text="ux" />
                <IndexCardsCardProfession text="strategy" />
              </div>
            </div>
            <IndexCardsCardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr]"/>
      </div>
    </div>
  </div>
</template>

<style>
.parallax-item {
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 100vh;
  background-size: cover;
  background-position: center;
  animation: parallaxAnimation 0.5s ease-out forwards;
}

@keyframes parallaxAnimation {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>