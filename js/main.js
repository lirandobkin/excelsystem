// Constant values for username and password
const user = 'liran';
const pass = 'admin';

// Constant values for html elements including modal open button, close button, and overlay element
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// function that is called on click of login button
function login() {
    // Selecting the input element and get its value 
    var inputValUser = document.getElementById("username-field").value;
    var inputValPass = document.getElementById("password-field").value;

    // Checks if the credentials are valid
    if (user === inputValUser) {
        if (pass === inputValPass) {
            // If so, clear the fields and move onto the next page
            document.getElementById("username-field").value = null;
            document.getElementById("password-field").value = null;
            window.location = 'system.html';
            return;
        }
    }
    // else do the following
    else {
        // open modal the moment the button is clicked with incorrect credentials
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
              const modal = document.querySelector(button.dataset.modalTarget);
              openModal(modal);
            });
        });
        
        // allow the modal to close by simply clicking off of it
        overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            closeModal(modal)
            });
        });
          
        // close the modal if the close modal button is clicked
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal)
            });
        });
          
        // function to open modal that we call earlier
        function openModal(modal) {
            if (modal == null) return
            modal.classList.add('active')
            overlay.classList.add('active')
        }
          
        // function to close modal that we call earlier 
        function closeModal(modal) {
            if (modal == null) return
            modal.classList.remove('active')
            overlay.classList.remove('active')
        }
        // clear area for credentials so the user can try again
        document.getElementById("username-field").value = null;
        document.getElementById("password-field").value = null;
    }
}