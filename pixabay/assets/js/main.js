$(document).ready(function() {

	// dropdow
	document.querySelectorAll('.dropdown-toggle').forEach((item, index) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			var dropdow_menu = document.querySelector(`[aria-label=${item.id}]`)
			console.log(dropdow_menu)
			if (dropdow_menu) {
				dropdow_menu.style.display = 'block'
			}
		})
	})









})