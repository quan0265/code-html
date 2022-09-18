//  bs validate
var forms = document.querySelectorAll('form.needs-validation')
    forms.forEach(function(form) {
        form.addEventListener('submit', function() {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        })
    })














