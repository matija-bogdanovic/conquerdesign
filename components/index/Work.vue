<template>
  <div class="z-[10] container bg-white-primary relative">
    <div class="parallax-item">
      <center>
        <img src="~/assets/img/work.png" alt="Work" />
      </center>
    </div>
    <div>
      <div
        class="z-[2] relative grid xsm:grid-cols-1 lg:grid-cols-[1fr_1fr] xsm:grid-rows-[] lg:grid-rows-[auto_auto_auto] gap-y-[150px]"
      >
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"></div>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <CardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <CardProfession text="ui" />
                <CardProfession text="ux" />
                <CardProfession text="strategy" />
              </div>
            </div>
            <CardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr] lg:block xsm:hidden"></div>
        <div class="w-[1fr] lg:block xsm:hidden"></div>
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"></div>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <CardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <CardProfession text="ui" />
                <CardProfession text="ux" />
                <CardProfession text="strategy" />
              </div>
            </div>
            <CardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr] h-auto flex flex-col gap-[20px]">
          <div class="bg-[#CACACF] h-[530px]"></div>
          <div class="flex flex-col gap-[8px]">
            <div class="flex justify-between flex-row">
              <CardHeader header="PROJECT NAME X" />
              <div class="flex flex-row w-auto gap-[20px]">
                <CardProfession text="ui" />
                <CardProfession text="ux" />
                <CardProfession text="strategy" />
              </div>
            </div>
            <CardText
              class="opacity-60 font-light"
              text="Conquer Design transforms your vision into intuitive, scalable, and strategic digital experiences. We prioritize usability."
            />
          </div>
        </div>
        <div class="w-[1fr]"></div>
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
  height: 100vh; /* Fixed typo: '100lvh' to '100vh' */
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
