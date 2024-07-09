<script setup lang='ts'>
import { TresCanvas } from '@tresjs/core';
</script>

<template>
  <TresCanvas window-size class='absolute z-[1]'>
    <TresPerspectiveCamera :position="[0, 0, 16]"/>
    <OrbitControls :enable-zoom="false" :enable-pan="false" />
    <Suspense>
      <ConquerDesignLogo ref="logo" :rotation-x='1.5' :position="[0, 0, 0]" />
    </Suspense>
  </TresCanvas>
</template>
