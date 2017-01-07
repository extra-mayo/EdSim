// variable to hold a reference to our A-Frame world
var world;
var scene;
var game;

function preload(){
}

function setup() {
    // no canvas needed
    noCanvas();
    world = new World('VRScene');

    game = new Game();
    // game.displayMenu();
    // scene = new WinterScene(world);


}

function draw() {
    // if (mouseIsPressed || touchIsDown) {
    //     world.moveUserForward(0.1);
    // }
    // scene.operate();
    game.operate();

}

