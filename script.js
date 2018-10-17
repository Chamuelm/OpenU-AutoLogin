chrome.storage.local.get(['openu_username_storage'], function(result) {
	if (result.openu_username_storage != "")
  	document.getElementById("p_user").value = result.openu_username_storage;
  chrome.storage.local.get(['openu_password_storage'], function(result) {
  	if (result.openu_password_storage != "")
  		document.getElementById("p_sisma").value = result.openu_password_storage;
  	chrome.storage.local.get(['openu_id_storage'], function(result) {
  		if (result.openu_id_storage != "")
  			document.getElementById("p_mis_student").value = result.openu_id_storage;
		});
	});

  login();
});

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