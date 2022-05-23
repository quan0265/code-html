$(document).ready(function(){

	$('#nav').click(function(){
		if($('.sidebar').hasClass('d-none')){
			$('.sidebar').removeClass('d-none');
			$('.nav-hide-order').removeClass('d-none');
			$('.nav-show-order').addClass('d-none');
		}
		else{
			$('.sidebar').addClass('d-none');
			$('.nav-show-order').removeClass('d-none');
			$('.nav-hide-order').addClass('d-none');
		}

		// if($('.sidebar').hasClass('hidden-height')){
		// 	$('.sidebar').removeClass('hidden-height');
		// 	// $('.sidebar').addClass('show-height');
		// }
		// else{
		// 	// $('.sidebar').removeClass('show-height');
		// 	$('.sidebar').addClass('hidden-height');
		// }
	})











});

// Look ma, [very little] Javascript!
// document.querySelector('#nav').addEventListener('click', function() {
//   document.querySelector('.sidebar').classList.toggle('hidden-height');
// });