


function checkEmail(){
	const emailInput = document.getElementById('email_input');
	const errorMsg = document.querySelector('#error_message');
	const email = document.querySelector('#email_input').value;
	
	///reset the error format that may be on
	emailInput.classList.remove('error_form');
	errorMsg.style.visibility = "hidden";
	emailInput.classList.remove('shake');
	
	///checks the email, if correct finishes here
	if ( email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
		alert('You will be notified');
		return;
	}
	
	
	///if it gets here is because the email submited is not valid
	///so it informs the email is invalid
	emailInput.classList.add('error_form');
	errorMsg.style.visibility = "visible";
	
	///without a little time out there is no time to remove 
	///and bring back the class in a way the shake animation works
	setTimeout(()=>{
		emailInput.classList.add('shake');
	}, 50);
	
	
}

