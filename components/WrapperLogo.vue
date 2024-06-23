<script setup lang='ts'>
import { OrbitControls } from '@tresjs/cientos';
import { TresCanvas } from '@tresjs/core';
</script>
<template>
  <TresCanvas window-size clear-color="#4f4f4f">
    <TresPerspectiveCamera/>
    <OrbitControls/>
    <Suspense>
      <ConquerDesignLogo/>
    </Suspense>
    <TresGridHelper/>
  </TresCanvas>
</template>