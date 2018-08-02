
// Write all your JavaScript and JQuery code in this file! :)
var a =0
$("#counter").on("click", function(){
	a+=1
	$("h1").eq(1) .html(a)


	});
$("#reset").on("click", function(){
	a=0
	$("h1").eq(1).html(a)
});
// $("button").eq(0) .html("counter=+1")