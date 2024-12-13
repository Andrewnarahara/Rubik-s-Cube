import * as THREE from 'three';
import { randomScrambleForEvent } from "/lib/cubing.js/src/cubing/scramble";


//The proportion of the window width and height the canvases will take up
const windowWidthPercentageForCubeCanvas = 0.6;
const windowHeightPercentageForCubeCanvas = 0.6;
const windowWidthPercentageForNavigationCanvas = 0.2;			//Currently unused
const windowHeightPercentageForNavigationCanvas = 0.2;			//Currently unused

//Constants for colors
const greenColor = 0x009b48;
const blueColor = 0x0046ad;
const whiteColor = 0xffffff;
const redColor = 0xb71234;
const orangeColor = 0xff5800;
const yellowColor = 0xffd500;
const borderColor = 0x000000;

//Stores the face textures for each face of the nav cube to allow for text to be put on it
var navFaceTextures = [];

//Global variables for the cube scene, camera, and renderer
var cubeScene;
var cubeCamera;
var cubeRenderer;

//Global variables for the navigation scene, camera, and renderer
var navScene;
var navCamera;
var navRenderer;

//Stores the current x, y, and z rotation positions.
//We start with the X axis to the right, Y axis up, and Z axis coming out of the page.
//Rotation axes:
	//X always rotates around the same axis in space. So no matter what rotations have been done, x rotation will always rotate around an axis from left to right, with the default positive being CCW if viewed from the right
	//Y
	//Z always rotates around the same axis relative to a face as it moves around. So, if the white face is facing forwards at the start, it will always rotate around an axis perpendicular to this white face no matter how that face is moved. Default is CCW when facing it from the front
//Then we rotate X 45 degrees (CCW from the right is positive) and Y 45 degrees (CCW from the top is positive) to get an isometric view
var xRotationPos = Math.PI / 4;				//Currently unused
var yRotationPos = Math.PI / 4;				//Currently unused
var zRotationPos = 0;						//Currently unused

//Cube size (3 = 3x3, 4 = 4x4, etc.)
const cubeSize = 3;

//Array to hold the cube objects comprising the entire cube
var cubeArray = [];

//The navigation cube object
var navCube;


//************************************************************//
//var THREEx = new THREE;


class DynamicTexture {
	
	constructor(width, height){
		
		var canvas	= document.createElement( 'canvas' );
		canvas.width	= width;
		canvas.height	= height;
		this.canvas	= canvas;

		var context	= canvas.getContext( '2d' );
		this.context	= context;

		var texture	= new THREE.Texture(canvas);
		this.texture	= texture;
	
	}
	
}

DynamicTexture.prototype.clear = function(fillStyle){
	// depends on fillStyle
	if( fillStyle !== undefined ){
		this.context.fillStyle	= fillStyle
		this.context.fillRect(0,0,this.canvas.width, this.canvas.height)
	}else{
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
	}
	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;
	// for chained API
	return this;
}

/**
 * draw text
 *
 * @param  {String}		text	- the text to display
 * @param  {Number|undefined}	x	- if provided, it is the x where to draw, if not, the text is centered
 * @param  {Number}		y	- the y where to draw the text
 * @param  {String*} 		fillStyle - the fillStyle to clear with, if not provided, fallback on .clearRect
 * @param  {String*} 		contextFont - the font to use
 * @return {THREEx.DynamicTexture}	- the object itself, for chained texture
 */
DynamicTexture.prototype.drawText = function(text, x, y, fillStyle, contextFont){
	// set font if needed
	if( contextFont !== undefined )	this.context.font = contextFont;
	// if x isnt provided
	if( x === undefined || x === null ){
		var textSize	= this.context.measureText(text);
		x = (this.canvas.width - textSize.width) / 2;
	}
	// actually draw the text
	this.context.fillStyle = fillStyle;
	this.context.fillText(text, x, y);
	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;
	// for chained API
	return this;
};

DynamicTexture.prototype.drawTextCooked = function(options){
	var context	= this.context
	var canvas	= this.canvas
	options		= options	|| {}
	var text	= options.text
	var params	= {
		margin		: options.margin !== undefined ? options.margin	: 0.1,
		lineHeight	: options.lineHeight !== undefined ? options.lineHeight : 0.1,
		align		: options.align !== undefined ? options.align : 'left',
		fillStyle	: options.fillStyle !== undefined ? options.fillStyle : 'black',
		font		: options.font !== undefined ? options.font : "bold "+(0.2*512)+"px Arial",
	}
	// sanity check
	console.assert(typeof(text) === 'string')

	context.save()
	context.fillStyle	= params.fillStyle;
	context.font		= params.font;

	var y	= (params.lineHeight + params.margin)*canvas.height
	while(text.length > 0 ){
		// compute the text for specifically this line
		var maxText	= computeMaxTextLength(text)
		// update the remaining text
		text	= text.substr(maxText.length)


		// compute x based on params.align
		var textSize	= context.measureText(maxText);
		if( params.align === 'left' ){
			var x	= params.margin*canvas.width
		}else if( params.align === 'right' ){
			var x	= (1-params.margin)*canvas.width - textSize.width
		}else if( params.align === 'center' ){
			var x = (canvas.width - textSize.width) / 2;
		}else	console.assert( false )

		// actually draw the text at the proper position
		this.context.fillText(maxText, x, y);

		// goto the next line
		y	+= params.lineHeight*canvas.height
	}
	context.restore()

	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;
	// for chained API
	return this;

	function computeMaxTextLength(text){
		var maxText	= ''
		var maxWidth	= (1-params.margin*2)*canvas.width
		while( maxText.length !== text.length ){
			var textSize	= context.measureText(maxText);
			if( textSize.width > maxWidth )	break;
			maxText	+= text.substr(maxText.length, 1)
		}
		return maxText
	}
}

/**
 * execute the drawImage on the internal context
 * the arguments are the same the official context2d.drawImage
 */
DynamicTexture.prototype.drawImage	= function(/* same params as context2d.drawImage */){
	// call the drawImage
	this.context.drawImage.apply(this.context, arguments)
	// make the texture as .needsUpdate
	this.texture.needsUpdate	= true;
	// for chained API
	return this;
}


//************************************************************//


//Functions to set up the cube canvas and cube elements within it
setupCubeArray();
startCubeScene();

//Functions to set up the navigation canvas and cube element within it
setupNavigationCube();
startNavScene();

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


//Sets up the navigation cube
function setupNavigationCube() {
	
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
	
	createNavCubeTextures();
	
	var materials = [
	
		new THREE.MeshBasicMaterial({map: navFaceTextures[0].texture}),
		new THREE.MeshBasicMaterial({map: navFaceTextures[1].texture}),
		new THREE.MeshBasicMaterial({map: navFaceTextures[2].texture}),
		new THREE.MeshBasicMaterial({map: navFaceTextures[3].texture}),
		new THREE.MeshBasicMaterial({map: navFaceTextures[4].texture}),
		new THREE.MeshBasicMaterial({map: navFaceTextures[5].texture})
		
	];

	navCube = new THREE.Mesh(cubeGeometry, materials);//cubeMaterials);
	
	//Cube borders
	var borderGeometry = new THREE.EdgesGeometry(navCube.geometry); // or WireframeGeometry
	var borderMaterial = new THREE.LineBasicMaterial({color: borderColor});
	var wireframe = new THREE.LineSegments(borderGeometry, borderMaterial);
	navCube.add(wireframe);
	
}

//Fills the navFaceTextures array with the textures necessary to display each face name on the navCube
function createNavCubeTextures() {
	
	for(var i = 0; i < 6; i++) {
		
		// Create a dynamic texture
		var dynamicTexture = new DynamicTexture(512, 512);
		//new THREEx.DynamicTexture(512, 512);
		dynamicTexture.context.font = "bolder 90px verdana";
		dynamicTexture.texture.needsUpdate = true;
		dynamicTexture.clear('#d35400').drawText(i.toString(), undefined, 256, 'green');
		navFaceTextures.push(dynamicTexture);
		
	}


/*

// Create a dynamic texture
const dynamicTexture = new DynamicTexture(512, 512);
dynamicTexture.context.font = 'bold 30px Arial';
dynamicTexture.drawText('Dynamic Text', 20, 50, 'black');

// Create a material and assign the texture
const material = new THREE.MeshBasicMaterial({ map: dynamicTexture.texture });

// Create a mesh and add it to the scene
// ...

// Update the dynamic texture
dynamicTexture.clear();
dynamicTexture.drawText('Updated Text!', 20, 50, 'red');

*/
		document.getElementById("test").innerHTML = "throughNavCubeTextures";

}

//Sets up the camera, renderer, and canvas for the cube
function startCubeScene() {

	//Define the canvas size and aspect ratio based on a proportion of the window size
	var canvasWidth = window.innerWidth * windowWidthPercentageForCubeCanvas;
	var canvasHeight = window.innerHeight * windowHeightPercentageForCubeCanvas;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	cubeCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	cubeCamera.position.z = setCameraFromCubeSize();
	cubeCamera.lookAt(0, 0, 0);

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	cubeRenderer = new THREE.WebGLRenderer();
	cubeRenderer.setClearColor(0xCFCFCF, 1);
	cubeRenderer.setSize(canvasWidth, canvasHeight);
	cubeRenderer.setAnimationLoop(animateCubeScene);
	document.getElementById("cubeCanvasContainer").appendChild(cubeRenderer.domElement);
		
	//Create the scene
	cubeScene = new THREE.Scene();
	
	//Loop through all cubes, add them to the scene, and set their position
	for (var i = 0; i < cubeSize; i++) {
				
		for (var j = 0; j < cubeSize; j++) {
						
			for (var k = 0; k < cubeSize; k++) {
				
				cubeScene.add(cubeArray[i][j][k]);
				cubeArray[i][j][k].position.set(i - ((cubeSize - 1) / 2), j - ((cubeSize - 1) / 2), k - ((cubeSize - 1) / 2));
				
			}
			
		}
		
	}
	
}

//Sets up the camera, renderer, and canvas for the navigation
function startNavScene() {

	//Define the canvas size and aspect ratio based on a proportion of the window size
	var canvasWidth = document.getElementById("navigationCanvasContainer").parentElement.getBoundingClientRect().width;
	var canvasHeight = canvasWidth;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	navCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	navCamera.position.z = 2.5;
	navCamera.lookAt(0, 0, 0);

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	navRenderer = new THREE.WebGLRenderer();
	navRenderer.setClearColor(0xCFCFCF, 1);
	navRenderer.setSize(canvasWidth, canvasHeight);
	navRenderer.setAnimationLoop(animateNavScene);
	document.getElementById("navigationCanvasContainer").appendChild(navRenderer.domElement);
		
	//Create the scene
	navScene = new THREE.Scene();
	
	//Add the navigation cube to the scene and set its position
	navScene.add(navCube);
	navCube.position.set(0, 0, 0);
	
}

//Sets the camera Z position based on the cube size
function setCameraFromCubeSize() {
	
	return cubeSize + 4;
	
}

function animateCubeScene() {

	renderCubeScene();
	
}

function renderCubeScene() {
	
	cubeRenderer.render(cubeScene, cubeCamera);
	
}

function animateNavScene() {

	renderNavScene();
	
}

function renderNavScene() {
	
	navRenderer.render(navScene, navCamera);
	
}

//Used to key turn algorithm notation to functions
const turnActions = {
	"L": () => leftCW(),
	"L'": () => leftCCW(),
	"L2": function() {
		leftCW();
		leftCW();
	},
	"R": () => rightCW(),
	"R'": () => rightCCW(),
	"R2": function() {
		rightCW();
		rightCW();
	},
	"U": () => upCW(),
	"U'": () => upCW(),
	"U2": function() {
		upCW();
		upCW();
	},
	"D": () => downCW(),
	"D'": () => downCCW(),
	"D2": function() {
		downCW();
		downCW();
	},
	"F": () => frontCW(),
	"F'": () => frontCCW(),
	"F2": function() {
		frontCW();
		frontCW();
	},
	"B": () => backCW(),
	"B'": () => backCCW(),
	"B2": function() {
		backCW();
		backCW();
	}
};

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
window.upCW = function() {

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
window.upCCW = function() {

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
window.downCW = function() {

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
window.downCCW = function() {

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
window.backCW = function() {

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
window.backCCW = function() {

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

//Scrambles the cube
window.scrambleCube = async function() {
	
	//Generate a scramble algorithm
	var scramble = await randomScrambleForEvent("333");
	
	//Parses the scramble algorithm and gets an array of individual steps
	var scrambleSteps = parseAlgorithm(scramble.toString());
	
	//Performs the scramble function for the specified scramble algorithm
	for (var stepIndex = 0; stepIndex < scrambleSteps.length; stepIndex++) {
		
		turnActions[scrambleSteps[stepIndex]]();
		
	}
	
	//Scrambling functions for other puzzle types - see notes here: https://js.cubing.net/cubing/scramble/
	// (await randomScrambleForEvent("333")).log();
	// (await randomScrambleForEvent("333bf")).log();
	// (await randomScrambleForEvent("333fm")).log();
	// (await randomScrambleForEvent("222")).log();
	// (await randomScrambleForEvent("444")).log();
	// (await randomScrambleForEvent("777")).log();
	// (await randomScrambleForEvent("sq1")).log();
	// (await randomScrambleForEvent("minx")).log();
	// (await randomScrambleForEvent("clock")).log();
	// (await randomScrambleForEvent("fto")).log();
	// (await randomScrambleForEvent("master_tetraminx")).log();
	
}

//Takes in a list of algorithm steps in a single string and parses this into an array of individual steps
//Returns the array of individual steps
function parseAlgorithm(algorithmStepsString) {
	
	//Each step should be separated by a space, so we can use split to turn this into an array
	return algorithmStepsString.split(" ");
	
}

//Solves the cube
window.solveCube = function() {
		
	alert("This function is not ready yet");
	
}

//A test function for testing things
window.testJS = function() {

	document.getElementById("test").innerHTML = "changed";
	navCamera.position.x = 1.5;
	navCamera.position.y = 1.5;
	navCamera.position.z = 1.5;
	navCamera.lookAt(0, 0, 0);
	
}

//Moves the camera to an isometric view
window.isometricCamera = function() {

	cubeCamera.position.x = setCameraFromCubeSize();
	cubeCamera.position.y = setCameraFromCubeSize();
	cubeCamera.position.z = setCameraFromCubeSize();
	cubeCamera.lookAt(0, 0, 0);
	
}

//Moves the camera to the front view
window.frontCamera = function() {

	cubeCamera.position.x = 0;
	cubeCamera.position.y = 0;
	cubeCamera.position.z = setCameraFromCubeSize();
	cubeCamera.lookAt(0, 0, 0);

}
 

/*********** NOTES

To dos:
Navigate around different cube views (in both isometric mode and square mode)
	Label sides so user knows what they are looking at
	Based on OnShape's navigation UI?
		Up, Down, Left, Right, Rotate CW, Rotate CCW in steps
	Also add drag to rotate on main cube?
		This thread has examples using OrbitControls which allow for drag control: https://discourse.threejs.org/t/mapping-text-onto-faces-of-cube/25358/17
Cube solving functions
	-My own
	-Optimized solve
Animate cube motions


Testing cube algorithms
	This site allows you to enter an algorithm and see what happens to a cube: https://codepen.io/cubing/pen/gOLMYqK

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

Algorithm Notation:
	Up (U), Down (D), Right (R), Left (L), Front (F), and Back (B) are the basic turn axes.
	No prime (U, D, R, L, F, B) indicates a single 90 degree turn clockwise when facing the face.
	A prime (U', D', R', L', F', B') indicates a single 90 degree turn counterclockwise when facing the face.
	A 2 (U2, D2, R2, L2, F2, B2) indicates a single 180 degree turn of the face.
			
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






