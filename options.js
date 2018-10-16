

function saveChanges() {
        let openu_id = document.getElementById('openu_id');
        // Check that there's some code there.
        if (!openu_id) {
          message('Error: Missing value');
          return;
        }

        chrome.storage.sync.set({'openu_id': openu_id.value}, function() {
          message('Settings saved');
        });
      }