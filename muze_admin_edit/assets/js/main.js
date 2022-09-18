
// ========== Form ==========
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
// var forms = document.querySelectorAll('.form--edit')
// forms.forEach(function(form) {
// 	var submit = form.querySelector('[type=submit]')
// 	submit.addEventListener('click', function() {
//         form.classList.add('was-validated')
// 	})
// })

// form label image
document.querySelectorAll('.form-group-image').forEach(function(item, index) {
	var input = item.querySelector('input[type=file]')
	var img = item.querySelector('img')
	if (input && img) {
		input.addEventListener('change', function(e) {
			var src = window.URL.createObjectURL(this.files[0])
			img.src = src
		})
	}
})

// birthday select
var date_birthday = {
    opens: 'left',
    autoUpdateInput: false,
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1950,
    maxYear: parseInt(moment().format('YYYY')),
    // startDate: moment().startOf('month').format('DD/MM/YYYY'),
    // endDate: moment().endOf('month').format('DD/MM/YYYY'),
    locale: {
        format: 'DD-MM-YYYY'
    }
}
$('.date_birthday').daterangepicker(date_birthday, function(start, end, label) {
    // var range_value = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD')
    // $('.date_birthday').val(start.format('DD-MM-YYYY'))
})
$('.date_birthday').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD-MM-YYYY'));
});
// $('.date_birthday').val('')

// date one select
var date_start = {
    opens: 'left',
    showDropdowns: true,
    autoUpdateInput: false,
    singleDatePicker: true,
    minYear: 2020,
    maxYear: parseInt(moment().format('YYYY')),
    // startDate: moment().startOf('month').format('DD/MM/YYYY'),
    // endDate: moment().endOf('month').format('DD/MM/YYYY'),
    locale: {
        format: 'YYYY-MM-DD'
    }
}
$('.date_start').daterangepicker(date_start, function(start, end, label) {
    // var range_value = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD')
    // $('.date_start').val(start.format('DD-MM-YYYY'))
})
$('.date_start').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('YYYY-MM-DD'));
});

// range date
var obj_range = {
    opens: 'left',
    autoUpdateInput: false,
    // singleDatePicker: true,
    // startDate: moment().startOf('month').format('DD/MM/YYYY'),
    // endDate: moment().endOf('month').format('DD/MM/YYYY'),
    locale: {
        format: 'YYYY-MM-DD'
    },
    ranges: {
       'Today': [moment(), moment()],
       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
       'This Month': [moment().startOf('month'), moment().endOf('month')],
       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
}
// $('body [name=range]').val("2022-01-01 - 2022-06-01")
$('body [name=range]').daterangepicker(obj_range, function(start, end, label) {
    // var range_value = start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD')
    // $('body [name=range]').val(range_value)
})
// change date
$('body [name=range]').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
});


// select2
$('.form--edit select').select2({
    // theme: "bootstrap"
})
$('.form--select select').select2({
    // theme: "bootstrap"
})












