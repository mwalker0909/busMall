'use strict';


// Preassigning global Variables
var imageSectionTag = document.getElementById('imageContainer');
var leftImageTag = document.getElementById('imageOne');
var middleImageTag = document.getElementById('imageTwo');
var rightImageTag = document.getElementById('imageThree');

var count = 0;

var firstImageOnPage = null;
var secondImageOnPage = null;
var thirdImageOnPage = null;
var totalRounds = 25;
var product;

// images that were provided to us
var images = [
  ['bag', './img/bag.jpg'],
  ['banana', './img/banana.jpg'],
  ['bathroom', './img/bathroom.jpg'],
  ['boots', './img/boots.jpg'],
  ['breakfast', './img/breakfast.jpg'],
  ['bubblegum', './img/bubblegum.jpg'],
  ['chair', './img/chair.jpg'],
  ['cthulhu', './img/cthulhu.jpg'],
  ['dog-duck', './img/dog-duck.jpg'],
  ['dragon', './img/dragon.jpg'],
  ['pen', './img/pen.jpg'],
  ['pet-sweep', './img/pet-sweep.jpg'],
  ['scissors', './img/scissors.jpg'],
  ['shark', './img/shark.jpg'],
  ['sweep', './img/sweep.png'],
  ['tauntaun', './img/tauntaun.jpg'],
  ['unicorn', './img/unicorn.jpg'],
  ['usb', './img/usb.gif'],
  ['water-can', './img/water-can.jpg'],
  ['wine-glass', './img/wine-glass.jpg']
];

// Constructor Function
var Product = function(name, imgUrl) {
  this.name = name;
  this.imgURL = imgUrl;
  this.usersSeenThis = 0;
  this.totalClicks = 0;
  this.lastShown = false;
  Product.allImages.push(this);

};
Product.allImages = [];

// storing information in the Local Storage. 
function updateLocalStorage() {
  var jsonString = JSON.stringify(Product.allImages);
  localStorage.setItem('data', jsonString);
}

// Retrieve data from local storage
function getPreviousData() {
  var localData = localStorage.getItem('data');
  var productData = JSON.parse(localData);

  // if the data is not null, have product data equate to Product.allimgages
  if (productData !== null) {
    Product.allImages = productData;
  }
}

// Prototype to display the percentage ratio. 
Product.prototype.conversionRatio = function() {
  var ratio = this.totalClicks / this.usersSeenThis;
  return Math.floor(ratio * 100);
};

// IIFE
(function() {
  for (var i = 0; i < images.length; i++) {
    var name = images[i][0];
    var src = images[i][1];
    new Product(name, src);
  }
})();


// render the images to the DOM. 
var renderimages  = function(leftIndex, rightIndex, middleIndex) {
  leftImageTag.src = Product.allImages[leftIndex].imgURL;
  middleImageTag.src = Product.allImages[middleIndex].imgURL;
  rightImageTag.src = Product.allImages[rightIndex].imgURL;
};

// random generating function. This takes the three images and ensures nothing can be the same as before 
var pickNewImages = function() {
  var leftIndex = Math.ceil(Math.random() * Product.allImages.length - 1);
  var middleIndex = Math.ceil(Math.random() * Product.allImages.length - 1);
  var rightIndex = Math.ceil(Math.random() * Product.allImages.length - 1);

  while(Product.allImages[leftIndex].lastShown) {
    leftIndex = Math.ceil(Math.random() * Product.allImages.length - 1);
  }
  // using || to state 'or' right index lastshown to ensure not like the last image
  while(rightIndex === leftIndex || Product.allImages[rightIndex].lastShown) {
    rightIndex = Math.ceil(Math.random() * Product.allImages.length - 1);
  }
  while(leftIndex === middleIndex || rightIndex === middleIndex || Product.allImages[middleIndex].lastShown) {
    middleIndex = Math.ceil(Math.random() * Product.allImages.length - 1);
  }
  for (var i = 0; i < Product.allImages.length; i++) {
    Product.allImages[i].lastShown = false;
  }

  firstImageOnPage = Product.allImages[leftIndex];
  secondImageOnPage = Product.allImages[middleIndex];
  thirdImageOnPage = Product.allImages[rightIndex];

  // change from global false to true prior to rendering these new images. 
  Product.allImages[leftIndex].lastShown = true;
  Product.allImages[rightIndex].lastShown = true;
  Product.allImages[middleIndex].lastShown = true;

  renderimages (leftIndex, rightIndex, middleIndex);
};

// Using an event listener to account for the click count and showing new images for users to pick. nested if also keeps track of total clicks
var handleClickOnImg = function(event) {
  if (count < totalRounds) {
    var clickedImage = event.target;
    var id = clickedImage.id;

    if (id === 'imageOne' || id === 'imageThree' || id === 'imageTwo') {
      if (id === 'imageOne') {
        firstImageOnPage.totalClicks++;
      }
      if (id === 'imageTwo') {
        secondImageOnPage.totalClicks++;
      }

      if (id === 'imageThree') {
        thirdImageOnPage.totalClicks++;
      }
      firstImageOnPage.usersSeenThis++;
      thirdImageOnPage.usersSeenThis++;
      secondImageOnPage.usersSeenThis++;

      pickNewImages();
    }
  }
  count++;
  if (count === totalRounds) {
    imageSectionTag.removeEventListener('click', handleClickOnImg);
    alert('That\'s all 25 images. Hooray you\'re done!');
    updateLocalStorage();
    displayResults();
    displayBarChart();
  }
};

imageSectionTag.addEventListener('click', handleClickOnImg);

// Invokes function to grab the images from the array of images we have inserted from the list of given images. 
pickNewImages();

// Generates results to the body  of the chart. 
function displayResults() {

  var main = document.getElementById('results');
  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  h2.textContent = 'Results';
  var ul = document.createElement('ul');
  ul.setAttribute('id', 'listData');
  ul.textContent = '';
  for (var i = 0; i < Product.allImages.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${Product.allImages[i].name} has ${Product.allImages[i].totalClicks} votes and was shown ${Product.allImages[i].usersSeenThis} times.`;
    ul.appendChild(li);
  }
  div.appendChild(h2);
  div.appendChild(ul);
  main.appendChild(div);
}

// Function that shows the image labels on the chart at the bottom. 
var chartLabels = function(images) {
  var labelsArr  = [];
  for (var i = 0; i < images.length; i++) {
    labelsArr .push(images[i].name);
  }
  return labelsArr;
};

// This function keeps track of total clicks and pushes that into the data array. then returns the data array
var chartData = function(images) {
  var dataArr = [];
  for (var i = 0; i < images.length; i++) {
    dataArr.push(images[i].totalClicks);
  }
  return dataArr;
};

// Function to hold # of usersSeenThis for chart data
var chartShown = function(images) {
  var shownData = [];
  for (var i = 0; i < images.length; i++) {
    shownData.push(images[i].usersSeenThis);
  }
  return shownData;
};

// Random RGB function
var randomRGB = function() {
  var max = 255;
  var min = 0;
  var number = function() {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  var color = `rgb(${number()}, ${number()}, ${number()})`;
  return color;
};

// Stores random RGB in array to call on later for chart colors
var chartColors = function() {
  var backgroundColor = [];
  for (var i = 0; i < Product.allImages.length; i++) {
    backgroundColor.push(randomRGB());
  }
  return backgroundColor;
};

// Creating and displaying the chartjs bar chart. 
function displayBarChart() {
  var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels(Product.allImages),
      datasets: [
        {
          label: 'Number of clicks',
          data: chartData(Product.allImages),
          backgroundColor: chartColors(),
          borderColor: chartColors(),
          borderWidth: 1
        },
        {
          label: 'Number of times seen by users',
          data: chartShown(Product.allImages),
          backgroundColor: chartColors(),
          borderColor: chartColors(),
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Number of totalClicks'
            }
          }
        ]
      }
    }
  });
}

getPreviousData();