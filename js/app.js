'use strict';
//global variables

var filePath = ['1.jpg', 'banana.jpg', 'boots.jpg', 'breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
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

renderProducts(productOne, productTwo, productThree);

//event handler
var clickProduct = function (event) {

    if(sumclicks <25) {
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


  // Insert chart into busMall

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['productOne', 'productTwo', 'productThree'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

