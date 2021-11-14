const scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 150);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#background")
});
renderer.setSize(window.innerWidth, window.innerHeight );

camera.position.z = 5;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

var trueShift = 0, shift = 0;
var trueMouseX = 0, mouseX = 0;
var trueMouseY = 0, mouseY = 0;

const animate = function() {
    shift = (trueShift + shift * 9) / 10;
    mouseX = (trueMouseX + mouseX * 2) / 3;
    mouseY = (trueMouseY + mouseY * 2) / 3;
    camera.position.z = shift * -0.06 + 5;
    camera.rotation.y = (mouseX - 0.5) * -0.1;
    camera.rotation.x = (mouseY - 0.5) * -0.1;
	requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

function scroll() {
    trueShift = -document.body.getBoundingClientRect().top;
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function resize() {
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 150);
    renderer.setSize(window.innerWidth, window.innerHeight);
}
function mouseHandler(event) {
    trueMouseX = event.clientX / window.innerWidth;
    trueMouseY = event.clientY / window.innerHeight;
}

document.body.onscroll = scroll;
document.body.onresize = resize;
document.addEventListener('mousemove', mouseHandler);

for (let i = 0; i < 400; ++i) {
    for (let j = 0; j < 40; ++j) {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshStandardMaterial( { color: 0xCCCCFF} );
        const star = new THREE.Mesh( geometry, material );
        var size = 0.15;
        star.scale.set(size, size, size)
        star.position.z = -i;
        
        star.position.x = Math.random() * 500 - 250;
        star.position.y = Math.random() * 500 - 250;
        scene.add(star);
    }
}