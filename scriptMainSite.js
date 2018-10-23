waitForDOM(); 
var menuClicked = false;

function waitForDOM() {
	console.log("in waitForDOM");
	if (document.getElementById("buttonLink_myOP_m_MyOP") && 
		document.getElementById("buttonContent_myOP_m_MyOP").innerHTML === "כניסה") {
		console.log("button active");
		if (!menuClicked) {
			console.log("clicking button");
			document.getElementById("buttonLink_myOP_m_MyOP").click();
			menuClicked = true;
			setTimeout(waitForDOM,500);
		} else {
			console.log("enter trylogin");
			tryLogin();
		}
	} else {
		setTimeout(waitForDOM, 500);
	}
}

function tryLogin() {
	console.log(document.getElementById("buttonContent_myOP_m_MyOP").innerHTML);
	if (document.getElementById("buttonContent_myOP_m_MyOP").innerHTML === "כניסה") {
		chrome.storage.local.get(['openu_username_storage'], function(result) {
			if (result.openu_username_storage != "")
		  		document.getElementById("p_user").value = result.openu_username_storage;
		  chrome.storage.local.get(['openu_password_storage'], function(result) {
		  	if (result.openu_password_storage != "")
		  		document.getElementById("p_sisma").value = result.openu_password_storage;
		  	chrome.storage.local.get(['openu_id_storage'], function(result) {
		  		if (result.openu_id_storage != "")
		  			document.getElementById("p_mis_student").value = result.openu_id_storage;

		  		console.log(document.getElementById("p_user").value);
		  		console.log(document.getElementById("p_sisma").value);
		  		console.log(document.getElementById("p_mis_student").value);
		  		login();
				});
			});
		});
	}	
}




function login() {
	if ( // Check for existing input
		document.getElementById("p_user").value != "" &&
		document.getElementById("p_sisma").value != "" &&
		document.getElementById("p_mis_student").value != "" 
		) {
		document.getElementById("login_sso").submit();
	}  else {
		setTimeout(login, 500);
	}
}