chrome.storage.sync.get(['openu_id_storage'], function(result) {
  document.getElementById("p_mis_student").value = result.openu_id;
});
document.getElementById("login_sso").submit();