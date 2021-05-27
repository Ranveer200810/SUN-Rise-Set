const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var realTime;
var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(900,600);
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
    textSize(32);
    strokeWeight(5);
    text("Time : " + realTime, 40, 40);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://timezone.abstractapi.com/v1/current_time/?api_key=1dbca79b75a547c79e3110fa1752cb0e&location=Mumbai, India");
//    console.log();

    //change the data in JSON format
    var resJSON = await response.json();
    var dateTime = resJSON.datetime;

    // write code slice the datetime
    var hour = dateTime.slice(11, 13);
    realTime = hour;
//    console.info(hour);

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 4 && hour <= 6) {

        bg = "sunrise1.png";

    }else if (hour > 6 && hour <= 8) {

        bg = "sunrise2.png";

    }else if (hour > 8 && hour <= 10) {

        bg = "sunrise3.png";

    }else if (hour > 10 && hour < 12) {

        bg = "sunrise4.png";

    }else if (hour >= 12 && hour <= 15) {

        bg = "sunrise5.png";

    }else if (hour > 15 && hour <= 18) {

        bg = "sunrise6.png";

    }else if (hour > 18 && hour <= 19) {

        bg = "sunset7.png";

    }else if (hour > 19 && hour <= 21) {

        bg = "sunset8.png";

    }else if (hour > 21 && hour <= 22) {

        bg = "sunset10.png";

    }else if (hour > 22 && hour <= 23) {

        bg = "sunset11.png";

    }else if (hour > 23 && hour <= 2) {

        bg = "sunset12.png";

    }else if (hour > 2 && hour <= 3) {

        bg = "sunset11.png";

    }else if (hour > 3 && hour < 4) {

        bg = "sunset10.png";

    }
    
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
