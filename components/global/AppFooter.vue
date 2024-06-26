<template>
  <footer class="bg-white-primary xsm:pb-[20px] md:pb-[35px] lg:pb-[50px]">
    <div class="container">
      <div
        class="border-y border-y-[rgba(0,2,18,0.2)] xsm:py-[16px] lg:py-[32px] grid lg:grid-cols-[1fr_0.5fr_0.5fr] xsm:grid-cols-1 xsm:grid-rows-3 lg:grid-rows-1 gap-[40px]"
      >
        <div class="flex items-start flex-col gap-[74px] lg:pb-[114px]">
          <IndexCardsCardText
            class="max-w-[26ch]"
            text="Transforming ideas into impactful products. Let’s collaborate on your next innovation!"
          />
          <Button button-text="contact us" />
        </div>
        <div class="lg:pl-[56px] lg:border-l border-l-[rgba(0,2,18,0.2)] flex flex-col gap-[8px]">
          <IndexCardsCardHeader header="menu" class="uppercase text-[16px] font-bold" />
          <a href="/"> Home </a>
          <a href="/"> About Us </a>
          <a href="/"> Work </a>
          <a href="/"> Contact </a>
          <a href="/"> Join us </a>
        </div>
        <div class="lg:pl-[56px] lg:border-l border-l-[rgba(0,2,18,0.2)] flex flex-col gap-[8px]">
          <IndexCardsCardHeader
            header="check us out"
            class="uppercase text-[16px] font-bold"
          />
          <a href="/"> Instagram </a>
          <a href="/"> LinkedIn </a>
          <a href="/"> X </a>
        </div>
      </div>
      <div class="flex justify-between pt-[40px]">
        <div>
          <p>
            Hard Work <span class="text-[#3E3AF2]">+</span> Fun
            <span class="text-[#3E3AF2]">+</span> Innovation
          </p>
        </div>
        <div class="flex flex-row gap-[12px]">
          Based in United Kingdom
          <div class="border-r border-r-[rgba(0,2,18,0.2)]"/>
          <Time />
        </div>
      </div>
    </div>
  </footer>
</template>