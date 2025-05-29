<!-- src/components/ThreeDViewer.vue -->
<template>
    <div ref="sceneContainer" class="w-full h-[500px] bg-gray-100 rounded-xl"></div>
  </template>
  
  <script>
  import * as THREE from 'three';
  import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
  
  export default {
    name: 'ThreeDViewer',
    mounted() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    this.$refs.sceneContainer.clientWidth / this.$refs.sceneContainer.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(this.$refs.sceneContainer.clientWidth, this.$refs.sceneContainer.clientHeight);
  this.$refs.sceneContainer.appendChild(renderer.domElement);

  // Lights
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 1).normalize();
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Load model
  const mtlLoader = new MTLLoader();
  mtlLoader.setPath('/models/');
  mtlLoader.load('maskotmtl.mtl', (materials) => {
    materials.preload();

    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/models/');
    objLoader.load(
      'maskotobt.obj',
      (object) => {
        console.log("OBJ Loaded", object);
        object.scale.set(1.5, 1.5, 1.5); // coba ubah
        scene.add(object);
      },
      undefined,
      (err) => {
        console.error("Error loading OBJ:", err);
      }
    );
  });

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
}

  };
  </script>
  