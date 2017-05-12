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



	$scope.spin = () => {
	let spin_count = 1;

		$(".skills-wheel .wheel").removeClass('spin-'+ (spin_count+1));
		$(".skills-wheel .wheel").toggleClass('spin-'  + spin_count);
		
		spin_count++;
	};
});

