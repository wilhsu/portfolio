// random image javascript code reference from:
// https://codepen.io/mykt0ngc0/pen/XWjgELa


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomOrder = function(element) {
    
    // Viewport Dimensions
    var vpHeight = window.innerHeight;
    var vpWidth = window.innerWidth;
    
    // Image Position
    var xPos = getRandomInt(0, vpWidth/1.4 - element.width);
    var yPos = getRandomInt(0, vpHeight/1.4 - element.height);

    

    var zIndex = getRandomInt(0,13);
    
 element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;
};

//Setup
var imgs = document.querySelectorAll('.thumbnail');

imgs.forEach((the_img) => {
  
  window.addEventListener('load', function() {
    randomOrder(the_img);
  });

}); 


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("squillabobMobile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


for (let i = 0; i <= 10 ; i++){
    const projectTitle = document.getElementById("p" + i);
    const projectImg = document.getElementById("tn" + i);  
    
    console.log(projectTitle);

    projectTitle.addEventListener(
        "mouseenter",
        (event) => {
        projectImg.style.zIndex = "14";
        projectImg.style.boxShadow = "0 0 30px fuchsia";
        projectImg.style.opacity = "1";
        }
    )

    projectTitle.addEventListener(
        "mouseleave",
        (event) => {
            projectImg.style.zIndex = "13";
            projectImg.style.boxShadow = "none";
            projectImg.style.opacity = "0";
        }
    )
}

let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
