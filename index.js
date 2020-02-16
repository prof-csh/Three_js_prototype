// Load Three.js to playground
import * as THREE from "three";
// ============================

let scene = new THREE.Scene();

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add purple cube
let cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
let cubeMaterial = new THREE.MeshPhongMaterial({ color: 0x7733ee });
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Add lights
let hemiLight = new THREE.HemisphereLight(0xdedede, 0x101010, 1);
scene.add(hemiLight);
let ambLight = new THREE.AmbientLight(0x303030);
scene.add(ambLight);

// Add camera
let camera = new THREE.PerspectiveCamera();
camera.position.z = 7;

function draw() {
  // Schedule next frame
  requestAnimationFrame(draw);
  renderer.render(scene, camera);
  // rotate cube
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
}

draw();