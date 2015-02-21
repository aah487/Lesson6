
$(function(){
$(".amc,.hbo").hide() 

$("#clickamc").on("click", function(){
$(".amc").fadeIn()
$("#clickhbo,#clickamc").fadeOut()
})

$("#yes").on("click", function(){
$("#saul,#bad,#mad,#yes,#no,.q1").fadeOut(1000, function(){
alert("The Walking Dead and Talking Dead are your best bet.");
});
});


$("#no").on("click", function(){
$("#walking,#talking,#yes,#no,.q1").fadeOut( function(){
alert("Look at your choices.")
});
});

$("#clickhbo").on("click", function(){
$(".hbo").fadeIn()
$("#clickhbo,#clickamc").fadeOut()
});



$("#yes2").on("click", function(){
$("#games,#no2,#yes2,.q2").slideUp(1000)
});

$("#no2").on("click", function(){
$("#vice,#valley,#girls,#toget,#yes2,#no2,.q2").slideUp()

});




} );

//$(".beers #corona").on("click", function() {
 //$("#schools").fadeToggle(1000, function() {
 	//alert("it's done");





