import * as THREE from 'three';

var scene;
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer;

var cube = createCube();
startScene(cube);

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

//Sets up the colors and creates the cube
function createCube() {
	
	var cubeMaterials = [
		new THREE.MeshBasicMaterial({color:0x2173fd}),
		new THREE.MeshBasicMaterial({color:0xd5d918}),
		new THREE.MeshBasicMaterial({color:0xd2dbeb}),
		new THREE.MeshBasicMaterial({color:0xa3a3c6}),
		new THREE.MeshBasicMaterial({color:0xfe6b9f}),
		new THREE.MeshBasicMaterial({color:0x856af9})
	];

	var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

	cube = new THREE.Mesh(cubeGeometry, cubeMaterials);

	return cube;
	
}

function startScene(cube) {
	
	/*
	var canvas = document.getElementById(cubeCanvas);
	render = new THREE.WebGLRenderer();

	render.setClearColor(0x000000, 1);

	var canvasWidth = canvas.getAttribute('width');
	var canvasHeight = canvas.getAttribute('height');
	render.setSize(canvasWidth, canvasHeight);

	canvas.appendChild(render.domElement);

	scene = new THREE.Scene();
	var aspect = canvasWidth / canvasHeight;

	camera = new THREE.PerspectiveCamera(45, aspect);
	camera.position.set(0, 0, 0);
	camera.lookAt(scene.position);
	scene.add(camera);

	cube.position.set(0, 0, -7.0);
	scene.add(cube);
	*/
	//var canvas = document.getElementById(cubeCanvas);
	//var canvasWidth = canvas.getBoundingClientRect().width;
	//getAttribute('width');
	//var canvasHeight = canvas.getAttribute('height');
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
	document.body.appendChild( renderer.domElement );
		
	scene = new THREE.Scene();

	scene.add( cube );
	
}


function animateScene() {
	/*
	requestAnimationFrame(animateScene);

	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;

	renderScene();
	*/
}

function renderScene() {
	
	render.render(scene, camera);
	
}
 
 
 function setupCanvas() {

    var cube = createCube();
    startScene(cube);
    animateScene();
    renderScene();

 }

//A test function for testing things
window.testJS = function() {
	
	document.getElementById("test").innerHTML = "changed";
	
}
 

/*
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
renderer.setAnimationLoop(animate);
document.getElementById("cubeCanvas").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

//The main function called to animate the cube
function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);

}
*/


