<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";
  import { Hourglass_full as Hourglass } from "svelte-google-materialdesign-icons";

  let canvas: HTMLCanvasElement;
  let loaded = false;

  onMount(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.width / canvas.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(canvas.width, canvas.height);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(
      "/laptop.glb",
      (gltf) => {
        scene.add(gltf.scene);
        gltf.scene.scale.set(1, 1, 1);
        gltf.scene.position.set(0, 0, 0);
        loaded = true;
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
      }
    );

    camera.position.set(1.28, 4.61, 3.62);
    camera.rotation.set(-0.41, 0.27, 0.12);
    camera.zoom = 1;

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.target.set(0.3, 3.3, 0.5);
    controls.update();
    controls.enableDamping = true;
    controls.dampingFactor = 0.001;
    controls.enableZoom = false;
    controls.enablePan = false;

    const initialAzimuthalAngle = controls.getAzimuthalAngle();
    const initialPolarAngle = controls.getPolarAngle();

    const limitAngle = THREE.MathUtils.degToRad(15);
    controls.minAzimuthAngle = initialAzimuthalAngle - limitAngle;
    controls.maxAzimuthAngle = initialAzimuthalAngle + limitAngle;
    controls.minPolarAngle = initialPolarAngle - limitAngle;
    controls.maxPolarAngle = initialPolarAngle + limitAngle;

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = canvas.width / canvas.height;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.width, canvas.height);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
</script>

<div class="h-0 w-[600px] relative hidden md:flex align-center justify-center">
  <div
    class="absolute top-[-300px] w-[600px] h-[600px] bg-violet rounded-[50%]"
  ></div>
  <canvas class:loaded width="600" height="500" bind:this={canvas}></canvas>
  {#if !loaded}
    <div
      class="rotating absolute z-9000 pointer-events-none bottom-[-32px] opacity-[0.3]"
    >
      <Hourglass size="64" />
    </div>
  {/if}
</div>

<style>
  canvas {
    display: block;
    position: relative;
    transform: translateY(-50%);
    opacity: 0;
    transition: 0.5s;
  }

  canvas.loaded {
    opacity: 1;
  }

  .rotating {
    animation: rotate ease-in-out 3s infinite;
  }

  @keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }

    to {
      transform: rotateZ(360deg);
    }
  }
</style>
