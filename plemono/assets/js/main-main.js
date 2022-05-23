jQuery(function($){
	$(document).ready(function(){

		//header search
		$('.js-toggle-search-modal').magnificPopup({
			type: 'inline',
		    mainClass: 'mfp-fade',
		    closeOnBgClick: true,
		    closeBtnInside: false,
		    closeOnContentClick: false,
		    // tClose: theme.strings.zoomClose,
		    alignTop: true,
		    removalDelay: 500
		  });
		

		//header cart
		$('.js-drawer-open-button-left').on('click', function() {
	        if ($(this).attr('aria-expanded') == 'false') {
	            $('#NavDrawer').addClass('is-transitioning');
	            setTimeout(
	                function() {
	                    $('#NavDrawer').removeClass('is-transitioning');
	                }, 1000);
	            $('body').addClass('js-drawer-open js-drawer-open-left');
	            $('html').addClass('js-drawer-open js-drawer-open-left');
	            $('#NavDrawer').addClass('js-drawer-open');
	            $(this).attr('aria-expanded', 'true');
	        } else if ($(this).attr('aria-expanded') == 'true') {
	            $('#NavDrawer').addClass('is-transitioning');
	            $('body').removeClass('js-drawer-open js-drawer-open-left');
	            $('html').removeClass('js-drawer-open js-drawer-open-left');
	            $('#NavDrawer').removeClass('js-drawer-open');
	            setTimeout(
	                function() {
	                    $('#NavDrawer').removeClass('is-transitioning');
	                }, 1000);
	            $(this).attr('aria-expanded', 'false');
	        }
	    })
	    $('.mobile-nav__toggle-btn').on('click', function() {
	        if ($(this).attr('aria-expanded') == 'false') {
	            $('.mobile-nav__has-sublist').addClass('mobile-nav--expanded');
	            $('#Linklist-2').show();
	            $(this).attr('aria-expanded', 'true');
	        } else if ($(this).attr('aria-expanded') == 'true') {
	            $('.mobile-nav__has-sublist').removeClass('mobile-nav--expanded');
	            $('#Linklist-2').hide();
	            $(this).attr('aria-expanded', 'false');
	        }
	    })
	    $("#collectionsd").click(function() {
	        $('#MenuParent-2').show();
	    }, function() {
	        $('#MenuParent-2').hide();
	    });
	    $('.btn_header_cart').on('click', function(e) {
	        e.preventDefault();
	        // if ($(this).attr('aria-expanded') == 'false') {
	            $('html').addClass('js-drawer-open js-drawer-open-right');
	            $('#CartDrawer').addClass('js-drawer-open js-drawer-open-right');
	            $('body').addClass('js-drawer-open js-drawer-open-right');
	            //                    $('.main-content').addClass('drawer--right');
	            $('#CartDrawer').addClass('js-drawer-open is-transitioning');
	            //                    $('#CartDrawer').show();
	            $(this).attr('aria-expanded', 'true');
	        // } else if ($(this).attr('aria-expanded') == 'true') {
	        //     $('html').removeClass('js-drawer-open js-drawer-open-right');
	        //     $('#CartDrawer').removeClass('js-drawer-open js-drawer-open-right');
	        //     $('body').removeClass('js-drawer-open js-drawer-open-right');
	        //     //                    $('.main-content').removeClass('js-drawer-open js-drawer-open-right');
	        //     $('#CartDrawer').removeClass('js-drawer-open is-transitioning');
	        //     //                    $('#CartDrawer').hide();
	        //     $(this).attr('aria-expanded', 'false');
	        // }

	        $('.overlay1').addClass('i-active');

	        $('.overlay1').on('click', function(){

	        	$(this).removeClass('i-active');
		    	$('.btn_header_cart_close').trigger('click');
	        })

	    })

	    function checkVisible(elm, evalType) {
	        evalType = evalType || "visible";

	        var vpH = $(window).height(), // Viewport Height
	            st = $(window).scrollTop(), // Scroll Top
	            y = $(elm).offset().top,
	            elementHeight = $(elm).height();

	        if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
	        if (evalType === "above") return ((y < (vpH + st)));
	    }

	    $('.btn_header_cart_close').on('click', function() {
	        // if ($('.btn_header_cart').attr('aria-expanded') == 'true') {
	            $('html').removeClass('js-drawer-open js-drawer-open-right');
	            $('#CartDrawer').removeClass('js-drawer-open js-drawer-open-right');
	            $('body').removeClass('js-drawer-open js-drawer-open-right');
	            $('#CartDrawer').removeClass('js-drawer-open is-transitioning');
	            //                    $('.main-content').removeClass('js-drawer-open js-drawer-open-right');
	            //                    $('#CartDrawer').hide();
	            $('.btn_header_cart').attr('aria-expanded', 'false');


	            if (document.querySelector('#ss-detail')) {
	                if (!checkVisible($('.btn_add_cart'))) {

	                    $('.fixed_btn_add_cart').css('display', 'block');
	                }
	            }


	        // }
	    })
	    $('input[type=radio][name=style]').change(function() {
	        $('.var_price').html('$' + $(this).attr('data-price'));
	        $('.var_compare_price').html('$' + $(this).attr('data-compare_price'));
	    });

	    $('.ajaxcart__qty--plus').click(function() {
	        console.log('ssss');
	        $('.ajaxcart__qty-num').val(parseInt($('.ajaxcart__qty-num').val()) + 1);
	    })
	    $('.ajaxcart__qty--minus').click(function() {
	        var input = parseInt($('.ajaxcart__qty-num').val());
	        if (input > 1) {
	            $('.ajaxcart__qty-num').val(input - 1);
	        }
	    })

	    

	    







	})
})