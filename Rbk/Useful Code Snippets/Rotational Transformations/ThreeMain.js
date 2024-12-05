import * as THREE from 'three';

//The proportion of the window width and height the canvas will take up
const windowWidthPercentageForCanvas = 0.6;
const windowHeightPercentageForCanvas = 0.6;

//Constants for colors
const greenColor = 0x009b48;
const blueColor = 0x0046ad;
const whiteColor = 0xffffff;
const redColor = 0xb71234;
const orangeColor = 0xff5800;
const yellowColor = 0xffd500;

//Global variables for the scene, camera, and renderer
var scene;
var camera;
var renderer;

//Stores the current x, y, and z rotation positions.
//We start with the X axis to the right, Y axis up, and Z axis coming out of the page.
//Rotation axes:
	//X always rotates around the same axis in space. So no matter what rotations have been done, x rotation will always rotate around an axis from left to right, with the default positive being CCW if viewed from the right
	//Y
	//Z always rotates around the same axis relative to a face as it moves around. So, if the white face is facing forwards at the start, it will always rotate around an axis perpendicular to this white face no matter how that face is moved. Default is CCW when facing it from the front
//Then we rotate X 45 degrees (CCW from the right is positive) and Y 45 degrees (CCW from the top is positive) to get an isometric view
var xRotationPos = Math.PI / 4;
var yRotationPos = Math.PI / 4;
var zRotationPos = 0;

//Cube size (3 = 3x3, 4 = 4x4, etc.)
const cubeSize = 3;

//Array to hold the cube objects comprising the entire cube
var cubeArray = [];

//Array to hold the current Euler angles of each cube
var cubeAngleArray = [];

//Functions to set up the canvas and cube elements within it
//setupCubeArray();
var cube = createCube();
cubeAngleArray = [0, 0, 0];		//Cube angles start at [0, 0, 0]
startScene(cube);

//Creates the array of cubes that define the Rubik's Cube
function setupCubeArray() {
	
	//Loops through to create an n x n x n (3D) array of cube objects, with the inner objects being blank
	for (var i = 0; i < cubeSize; i++) {
		
		cubeArray.push([]);
		
		for (var j = 0; j < cubeSize; j++) {
			
			cubeArray[i].push([]);
			
			for (var k = 0; k < cubeSize; k++) {
				
				cubeArray[i][j].push(createCube());			//!!!!!!!!!!Inner objects need to be made blank
				
				
			}
			
		}
		
	}
		
}

//Sets up the colors and creates the cube
function createCube() {
	
	var cubeMaterials = [
		new THREE.MeshBasicMaterial({color:greenColor}),
		new THREE.MeshBasicMaterial({color:blueColor}),
		new THREE.MeshBasicMaterial({color:redColor}),
		new THREE.MeshBasicMaterial({color:orangeColor}),
		new THREE.MeshBasicMaterial({color:whiteColor}),
		new THREE.MeshBasicMaterial({color:yellowColor})
	];

	var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

	var cube = new THREE.Mesh(cubeGeometry, cubeMaterials);

	return cube;
	
}

//Sets up the camera, renderer, and canvas
function startScene() {

	//Define the canvas size and aspect ration based on a proportion of the window size
	var canvasWidth = window.innerWidth * windowWidthPercentageForCanvas;
	var canvasHeight = window.innerHeight * windowHeightPercentageForCanvas;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	camera.position.z = 5;

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xCFCFCF, 1);
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setAnimationLoop(animateScene);
	//document.body.appendChild(renderer.domElement);
	document.getElementById("canvasContainer").appendChild(renderer.domElement);
	
	//Create the scene and add cube
	scene = new THREE.Scene();
	
	scene.add(cube);
	
	//Moves the cube position off center far better viewing of sides
	cube.position.set(-1, -1, 0);
	
	//Get it to an isometric view for better viewing
	// cube.rotation.x = Math.PI/2;
	// cube.rotation.y = Math.PI/3;
	// cube.rotation.z = Math.PI;
	
	
	//Rotations to get to world angle A, B, C
	// var A = 0;//Math.PI/4;
	// var B = 0;//Math.PI/2;
	// var C = Math.PI/2;
	
	// cube.rotation.x = A;
	// cube.rotation.y = B;
	//cube.rotation.z += C;
	
	//Need:
		//Define a turn around a world axis (known)
		//Starting from (0,0,0), define the new euler angles
		//Set the cube rotation and translation positions
		//Starting from the new euler angles, define another world axis turn
		//Repeat
	
	
	//Rotate the cube 45 degrees to show it at an isometric angle
	// cube.rotation.y += Math.PI / 4;
	// cube.rotation.x += Math.PI / 4;
	
}


function animateScene() {
	
	// cube.rotation.y += 0.01;
	// cube.rotation.x += 0.01;

	renderScene();
	
}

function renderScene() {
	
	renderer.render(scene, camera);
	
}

//Rotates the cube left
window.rotateLeft = function() {

	cube.rotation.y -= Math.PI / 8;
	
}

//Rotates the cube right
window.rotateRight = function() {

	cube.rotation.y += Math.PI / 8;
	
}

//Rotates the cube up
window.rotateUp = function() {

	cube.rotation.x -= Math.PI / 8;
	
}

//Rotates the cube down
window.rotateDown = function() {

	cube.rotation.x += Math.PI / 8;
	
}

//Performs a "Front" turn on the cube
window.Front = function() {

	const myAxis = new THREE.Vector3(0, 0, 1);
	cube.rotateOnWorldAxis(myAxis, -Math.PI/4);
	
}

window.Left = function() {

	const myAxis = new THREE.Vector3(1, 0, 0);
	cube.rotateOnWorldAxis(myAxis, Math.PI/4);
	
}

window.Up = function() {

	const myAxis = new THREE.Vector3(0, 1, 0);
	cube.rotateOnWorldAxis(myAxis, -Math.PI/4);
	
}

//Solves the cube
window.solveCube = function() {
		
	cube.rotation.z += Math.PI / 8;
	
}

//A test function for testing things
window.testJS = function() {

	document.getElementById("test").innerHTML = "changed";
	
}
 

/*********** NOTES

Rotation positions:
	Define:
		Faces: front, left, right, etc. at 0,0,0 rotation
		Positions:
			Orthographic: single face facing front, others are hidden
				For each face facing front, there are 4 different rotational orientations possible.
				There are 6 different faces, so there are a total of 4 * 6 = 24 different orientations needed.
			Isometric: 3 faces equally visible
				For each combinations of faces facing front, there are 3 different rotational orientations possible.
				There are 8 different combinations of faces facing front, so 3 * 8 = 24 different orientations needed.
		Coordinate systems:
			The one I will track is based on rotations from the 
		
	Orthographic:
	
		Default (front, at 0,0,0 rotation)
		cubeArray[0][0][0].rotation.x = 0;
		cubeArray[0][0][0].rotation.y = 0;
		cubeArray[0][0][0].rotation.z = 0;
		
		Turn to left (right faces front)
		cubeArray[0][0][0].rotation.x = 0;
		cubeArray[0][0][0].rotation.y = -Math.PI/2;
		cubeArray[0][0][0].rotation.z = 0;
		
		Turn to right (left faces front)
		cubeArray[0][0][0].rotation.x = 0;
		cubeArray[0][0][0].rotation.y = Math.PI/2;
		cubeArray[0][0][0].rotation.z = 0;
		
		Turn to up (bottom faces front)
		cubeArray[0][0][0].rotation.x = -Math.PI/2;
		cubeArray[0][0][0].rotation.y = 0;
		cubeArray[0][0][0].rotation.z = 0;
		
		Turn to down (top faces front)
		cubeArray[0][0][0].rotation.x = Math.PI/2;
		cubeArray[0][0][0].rotation.y = 0;
		cubeArray[0][0][0].rotation.z = 0;
		
		Turn 180 (about x axis)
		cubeArray[0][0][0].rotation.x = Math.PI;
		cubeArray[0][0][0].rotation.y = 0;
		cubeArray[0][0][0].rotation.z = 0;
		
	Isometric rotation positions:
		
		Front, left, top:
		
		Front, right, top:
		
		Front, right, bottom:
		
		Front, bottom, right:




********************/


