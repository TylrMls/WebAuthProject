$(function(){
  $("#header").load("./inc/header.html");
});
$(function(){
  $("#footer").load("./inc/footer.html");
});

var currentImage = 1;

// A function that cycles through the img-switcher images
function loadNextImage() {
  switch (currentImage) {
    case 1:
      document.getElementById('switcher').src = "./images/img-switcher-2.jpg";
      currentImage = 2;
      break;
    case 2:
      document.getElementById('switcher').src = "./images/img-switcher-3.jpg";
      currentImage = 3;
      break;
    case 3:
      document.getElementById('switcher').src = "./images/img-switcher-4.jpg";
      currentImage = 4;
      break;
    case 4:
      document.getElementById('switcher').src = "./images/img-switcher-5.jpg";
      currentImage = 5;
      break;
    case 5:
      document.getElementById('switcher').src = "./images/img-switcher-1.jpg";
      currentImage = 1;
      break;
  }
}

// A function that cycles through the img-switcher images (in reverse)
function loadPreviousImage() {
  switch (currentImage) {
    case 1:
      document.getElementById('switcher').src = "./images/img-switcher-5.jpg";
      currentImage = 5;
      break;
    case 2:
      document.getElementById('switcher').src = "./images/img-switcher-1.jpg";
      currentImage = 1;
      break;
    case 3:
      document.getElementById('switcher').src = "./images/img-switcher-2.jpg";
      currentImage = 2;
      break;
    case 4:
      document.getElementById('switcher').src = "./images/img-switcher-3.jpg";
      currentImage = 3;
      break;
    case 5:
      document.getElementById('switcher').src = "./images/img-switcher-4.jpg";
      currentImage = 4;
      break;
  }
}
