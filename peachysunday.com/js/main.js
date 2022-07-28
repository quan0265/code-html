$(document).ready(function() {

    //header
    $('.menu-btn-show').click(function() {
        $('.menu2').css('height', '0');
        $(this).parent().next().css('height', '100%');
        $(this).next().show();
        $(this).hide();
    });
    $('.menu-btn-hide').click(function() {
        $(this).parent().next().css('height', '0');
        $(this).hide();
        $(this).prev().show();
    });

    $('.menu-btn1').click(function() {
        if ($(this).next().next().css('height') == '0px') {
            $('.menu2').css('height', '0');
            $(this).next().next().css('height', '100%');
            $(this).next().find('.menu-btn-show').hide();
            $(this).next().find('.menu-btn-hide').show();
            $(this).next().next().addClass('active');
        } else {
            $(this).next().next().css('height', '0px');
            $(this).next().find('.menu-btn-show').show();
            $(this).next().find('.menu-btn-hide').hide();
            $(this).next().next().removeClass('active');
        }
    });

    $('.PageOverlay').click(function() {
        $(this).removeClass('active');
        $('header nav').css('margin-left', '-120%');
        $('body').css('overflow', 'auto');
        // $("#sorts-check").prop( "checked", false );
    });

    // document.querySelector('#sorts-check').onchange= function(){
    //     if(this.checked == true){
    //         $('.PageOverlay').addClass('active');
    //     }
    // }

    // $("body").delegate('.menu-btn1', 'click', function(){
    //     if ($(this).next().next().css('height') == '0px') {
    //         $('.menu2').css('height', '0');
    //         $(this).next().next().css('height', '100%');
    //         $(this).next().find('.menu-btn-show').hide();
    //         $(this).next().find('.menu-btn-hide').show();
    //         $(this).next().next().addClass('active');
    //     } else {
    //         $(this).next().next().css('height', '0px');
    //         $(this).next().find('.menu-btn-show').show();
    //         $(this).next().find('.menu-btn-hide').hide();
    //         $(this).next().next().removeClass('active');
    //     }
    // })

    $('.header-btn').click(function() {
        if ($('header nav').css('margin-left') == '0px') {
            $('header nav').css('margin-left', '-350px');
        } else {
            $('header nav').css('margin-left', '0px');
        }
        $('body').css('overflow', 'hidden');
        $('.PageOverlay').addClass('active');

    });
    $('.header-close').click(function() {
        $('header nav').css('margin-left', '-350px');
        $('.PageOverlay').removeClass('active');
        $('body').css('overflow', 'auto');
    })

    //search
    $('.search-btn').click(function() {
        $('.searchs').show();
        $('body').css('overflow', 'hidden');
        $('.PageOverlaySearch').addClass('active');
    });

    $('.search-close').click(function() {
        $('.searchs').hide();
        $('body').css('overflow', 'auto');
        $('.PageOverlaySearch').removeClass('active');
    });

    $('.PageOverlaySearch').click(function() {
        $(this).removeClass('active');
        // $('header nav').css('margin-left', '-120%');
        $('.searchs').hide();
        $('body').css('overflow', 'auto');
    });


    //slider
    // $('.slider-owl .slider-list>div').css('display', 'none');
    // $('.slider-owl .slider-list>div').eq(0).css('display', 'block');

    
    $('.slider-owl .dots>span').eq(0).addClass('active');

    $('.slider-owl .slider-list>div').removeClass('active');
    $('.slider-owl .slider-list>div').eq(0).addClass('active');

    // $('.slider-owl .slider-list>div').fadeOut(500);
    // $('.slider-owl .slider-list>div').eq(0).fadeIn(1000);
    let slider_index_max= $('.slider-owl .slider-list>div:last-child').index();
    let slider_i= 0
        // console.log(slider_i);

    //     setInterval(function(){
    //     // slider_index_max= $('.slider-owl .slider-list>div:last-child').index();
    //     slider_i= slider_i >= slider_index_max ? 0 : (slider_i+1);
    //     $('.slider-owl .slider-list>div').css('display', 'none');
    //     // $('.slider-owl .slider-list>div').eq(slider_i).css('display', 'block');
    //     // $('.slider-owl .slider-list>div').fadeOut(1110);
    //     $('.slider-owl .slider-list>div').eq(slider_i).fadeIn(100);
    //     // console.log(slider_i);
    //     // $('.slider-owl .slider-list>div').removeClass('active');
    //     // $('.slider-owl .slider-list>div').eq(slider_i).addClass('active');
    // }, 10000);



    // create dots slider
    // slider_index_max= $('.slider-owl .slider-list>div:last-child').index();
    let slider_dot_i= 0;
    while(slider_dot_i <= slider_index_max){
        $('.slider-owl .dots').append('<span></span>');
        slider_dot_i++;
    }
    $('.slider-owl .dots>span').removeClass('active');
    $('.slider-owl .dots>span').eq(0).addClass('active');

    $('.slider-owl .dots>span').click(function(){
        $('.slider-owl .dots>span').removeClass('active');
        $(this).addClass('active');
        $('.slider-owl .slider-list>div').css('display', 'none');
        $('.slider-owl .slider-list>div').eq($(this).index()).fadeIn(100);
    })



    //drag slider
    let slider_x_start=null;
    $('.slider-list').mousedown(function(e){
        // e = e || window.event;
        e.preventDefault();
        // console.log(e.pageX);
        slider_x_start= e.pageX;
      // alert(e.pageX);
    })

    // $('.slider-list').mousemove(function(e){
    //     // e = e || window.event;
    //     e.preventDefault();
    //     // $(this).css()
    //     if(slider_x_start!=null){
    //         $(this).css('margin-left', (e.pageX-slider_x_start));
    //     }

    //     // console.log(e.pageX);

    //   // alert(e.pageX);
    // })

    $('.slider-list').mouseup(function(e){
      // console.log(e.pageX);
      // slider_x_start=null;
      let slider_x_end= e.pageX;
      if(slider_x_start>slider_x_end){
        
      }
    })
    // });

    


    




    //------page detail
    //image thumbnail
    // $('.dt-image-thumbnail').click(function() {
    //     // alert($(this).find('img').attr('src'));
    //     $('.dt-image-thumbnail span').removeClass('active');
    //     $(this).find('span').addClass('active');
    //     $('.dt-image-main').find('img').attr('src', $(this).find('img').attr('src'));
    // });

    //quanlity
    $('.increase').click(function() {
        let quanlity = $('.quanlity-count').text();
        quanlity = parseInt(quanlity) + 1;
        // console.log(parseInt(quanlity));
        $('.quanlity-count').text(quanlity);
    });
    $('.decrease').click(function() {
        let quanlity = $('.quanlity-count').text();
        quanlity = parseInt(quanlity);
        if (quanlity > 0) {
            quanlity--;
        }
        // console.log(parseInt(quanlity));
        $('.quanlity-count').text(quanlity);
    });

    //size when click
    $('.color-tags button').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    //reviews-button click
    $('.reviews-button button').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    //when click form review rating
    function fromReviewSelect($obj){
        // alert($(this).text);
        // alert($obj.index());
        // alert($(this).parent().find('li'));
        // alert($('.review-form-rating').children().length);
        $('.review-form-rating i').removeClass('stamped-fa-star');
        $('.review-form-rating i').removeClass('stamped-fa-star-o');
        for(let i=0; i<5; i++){
            if(i <= $obj.index()){
                $('.review-form-rating i').eq(i).addClass('stamped-fa-star');
            }
            else{
                $('.review-form-rating i').eq(i).addClass('stamped-fa-star-o');
            }
        }
        $('#review_form_rating_count').val($obj.index()+1);
    }

    $('.review-form-rating i').on('click', function(){
        fromReviewSelect($(this));
    });

    //change tab revview, question page detail
    $('.tab-question-btn').click(function(){
        $('.review-question-content>div').addClass('d-none');
        $('.questions-content').removeClass('d-none');
    })
    $('.tab-review-btn').click(function(){
        $('.review-question-content>div').addClass('d-none');
        $('.reviews-content').removeClass('d-none');
    })
    $('.add-review-btn').click(function(){
        $('.review-question-content>div').addClass('d-none');
        $('.review-form-wrapper1').removeClass('d-none');
        $('html').scrollTo(500); // Scroll screen to target element

    })
    $('.add-question-btn').click(function(){
        $('.review-question-content>div').addClass('d-none');
        $('.question-form-wrapper').removeClass('d-none');
    })




    //products owl
    // width:200px, mr: 40px
    //floor, round, ceil

    // alert(Math.floor(count));
    //matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
    // console.log($('.products1').css("transform").split(",")[4].trim());
    // let p_width = parseInt($('.products1-out .product1').css('width'));
    // let mr = parseInt($('.products1-out .product1').css('margin-right'));;
    // let p_width_mr = p_width + mr;
    // let out_width = parseInt($('.products1-out').css('width'));
    // let count = Math.floor(out_width / (p_width + mr));
    $('.products1-out .products1').css('transform', 'translateX(0px)');

    //add dots:
    let max_width = parseInt($('.products1-out .products1').css('width'));
    let out_width= parseInt($('.products1-out').css('width'));
    let p_width= parseInt($('.products1-out .product1').css('width'));
    let mr= parseInt($('.products1-out .product1').css('margin-right'));
    let p_width_mr = p_width + mr;
    let count= Math.floor(out_width/(p_width+mr));
    let max_width_mr= max_width + mr;
    if(max_width>out_width){
        // let count_dot= Math.ceil(max_width/out_width);
        let dot_x_int= 0;
        while(dot_x_int<max_width){
            if(dot_x_int < (max_width - out_width)){
                $('.products1-out .dots').append('<span data-x="'+((-1)*dot_x_int)+'px"><span></span></span>');
                dot_x_int+= (count*p_width_mr);
            }
            else if(dot_x_int < max_width){
                dot_x_int= max_width - out_width;
                $('.products1-out .dots').append('<span data-x="'+((-1)*dot_x_int)+'px"><span></span></span>');
                // dot_x_int+= out_width;
                break;
            }
        }
        $('.products1-out .dots>span').removeClass('active');
        $('.products1-out .dots>span').eq(0).addClass('active');
    }

    //when dot click
    $('body').delegate('.products1-out .dots>span', 'click', function(){
        let x= $(this).data('x');
        // alert(x);
        $('.products1-out .products1').css('transform', 'translateX(' + x + ')');
        $('.products1-out .dots>span').removeClass('active');
        $(this).addClass('active');
    });

    //when prev, next click
    $('.products1-out .products1-next').click(function() {
        // let p_width= parseInt($('.products1-out .product1').css('width'));
        // let mr= parseInt($('.products1-out .product1').css('margin-right'));;
        // let p_width_mr = p_width + mr;
        // let out_width= parseInt($('.products1-out').css('width'));
        // let count= Math.floor(out_width/(p_width+mr));
        // let max_width = parseInt($('.products1-out .products1').css('width'));
        // // console.log($('.products1').css("transform").split(",")[4].trim());
        // // alert($('.products1').css("transform").split(",")[4].trim());
        // let x_now = $('.products1-out .products1').css("transform").split(",")[4].trim();
        // x_now = parseInt(x_now);
        // //content not display
        // let x_test = max_width - x_now * -1;
        // if (x_test >= (out_width * 2)) {
        //     let x_next = x_now - (count * p_width_mr);
        //     // console.log(x_next);
        //     $('.products1-out .products1').css('transform', 'translateX(' + x_next + 'px)');
        // } else if (x_test > out_width) {
        //     // alert(22);
        //     // console.log(max_width);
        //     $('.products1-out .products1').css('transform', 'translateX(' + (-max_width + out_width) + 'px)');
        // }

        // let dot_index= $('.products1-out .dots .active').index();
        // console.log($('.products1-out .dots span:last-child').index());
        // // console.log($('.products1-out .dots').children().last().index());
        // // let products_x= $('.');
        // $('.products1-out .products1');




    });

    $('body').delegate('.products1-out .products1-next', 'click', function(){
        let dot_index= $('.products1-out .dots .active').index();
        // console.log($('.products1-out .dots').children().last().index());
        let dot_max_index=  $('.products1-out .dots').children().last().index();
        if(dot_index< dot_max_index){
            // alert(22);
            let dot_index_next= dot_index + 1;
            $('.products1-out .dots>span').removeClass('active');
            $('.products1-out .dots>span').eq(dot_index_next).addClass('active');

            let x_next= $('.products1-out .dots .active').data('x');
            // alert(x_next);
            $('.products1-out .products1').css('transform', 'translateX(' + x_next + ')');
            
        }

    })

    $('body').delegate('.products1-out .products1-prev', 'click', function(){
        let dot_index= $('.products1-out .dots .active').index();
        // console.log($('.products1-out .dots').children().last().index());
        // let dot_max_index=  $('.products1-out .dots').children().last().index();
        // let dot_max_index=  $('.products1-out .dots').children().last().index();
        if(dot_index > 0){
            // alert(22);
            let dot_index_next= dot_index - 1;
            $('.products1-out .dots>span').removeClass('active');
            $('.products1-out .dots>span').eq(dot_index_next).addClass('active');

            let x_next= $('.products1-out .dots .active').data('x');
            // alert(x_next);
            $('.products1-out .products1').css('transform', 'translateX(' + x_next + ')');
            
        }

    })

    // $('.products1-out .products1-prev').click(function() {
    //     let p_width = parseInt($('.products1-out .product1').css('width'));
    //     let mr = parseInt($('.products1-out .product1').css('margin-right'));;
    //     let p_width_mr = p_width + mr;
    //     let out_width = parseInt($('.products1-out').css('width'));
    //     let count = Math.floor(out_width / (p_width + mr));
    //     let max_width = parseInt($('.products1-out .products1').css('width'));
    //     // console.log($('.products1').css("transform").split(",")[4].trim());
    //     // alert($('.products1').css("transform").split(",")[4].trim());
    //     let x_now = $('.products1-out .products1').css("transform").split(",")[4].trim();
    //     x_now = parseInt(x_now);
    //     //content not display
    //     // let x_test= out_width
    //     // console.log(x_now);
    //     if (x_now < out_width * (-1)) {
    //         let x_next = x_now + (count * p_width_mr);
    //         // console.log(x_next);
    //         $('.products1-out .products1').css('transform', 'translateX(' + x_next + 'px)');
    //     } else if (x_now < 0) {
    //         // alert(22);
    //         // console.log(max_width);
    //         $('.products1-out .products1').css('transform', 'translateX(' + 0 + 'px)');
    //     }
    // });

    // ---page login
    $('.form-login-create1').click(function(){
        $('.form-login').addClass('d-none');
        $('.form-register').removeClass('d-none');
    })

    $('.form-login-back').click(function(){
        $('.form-login').addClass('d-none');
        $('.form-login1').removeClass('d-none');
    })


    $(window).resize(function() {
        // window.innerWidth
        if (window.innerWidth > 1140) {
            $('header nav').css('margin-left', '0px');
            // $('.PageOverlay').removeClass('active');
            // $('.PageOverlaySearch').removeClass('active');
        }

        if (window.innerWidth < 1140) {
            $('header nav').css('margin-left', '-120%');
            // $('.PageOverlay').removeClass('active');
            // $('.PageOverlaySearch').removeClass('active');
        }


        //product-owl
        $('.products1-out .products1').css('transform', 'translateX(0px)');
        $('.products1-out .dots').html('');
        let max_width = parseInt($('.products1-out .products1').css('width'));
        let out_width= parseInt($('.products1-out').css('width'));
        let p_width= parseInt($('.products1-out .product1').css('width'));
        let mr= parseInt($('.products1-out .product1').css('margin-right'));
        let p_width_mr = p_width + mr;
        let count= Math.floor(out_width/(p_width+mr));
        let max_width_mr= max_width + mr;
        if(max_width>out_width){
            // let count_dot= Math.ceil(max_width/out_width);
            let dot_x_int= 0;
            while(dot_x_int<max_width){
                if(dot_x_int < (max_width - out_width)){
                    $('.products1-out .dots').append('<span data-x="'+((-1)*dot_x_int)+'px"><span></span></span>');
                    dot_x_int+= (count*p_width_mr);
                }
                else if(dot_x_int < max_width){
                    dot_x_int= max_width - out_width;
                    $('.products1-out .dots').append('<span data-x="'+((-1)*dot_x_int)+'px"><span></span></span>');
                    // dot_x_int+= out_width;
                    break;
                }
            }
            $('.products1-out .dots span').removeClass('active');
            $('.products1-out .dots span').eq(0).addClass('active');
        }
    });







    // $('.products-owl').owlCarousel({
    //     // $('.owl-carouse').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     autoplay: true,
    //     // navText: [
    //     // '<span class="prev">prev</span>','<span class="prev">prev</span>'
    //     // ],
    //     // navClass: ['owl-prev', 'owl-next'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         500: {
    //             items: 2
    //         },
    //         700: {
    //             items: 3
    //         },
    //         1124: {
    //             items: 5
    //         }
    //     }
    // })


    // $('.slider').owlCarousel({
    //     // $('.owl-carouse').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     // nav:false,
    //     autoplay: true,
    //     // navText: [
    //     // '<span class="prev">prev</span>','<span class="prev">prev</span>'
    //     // ],
    //     // navClass: ['owl-prev', 'owl-next'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // })

});

//page detail

//product owl
var dt_item_width= document.querySelector('.product-owl-item').offsetWidth;
var dt_item_index= 0;
var dt_item_x= 0;
document.querySelectorAll('.product-owl-dot-item').forEach((item, index) => {
    item.onclick= function(){
        dt_item_index= index;
        dt_item_x= index*dt_item_width;
        document.querySelector('.product-owl-list').style.transform= 'translateX(-'+ dt_item_x +'px)';
        document.querySelectorAll('.product-owl-dot-item').forEach(item1 => item1.classList.remove('active'));
        this.classList.add('active');
    }
})