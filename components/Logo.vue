<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Logo",
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      mesh: null,
    };
  },
  mounted() {
    this.initThree();
    this.createHeartShape();
    this.animate();
  },
  methods: {
    initThree() {
      // Initialize scene
      this.scene = new THREE.Scene();

      // Initialize camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.canvasContainer.clientWidth / this.$refs.canvasContainer.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 30;

      // Initialize renderer
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.$refs.canvasContainer.clientWidth, this.$refs.canvasContainer.clientHeight);

      // Append renderer DOM element to Vue component
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);
    },
    createHeartShape() {
      const heartShape = new THREE.Shape();

      heartShape.moveTo(25, 25);
      heartShape.bezierCurveTo(25, 25, 20, 0, 0, 0);
      heartShape.bezierCurveTo(-30, 0, -30, 35, -30, 35);
      heartShape.bezierCurveTo(-30, 55, -10, 77, 25, 95);
      heartShape.bezierCurveTo(60, 77, 80, 55, 80, 35);
      heartShape.bezierCurveTo(80, 35, 80, 0, 50, 0);
      heartShape.bezierCurveTo(35, 0, 25, 25, 25, 25);

      const extrudeSettings = {
        depth: 8,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        bevelSize: 1,
        bevelThickness: 1,
      };

      // Create the geometry
      const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

      // Create a mesh with Phong material
      const material = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Red color
      this.mesh = new THREE.Mesh(geometry, material);

      // Add the mesh to the scene
      this.scene.add(this.mesh);
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>

<style scoped>
.canvas-container {
  width: 200px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
}
</style>
