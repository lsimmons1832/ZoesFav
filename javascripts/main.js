var app = angular.module("Zoe", []);

app.controller("NavCtrl", ($scope) =>{
	$scope.zoe = "Zoe's Eats";

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

});