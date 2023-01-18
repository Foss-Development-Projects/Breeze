import { Engine, FreeCamera, HemisphericLight, Scene, Vector3 } from "@babylonjs/core";

const canvas1: any = document.getElementById("canvas1");
const engine = new Engine(canvas1, true);

const createScene = () => {
	// Create A Scene
	const scene = new Scene(engine)
	// Create Camera
	const camera = new FreeCamera("camera", new Vector3(0, 0, 0), scene);

	// Create A Light
	const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)

	return scene;
}


//  Create Our Scene

const scene = createScene();

engine.runRenderLoop(() => {
	scene.render();
})