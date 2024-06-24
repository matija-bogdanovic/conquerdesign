<script setup lang='ts'>
import { OrbitControls } from '@tresjs/cientos';
import { TresCanvas, } from '@tresjs/core';
import type { Object3D } from 'three';
</script>

<template>
  <TresCanvas window-size class='absolute z-[1]' >
    <TresPerspectiveCamera :position="[0, 0, 16]"/>
    <OrbitControls/>
    <Suspense>
      <ConquerDesignLogo ref="logo" :rotation-x='1.5' :position=[0,0,0] />
    </Suspense>
  </TresCanvas>
</template>
