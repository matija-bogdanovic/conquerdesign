<template>
  <div class="container bg-white-primary relative">
    <div class="py-[200px] sticky top-0">
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
               <Profession text='ui'/>
               <Profession text='ux'/>
               <Profession text='strategy'/>
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
               <Profession text='ui'/>
               <Profession text='ux'/>
               <Profession text='strategy'/>
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
               <Profession text='ui'/>
               <Profession text='ux'/>
               <Profession text='strategy'/>
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

<script>
import CardText from "./cards/CardText.vue";
import CardHeader from "./cards/CardHeader.vue";
import Profession from './cards/CardProfession.vue';

export default {
  components: { CardText, CardHeader, Profession },
};
</script>
