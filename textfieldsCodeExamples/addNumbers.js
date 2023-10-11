// JavaScript Document

/*
	WDV221 Intro Javascript
	Project-3 Operators and Textfields

	This is an external Javascript file.  It contains two functions that are available to any page that uses this source file.

*/

function addTwoNumbers(inNumber1, inNumber2)
{
	return parseFloat(inNumber1) + parseFloat(inNumber2);	
	//Convert two numbers into numeric data types, add them together and send them back to where they were called
	//The return command will send the results of the operation back to where ever the function was called from.  Returns the value...	
}



function addNumbers()
{
	//alert("inside addNumbers()");		//Used for testing to ensure that the function is running
	
	var inNum1 = document.getElementById("num1").value;		//GET content entered by the user into the first textfield.  NOTE This is a String
	
	var inNum2 = document.getElementById("num2").value;		//GET content entered by the user into the second textfield
	
	var outTotal = parseFloat(inNum1) + parseFloat(inNum2);	//Attempt to onvert input values from String into a number
	
	document.getElementById("displayTotal").value = outTotal;	//PUT the new value on the form so the user can see the result
}


function addNumbersNoConvert()
{
	//alert("inside addNumbersNoConvert()");		//Used for testing to ensure that the function is running
	
	var inNum1 = document.getElementById("num1").value;		//GET content entered by the user into the first textfield.  NOTE This is a String
	
	var inNum2 = document.getElementById("num2").value;		//GET content entered by the user into the second textfield
	
	var outTotal = inNum1 + inNum2;
	
	document.getElementById("displayTotal").value = outTotal;	//PUT the new value on the form so the user can see the result
}


function getNumbers()	//This function will use the values entered on the formfields and place the results in the Total fields
{
	var inNum1 = document.getElementById("num1").value;		//GET content entered by the user into the first textfield.  NOTE This is a String
	
	var inNum2 = document.getElementById("num2").value;		//GET content entered by the user into the second textfield	
	
	document.getElementById("displayTotal").value = addTwoNumbers(inNum1, inNum2);	//call a function to process the inputs and return a result
	//Then the line will take the result returned by the function and place it on the page for the user to see.	
}


function multiplyNumbers()
{
	//alert("inside addNumbers()");		//Used for testing to ensure that the function is running
	
	var inNum1 = document.getElementById("num1").value;		//GET content entered by the user into the first textfield.  NOTE This is a String
	
	var inNum2 = document.getElementById("num2").value;		//GET content entered by the user into the second textfield
	
	var outTotal = inNum1 * inNum2;	//Attempt to onvert input values from String into a number
	
	document.getElementById("displayTotal").value = outTotal;	//PUT the new value on the form so the user can see the result
}
