import * as THREE from 'three';

//The proportion of the window width and height the canvas will take up
const windowWidthPercentageForCanvas = 0.3;
const windowHeightPercentageForCanvas = 0.3;

//Constants for colors
const greenColor = 0x009b48;
const blueColor = 0x0046ad;
const whiteColor = 0xffffff;
const redColor = 0xb71234;
const orangeColor = 0xff5800;
const yellowColor = 0xffd500;


var scene;
var camera;
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
		new THREE.MeshBasicMaterial({color:greenColor}),
		new THREE.MeshBasicMaterial({color:blueColor}),
		new THREE.MeshBasicMaterial({color:redColor}),
		new THREE.MeshBasicMaterial({color:orangeColor}),
		new THREE.MeshBasicMaterial({color:whiteColor}),
		new THREE.MeshBasicMaterial({color:redColor})
	];

	var cubeGeometry = new THREE.BoxGeometry(2, 2, 2);

	cube = new THREE.Mesh(cubeGeometry, cubeMaterials);

	return cube;
	
}

function startScene(cube) {
	
	// camera.position.set(0, 0, 0);
	// camera.lookAt(scene.position);
	// scene.add(camera);

	// cube.position.set(0, 0, -7.0);

	
	var canvasWidth = window.innerWidth * windowWidthPercentageForCanvas;
	var canvasHeight = window.innerHeight * windowHeightPercentageForCanvas;
	
	var aspect = canvasWidth / canvasHeight;
	camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xCFCFCF, 1);
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setAnimationLoop(animateScene);
	document.body.appendChild(renderer.domElement);
		
	scene = new THREE.Scene();

	scene.add(cube);
	
}


function animateScene() {
	
	cube.rotation.y += 0.01;
	cube.rotation.x += 0.01;

	renderScene();
	
}

function renderScene() {
	
	renderer.render(scene, camera);
	
}
 
 
 function setupCanvas() {

    var cube = createCube();
    startScene(cube);
    animateScene();
    renderScene();

}

//Gets an element by its id
window.getElementById = function(element) {
	
	return document.getElementById(element);
	
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


