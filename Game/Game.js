/**
 * Created by Zhi Jian Zheng on 1/7/2017.
 */

function Game (){
    //0 = start
    //1 = wish typed
    //2 = obstacle typed
    //3 = overcome typed
    //4 = virtual world
    this.gameOption = 0;
    this.input = createInput();
    this.input.size(480);
    this.input.position(350, 310);
    // this.input.attribute("position", "relative");

    this.button = createButton('next');
    this.button.position(550, 370);
    this.button.mousePressed(next.bind(this));
    this.menuBit = false;
    this.camera = document.querySelector("#screenCamera");

    this.menu = new Plane({
        x: 0, y: 1, z: 2,
        // rotationX: 90,
        red: 100, blue: 100, green: 100,
        width: 5, height: 3,
        opacity: 0.3
    });


    this.text = document.createElement("a-entity");
    this.text.setAttribute("bmfont-text", "text: What is your goal?; color: white");
    this.text.setAttribute("position", "-1.7, 1.5, 2.1");
    // this.text.setAttribute("align", "center");
    // this.text.setAttribute("color", "#");
    this.text.setAttribute("scale", "2, 2, 2");

    //
    // this.removeMenu = function(){
    //     world.remove(this.menu);
    //     world.remove(this.goalOne);
    //     world.remove(this.goalOnePlate);
    //     for (var i = 0; i < world.scene.childNodes.length; i++){
    //         if (world.scene.childNodes[i] == this.text){
    //             world.scene.removeChild(world.scene.childNodes[i]);
    //         }
    //         if (world.scene.childNodes[i] == this.textTwo){
    //             world.scene.removeChild(world.scene.childNodes[i]);
    //         }
    //         if (world.scene.childNodes[i] == this.goalOneText){
    //             world.scene.removeChild(world.scene.childNodes[i]);
    //         }
    //     }
    // }

    this.operate = function() {
        if (this.gameOption == 0 && this.menuBit == false){
            world.add(this.menu);
            world.scene.appendChild(this.text);
            this.camera.setAttribute('wasd-controls', 'enabled: false');
            this.camera.setAttribute('look-controls', 'enabled: false');
            this.menuBit = true;
        }
        else if (this.gameOption == 1 && this.menuBit == false){
            this.text.setAttribute("bmfont-text", "text: Biggest obstacle?; color: white");
            this.menuBit = true;
        }
        else if (this.gameOption == 2 && this.menuBit == false){
            this.text.setAttribute("bmfont-text", "text: Overcome?; color: white");
        }
        else if (this.gameOption == 3 && this.menuBit == false){

            this.text.setAttribute("position", "-0.75, 1.5, 2.1");
            this.text.setAttribute("bmfont-text", "text:   All set!; color: white");
        }
    }
}

function next(){
    var answer = this.input.value();
    console.log(answer);
    this.input.value('');
    this.gameOption++;

    if (this.gameOption == 3){
        //hide input text
        this.input.remove();
    }
    this.menuBit = false;
}