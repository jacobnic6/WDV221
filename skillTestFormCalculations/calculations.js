// JavaScript Document

function validateInput(){
	let numToValidate = document.querySelector("#textfield2").value;
	if (isNaN(numToValidate) || numToValidate < 1){
		alert("Invalid Input");
	}
}

function salePrice(){
	/*let productPrice = document.querySelector("#products").value;
	let numOfProduct = document.querySelector("#textfield2").value;
	let totalPrice = productPrice * numOfProduct;
	document.querySelector("#salePrice").innerHTML = totalPrice;
	document.querySelector("#salePrice").innerHTML.value = totalPrice;*/

}

function totalSalePrice(){
	/*let subtotal = document.querySelector("#salePrice").innerHTML;
	let formattedSubtotal = parseInt(subtotal);
	let prevtotalSales = document.querySelector("#totalSales").innerHTML;
	let formattedPrevSales = parseInt(prevtotalSales);
	let updatedSales = formattedSubtotal + formattedPrevSales;
	document.querySelector("#totalSales").innerHTML = updatedSales;
	alert(updatedSales);*/
		
}

