angular
	.module('myMod')
	.directive('pixdir', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<div>{{image.src}}{{image.title}}</div>",
 	   replace: true
  };
});