// Import necessary modules
import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";

// Import your custom scene setup functions
import { scene, setupScene } from "./modules/scene.js";
import { createPaintings } from "./modules/paintings.js";
import { createWalls } from "./modules/walls.js";
import { setupFloor } from "./modules/floor.js";
import { createCeiling } from "./modules/ceiling.js";
import { createBoundingBoxes } from "./modules/boundingBox.js";
import { setupRendering } from "./modules/rendering.js";
import { setupEventListeners } from "./modules/eventListeners.js";
import { addObjectsToScene } from "./modules/sceneHelpers.js";
import { setupPlayButton } from "./modules/menu.js";
import { setupAudio } from "./modules/audioGuide.js";
import { clickHandling } from "./modules/clickHandling.js";
import { loadBenchModel } from "./modules/bench.js";
import { loadLightsModel } from "./modules/lights.js";

// Initial scene setup
let { camera, controls, renderer } = setupScene();
setupAudio(camera);

const textureLoader = new THREE.TextureLoader();
const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);

createBoundingBoxes(walls);
createBoundingBoxes(paintings);
addObjectsToScene(scene, paintings);
setupPlayButton(controls);
setupEventListeners(controls);
clickHandling(renderer, camera, paintings);
setupRendering(scene, camera, renderer, paintings, controls, walls);
loadBenchModel(scene);
loadLightsModel(scene);

// CSS3D Renderer for YouTube videos
const css3DRenderer = new CSS3DRenderer();
css3DRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(css3DRenderer.domElement);

// Trackball Controls
controls = new TrackballControls(camera, css3DRenderer.domElement);
controls.rotateSpeed = 4;

// Function to create YouTube iframe as a CSS3D object
function createYouTubeElement(id, position, rotationY) {
    const div = document.createElement("div");
    div.style.width = "480px";
    div.style.height = "360px";
    div.style.backgroundColor = "#000";

    const iframe = document.createElement("iframe");
    iframe.style.width = "480px";
    iframe.style.height = "360px";
    iframe.style.border = "0px";
    iframe.src = `https://www.youtube.com/embed/${id}?rel=0`;
    div.appendChild(iframe);

    const cssObject = new CSS3DObject(div);
    cssObject.position.copy(position);
    cssObject.rotation.y = rotationY;

    return cssObject;
}

// Add YouTube videos to paintings
paintings.forEach((painting, index) => {
    const videoId = ["SJOz3qjfQXU", "Y2-xZ-1HE-Q", "IrydklNpcFI", "9ubytEsCaS0"][index % 4]; // example video IDs
    const cssObject = createYouTubeElement(videoId, painting.position, painting.rotation.y);

    scene.add(cssObject);
});

// Adjust resizing for both renderers
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    css3DRenderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
function animate() {
    requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene, camera);
    css3DRenderer.render(scene, camera);
}

animate();
