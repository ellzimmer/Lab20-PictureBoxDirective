angular
	.module('myMod')
	.directive('pixdir', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<div>{{photo.a}}</div>",
 	   replace: true
  };
});