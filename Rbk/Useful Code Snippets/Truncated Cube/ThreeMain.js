import * as THREE from 'three';
import { randomScrambleForEvent } from '/lib/cubing.js/src/cubing/scramble';
import DynamicTexture from '/lib/DynamicTexture/DynamicTextureClass.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


//The proportion of the window width and height the canvases will take up
const windowWidthPercentageForCubeCanvas = 0.6;
const windowHeightPercentageForCubeCanvas = 0.6;
const windowWidthPercentageForNavigationCanvas = 0.1;
const windowHeightPercentageForNavigationCanvas = 0.1;			//Currently unused

//Constants for colors
const greenColor = 0x009b48;
const blueColor = 0x0046ad;
const whiteColor = 0xffffff;
const redColor = 0xb71234;
const orangeColor = 0xff5800;
const yellowColor = 0xffd500;
const borderColor = 0x000000;
const navCubeUnhighlightedColor = "#F5F5F5";
const navCubeHighlightedColor = "#99a5ab";

//Stores the face names for the nav cube in the order they get meshed
//Face indices:
//		Right: 0, 1
//		Left: 2, 3
//		Top: 4, 5
//		Bottom: 6, 7
//		Front: 8, 9
//		Rear: 10, 11
const faceNames = ["Right", "Left", "Top", "Bottom", "Front", "Rear"];

//Keeps track of which face is highlighted. No face = -1
var highlightedFace = -1;

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

//Control objects for OrbitControls
var cubeControls;
var navControls;

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

//Stores a boolean which is used to determine if there was a click without dragging in the nav canvas (face selection)
var isDragging = false;

//Cube size (3 = 3x3, 4 = 4x4, etc.)
const cubeSize = 3;

//For zoom ratios between the cube and nav cube
const initCubeZoom = setCameraFromCubeSize();
var cubeZoom = initCubeZoom;
const navCubeZoom = 2.5;
var zoomRatio = cubeZoom/navCubeZoom;

//Array to hold the cube objects comprising the entire cube
var cubeArray = [];

//The navigation cube object
var navCube;

//Variables for the raycasting (mouse tracking and face selection)
var raycaster = new THREE.Raycaster();
var mousePosition = new THREE.Vector2();

//Functions to set up the cube canvas and cube elements within it
setupCubeArray();
startCubeScene();

//Functions to set up the navigation canvas and cube element within it
setupNavigationCube();
startNavScene();

//Stores the nav cube canvas element
var navCubeCanvas = document.getElementById("navigationCanvasContainer");

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

	navCube = new THREE.Mesh(cubeGeometry, materials);
	
	//Cube borders
	var borderGeometry = new THREE.EdgesGeometry(navCube.geometry); // or WireframeGeometry
	var borderMaterial = new THREE.LineBasicMaterial({color: borderColor});
	var wireframe = new THREE.LineSegments(borderGeometry, borderMaterial);
	navCube.add(wireframe);
	
}

//Fills the navFaceTextures array with the textures necessary to display each face name on the navCube
function createNavCubeTextures() {
	
	for(var i = 0; i < 6; i++) {
		
		//Create a dynamic texture
		var dynamicTexture = new DynamicTexture(512, 512);
		dynamicTexture.context.font = "bold 130px arial";
		dynamicTexture.texture.needsUpdate = true;
		dynamicTexture.clear(navCubeUnhighlightedColor).drawText(faceNames[i].toString(), undefined, 300, 'black');
		navFaceTextures.push(dynamicTexture);
		
	}

}





var truncCubeVertices = [[0,0,1.042011],[0.5621693,0,0.8773552],[-0.4798415,0.2928932,0.8773552],[0.2569714,-0.5,0.8773552],[0.8773552,0.2928932,0.4798415],[-0.9014684,0.2071068,0.4798415],[-0.5962706,0.7071068,0.4798415],[0.1405423,-0.9142136,0.4798415],[1.017898,0.2071068,-0.08232778],[0.7609261,0.7071068,0.08232778],[-1.017898,-0.2071068,0.08232778],[-0.2810846,1,0.08232778],[-0.2810846,-1,0.08232778],[0.2810846,-1,-0.08232778],[0.9014684,-0.2071068,-0.4798415],[0.2810846,1,-0.08232778],[-0.7609261,-0.7071068,-0.08232778],[-0.8773552,-0.2928932,-0.4798415],[-0.1405423,0.9142136,-0.4798415],[0.5962706,-0.7071068,-0.4798415],[0.4798415,-0.2928932,-0.8773552],[-0.5621693,0,-0.8773552],[-0.2569714,0.5,-0.8773552],[0,0,-1.042011]];
var truncCubeEdges = [[0,3],[3,1],[1,0],[2,6],[6,5],[5,2],[4,8],[8,9],[9,4],[7,12],[12,13],[13,7],[10,17],[17,16],[16,10],[11,15],[15,18],[18,11],[14,19],[19,20],[20,14],[21,22],[22,23],[23,21],[1,4],[9,15],[11,6],[2,0],[5,10],[16,12],[7,3],[13,19],[14,8],[18,22],[21,17],[20,23]];
var truncCubeFaces = [[0,3,1],[2,6,5],[4,8,9],[7,12,13],[10,17,16],[11,15,18],[14,19,20],[21,22,23],[0,1,4,9,15,11,6,2],[0,2,5,10,16,12,7,3],[1,3,7,13,19,14,8,4],[5,6,11,18,22,21,17,10],[8,14,20,23,22,18,15,9],[12,16,17,21,23,20,19,13]];

	var polyhedronMesh = new THREE.Object3D();
		
	displayPolyhedron();


var faces;

function displayPolyhedron()
{
	
	polyhedronMesh = polyhedronDataToMesh();
	//scene.add(polyhedronMesh);

}

function polyhedronDataToMesh()
{
	var polyhedron = new THREE.Object3D();
	
	// convert vertex data to THREE.js vectors
	var vertex = [] 
	for (var i = 0; i < truncCubeVertices.length; i++)
		vertex.push( new THREE.Vector3( truncCubeVertices[i][0], truncCubeVertices[i][1], truncCubeVertices[i][2] ).multiplyScalar(100) );

	var vertexGeometry = new THREE.SphereGeometry( 6, 12, 6 );
	var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0x222244 } );
	var vertexSingleMesh = new THREE.Mesh( vertexGeometry );
	alert("here");           

	var vertexAmalgam = new THREE.BufferGeometry();
	//vertexAmalgam.setAttribute('position', new THREE.Float32BufferAttribute(vertex, 3));

	for (var i = 0; i < truncCubeVertices.length; i++)
	{
		var vMesh = vertexSingleMesh.clone();
		vMesh.position.set(vertex[i]);
		THREE.GeometryUtils.merge( vertexAmalgam, vMesh );
	}
	alert("after");
	var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
	polyhedron.add( vertexMesh );
	
	// convert edge data to cylinders
	var edgeMaterial = new THREE.MeshLambertMaterial( {color: 0x666666} );
	var edgeAmalgam = new THREE.Geometry();
	for (var i = 0; i < truncCubeEdges.length; i++)
	{
		var index0 = truncCubeEdges[i][0];
		var index1 = truncCubeEdges[i][1];
		var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial );
		THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
	}
	var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
	polyhedron.add( edgeMesh );
	
	// convert face data to a single (triangulated) geometry
	var faceMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.FrontSide, transparent:parameters.transparent, opacity:0.8 } );
	var faceColors = 
	{
	    3: new THREE.Color( 0xcc0000 ),
	    4: new THREE.Color( 0x00cc00 ),
	    5: new THREE.Color( 0x0000cc ),
	    6: new THREE.Color( 0xcccc00 ),
	    7: new THREE.Color( 0x999999 ),
	    8: new THREE.Color( 0x990099 ),
	    9: new THREE.Color( 0xff6600 ),
	    10: new THREE.Color( 0x6666ff )
	};
	
	var geometry = new THREE.Geometry();
	geometry.vertices = vertex;
	var faceIndex = 0;
	for (var faceNum = 0; faceNum < truncCubeFaces.length; faceNum++)
	{
		for (var i = 0; i < truncCubeFaces[faceNum].length - 2; i++)
		{
			geometry.faces[faceIndex] = new THREE.Face3( truncCubeFaces[faceNum][0], truncCubeFaces[faceNum][i+1], truncCubeFaces[faceNum][i+2] );
			geometry.faces[faceIndex].color = faceColors[truncCubeFaces[faceNum].length];
			faceIndex++;
		}
	}
	
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	faces = new THREE.Mesh(geometry, faceMaterial);
	faces.scale.multiplyScalar(1.01);
	polyhedron.add(faces);
	
	var interiorMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide } );
	
	var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
	interiorFaces.scale.multiplyScalar(0.99);
	polyhedron.add( interiorFaces );
	
	return polyhedron;
}

function cylinderMesh(point1, point2, material)
{
    var direction = new THREE.Vector3().subVectors(point2, point1);
    var arrow = new THREE.ArrowHelper(direction.clone().normalize(), point1);
    var rotation = new THREE.Vector3().setEulerFromQuaternion(arrow.quaternion);
    var edgeGeometry = new THREE.CylinderGeometry( 2, 2, direction.length(), 8, 4 );
    var edge = new THREE.Mesh(edgeGeometry, material); 
    edge.position = new THREE.Vector3().addVectors(point1, direction.multiplyScalar(0.5));
	edge.rotation = rotation;
	return edge;

	// the result should align with:
	//   scene.add( new THREE.ArrowHelper( direction.clone().normalize(), point1, direction.length()) );
}

/*
// MAIN

// standard global variables
var container, scene, camera, renderer, controls;

// custom global variables
var mesh;

init();
animate();

// FUNCTIONS 		
function init() 
{
	
	/*
	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,150,400);
	camera.lookAt(scene.position);	
	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	container = document.getElementById( 'ThreeJS' );
	container.appendChild( renderer.domElement );
	// EVENTS
	THREEx.WindowResize(renderer, camera);
	// CONTROLS
	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.noPan = true;
	// LIGHT
	var light = new THREE.PointLight(0xffffff);
	light.position = camera.position;
	scene.add(light);
	// SKYBOX
	var skyBoxGeometry = new THREE.CubeGeometry( 8000, 8000, 8000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xccccff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	scene.add(skyBox);
	*/
	////////////
	// CUSTOM //
	////////////
	
	
	//this.parameters = { transparent: false };
	//this.polyhedronMesh = new THREE.Object3D(); 
	//this.titleSprite = new THREE.Object3D();	
	//scene.add(polyhedronMesh);
	/*scene.add(titleSprite);
	this.titleSpriteParams = 
	{ 
	    fontsize: 24, 
	    useScreenCoordinates: true, 
	    borderThickness: 2,
	    borderColor: {r:0, g:0, b:0, a:1.0}, 
	    backgroundColor: {r:255, g:255, b:255, a:0.9}, 
	    spriteAlignment: THREE.SpriteAlignment.topCenter 
	}*/
		
	//displayPolyhedron( POLYHEDRA.TruncatedIcosidodecahedron );

	/////////
	// GUI //
	/////////
/*
	gui = new dat.GUI();
	
	gui.add( parameters, "transparent" )
	   .name( "Toggle Transparency" )
	   .onChange( function(value)
		{
			polyhedronMesh.children[2].material.transparent = value;
		});
	
	categoryFolders = {};
	// check category[0]. if folder does not exist, create it, add it to that folder.
	//   if category field DNE, just add it to the end.
	for (var arg in POLYHEDRA)
	{
		var guiSection = gui;
		if ( POLYHEDRA[arg].hasOwnProperty("category") )
		{
			var category = POLYHEDRA[arg].category[0];
			if ( !categoryFolders.hasOwnProperty(category) )
				categoryFolders[category] = gui.addFolder(category);
			guiSection = categoryFolders[category];
		}
		
        parameters[arg] = function() {};
		
		guiSection.add( parameters, arg )
		.name( POLYHEDRA[arg].name )
		.onChange( function(value)
		{
		   displayPolyhedron( POLYHEDRA[this.property] );
		});
	}
	gui.open();	
	
} // end of function init()

var faces;

function displayPolyhedron()
{
	//scene.remove(polyhedronMesh);
	//scene.remove(titleSprite);
	polyhedronMesh = polyhedronDataToMesh();
	//titleSprite = makeTextSprite( "  " + data.name + "  ",
	//    titleSpriteParams );
	//titleSprite.position.set(window.innerWidth / 2, 10, 0);
	//scene.add(titleSprite);
	scene.add(polyhedronMesh);
}

function polyhedronDataToMesh(data)
{
	var polyhedron = new THREE.Object3D();
	
	// convert vertex data to THREE.js vectors
	var vertex = [] 
	for (var i = 0; i < data.vertex.length; i++)
		vertex.push( new THREE.Vector3( data.vertex[i][0], data.vertex[i][1], data.vertex[i][2] ).multiplyScalar(100) );

	var vertexGeometry = new THREE.SphereGeometry( 6, 12, 6 );
	var vertexMaterial = new THREE.MeshLambertMaterial( { color: 0x222244 } );
	var vertexSingleMesh = new THREE.Mesh( vertexGeometry );

	var vertexAmalgam = new THREE.Geometry();
	for (var i = 0; i < data.vertex.length; i++)
	{
		var vMesh = vertexSingleMesh.clone();
		vMesh.position = vertex[i];
		THREE.GeometryUtils.merge( vertexAmalgam, vMesh );
	}
	var vertexMesh = new THREE.Mesh( vertexAmalgam, vertexMaterial );
	polyhedron.add( vertexMesh );
	
	// convert edge data to cylinders
	var edgeMaterial = new THREE.MeshLambertMaterial( {color: 0x666666} );
	var edgeAmalgam = new THREE.Geometry();
	for (var i = 0; i < data.edge.length; i++)
	{
		var index0 = data.edge[i][0];
		var index1 = data.edge[i][1];
		var eMesh = cylinderMesh( vertex[index0], vertex[index1], edgeMaterial );
		THREE.GeometryUtils.merge( edgeAmalgam, eMesh );
	}
	var edgeMesh = new THREE.Mesh( edgeAmalgam, edgeMaterial );
	polyhedron.add( edgeMesh );
	
	// convert face data to a single (triangulated) geometry
	var faceMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.FrontSide, transparent:parameters.transparent, opacity:0.8 } );
	var faceColors = 
	{
	    3: new THREE.Color( 0xcc0000 ),
	    4: new THREE.Color( 0x00cc00 ),
	    5: new THREE.Color( 0x0000cc ),
	    6: new THREE.Color( 0xcccc00 ),
	    7: new THREE.Color( 0x999999 ),
	    8: new THREE.Color( 0x990099 ),
	    9: new THREE.Color( 0xff6600 ),
	    10: new THREE.Color( 0x6666ff )
	};
	
	var geometry = new THREE.Geometry();
	geometry.vertices = vertex;
	var faceIndex = 0;
	for (var faceNum = 0; faceNum < data.face.length; faceNum++)
	{
		for (var i = 0; i < data.face[faceNum].length - 2; i++)
		{
			geometry.faces[faceIndex] = new THREE.Face3( data.face[faceNum][0], data.face[faceNum][i+1], data.face[faceNum][i+2] );
			geometry.faces[faceIndex].color = faceColors[data.face[faceNum].length];
			faceIndex++;
		}
	}
	
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();

	faces = new THREE.Mesh(geometry, faceMaterial);
	faces.scale.multiplyScalar(1.01);
	polyhedron.add(faces);
	
	var interiorMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, vertexColors: THREE.FaceColors, side: THREE.BackSide } );
	
	var interiorFaces = new THREE.Mesh(geometry, interiorMaterial);
	interiorFaces.scale.multiplyScalar(0.99);
	polyhedron.add( interiorFaces );
	
	return polyhedron;
}

function cylinderMesh(point1, point2, material)
{
    var direction = new THREE.Vector3().subVectors(point2, point1);
    var arrow = new THREE.ArrowHelper(direction.clone().normalize(), point1);
    var rotation = new THREE.Vector3().setEulerFromQuaternion(arrow.quaternion);
    var edgeGeometry = new THREE.CylinderGeometry( 2, 2, direction.length(), 8, 4 );
    var edge = new THREE.Mesh(edgeGeometry, material); 
    edge.position = new THREE.Vector3().addVectors(point1, direction.multiplyScalar(0.5));
	edge.rotation = rotation;
	return edge;

	// the result should align with:
	//   scene.add( new THREE.ArrowHelper( direction.clone().normalize(), point1, direction.length()) );
}

function makeTextSprite( message, parameters )
{
	if ( parameters === undefined ) parameters = {};
	
	var fontface = parameters.hasOwnProperty("fontface") ? 
		parameters["fontface"] : "Arial";
	
	var fontsize = parameters.hasOwnProperty("fontsize") ? 
		parameters["fontsize"] : 18;
	
	var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
		parameters["borderThickness"] : 4;
	
	var borderColor = parameters.hasOwnProperty("borderColor") ?
		parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
	
	var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
		parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

	var useScreenCoordinates = parameters.hasOwnProperty("useScreenCoordinates") ?
		parameters["useScreenCoordinates"] : false;
	
	var spriteAlignment = parameters.hasOwnProperty("spriteAlignment") ?
		parameters["spriteAlignment"] : THREE.SpriteAlignment.topLeft;
		
	// create canvas, resize later.
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;
    
	// get size data (height depends only on font size)
	var metrics = context.measureText( message );
	var textWidth = metrics.width;
	
	// calculate correct dimensions of canvas and resize
	var imageWidth = textWidth + borderThickness * 2;
	var imageHeight = fontsize * 1.44 + borderThickness * 2;
	canvas.width = imageWidth;
	canvas.height = imageHeight;
	// new canvas, new context.
	context = canvas.getContext('2d');
	context.font = "Bold " + fontsize + "px " + fontface;
	
	// background color
	context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
								  + backgroundColor.b + "," + backgroundColor.a + ")";
	// border color
	context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
								  + borderColor.b + "," + borderColor.a + ")";

	context.lineWidth = borderThickness;
	roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
	// 1.4 is extra height factor for text below baseline: g,j,p,q.
	
	// text color
	context.fillStyle = "rgba(0, 0, 0, 1.0)";

	context.fillText( message, borderThickness, fontsize + borderThickness );
	
	// canvas contents will be used for a texture
	var texture = new THREE.Texture(canvas) 
	texture.needsUpdate = true;

	var spriteMaterial = new THREE.SpriteMaterial( 
		{ map: texture, useScreenCoordinates: useScreenCoordinates, alignment: spriteAlignment } );
	var sprite = new THREE.Sprite( spriteMaterial );
	sprite.scale.set(imageWidth, imageHeight, 1.0);
	sprite.width = imageWidth;
	sprite.height = imageHeight;
	return sprite;	
}

*/






















//Sets up the camera, renderer, and canvas for the cube
function startCubeScene() {

	//Define the canvas size and aspect ratio based on a proportion of the window size
	var canvasWidth = window.innerWidth * windowWidthPercentageForCubeCanvas;
	var canvasHeight = window.innerHeight * windowHeightPercentageForCubeCanvas;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	cubeCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	cubeCamera.position.z = cubeZoom;

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	cubeRenderer = new THREE.WebGLRenderer();
	cubeRenderer.setClearColor(0xCFCFCF, 1);
	cubeRenderer.setSize(canvasWidth, canvasHeight);
	cubeRenderer.setAnimationLoop(animateCubeScene);
	document.getElementById("cubeCanvasContainer").appendChild(cubeRenderer.domElement);
	
	//Creates the OrbitControls controls nad disallows panning (we want the cube to stay centered)
	cubeControls = new OrbitControls(cubeCamera, cubeRenderer.domElement);
	cubeControls.enablePan = false;
	cubeControls.target.set(0, 0, 0);			//Sets the center to (0, 0, 0) in case it isn't by default
	cubeControls.update();
	
	//Links these controls to mirror the movement of the nav cube
	cubeControls.addEventListener( 'change', () => {

		cubeZoom = cubeCamera.position.length();		//Updates the zoom and zoom ratio to keep the nav cube at the same zoom
		zoomRatio = cubeZoom/navCubeZoom;
		navCamera.position.set(cubeCamera.position.x / zoomRatio, cubeCamera.position.y / zoomRatio, cubeCamera.position.z / zoomRatio);
		navCamera.rotation.copy( cubeCamera.rotation );

	} );
	
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
	var canvasWidth = window.innerWidth * windowWidthPercentageForNavigationCanvas;
	//var canvasWidth = document.getElementById("navigationCanvasContainer").parentElement.getBoundingClientRect().width;
	var canvasHeight = canvasWidth;
	var aspect = canvasWidth / canvasHeight;
	
	//Create the camera and move it away from the origin so it is outside of the cube bounds
	navCamera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
	navCamera.position.z = navCubeZoom;

	//Create the renderer, define the animate function, and create the canvas in the HTML file
	navRenderer = new THREE.WebGLRenderer();
	navRenderer.setClearColor(0xCFCFCF, 1);
	navRenderer.setSize(canvasWidth, canvasHeight);
	navRenderer.setAnimationLoop(animateNavScene);
	document.getElementById("navigationCanvasContainer").appendChild(navRenderer.domElement);
	
	//Creates the OrbitControls controls nad disallows panning (we want the cube to stay centered)
	navControls = new OrbitControls(navCamera, navRenderer.domElement);
	navControls.enablePan = false;
	navControls.enableZoom = false;
	navControls.target.set(0, 0, 0);			//Sets the center to (0, 0, 0) in case it isn't by default
	navControls.update();
	
	//Links these controls to mirror the movement of the cube
	navControls.addEventListener( 'change', () => {

		cubeCamera.position.set(navCamera.position.x * zoomRatio, navCamera.position.y * zoomRatio, navCamera.position.z * zoomRatio);
		cubeCamera.rotation.copy( navCamera.rotation );

	} );
	
	//Create the scene
	navScene = new THREE.Scene();
	
	//Add the navigation cube to the scene and set its position
	navScene.add(navCube);
	navCube.position.set(0, 0, 0);
	
}

//Sets the camera Z position based on the cube size
function setCameraFromCubeSize() {
	
	return cubeSize + 5;
	
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
	
}

//Moves the camera to an isometric view
window.isometricCamera = function() {

	cubeControls.object.position.set(initCubeZoom, initCubeZoom, initCubeZoom);
	cubeControls.update();
	
}

//Moves the camera to the front view
window.frontCamera = function() {

	cubeControls.object.position.set(0, 0, initCubeZoom);
	cubeControls.update();

}

//Used to key highlighted face positions to functions
//["Right", "Left", "Top", "Bottom", "Front", "Rear"];
const snapToPosition = {
	0: () => setCubeDirection(1, 0, 0),
	1: () => setCubeDirection(-1, 0, 0),
	2: () => setCubeDirection(0, 1, 0),
	3: () => setCubeDirection(0, -1, 0),
	4: () => setCubeDirection(0, 0, 1),
	5: () => setCubeDirection(0, 0, -1)
};

//When there is a mousedown event in the nav canvas, set "isDragging" to false in case there is a click without dragging (face selection)
window.navCanvasMouseDown = function (event) {
	
	isDragging = false;
	
}

//Tracks the mouse location in the nav cube canvas
window.mouseLocation = function(event) {
	
	isDragging = true;		//Mousemove indicates a drag if there was a mousedown event, so set isDragging to true
	
	var navCanvasDimensions = navCubeCanvas.getBoundingClientRect();
	
    //Normalize mouse coordinates to range between -1 and 1
    mousePosition.x = ((event.clientX - navCanvasDimensions.left) / navCubeCanvas.getBoundingClientRect().width) * 2 - 1;
    mousePosition.y = -((event.clientY - navCanvasDimensions.top) / navCubeCanvas.getBoundingClientRect().height) * 2 + 1; 

	//Determine if any faces are moused over, highlight the appropriate face
	checkForFace();

}

//Handler for mouseup event in the nav canvas
window.navCanvasMouseUp = function(event) {
	
	//If isDragging is false, there was a face selection
	if (!isDragging) {
		
		checkForFace();							//Highlight the appropriate face and set highlightedFace
		snapToPosition[highlightedFace]();		//Jump to the selected position
		cubeControls.update();
		
	}
	
}

//Finds the selected face of the nav cube, highlights the appropriate face
function checkForFace() {
	
	//Set the current highlighted face (if any) back to its unhighlighted value
	if (highlightedFace != -1) {
		
		navFaceTextures[highlightedFace].texture.needsUpdate = true;
		navFaceTextures[highlightedFace].clear(navCubeUnhighlightedColor).drawText(faceNames[highlightedFace].toString(), undefined, 300, 'black');
		
	}
	
	//Start by setting no face as intersected. If there is an intersected face, we'll make it as such later
	highlightedFace = -1;
	
	raycaster.setFromCamera(mousePosition, navCamera);

	//Finds all intersected objects along the ray
	const intersects = raycaster.intersectObjects(navScene.children);

	if (intersects.length > 0) {		//If there are object(s) intersected by the ray
		
		//Filters the intersected objects for meshes
		const res = intersects.filter(res => res.object.type === 'Mesh');

		if (res.length > 0) {			//If there are meshes intersected by the ray
				
			//Gets the highlighted face's index in navFaceTextures
			highlightedFace = Math.round((res[0].faceIndex - 0.5) / 2);
			
			//Sets the selected face's color to the highlight color
			navFaceTextures[highlightedFace].texture.needsUpdate = true;
			navFaceTextures[highlightedFace].clear(navCubeHighlightedColor).drawText(faceNames[highlightedFace].toString(), undefined, 300, 'black');
							
		}
		
	}

}

//Returns a 3D vector in the specified direction with the specified magnitude
function create3DVectorWithMagnitude(xComp, yComp, zComp, magnitude) {
	
	var vectorMagnitude = Math.sqrt((xComp * xComp) + (yComp * yComp) + (zComp * zComp));

	return new THREE.Vector3((xComp * (magnitude / vectorMagnitude)), (yComp * (magnitude / vectorMagnitude)), (zComp * (magnitude / vectorMagnitude)));
	
}

//Jumps to the cube view from the specified vector direction
function setCubeDirection(xDir, yDir, zDir) {
	
	//Gets a vector in the specified direction with the specified magnitude (the current zoom for the cube)
	const viewVector = create3DVectorWithMagnitude(xDir, yDir, zDir, cubeZoom);

	//Set the camera position to the specified direction at the current zoom level
	cubeControls.object.position.set(viewVector.x, viewVector.y, viewVector.z);
	
}



/*********** NOTES

To dos:
Navigate around different cube views (in both isometric mode and square mode)
	Make nav cube a truncated cube and just click to snap to different square and isometric views on the nav cube
		Make truncated cube
			https://stemkoski.github.io/Three.js/Polyhedra.html
			https://discourse.threejs.org/t/how-to-truncate-geometry-by-vertex/17561
		Create and link jump functions to each face
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

OrbitControls
	A nice video here on how to implement it: https://www.youtube.com/watch?v=4ZgkMS5rH3E
	This allows for very easy implementation of controls like rotating the camera with touch or left click, panning with right click, and zooming in and out with the mouse wheel
			
Rotation positions:
	The 


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






