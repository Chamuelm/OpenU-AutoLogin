document.addEventListener('DOMContentLoaded', function() {
  var submitBtn = document.getElementById('submitButton');
  // onClick's logic below:
  submitBtn.addEventListener('click', saveChanges);
});

function saveChanges() {
  chrome.storage.local.set({
    openu_username_storage: document.getElementById('openu_username').value,
    openu_password_storage: document.getElementById('openu_password').value,
    openu_id_storage: document.getElementById('openu_id').value
  }, function() {
    alert('Settings saved');
  });
}