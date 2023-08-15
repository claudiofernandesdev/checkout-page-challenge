(() => {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation');

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			'submit',
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add('was-validated');
			},
			false
		);
	});
})()

	// Modal

  function openModal() {
    const fields = document.querySelectorAll('.needs-validation');
    const btnModal = document.querySelector('.btn-custom');
    const modal = document.querySelector('dialog');
    const buttonClose = document.querySelector('.close-modal');
  
    fields.forEach(field => {
      field.addEventListener('click', (e) => {
        if(field.checkValidity()) {
          e.preventDefault();
            
      btnModal.onclick = function () {
        modal.showModal();
      };
  
      buttonClose.onclick = function () {
        modal.close();
      };
        }
      })
    })
  }



