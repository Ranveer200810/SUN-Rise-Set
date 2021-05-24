const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg) {

        background(backgroundImg);

    }

    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://timezone.abstractapi.com/v1/current_time/?api_key=1dbca79b75a547c79e3110fa1752cb0e&location=Mumbai, India");
//    console.log();

    //change the data in JSON format
    var resJSON = await response.json();
    var dateTime = resJSON.currentDateTime;

    // write code slice the datetime
    var hour = dateTime.slice(11, 13);
    console.info(response);

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 4 && hour >= 7) {

        bg = "sunrise1.png";

    }
    
    //load the image in backgroundImg variable here

}
