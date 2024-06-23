<script lang='ts' setup>
const { scene : model } = await useGLTF('/scene.glb')

console.log(model)
</script>

<template>
  <primitive :object="model"/>
</template>