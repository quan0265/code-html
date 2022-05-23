	

jQuery(function($){
	$(document).ready(function(){

		$('#nav').click(function(){
			if($('.sidebar').hasClass('i-active')){
				$('.sidebar').removeClass('i-active');
				$('.nav-show-order').removeClass('d-none');
				$('.nav-hide-order').addClass('d-none');
				
			}
			else{
				$('.sidebar').addClass('i-active');
				$('.nav-hide-order').removeClass('d-none');
				$('.nav-show-order').addClass('d-none');
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

		function eventLabel(){
			//the has_label>input
			//style for has-label, has-label-span, input
			function checkLabel(elemnt){
				let text= elemnt.attr('placeholder');
				let span_label= '<span class="has-label-span">'+text+'</span>';

				if(elemnt.val()==''){
					elemnt.parent('.has_label').removeClass('has-label');
					elemnt.siblings('.has-label-span').remove();
				}
				else{
					elemnt.parent('.has_label').addClass('has-label');
					if(elemnt.parent('.has_label').find('.has-label-span').length <= 0){
						elemnt.parent('.has_label').prepend(span_label);
					}
				}
			}

			$('.has_label input').on('input', function(){
				checkLabel($(this));
			})

			// $('.has_label input').on('keyup', function(){
			// 	checkLabel($(this));
			// })

			// $('.has_label input').on('keydown', function(){
			// 	checkLabel($(this));
			// })

			// $('.has_label input').on('change', function(){
			// 	checkLabel($(this));
			// })

		}

		eventLabel();



		function showProductCheckout(){
			let carts;
			carts= localStorage.getItem('carts');
			carts= JSON.parse(carts);
			// console.log(carts);
			// $('.header_total_product').text(carts.length);
			// let total_amount= totalAmount(carts);
			//console.log(total_amount);
			// $('.header_total_amount').text(total_amount.toFixed(2));
			// $('.header_cart_subtotal').text(total_amount);

			$('.product_checkout_list').html('');
			let html='';
			for(let i=0; i<carts.length; i++){
				// html+= '<li class="header_cart_item mini_cart_item">';
	   			//html+=     '<a href="/product/'+carts[i].product_id+'" class="remove" >&times;</a>';
				//html+=        '<a href="/product/'+carts[i].product_id+'"><img width="60" height="60" src="'+carts[i].image+'&w=60&h=60" data-src="'+carts[i].image+'" class="lazy-load" alt="" loading="lazy" />On1 Jersey UNIF-2 </a>';
				//html+=      '<span class="quantity">'+carts[i].quantity+' &times; <span class="amount"><bdi><span class="">&#36;</span>'+carts[i].price+'</bdi></span></span>';
				//html+='</li>';
				let cart_amount= carts[i].quantity * carts[i].price;
				cart_amount= cart_amount.toFixed(2);
				let cart_option= '';

				if(carts[i].color){
					if(cart_option){
						cart_option+= ' / ' + carts[i].color;
					}
					else{
						cart_option+= carts[i].color;
					}
				}
				if(carts[i].size){
					if(cart_option){
						cart_option+= ' / ' + carts[i].size;
					}
					else{
						cart_option+= carts[i].size;
					}
				}
				let cart= carts[i];

				html+= '<tr>'
				html+= '    <td class="product-image">'
				html+= '        <div>'
				html+= '            <img width="65" height="65" src="'+cart.image+'&w=65&h=65" alt="">'
				html+= '            <span class="product-count">'+cart.quantity+'</span>'
				html+= '        </div>'
				html+= '    </td>'
				html+= '    <td class="product-info">'
				html+= '        <p class="product-info-name">'+cart.title+'</p>'
				html+= '        <p class="product-info-summary">'+cart_option+'</p>'
				html+= '    </td>'
				html+= '    <td class="product-price">'
				html+= '        <span>$'+cart_amount+'</span>'
				html+= '    </td>'
				html+= '</tr>'

			}
			$('.product_checkout_list').html(html);
		}
		// showProductCheckout();



		

		

	})
})
