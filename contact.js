var btn = document.querySelector("#btn")

btn.onclick = function(){
	var name = document.querySelector("#name").value
	var email = document.querySelector("#email").value
	var subject = document.querySelector("#subject").value
	var form = document.querySelector("#contact")

	
	if(name == ""){
		result.innerHTML = "Please try again. Make sure to add all required information."
		return false;
	}else{
		result.innerHTML = "Thanks for your message " + name + "<br>" + " We will be in touch soon! <br>" 
		contact.style.display = "none"
		
	}

	if(email == ""){
		result.innerHTML = "Please try again. Make sure to add all required information."
		return false;
	}else{
		result.innerHTML = "Thanks for your message " + name + "<br>" + " We will be in touch soon! <br>"
		conta.style.display = "none" 
	}

}



