$(document).ready(function(e) {
  console.log('jquery ready');
  //initialise a few global variables that we need
  var numOne;
  var numTwo;
  var operator;
  var $result=$("#display");

	//Clear vars
	function reset(){
		numOne=null;
		numTwo=null;
		operator=null;
		$result.val("0");
	}

	reset();



$(".numbers input").click(function(){

	var clickDigit = $(this).val();
	var currentVal = $result.val();
	var newVal;

	if (currentVal === "0"){
		newVal=clickDigit;
} else {
	  newVal = currentVal + clickDigit;
}
  $result.val(newVal); 
});




$(".operators input").click(function(){
	operator = $(this).val();
	numOne = parseFloat($result.val());
	$result.val("");
});


$('#total').click(function(){
	var total;

	numTwo = parseFloat($result.val());

	if (operator === "+"){
		total = numOne + numTwo;
} else 
  if (operator === "-"){
  	total = numOne - numTwo;
} else 
  if (operator === "*"){
  	total = numOne * numTwo;
} else 
  if (operator === "/"){
  	total = numOne / numTwo;
  }

  $result.val(total);
});  

// Clear button

$('#clear').click(function(){
	reset();
});

});