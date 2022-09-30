console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function greetHumans() {
document.getElementById("p1").style.visibility="visible"
}
document.getElementById("cat").addEventListener("mouseover", greetHumans);

function stopGreetingHumans() {
	document.getElementById("p1").style.visibility="hidden"
	}
	document.getElementById("cat").addEventListener("mouseout", stopGreetingHumans);