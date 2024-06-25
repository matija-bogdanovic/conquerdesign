<script setup lang='ts'>
import * as THREE from "three"
import { TresCanvas } from '@tresjs/core';
import { ref } from 'vue';
</script>

<template>
  <TresCanvas window-size class='absolute z-[1]'>
    <TresPerspectiveCamera :position="[0, 0, 16]"/>
    <!-- Configure OrbitControls with enableZoom set to false -->
    <OrbitControls :enableZoom="false" />
    <Suspense>
      <ConquerDesignLogo ref="logo" :rotation-x='1.5' :position="[0, 0, 0]" />
    </Suspense>
  </TresCanvas>
</template>
