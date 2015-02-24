//Cheet sheet and functions//
//---hide--//

$(function(){
$(".amc,.hbo").hide() 

//---click and fade---//

$("#clickamc").on("click", function(){
$(".amc").fadeIn()
$("#clickhbo,#clickamc").fadeOut()
})

//---Click , fadeout and alert---//
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

//---click , slideup and timing---//

$("#yes2").on("click", function(){
$("#games,#no2,#yes2,.q2").slideUp(1000)
});

//---click and slideup---///
$("#no2").on("click", function(){
$("#vice,#valley,#girls,#toget,#yes2,#no2,.q2").slideUp()

});




} );

//---toggle---//

//$(".beers #corona").on("click", function() {
 //$("#schools").fadeToggle(1000, function() {
 	//alert("it's done");





