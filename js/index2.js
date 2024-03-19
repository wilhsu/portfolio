var xoff = 0;
var yoff = 10000;
let sizeX = 50;
let sizeY = 90;

let squilly;

function setup(){
    createCanvas(windowWidth,windowHeight);
    // background(0);
    colorMode(HSL, 360, 100, 100, 100);
    imageMode(CENTER);
    // max_distance = dist(0, 0, width, height);
    squilly = loadImage('assets/squillabob5.png');
}

function draw(){
    background(255);
    var x = map(noise(xoff), 0, 1, 0, windowWidth);
    var y = map(noise(yoff), 0, 1, 0, windowHeight);
    xoff += 0.01;
    yoff -= 0.01;

    if (sizeX >= 1000){
        sizeX --;
        sizeY -= 1.2;
    } else {
        sizeX ++;
        sizeY += 1.2;
    }

    image(squilly, x, y, sizeX, sizeY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function showHide(project){
    let x = document.getElementById(project);
    if (x.style.display == "block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// function showHide2(project){
//     let x = document.getElementById(project);
//     if (x.style.display == "block"){
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }