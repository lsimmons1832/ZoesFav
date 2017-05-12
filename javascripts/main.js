var app = angular.module("Zoe", []);

// app.controller("NavCtrl", ($scope) =>{
// 	$scope.zoe = "Zoe's Eats";

// });

app.controller("ItemCtrl", ($scope) =>{
$scope.showListView = true;
//$scope.link = "http://i57.tinypic.com/ehf2og.png";
  $scope.items = [
   {
    id: 0,
    food: "Pie",
    url:"http://i57.tinypic.com/ehf2og.png"
   },
   {
    id: 1,
    food: "Pizza",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
    id: 2,
    food: "Pasta",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
    id: 3,
    food: "Fruit",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
    id: 4,
    food: "Salad",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
    id: 5,
    food: "Cookies",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
    id: 6,
    food: "Mexican",
    url: "http://i57.tinypic.com/ehf2og.png"
  },
  {
     id: 7,
    food: "BBQ",
    url: "http://i57.tinypic.com/ehf2og.png"
  }
  ];
});

var spin_count = 1;

$(".skills-wheel .btn").click(function () {

	$('.skills-wheel .wheel').removeClass('spin-' + (spin_count-1));

    $('.skills-wheel .wheel').addClass('spin-' + spin_count);
    
    
    if(spin_count == 1)
    {
	    // Popup relevant overlay
    }

	spin_count++;

	// $scope.newItem = () => {
	// let spin_count = 1;
	// 	removeClass(div, 'spin-',  (spin_count-1));
	// 	removeClass(ul, 'spin-', (spin_count-1));
	// 	addClass(div, 'spin-', + spin_count);
	// 	addClass(ul, 'spin-',  spin_count);
	// 	spin_count++;
	// };

});