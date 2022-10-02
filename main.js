


function checkEmail(){
	document.getElementById('email_input').classList.remove('error_form');
	document.querySelector('#error_message').style.visibility = "hidden";
	
	const email = document.querySelector('#email_input').value;
	if ( email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
		alert('You will be notified');
		return;
	}
	document.getElementById('email_input').classList.add('error_form');
	document.getElementById('error_message').style.visibility = "visible";
}

