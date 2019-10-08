'use strict';
//global variables
var productEntries = {};
var productFiles = ['1.jpg', 'banana.jpg', 'boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var counter = 0 



// construction function
function product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.sumviews = 0
  this.sumclicks = 0
  product.allProducts.push(this);

};

product.allProducts= [];


// creating array for products

var renderProducts = function (productOne, productTwo, productThree) {

  leftProduct.src = product.allProducts[productOne].filePath;
  centerProduct.src = product.allProducts[productTwo].filePath;
  rightProduct.src = product.allProducts[productThree].filePath;
}

// Random generated number
var getRandomProduct = function(){
  return Math.floor(Math.random() * Product.allProducts.length +1);
}

//choose product 
var chooseProduct = function () {
  var productOne = getRandomProduct ();

}




// Create the Objects 
// function createObject() {
//   productFiles.forEach(Element => {
//   }