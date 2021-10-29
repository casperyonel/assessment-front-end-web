function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



let image = document.querySelector('img')

function pageHover() {
	alert("You're so damn fly.")
}

image.addEventListener('mouseover', pageHover)