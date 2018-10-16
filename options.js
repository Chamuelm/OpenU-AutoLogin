document.addEventListener('DOMContentLoaded', function() {
  var submitBtn = document.getElementById('submitButton');
  // onClick's logic below:
  submitBtn.addEventListener('click', saveChanges);
});

function saveChanges() {
        let openu_id_temp = document.getElementById('openu_id');
        // Check that there's some code there.
        if (!openu_id_temp) {
          alert('Error: Missing value');
          return;
        }

        chrome.storage.sync.set({openu_id_storage: openu_id_temp.value}, function() {
          alert('Settings saved');
        });
      }