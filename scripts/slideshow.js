var clicked = false;
var slideIndex = 0;

window.onload = function showSlides() {
	if(!clicked)
	{
		var i;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		
		for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
		}
		
		slideIndex++;
		
		if (slideIndex > slides.length) {slideIndex = 1}
		
		slides[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active";
		
		setTimeout(showSlides, 3000); // Change image every 2 seconds
	}
}

function currentSlide(n) {
	clicked=true;
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	
	if (n > slides.length) {slideIndex = 1}   
	
	if (n < 1) {slideIndex = slides.length}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}