
 function sayOuch() {
 	alert('Warning: Foxes are wild animals, and you should not try to pet them!');
 }
 
 var foxImage = document.querySelector('img');
 
 foxImage.onclick = sayOuch;