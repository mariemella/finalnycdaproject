function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


var enter = document.querySelector("#enter")

enter.onclick = function(){
	var email = document.querySelector("#email").value

	if(email == ""){
		result.innerHTML = "Oops, try again!"
		return false;
	}else{
		result.innerHTML = "Thanks for subscribing!"
	
	}

}


var box1 = document.querySelector("#box1")

box1.onmouseover = function(){
	box1.innerHTML = "<img src='thenedphotoshop.jpg'>"
	
}
box1.onmouseleave = function() {
	box1.innerHTML = "<img src='thenedsecond.jpg'>"
}










