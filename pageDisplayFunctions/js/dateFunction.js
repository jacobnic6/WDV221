// JavaScript Document
function displayTodayDate(){
	const d = new Date();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	let formattedDate = day + " " + month + " " + date + ", " + year;
	
	document.querySelector("#dateSpan").innerHTML = formattedDate;
	document.querySelector("#yearSpan").innerHTML = year;
	
}