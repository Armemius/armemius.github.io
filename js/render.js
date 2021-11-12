const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#background")
});
renderer.setSize(window.innerWidth, window.innerHeight );

const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshStandardMaterial( { color: 0xff0000} );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

var trueShift = 0, shift = 0;

const animate = function() {
    shift = (trueShift + shift * 9) / 10;
    console.info(shift + " " + trueShift);
    cube.rotation.x = shift * 0.01;
    cube.rotation.y = shift * 0.01;
	requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

function scroll() {
    trueShift = -document.body.getBoundingClientRect().top;
}
function resize() {
    camera.setAspect(window.innerWidth / window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight);
}

animate();
document.body.onscroll = scroll;
document.body.onresize = resize;