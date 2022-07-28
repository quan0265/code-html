const $ = document.querySelector.bind(document);
const S = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// element.classList.contains(className);
 

function tabClick(tabBtn, tabContent) {
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
        item.onclick = function() {
            // console.log(this);
            // item.classList.remove('active');
            $$(tabBtn).forEach(item1 => item1.classList.remove('active'));
            $$(tabContent).forEach(item1 => item1.classList.remove('active'));

            this.classList.add('active');
            $$(tabContent)[index].classList.add('active');
            // console.log(index);
        }
    });
}

function tabClickPhone(tabBtn, tabContent) {
    $$(tabBtn).forEach((item, index) => {
        item.onclick = function() {
            this.classList.toggle('active');
            $$(tabContent)[index].classList.toggle('active');
        }
    });
}

tabClick('.tablet-tab-btn-item', '.tablet-tab-item');
tabClickPhone('.phone-tab-item', '.phone-tab-item-content');

function showFormWrite() {
    S('.review-write-btn').onclick = function() {
        S('.detail-form-write-wrapper').style.display = 'block';
        this.style.display = 'none';
    }

    S('.form-write-title-close').onclick = function() {
        S('.detail-form-write-wrapper').style.display = 'none';
        S('.review-write-btn').style.display = 'flex';
    }
}

showFormWrite();



function show_time_rest() {
    var now = new Date();
    var rest = 23 - now.getHours() + ':' + (59 - now.getMinutes()) + ':' + (60 - now.getSeconds());
    document.querySelector('.detail-time-digit').innerHTML = rest;
    // show_time_rest_for();
}
// show_time_rest();
// show_time_rest_for();
setInterval(show_time_rest, 1000);

function changeCartQuanlity() {
    var textCartQuanlity = parseInt($('.textCartQuanlity').value);
    $$('.btnCartUp').forEach((item, index) => {
        item.onclick = function() {
            // console.log($('.textCartQuanlity').value);
            textCartQuanlity++;
            $$('.textCartQuanlity').forEach((item1, index1) => {
                // console.log(parseInt($('.textCartQuanlity').value) + 1);
                item1.value = textCartQuanlity;
            })
        }
    });
    $$('.btnCartDown').forEach((item, index) => {
        item.onclick = function() {
            // console.log($('.textCartQuanlity').value);
            if (textCartQuanlity > 1) {
                textCartQuanlity--;
                $$('.textCartQuanlity').forEach((item1, index1) => {
                    // console.log(parseInt($('.textCartQuanlity').value) + 1);
                    item1.value = textCartQuanlity;
                })
            }
        }
    });
}
changeCartQuanlity();



    var slider_image_index = 0;
    var slider_thumb_screen_index = 0;
    var slider_image_dot_width= 20;
function imageOwl() {
    var slider_image_out_width = S('#s1 .product-image-out').offsetWidth;
    var slider_image_length = $$('#s1 .product-image-item').length;

    var slider_thumb_out_width = S('#s1 .product-thumb-out').offsetWidth;
    var slider_thumb_screen_length = Math.ceil(slider_image_length / 5);
    var slider_thumb_item_width= S('#s1 .product-thumb-item').offsetWidth;
    
    // console.log(slider_thumb_out_width);

    S('#s1 .detail-next').onclick = function() {
        // alert(22);
        // console.log(slider_image_index);
        if (slider_image_index < slider_image_length - 1) {
            slider_image_index++;
            S('#s1 .product-image-list').style.transform = 'translate(-' + slider_image_index * slider_image_out_width + 'px , 0px)';
            $$('#s1 .product-thumb-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-thumb-item')[slider_image_index].classList.add('i-active');
            $$('#s1 .product-image-dot-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-image-dot-item')[slider_image_index].classList.add('i-active');
            if(slider_image_length > 9){
                let slider_image_dot_x;
                if(slider_image_index <= 4){
                    slider_image_dot_x= 0;
                }
                else if(slider_image_index > 4 && slider_image_index < (slider_image_length - 1 -4) ){
                    slider_image_dot_x= (slider_image_index - 4)*(slider_image_dot_width);
                }
                else if(slider_image_index > (slider_image_length - 5)){
                    slider_image_dot_x= (slider_image_length - 9)*(slider_image_dot_width);
                }
                S('#s1 .product-image-dot-list').style.transform= 'translate(-' + slider_image_dot_x + 'px , 0px)';
            }
        }
    }

    S('#s1 .detail-prev').onclick = function() {
        // alert(22);
        console.log(slider_image_index);
        if (slider_image_index > 0) {
            slider_image_index--;
            S('#s1 .product-image-list').style.transform = 'translate(-' + slider_image_index * slider_image_out_width + 'px , 0px)';
            $$('#s1 .product-thumb-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-thumb-item')[slider_image_index].classList.add('i-active');

            $$('#s1 .product-image-dot-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-image-dot-item')[slider_image_index].classList.add('i-active');
            if(slider_image_length > 9){
                let slider_image_dot_x;
                if(slider_image_index <= 4){
                    slider_image_dot_x= 0;
                }
                else if(slider_image_index > 4 && slider_image_index < (slider_image_length - 1 -4) ){
                    slider_image_dot_x= (slider_image_index - 4)*(slider_image_dot_width);
                }
                else if(slider_image_index > (slider_image_length - 5)){
                    slider_image_dot_x= (slider_image_length - 9)*(slider_image_dot_width);
                }
                S('#s1 .product-image-dot-list').style.transform= 'translate(-' + slider_image_dot_x + 'px , 0px)';
            }
        }
    }


    S('#s1 .thumb-next').onclick = function() {
        if (slider_thumb_screen_index < slider_thumb_screen_length - 1 -1) {
            slider_thumb_screen_index++;
            S('.product-thumb-list').style.transform = 'translate(-' + slider_thumb_screen_index * slider_thumb_out_width + 'px , 0px)';
        }
        else if(slider_thumb_screen_index < slider_thumb_screen_length - 1){
            slider_thumb_screen_index++;
            if(slider_image_length >5){
                let slider_thumb_x_last= slider_thumb_item_width*(slider_image_length - 5);
                S('.product-thumb-list').style.transform = 'translate(-' + slider_thumb_x_last + 'px , 0px)';
            }
        }
    }

    S('#s1 .thumb-prev').onclick = function() {
        // alert(22);
        if (slider_thumb_screen_index > 0) {
            slider_thumb_screen_index--;
            S('#s1 .product-thumb-list').style.transform = 'translate(-' + slider_thumb_screen_index * slider_thumb_out_width + 'px , 0px)';
        }
    }

    document.querySelectorAll('#s1 .product-thumb-item').forEach((item, index) => {
        item.onclick = function() {
            slider_image_index = index;
            S('#s1 .product-image-list').style.transform = 'translate(-' + slider_image_index * slider_image_out_width + 'px , 0px)';
            $$('#s1 .product-thumb-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-thumb-item')[slider_image_index].classList.add('i-active');
            $$('#s1 .product-image-dot-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-image-dot-item')[slider_image_index].classList.add('i-active');
            if(slider_image_length > 9){
                let slider_image_dot_x;
                if(slider_image_index <= 4){
                    slider_image_dot_x= 0;
                }
                else if(slider_image_index > 4 && slider_image_index < (slider_image_length - 1 -4) ){
                    slider_image_dot_x= (slider_image_index - 4)*(slider_image_dot_width);
                }
                else if(slider_image_index > (slider_image_length - 5)){
                    slider_image_dot_x= (slider_image_length - 9)*(slider_image_dot_width);
                }
                S('#s1 .product-image-dot-list').style.transform= 'translate(-' + slider_image_dot_x + 'px , 0px)';
            }
        }
    })

    $$('#s1 .product-image-dot-item').forEach((item, index) => {
        item.onclick = function() {
            slider_image_index = index;
            S('#s1 .product-image-list').style.transform = 'translate(-' + slider_image_index * slider_image_out_width + 'px , 0px)';
            $$('#s1 .product-thumb-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-thumb-item')[slider_image_index].classList.add('i-active');
            $$('#s1 .product-image-dot-item').forEach(item => item.classList.remove('i-active'));
            $$('#s1 .product-image-dot-item')[slider_image_index].classList.add('i-active');
            // console.log(slider_image_index);
            if(slider_image_length > 9){
                let slider_image_dot_x;
                if(slider_image_index <= 4){
                    slider_image_dot_x= 0;
                }
                else if(slider_image_index > 4 && slider_image_index < (slider_image_length - 1 -4) ){
                    slider_image_dot_x= (slider_image_index - 4)*(slider_image_dot_width);
                }
                else if(slider_image_index > (slider_image_length - 5)){
                    slider_image_dot_x= (slider_image_length - 9)*(slider_image_dot_width);
                }
                S('#s1 .product-image-dot-list').style.transform= 'translate(-' + slider_image_dot_x + 'px , 0px)';
            }
        }
    })



}

imageOwl();

function filterReview(){
	$('#checkbox_box_item').onchange= function(){
		// alert(22);
		// console.log($('.detail-review-box-item').getAttribute('data-image'));
		if($('#checkbox_box_item').checked == true){
			// console.log($('.detail-review-box-item').getAttribute('data-image'));
			$$('.detail-review-box-item').forEach((item, index) => {
				// console.log(item.getAttribute('data-image'));
				if(item.hasAttribute('data-image') == false){
					item.style.display= 'none';
				}
			})
		}
		else{
			$$('.detail-review-box-item').forEach((item, index) => {
				// console.log(item.getAttribute('data-image'));
				item.style.display= 'block';
			})
		}
	}
}

// filterReview();

function tabFilter(){
	$$('.review-type-btn').forEach((item, index) => {
		item.onclick= function(){
			$$('.review-type-btn').forEach(item1 => item1.classList.remove('i-active'));
			this.classList.add('i-active');

			if(this.getAttribute('data-type') == 'product'){
				$$('.detail-review-box-item').forEach(item1 => {
					if(item1.hasAttribute('data-type') == false || item1.getAttribute('data-type' != 'product')){
						item1.style.display= 'none';
					}
					else{
						item1.style.display= 'block';
					}
				})
			}
			else{
				$$('.detail-review-box-item').forEach(item1 => item1.style.display= 'block');
			}
		}
	})
}
tabFilter();

//fill: #dadada; #EAB470;
function hoverFormeReviewStar(){
	$$('.reviewStarList>span').forEach((item, index) => {
		item.onmouseover= function(){
			$('.reviewStarList').setAttribute('data-rating', index + 1);
			$$('.reviewStarList>span svg').forEach((item1, index1) => {
				if(index1 > index){
					item1.style.fill= '#dadada';
				}
				else{
					item1.style.fill= '#EAB470';
				}
			})
            // Awful#e85244 Bad Normal#d47e44 Good#428cf0 Wonderful#20a848
            //change review star text
            switch (index) {
                case 0:
                    S('.reviewStarText').textContent= 'Awful';
                    S('.reviewStarText').style.color= '#e85244';
                    S('.form-write-star-note').style.display= 'block';
                    break;
                case 1:
                    S('.reviewStarText').textContent= 'Bad';
                    S('.reviewStarText').style.color= '#e85244';
                    S('.form-write-star-note').style.display= 'block';
                    break;
                case 2:
                    S('.reviewStarText').textContent= 'Normal';
                    S('.reviewStarText').style.color= '#d47e44';
                    S('.form-write-star-note').style.display= 'block';
                    break;
                case 3:
                    S('.reviewStarText').textContent= 'Good';
                    S('.reviewStarText').style.color= '#428cf0';
                    S('.form-write-star-note').style.display= 'none';
                    break;
                case 4:
                    S('.reviewStarText').textContent= 'Wonderful';
                    S('.reviewStarText').style.color= '#20a848';
                    S('.form-write-star-note').style.display= 'none';
                    break;
                default:
                    S('.reviewStarText').textContent= 'Wonderful';
                    S('.reviewStarText').style.color= '#20a848';
                    break;
            }
		}
	})
}
hoverFormeReviewStar();

function changeFormWriteInput(){
    S('.formWriteItem input').oninput= function(){
        // console.log(this.value.length);
        // console.log(this.parentElement.querySelector('div span'));
        this.parentElement.querySelector('div span').textContent= this.value.length;
    }
}
changeFormWriteInput();

function changeFormWriteTextarea(){
    S('.formWriteItem textarea').oninput= function(){
        // console.log(this.value.length);
        // console.log(this.parentElement.querySelector('div span'));
        this.parentElement.querySelector('div span').textContent= this.value.length;
    }
}
changeFormWriteTextarea();

function formWriteTeaxtareAddTag(){
    $$('#ss-detail .form-write-tag-item').forEach((item, index) => {
        item.onclick= function(){
            S('.formWriteItem textarea').value= S('.formWriteItem textarea').value + this.textContent; + ', ';
        }
    })
}
formWriteTeaxtareAddTag();

function formWriteImageAdd(){
    var imageAddFile= [];
    // $$('.form-write-image-item span').forEach((item, index) => {
    //     item.onclick= function(){
    //         S('#ss-detail .form-write-image-add input').files[index].remove;
    //         imageAddFile= S('#ss-detail .form-write-image-add input').files;
    //         $$('.form-write-image-item')[index].style.display= 'none';
    //         $$('.form-write-image-item img').src= '';
    //     }
    // })
    S('#ss-detail .form-write-image-add input').onchange= function(){
        // if(this.files){
            if(this.files.length == 0){
                this.files= imageAddFile;
            }
            // if(imageAddFile.length!=0){
            //     this.files= imageAddFile.concat(this.files);                
            // }
            // console.log(this.files);
            // if(this.files.length >= 5){
            //     for(let j=5; j<this.files.length; j++){
            //         this.files[j].remove;
            //     }
            // }
            $$('.form-write-image-item').forEach(item => {
                item.style.display= 'none';
                item.querySelector('img').setAttribute('src', '');
            });  
            for(let i= 0; i<this.files.length; i++){

                $$('.form-write-image-item')[i].style.display= 'flex';
                let reader = new FileReader();
                reader.readAsDataURL(this.files[i]);
                reader.onload= function(e){
                    $$('#ss-detail .form-write-image-item img')[i].setAttribute('src', e.target.result);
                }  
            }
            if(this.files.length >= 5){
                // S('.form-write-image-add').style.display= 'none';
            }
            else{
                // S('.form-write-image-add').style.display= 'block';
            }
            imageAddFile= this.files;
        // }
    }
}
formWriteImageAdd()


function productOwl(){
	if(window.innerWidth>1200){
		var p_count_one_screen= 6;
	}
	else{
		var p_count_one_screen= 4;
	}

	var p_item_count= $$('#p1 .product-owl-item').length;
	if(p_item_count >= p_count_one_screen){
		var p_screen_width= S('#p1 .product-owl-list').offsetWidth;
		var p_item_width= S('#p1 .product-owl-item').offsetWidth;
		var p_index= 0;
		var p_index_max= p_item_count - p_count_one_screen;
		console.log(p_item_count);
		$('.product-owl-next').onclick= function(){
			if(p_index < p_index_max){
				p_index++;
				$('.product-owl-list').style.transform= 'translate('+ (-p_index*p_item_width) +'px, 0)';
				if(p_index >= p_index_max){
					$('.product-owl-next').style.display= 'none';
				}
				if(p_index > 0){
					$('.product-owl-prev').style.display= 'block';
				}
			}
		}

		$('.product-owl-prev').onclick= function(){
			if(p_index > 0){
				p_index--;
				$('.product-owl-list').style.transform= 'translate('+ (-p_index*p_item_width) +'px, 10px)';
				if(p_index == 0){
					$('.product-owl-prev').style.display= 'none';
				}
				if(p_index < p_index_max){
					$('.product-owl-next').style.display= 'block';
				}
			}
		}
	}
	
}
// productOwl();

function productOwl(ids){
    var p_count_one_screen= [];
    var p_item_count= [];
    var p_screen_width= [];
    var p_item_width= [];
    var p_index= [];
    var p_index_max= [];

    ids.forEach((id, id_index)=> {

        if(window.innerWidth>1200){
            p_count_one_screen[id_index]= 6;
        }
        else{
            p_count_one_screen[id_index]= 4;
        }

        p_item_count[id_index]= $$(id + '.product-owl-item').length;
        if(p_item_count[id_index] >= p_count_one_screen[id_index]){
            p_screen_width[id_index]= S(id + '.product-owl-list').offsetWidth;
            p_item_width[id_index]= S(id + '.product-owl-item').offsetWidth;
            p_index[id_index]= 0;
            p_index_max[id_index]= p_item_count[id_index] - p_count_one_screen[id_index];
            // console.log(p_item_count);
            S(id + '.product-owl-next').onclick= function(){
                if(p_index[id_index] < p_index_max[id_index]){
                    p_index[id_index]++;
                    S(id + '.product-owl-list').style.transform= 'translate('+ (-p_index[id_index]*p_item_width[id_index]) +'px, 0)';
                    if(p_index[id_index] >= p_index_max[id_index]){
                        S(id + '.product-owl-next').style.display= 'none';
                    }
                    if(p_index[id_index] > 0){
                        S(id + '.product-owl-prev').style.display= 'block';
                    }
                }
            }

            S(id + '.product-owl-prev').onclick= function(){
                if(p_index[id_index] > 0){
                    p_index[id_index]--;
                    S(id + '.product-owl-list').style.transform= 'translate('+ (-p_index[id_index]*p_item_width[id_index]) +'px, 10px)';
                    if(p_index[id_index] == 0){
                        S(id + '.product-owl-prev').style.display= 'none';
                    }
                    if(p_index[id_index] < p_index_max[id_index]){
                        S(id + '.product-owl-next').style.display= 'block';
                    }
                }
            }
        }
    });
    
}
productOwl(['#p1 ', '#p2 ', '#p3 ']);

function changeSize(){
    $$('.detail-bar-box-size .varSize').forEach((item, index) => {
        item.onclick= function(){
            $$('.detail-bar-box-size .varSize').forEach(item1 => item1.classList.remove('i-active'));
            this.classList.add('i-active');
            S('.varSizeText').textContent= this.textContent;
        }
    })

    $$('.sb-var-menu .varSize').forEach((item, index) => {
        item.onclick= function(){
            $$('.detail-bar-box-size .varSize').forEach(item1 => item1.classList.remove('i-active'));
            S('.varSizeText').textContent= this.textContent;
            $$('.detail-bar-box-size .varSize')[index].classList.add('i-active');
        }
    })
}   
changeSize();












window.onscroll = function() {
    // console.log(S('.add_to_cart').scrollTop);
    // console.log(S('.add_to_cart_show').offsetTop);
    if(window.scrollY > S('.detail-top').offsetHeight){
    	$('.sticky-bar-wrapper').style.display= 'block';
    }
    else{
    	$('.sticky-bar-wrapper').style.display= 'none';	
    }
    imageOwl();
    productOwl(['#p1 ', '#p2 ', '#p3 ']);
}


// onresize