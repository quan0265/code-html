const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// element.classList.contains(className);


function tabClickTablet(tabBtn, tabContent){
	// $$('.tablet-tab-btn-item').forEach((item, index) => {
	// 	item.onclick= function(){
	// 		// console.log(this);
	// 		// item.classList.remove('active');
	// 		$$('.tablet-tab-btn-item').forEach(item1=> item1.classList.remove('active'));
	// 		$$('.tablet-tab-item').forEach(item1=> item1.classList.remove('active'));

	// 		this.classList.add('active');
	// 		$$('.tablet-tab-item')[index].classList.add('active');
	// 		// console.log(index);
	// 	}
	// });
	$$(tabBtn).forEach((item, index) => {
		item.onclick= function(){
			// console.log(this);
			// item.classList.remove('active');
			$$(tabBtn).forEach(item1=> item1.classList.remove('i-active'));
			$$(tabContent).forEach(item1=> item1.classList.remove('i-active'));

			this.classList.add('i-active');
			$$(tabContent)[index].classList.add('i-active');
			// console.log(index);
		}
	});
}

function tabClickPhone(tabBtn, tabContent){
	$$(tabBtn).forEach((item, index) => {
		item.onclick= function(){
			this.classList.toggle('block__is-inactive');
			$$(tabContent)[index].classList.toggle('block__is-inactive');
		}
	});
}



//rv-widget__btn rv-secondary
//rv-widget__form--container
//rv-widget__form-close
function clickWrite(){
	$('.rv-widget__btn.rv-secondary').onclick= function(){
		$('.rv-widget__form--container').classList.toggle('d-none');
		this.classList.toggle('d-none');
	};

	$('.rv-widget__form-close').onclick= function(){
		$('.rv-widget__form--container').classList.toggle('d-none');
		$('.rv-widget__btn.rv-secondary').classList.toggle('d-none');
	};
}

function addSuggest(){
	$$('.rv-widget__control-suggest').forEach((item, index) => {
		item.onclick= function(){
			$('textarea.rv-widget__input').textContent+= ' ' + this.textContent;
		}
	});
}

function tabReviewBox(){
	$$('.rv-widget__review-type span').forEach((item, index) => {
		item.onclick= function(){
			$$('.rv-widget__review-type span').forEach(item1=> item1.classList.remove('i-active'));
			this.classList.toggle('i-active');
			// this.classList
		}
	});
}


//show cart sticker cart when scroll
//section.product-page__container
window.onscroll= function(){
	if(window.scrollY > $('section.product-page__container').offsetHeight){
		$('#sticky-bar').style.display= 'block';
	}
	else{
		$('#sticky-bar').style.display= 'none';	
	}
}


tabClickTablet('.tablet-tab-btn-item', '.tablet-tab-content-item');
tabClickPhone('.phone-tab-item-btn', '.phone-tab-item-content');

clickWrite();
addSuggest();
tabReviewBox();

var slider_image_out_width= $('.slider-owl-image-out').offsetWidth;
var slider_image_index= 0;
var slider_image_length= $$('.slider-owl-image-item').length;

var slider_thumb_out_width= $('.slider-owl-image-out').offsetWidth;
var slider_thumb_screen_index= 0;
var slider_thumb_screen_length= Math.ceil(slider_image_length/5);


$('.slider-owl-image-next').onclick= function(){
	// alert(22);
	if(slider_image_index < slider_image_length-1){
		slider_image_index++;
		$('.slider-owl-image-list').style.transform= 'translate(-'+ slider_image_index*slider_image_out_width +'px , 0px)';
		$$('.slider-owl-thumb-item').forEach(item => item.classList.remove('i-active'));
		$$('.slider-owl-thumb-item')[slider_image_index].classList.add('i-active');
	}
}

$('.slider-owl-image-prev').onclick= function(){
	// alert(22);
	if(slider_image_index > 0){
		slider_image_index--;
		$('.slider-owl-image-list').style.transform= 'translate(-'+ slider_image_index*slider_image_out_width +'px , 0px)';
		$$('.slider-owl-thumb-item').forEach(item => item.classList.remove('i-active'));
		$$('.slider-owl-thumb-item')[slider_image_index].classList.add('i-active');
	}
}


$('.slider-owl-thumb-next').onclick= function(){
	if(slider_thumb_screen_index < slider_thumb_screen_length-1){
		slider_thumb_screen_index++;
		$('.slider-owl-thumb-list').style.transform= 'translate(-'+ slider_thumb_screen_index*slider_thumb_out_width +'px , 0px)';
	}
}

$('.slider-owl-thumb-prev').onclick= function(){
	// alert(22);
	if(slider_thumb_screen_index > 0){
		slider_thumb_screen_index--;
		$('.slider-owl-thumb-list').style.transform= 'translate(-'+ slider_thumb_screen_index*slider_thumb_out_width +'px , 0px)';
	}
}

$$('.slider-owl-thumb-item').forEach((item, index) => {
	item.onclick= function(){
		slider_image_index= index;
		$('.slider-owl-image-list').style.transform= 'translate(-'+ slider_image_index*slider_image_out_width +'px , 0px)';
		$$('.slider-owl-thumb-item').forEach(item => item.classList.remove('i-active'));
		$$('.slider-owl-thumb-item')[slider_image_index].classList.add('i-active');
	}
})


function show_time_rest(){
		var now= new Date();
		var rest= 23-now.getHours() + ':' + (59-now.getMinutes()) + ':' + (60-now.getSeconds());
		document.querySelector('.copt-countdown-timer__digit').innerHTML= rest;
		// show_time_rest_for();
	}
// show_time_rest();
// show_time_rest_for();
setInterval(show_time_rest, 1000);

























