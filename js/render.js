const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 150);

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

for (var i = 0; i < 500; ++i) {
    for (var j = 0; j < 10; ++j) {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshStandardMaterial( { color: 0xCCCCFF} );
        const star = new THREE.Mesh( geometry, material );
        var size = 0.15;
        star.scale.set(size, size, size)
        star.position.z = -i;
        
        star.position.x = Math.random() * 300 - 150;
        star.position.y = Math.random() * 300 - 150;
        scene.add(star);
    }
}