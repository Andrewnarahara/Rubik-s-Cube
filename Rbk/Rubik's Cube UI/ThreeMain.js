import * as THREE from 'three';




import { randomScrambleForEvent } from "/lib/cubing.js/src/cubing/scramble";

//const scramble = randomScrambleForEvent("333");
//alert(scramble);
//console.log(scramble.toString());


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
const borderColor = 0x000000;

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
startScene();

//Creates the array of cubes that define the Rubik's Cube
function setupCubeArray() {
	
	//Loops through to create an n x n x n (3D) array of cube objects, with the inner objects being blank (not sure if that last part is necessary)
	for (var i = 0; i < cubeSize; i++) {
		
		cubeArray.push([]);
		
		for (var j = 0; j < cubeSize; j++) {
			
			cubeArray[i].push([]);
			
			for (var k = 0; k < cubeSize; k++) {
				
				cubeArray[i][j].push(createCube());			//!!!!!!!!!!Inner objects need to be made blank?
				
				
			}
			
		}
		
	}
		
}

//Sets up the colors and creates the cube
function createCube() {
	
	//Solid faces
	var cubeMaterials = [
		new THREE.MeshBasicMaterial({
			color:greenColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		}),
		new THREE.MeshBasicMaterial({
			color:blueColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		}),
		new THREE.MeshBasicMaterial({
			color:redColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		}),
		new THREE.MeshBasicMaterial({
			color:orangeColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		}),
		new THREE.MeshBasicMaterial({
			color:whiteColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		}),
		new THREE.MeshBasicMaterial({
			color:yellowColor,
			polygonOffset: true,
			polygonOffsetFactor: 1,		//Positive value pushes polygon further away
			polygonOffsetUnits: 1
		})
	];

	var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

	var cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
	
	//Cube borders
	var borderGeometry = new THREE.EdgesGeometry(cube.geometry); // or WireframeGeometry
	var borderMaterial = new THREE.LineBasicMaterial({color: borderColor});
	var wireframe = new THREE.LineSegments(borderGeometry, borderMaterial);
	cube.add(wireframe);

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
	camera.position.z = setCameraFromCubeSize();
	camera.lookAt(0, 0, 0);

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(0xCFCFCF, 1);
	renderer.setSize(canvasWidth, canvasHeight);
	renderer.setAnimationLoop(animateScene);
	document.getElementById("canvasContainer").appendChild(renderer.domElement);
		
	//Create the scene
	scene = new THREE.Scene();
	
	//Loop through all cubes, add them to the scene, and set their position
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				scene.add(cubeArray[i][j][k]);
				cubeArray[i][j][k].position.set(i - ((cubeSize - 1) / 2), j - ((cubeSize - 1) / 2), k - ((cubeSize - 1) / 2));
				
			}
			
		}
		
	}
	
}

//Sets the camera Z position based on the cube size
function setCameraFromCubeSize() {
	
	return cubeSize + 4;
	
}

function animateScene() {

	renderScene();
	
}

function renderScene() {
	
	renderer.render(scene, camera);
	
}

//Rotates the left face of the cube clockwise
window.leftCW = function() {

	//Loops through all cubes, moves cubes in the left face (with the lowest X coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.x == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the X axis
					const xAxis = new THREE.Vector3(1, 0, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(xAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same YZ plane, so its X position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.y, -Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}
	
}

//Rotates the left face of the cube counterclockwise
window.leftCCW = function() {

	//Loops through all cubes, moves cubes in the left face (with the lowest X coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.x == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CCW along the X axis
					const xAxis = new THREE.Vector3(1, 0, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(xAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same YZ plane, so its X position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.y, Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the right face of the cube clockwise
window.rightCW = function() {

	//Loops through all cubes, moves cubes in the right face (with the highest X coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.x == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the X axis
					const xAxis = new THREE.Vector3(1, 0, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(xAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same YZ plane, so its X position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.y, Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the right face of the cube counterclockwise
window.rightCCW = function() {

	//Loops through all cubes, moves cubes in the right face (with the highest X coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.x == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CcW along the X axis
					const xAxis = new THREE.Vector3(1, 0, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(xAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same YZ plane, so its X position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.y, -Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the top face of the cube clockwise
window.topCW = function() {

	//Loops through all cubes, moves cubes in the top face (with the highest Y coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.y == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the Y axis
					const yAxis = new THREE.Vector3(0, 1, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(yAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XZ plane, so its Y position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.x, -Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the top face of the cube counterclockwise
window.topCCW = function() {

	//Loops through all cubes, moves cubes in the top face (with the highest Y coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.y == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CCW along the Y axis
					const yAxis = new THREE.Vector3(0, 1, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(yAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XZ plane, so its Y position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.x, Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the bottom face of the cube clockwise
window.bottomCW = function() {

	//Loops through all cubes, moves cubes in the bottom face (with the lowest Y coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.y == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the Y axis
					const yAxis = new THREE.Vector3(0, 1, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(yAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XZ plane, so its Y position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.x, Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}	

}

//Rotates the bottom face of the cube counterclockwise
window.bottomCCW = function() {

	//Loops through all cubes, moves cubes in the bottom face (with the lowest Y coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.y == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CCW along the Y axis
					const yAxis = new THREE.Vector3(0, 1, 0);
					cubeArray[i][j][k].rotateOnWorldAxis(yAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XZ plane, so its Y position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.z, cubeArray[i][j][k].position.x, -Math.PI/2);
					cubeArray[i][j][k].position.z = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}	

}

//Rotates the front face of the cube clockwise
window.frontCW = function() {

	//Loops through all cubes, moves cubes in the front face (with the highest Z coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.z == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the Z axis
					const zAxis = new THREE.Vector3(0, 0, 1);
					cubeArray[i][j][k].rotateOnWorldAxis(zAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XY plane, so its Z position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.x, cubeArray[i][j][k].position.y, -Math.PI/2);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the front face of the cube counterclockwise
window.frontCCW = function() {

	//Loops through all cubes, moves cubes in the front face (with the highest Z coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.z == (cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CCW along the Z axis
					const zAxis = new THREE.Vector3(0, 0, 1);
					cubeArray[i][j][k].rotateOnWorldAxis(zAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XY plane, so its Z position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.x, cubeArray[i][j][k].position.y, Math.PI/2);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the rear face of the cube clockwise
window.rearCW = function() {

	//Loops through all cubes, moves cubes in the rear face (with the lowest Z coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.z == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CW along the Z axis
					const zAxis = new THREE.Vector3(0, 0, 1);
					cubeArray[i][j][k].rotateOnWorldAxis(zAxis, Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XY plane, so its Z position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.x, cubeArray[i][j][k].position.y, Math.PI/2);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Rotates the rear face of the cube counterclockwise
window.rearCCW = function() {

	//Loops through all cubes, moves cubes in the rear face (with the lowest Z coordinate)
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				if (cubeArray[i][j][k].position.z == -(cubeSize - 1) / 2) {
					
					//Rotate the cube 90 degrees CCW along the Z axis
					const zAxis = new THREE.Vector3(0, 0, 1);
					cubeArray[i][j][k].rotateOnWorldAxis(zAxis, -Math.PI/2);
					
					//Translate the cube. The cube will remain in the same XY plane, so its Z position will remain the same
					var newCoords = rotateCoordinate2D(cubeArray[i][j][k].position.x, cubeArray[i][j][k].position.y, -Math.PI/2);
					cubeArray[i][j][k].position.x = smoothCoordinate(newCoords[0]);
					cubeArray[i][j][k].position.y = smoothCoordinate(newCoords[1]);
					
				}
				
			}
			
		}
		
	}

}

//Takes in a 2D coordinate and rotates it the desired angle (in radians). Note the convention that adding to the angle moves CCW, subtracting moves CW.
//Returns the new coordinate in an array
function rotateCoordinate2D(xCoordinate, yCoordinate, rotationAngle) {

	//Finds the magnitude of the vector between the origin and the coordinate. This will be conserved in a cube since it only allows for rotations in multiples of 90 degrees
	var magnitude = Math.sqrt((xCoordinate * xCoordinate) + (yCoordinate * yCoordinate));
	
	//Stores the angle of a vector from the origin to the coordinate. Note the atan2's parameters are (y, x) NOT (x, y). And it returns values from -pi to pi
	var angle = Math.atan2(yCoordinate, xCoordinate);
	
	//Adds the desired rotation angle
	angle += rotationAngle;

	//Returns the new rotated coordinates
	return [(Math.cos(angle) * magnitude), (Math.sin(angle) * magnitude)];
	
}

//When calculating coordinate positions, we are converting from coordinates to radians (pi based, irrational) and then back to coordinates.
//Since pi is irrational, we cannot compeltely store it in a float, and therefore there will be rounding errors on the final coordinate.
//All coordinates should be in intervals of 1/2 due to the nature of its positioning (see Notes).
//This function rounds the coordinate to the nearest half to smooth these rounding errors and returns the smoothed coordinate.
function smoothCoordinate(coordinateToSmooth) {
	
	return Math.round(coordinateToSmooth * 2) / 2;
	
}

//Solves the cube
window.solveCube = function() {
		
	alert("This function is not ready yet");
	
}

//A test function for testing things
window.testJS = function() {

	document.getElementById("test").innerHTML = "changed";
	
}

//Moves the camera to an isometric view
window.isometricCamera = function() {

	camera.position.x = setCameraFromCubeSize();
	camera.position.y = setCameraFromCubeSize();
	camera.position.z = setCameraFromCubeSize();
	camera.lookAt(0, 0, 0);
	
}

//Moves the camera to the front view
window.frontCamera = function() {

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = setCameraFromCubeSize();
	camera.lookAt(0, 0, 0);

}
 

/*********** NOTES

To dos:
Cube scrambler: maybe https://js.cubing.net/cubing/scramble/		https://www.npmjs.com/package/cubing		https://github.com/cubing/cubing.js
Cube solver
Animate cube motions
Navigate around different cube views (in both isometric mode and square mode)
	Label sides so user knows what they are looking at


Cube Positions from Cube size
	For rotational and coordinate tracking purposes, it is easier if the centers of the faces of the cube line up with an axis.
	We also want to keep the cube size standard at 1 x 1 x 1. The camera can move in and out to adjust the FOV.
	Therefore, the positions of the cubes is defined:
		Dead center of the cube is at (0, 0, 0)
		Sides extend out cubeSize / 2 from this center
		Centers of the outside cubes are 0.5 in from these sides
		So in one axis, the cube positons are:
			{((-cubeSize / 2) + 0.5), ((-cubeSize / 2) + 1.5), ...}
		Matching this to a loop from i = 0 to i < cubeSize:
			position(i) = i - ((cubeSize - 1) / 2)
		Examples:
			cubeSize	positions
			3			-1, 0, 1
			4			-3/2, -1/2, 1/2, 3/2
			5			-2, -1, 0, 1, 2
			
			
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


