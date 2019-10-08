'use strict';
//global variables

var productFiles = ['1.jpg', 'banana.jpg', 'boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var counter = 0 

productOne = null;
productTwo = null;
productThree = null;


// construction function
function product(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.sumviews = 0
  this.sumclicks = 0
  product.allImages.push(this);

};

product.allImages= [];


// creating array for products

var renderProducts = function (productOne, productTwo, productThree) {

  leftProduct.src = product.allImages[productOne].filePath;
  centerProduct.src = product.allImages[productTwo].filePath;
  rightProduct.src = product.allImages[productThree].filePath;
}

//  Random generated number
var getRandomProduct = function() {

var productOne = Math.ceil(Math.random() * Product.allImages.length -1);
  do {
    var productTwo = Math.ceil(Math.random() * Product.allProducts.length -1);
  } while (productOne !== productTwo);

  do { 
    var productThree = Math.ceil(Math.random() * Product.allProducts.length -1);
  } while (productThree !== productOne || projectTwo);
}








// var chooseProduct = function () {
// productOne = getRandomProduct ();
// productTwo = getRandomProduct ();
// productThree = getRandomProduct ();
//  if (productOne === productTwo || productThree) {
//    chooseProduct();
//   if (productTwo === productOne|| productTwo) {
//    chooseProduct();
//   if (productThree === productTwo || productOne) {
//   chooseProduct();
//  }
// }

renderProducts();

//event handler
var clickProduct = function (event) {

    if(sumclicks <10) {
      var productsClicked = event.target;
      var id = productsClicked.id;

  if (id === 'productOne' || id === 'productTwo' ) {
      if(id === 'productOne') {
        productOne.clicks ++;
      }
    
      productOne.sumviews ++;
      productTwo.sumviews ++;
      productThree.sumviews ++;
  
      pickNewProducts();
  }
}
  imageSectionTag.addEventListener('click', clickProduct)
  }
