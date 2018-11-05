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