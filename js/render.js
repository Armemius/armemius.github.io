const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#background")
});
renderer.setSize(window.innerWidth, window.innerHeight );

const geometry = new THREE.DodecahedronGeometry();
const green = new THREE.MeshStandardMaterial( { color: 0x26FF7D} );
const orange = new THREE.MeshStandardMaterial( { color: 0xFF9F00} );
const violet = new THREE.MeshStandardMaterial( { color: 0x960DFF} );

camera.position.z = 5;

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

var trueShift = 0, shift = 0;

for (var i = 0; i < 300; ++i) {
    for (var j = 0; j < 10; ++j) {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshStandardMaterial( { color: 0xCCCCFF} );
        const star = new THREE.Mesh( geometry, material );
        star.scale.set(0.15, 0.15, 0.15)
        star.position.z = -i;
        
        star.position.x = Math.random() * 300 - 150;
        star.position.y = Math.random() * 300 - 150;
        scene.add(star);
    }
}

const animate = function() {
    shift = (trueShift + shift * 9) / 10;
    console.info(shift + " " + trueShift);

    camera.position.z = shift * -0.06 + 5;

	requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();

function scroll() {
    trueShift = -document.body.getBoundingClientRect().top;
}
function resize() {
    camera.setAspect(window.innerWidth / window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight);
}

document.body.onscroll = scroll;
document.body.onresize = resize;