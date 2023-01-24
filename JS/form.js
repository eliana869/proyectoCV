// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            alert('Tus datos fueron enviados correctamente. ¡Muchas gracias!')
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


  
  let hideFormBtn = document.getElementById('hideFormBtn');
  let hideForm = document.getElementById('hideForm');

  hideFormBtn.addEventListener('click', toggleForm);

  function toggleForm() {
       hideForm.classList.toggle('show');

       if(hideForm.classList.contains('show')){
        hideFormBtn.innerHTML = 'Ver Menos';
       }else{
        hideFormBtn.innerHTML = 'Ver Formulario';
       }
  }