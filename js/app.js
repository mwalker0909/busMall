'use strict';

var productEntries = {};
var productFiles = ['1.jpg', 'banana.jpg', 'boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var counter = 0 



// construction function
function product (imgId, name, filePath) {
  this.imgId = imgId;
  this.name = name;
  this.filePath = filePath;
  this.sumviews = 0
  this.sumclicks = 0
}

// Random generated number
function getrandomnumber(max, min) {
  return Math.floor(Math.random() *(max-min) + min);
}


// Create the Objects 
function createObject() {
  productFiles.forEach(Element => {
  
  }

  
  )