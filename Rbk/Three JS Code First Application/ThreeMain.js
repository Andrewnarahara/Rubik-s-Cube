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

//Functions to set up the canvas and cube elements within it
setupCubeArray();
//var cube = createCube();
startScene();//cube);

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
function startScene() {				//cube) {
	
	// camera.position.set(0, 0, 0);
	// camera.lookAt(scene.position);
	// scene.add(camera);

	// cube.position.set(0, 0, -7.0);

	//Define the canvas size and aspect ration based on a proportion of the window size
	var canvasWidth = window.innerWidth * windowWidthPercentageForCanvas;
	var canvasHeight = window.innerHeight * windowHeightPercentageForCanvas;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	camera.position.z = 7;

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xCFCFCF, 1);
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setAnimationLoop(animateScene);
	//document.body.appendChild(renderer.domElement);
	document.getElementById("canvasContainer").appendChild(renderer.domElement);
	
		
	//Create the scene and add cube
	scene = new THREE.Scene();
	
	// for (var i = 0; i < cubeSize; i++) {
				
		// for (var j = 0; j < cubeSize; j++) {
						
			// for (var k = 0; k < cubeSize; k++) {
				
				// scene.add(cubeArray[i][j][k]);
				// cubeArray[i][j][k].position.set(i - 1, j - 1, k - 1);

				
			// }
			
		// }
		
	// }
	
	scene.add(cubeArray[0][0][0]);
	cubeArray[0][0][0].position.set(-1, 1, 1);
	
	scene.add(cubeArray[0][0][1]);
	cubeArray[0][0][1].position.set(-1, 0, 0);
	
	scene.add(cubeArray[0][0][2]);
	cubeArray[0][0][2].position.set(0, 0, -1);
	
	scene.add(cubeArray[0][1][0]);
	cubeArray[0][1][0].position.set(0, 1, 0);
	

	
	
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

//Rotates the left face of the cube clockwise
window.LeftCW = function() {

	//Rotate the cube 90 degrees CW along the X axis
	const xAxis = new THREE.Vector3(1, 0, 0);
	cubeArray[0][0][0].rotateOnWorldAxis(xAxis, Math.PI/4);
	
	//Translate the cube. The cube will remain in the same YZ plane, so its X position will remain the same
	//Corners:
	//		Y				1		-1		-1		1
	//		Z				1		1		-1		-1
	//		atan(Y/Z)		pi/4	
	alert(Math.atan(cubeArray[0][0][0].position.z, cubeArray[0][0][0].position.y) / Math.PI);
	
}

//Rotates the left face of the cube counterclockwise
window.LeftCCW = function() {

	const xAxis = new THREE.Vector3(1, 0, 0);
	cubeArray[0][0][0].rotateOnWorldAxis(xAxis, -Math.PI/4);

}

//Rotates the right face of the cube clockwise
window.RightCW = function() {

	

}

//Rotates the right face of the cube counterclockwise
window.RightCCW = function() {

	

}

//Rotates the top face of the cube clockwise
window.TopCW = function() {

	

}

//Rotates the top face of the cube counterclockwise
window.TopCCW = function() {

	

}

//Rotates the bottom face of the cube clockwise
window.BottomCW = function() {

	

}

//Rotates the bottom face of the cube counterclockwise
window.BottomCCW = function() {

	

}

//Rotates the front face of the cube clockwise
window.FrontCW = function() {

	

}

//Rotates the front face of the cube counterclockwise
window.FrontCCW = function() {

	

}

//Rotates the rear face of the cube clockwise
window.RearCW = function() {

	

}

//Rotates the rear face of the cube counterclockwise
window.RearCCW = function() {

	

}

//Takes in a 2D coordinate and rotates it the desired angle (in radians). Returns the new coordinate in an array
function RotateCoordinate2D(xCoordinate, yCoordinate, rotationAngle) {

	var magnitude = Math.sqrt((xCoordinate * xCoordinate) + (yCoordinate * yCoordinate));
	var angle = Math.atan(cubeArray[0][0][0].position.z, cubeArray[0][0][0].position.y);
	var angle += rotationAngle;
	
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


