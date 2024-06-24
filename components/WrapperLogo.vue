<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { OrbitControls } from '@tresjs/cientos';
import { TresCanvas, } from '@tresjs/core';
import type { Object3D } from 'three';

const logo = ref<Object3D | null>(null);

onMounted(() => {
  if (logo.value) {
    const animate = () => {
      if (logo.value) {
        // Adjust rotation to face the camera
        logo.value.rotation.x = Math.PI / 2; // Rotate 90 degrees on X-axis
        logo.value.rotation.y += 0.01; // Continuous rotation on Y-axis
      }
      requestAnimationFrame(animate);
    };

    animate();
  }
});
</script>

<template>
  <TresCanvas window-size clear-color="#FAF8FF" class='absolute'>
    <TresPerspectiveCamera :position="[0, 5, 10]"/>
    <OrbitControls/>
    <Suspense>
      <ConquerDesignLogo ref="logo" />
    </Suspense>
  </TresCanvas>
</template>
