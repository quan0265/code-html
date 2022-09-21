if ($('.full-screen').length > 0) {
    $('.full-screen').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: false,
        autoplay: true,
        autoplayTimeout: 2225000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                loop: true
            },
            1000: {
                items: 1,
                loop: true
            }
        },
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    })
}
//Begin disable vertical scroll when swipe owl slider
window.blockMenuHeaderScroll = false;
$('.owl-carousel').on('drag.owl.carousel', function (e) {
    blockMenuHeaderScroll = true;
});
$('.owl-carousel').on('dragged.owl.carousel', function (e) {
    blockMenuHeaderScroll = false;
});
document.addEventListener('touchmove', function (e) {
    if (blockMenuHeaderScroll) {
        e.preventDefault();
    }
}, {passive: false});
////End disable vertical scroll when swipe owl slider
if ($('.hidden-mobile').length > 0) {
    $('.hidden-mobile').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                nav: false
            },
            768: {
                items: 5,
                loop: false
            },
            1000: {
                items: 6,
                loop: false
            }
        },
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ]
    })
}
function ChangeThumbSlider(data_index) {
    $('.full-screen').trigger('to.owl.carousel', [data_index, 300, true]);
    $('.hidden-mobile').trigger('to.owl.carousel', [data_index, 300, true]);
}
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
function Signup() {
    var submit = true;
    if ($('#username_signup').val() === '') {
        $('.username-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.username-signup').css('display', 'none', '!important');
    }
    if ($('#email_signup').val() === '' || !validateEmail($('#email_signup').val())) {
        $('.email-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.email-signup').css('display', 'none', '!important');
    }
    if ($('#phone_signup').val() === '') {
        $('.phone-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.phone-signup').css('display', 'none', '!important');
    }
    if ($('#password_signup').val() === '') {
        $('.password-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.password-signup').css('display', 'none', '!important');
    }
    if ($('#re_password_signup').val() === '' || $('#re_password_signup').val() !== $('#password_signup').val()) {
        $('.re-password-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.re-password-signup').css('display', 'none', '!important');
    }
    if ($('#type_signup').val() === '') {
        $('.type-signup').css('display', 'block', '!important');
        submit = false;
    } else {
        $('.type-signup').css('display', 'none', '!important');
    }
    if (submit) {
        var name = $('#username_signup').val();
        var email = $('#email_signup').val();
        var phone = $('#phone_signup').val();
        var password = $('#password_signup').val();
        var re_password = $('#re_password_signup').val();
        var type = $('#type_signup').val();
        var broker = $('input[type=checkbox]:checked').length;
        var url_rel = window.location.href;
        $.ajax({
            url: url_signup_user,
            type: "post",
            dateType: "text",
            data: {
                name: name,
                email: email,
                phone: phone,
                password: password,
                re_password: re_password,
                type: type,
                url: url_rel,
                broker: broker
            },
            beforeSend: function () {
                $('#btn-signup-user').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.signup-body').css('display', 'none');
                    $('.options').css('display', 'none');
                    $('.signup-success').css('display', 'block');
                    $("#btn-signup-user").css('display', 'none');
                    $('.error-signup').css('display', 'none');
                } else {
                    $('.error-signup').css('display', 'block');
                    $('.error-signup').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-signup-user").html('ĐĂNG KÝ');
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
    $(document).ready(function () {
        var offsetTop = $(".login-header").offset().top;
        $('html, body').animate({
            scrollTop: (offsetTop - 200)
        }, 1e3);
    });
}
function Checkpassword() {
    var password = $('#password_signup').val();
    var re_password = $('#re_password_signup').val();
    if (re_password === password && password != '') {
        $('.success-right').css('display', 'block');
        $('.reply-password').removeClass('red-text');
        $('.reply-password').addClass('green-text');
        $('.wrong-error').css('display', 'none');
    } else {
        $('.wrong-error').css('display', 'block');
        $('.reply-password').removeClass('green-text');
        $('.reply-password').addClass('red-text');
        $('.success-right').css('display', 'none');
    }
}
function CheckpasswordChange() {
    var new_password = $('#new_password').val();
    var re_new_password = $('#re_new_password').val();
    if (re_new_password === new_password && new_password != '') {
        $('.success-right').css('display', 'block');
        $('.re-new-password').removeClass('red-text');
        $('.re-new-password').addClass('green-text');
        $('.wrong-error').css('display', 'none');
    } else {
        $('.wrong-error').css('display', 'block');
        $('.re-new-password').removeClass('green-text');
        $('.re-new-password').addClass('red-text');
        $('.success-right').css('display', 'none');
    }
}
function login() {
    var info = $('#info').val();
    var password = $('#password').val();
    if ($('#login_form input[name=remember]').is(':checked')) {
        var remember = true;
    } else {
        var remember = false;
    }
    var login = true;
    if (info === '') {
        $('.info-login').css('display', 'block', '!important');
        login = false;
    } else {
        $('.info-login').css('display', 'none', '!important');
    }
    if (password === '') {
        $('.password-login').css('display', 'block', '!important');
        login = false;
    } else {
        $('.password-login').css('display', 'none', '!important');
    }
    if (login) {
        $.ajax({
            url: url_login_user,
            type: "post",
            dateType: "text",
            data: {
                info: info,
                password: password,
                remember: remember,
            },
            beforeSend: function () {
                $('#btn-user-login').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    setTimeout(function () {
                        window.location.href = url_dat_hoa_lac;
                    }, 300);
                } else {
                    $('.error-login').css('display', 'block');
                    $('.error-login').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-user-login").html("ĐĂNG NHẬP");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
    $(document).ready(function () {
        var offsetTop = $(".login-header").offset().top;
        $('html, body').animate({
            scrollTop: (offsetTop - 200)
        }, 1e3);
    });
}
function ChangePassword(customer_id) {
    var old_password = $("#old_password").val();
    var new_password = $("#new_password").val();
    var re_new_password = $("#re_new_password").val();
    var change = true;
    if (old_password === '') {
        $('.info-old_password').css('display', 'inline', '!important');
        change = false;
    } else {
        $('.info-old_password').css('display', 'none', '!important');
    }
    if (new_password === '') {
        $('.info-new_password').css('display', 'inline', '!important');
        change = false;
    } else {
        $('.info-new_password').css('display', 'none', '!important');
    }
    if (re_new_password === '' || new_password !== re_new_password) {
        $('.info-re_new_password').css('display', 'inline', '!important');
        change = false;
    } else {
        $('.info-re_new_password').css('display', 'none', '!important');
    }
    if (change) {
        $.ajax({
            url: url_change_password,
            type: "POST",
            data: {
                id: customer_id,
                old_password: old_password,
                new_password: new_password,
                re_new_password: re_new_password
            },
            beforeSend: function () {
                $('#btn-change-password').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.show_result_reply').html(data.success);
                    $('.success_reply').css('display', 'block');
                    $('.change-password').css('display', 'none');
                    $('#btn-change-password').css('display', 'none');
                    $('.btn-close').css('display', 'block', '!important');
                    $('.error-change-password').css('display', 'none');
                    $('.before-change').css('display', 'none', '!important');
                    $('.after-change').css('display', 'block', '!important');
                } else {
                    $('.error-change-password').css('display', 'block');
                    $('.error-change-password').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-change-password").html("CẬP NHẬT");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}
function ForgotPassword() {
    var email = $('#email_sign').val();
    var forgot = true;
    if (email === '' || !validateEmail(email)) {
        $('.info-email-sign').css('display', 'inline', '!important');
        forgot = false;
    } else {
        $('.info-email-sign').css('display', 'none', '!important');
    }
    if (forgot) {
        $.ajax({
            url: url_forgot_password_user,
            type: "POST",
            data: {
                email: email,
            },
            beforeSend: function () {
                $('#btn-forgot-password').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.show_result_reply').html(data.success);
                    $('.result-forgot-password').css('display', 'block');
                    $('.modal-body-forgot').css('display', 'none');
                    $("#btn-forgot-password").css("display", "none");
                    $('.error-forgot-password').css('display', 'none');
                } else {
                    $('.error-forgot-password').css('display', 'block');
                    $('.error-forgot-password').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-forgot-password").html("Yêu cầu");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}
function restorePassword(user_id) {
    var email = $('#email_forgot').val();
    var password = $('#password_forgot').val();
    var re_password = $('#re_password_forgot').val();
    var restore = true;
    if (email === '' || !validateEmail(email)) {
        $('.email-forgot').css('display', 'block', '!important');
        restore = false;
    } else {
        $('.email-forgot').css('display', 'none', '!important');
    }
    if (password === '') {
        $('.password-forgot').css('display', 'block', '!important');
        restore = false;
    } else {
        $('.password-forgot').css('display', 'none', '!important');
    }
    if (re_password === '' || re_password !== password) {
        $('.re-password-forgot').css('display', 'block', '!important');
        restore = false;
    } else {
        $('.re-password-forgot').css('display', 'none', '!important');
    }
    if (restore) {
        $.ajax({
            url: url_user_restore_password,
            type: "POST",
            data: {
                email: email,
                password: password,
                re_password: re_password
            },
            beforeSend: function () {
                $('#btn-user-restore').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.restore-body').css('display', 'none');
                    $('.restore-password').css('display', 'block');
                    $("#btn-user-restore").css('display', 'none');
                    $('.error-restore').css('display', 'none');
                } else {
                    $('.error-restore').css('display', 'block');
                    $('.error-restore').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-user-restore").html("KHÔI PHỤC");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}
function CheckpasswordForgot() {
    var new_password = $('#password_forgot').val();
    var re_new_password = $('#re_password_forgot').val();
    if (re_new_password === new_password && new_password != '') {
        $('.success-forgot').css('display', 'block');
        $('.rep-password-forgot').removeClass('red-text');
        $('.rep-password-forgot').addClass('green-text');
        $('.wrong-forgot').css('display', 'none');
    } else {
        $('.wrong-forgot').css('display', 'block');
        $('.rep-password-forgot').removeClass('green-text');
        $('.rep-password-forgot').addClass('red-text');
        $('.success-forgot').css('display', 'none');
    }
}

function convertPrice(input_field, text_field) {
    var input = $('#' + input_field).val();
    if (input !== '' && !isNaN(input)) {
        var number = (parseFloat(input) * 1000000);
        $.ajax({
            url: url_convert_price_number,
            type: "POST",
            dateType: "TEXT",
            data: {
                number: number,
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('#' + text_field).html(data.success);
                } else {
                    $('#' + text_field).html(data.error);
                }
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể chuyển đổi số, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}

function removeImage(id) {
    if (!id || id.length === 0) {
        return false;
    } else {
        $.ajax({
            url: url_remove_image,
            type: "POST",
            dateType: "TEXT",
            data: {
                id: id,
            },
            beforeSend: function () {
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('#image_' + id).css('display', 'none');
                } else {
                    $('.remove-error').html(data.error);
                    $('.remove-error').css('display', 'block');
                }
            },
            complete: function (xhr) {
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể chuyển đổi số, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}
function updateUser(id) {
    var name = $('#username').val();
    var phone = $('#phone_user').val();
    var broker = $('#broker').is(':checked');
    var forgot = true;
    if (name === '') {
        $('.username-error').css('display', 'inline', '!important');
        forgot = false;
    } else {
        $('.username-error').css('display', 'none', '!important');
    }
    if (phone === '') {
        $('.phone_user-error').css('display', 'inline', '!important');
        forgot = false;
    } else {
        $('.phone_user-error').css('display', 'none', '!important');
    }
    if (broker) {
        broker = 1;
    } else {
        broker = 0;
    }
    if (forgot) {
        $.ajax({
            url: url_update_info_user,
            type: "POST",
            data: {
                id: id,
                name: name,
                phone: phone,
                broker: broker,
            },
            beforeSend: function () {
                $('#btn-user-update').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.show_result_update').html(data.success);
                    $('.result-update-info').css('display', 'block');
                    $('.modal-body-update').css('display', 'none');
                    $('.error-update-info').css('display', 'none');
                    setTimeout(function () {
                        window.location.reload();
                    }, 3000);
                } else {
                    $('.error-update-info').css('display', 'block');
                    $('.error-update-info').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-user-update").html("CẬP NHẬT");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}

function registerLand(id) {
    var broker = $('#broker_register').is(':checked');
    var forgot = true;
    if (broker) {
        broker = 1;
    } else {
        broker = 0;
        forgot = false;
    }
    if (forgot) {
        $.ajax({
            url: url_register_land_user,
            type: "POST",
            data: {
                id: id,
                broker: broker,
            },
            beforeSend: function () {
                $('#btn-user-register').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
                $('.ajax-loading').show();
                $('.disable-box').css("z-index", "9999");
                $('.disable-box').css("width", "100%");
                $('.disable-box').css("height", "100%");
                $('.boxer').css("opacity", "0.6");
            },
            success: function (response) {
                var data = JSON.parse(response);
                if (data.status === 'true') {
                    $('.show_result_register').html(data.success);
                    $('.result-register-info').css('display', 'block');
                    $('.modal-body-register').css('display', 'none');
                    $('.error-register-info').css('display', 'none');
                } else {
                    $('.error-register-info').css('display', 'block');
                    $('.error-register-info').html(data.error);
                }
            },
            complete: function (xhr) {
                $("#btn-user-register").html("Xác nhận");
                $('.ajax-loading').hide();
                $('.disable-box').css("z-index", "0");
                $('.disable-box').css("width", "0");
                $('.disable-box').css("height", "0");
                $('.boxer').css("opacity", "1");
            },
            error: function (xhr, status, errorThrown) {
                alert("Không thể gửi sự kiện, kiểm tra mạng");
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        });
    }
}
$('#SearchLand').submit(function (e) {
    e.preventDefault();
    var street = $('#street').val();
    var ward = $('#ward').val();
    var price = $('#price').val();
    var acreage = $('#acreage').val();
    var juridical = $('#juridical').val();
    if (street === '' && ward === '' && price === '' && acreage === '' && direction === '' && juridical === '') {
        return false;
    } else {
        var query = '';
        if (ward) {
            query = ward;
            var input = {
                gia: price,
                dien_tich: acreage,
                phap_ly: juridical,
                duong: street,
            }
            var params = build_query(input);
            if (params) {
                query += '?' + params;
            }
            window.location.replace(rootdomain + query);
        }
        if (!ward) {
            var input = {
                gia: price,
                dien_tich: acreage,
                phap_ly: juridical,
                duong: street,
            }
            var params = build_query(input)
            query += '?' + params;
            window.location.replace(muabandat + query);
        }
    }
});
$('#SearchSaleLand').submit(function (e) {
    e.preventDefault();
    var ward = $('#ward').val();
    var price = $('#price').val();
    var acreage = $('#acreage').val();
    var juridical = $('#juridical').val();
    if (ward === '' && price === '' && acreage === '' && direction === '' && juridical === '') {
        return false;
    } else {
        var query = '';
        if (ward) {
            query = ward;
            var input = {
                gia: price,
                dien_tich: acreage,
                phap_ly: juridical,
            }
            var params = build_query(input);
            if (params) {
                query += '?' + params;
            }
            window.location.replace(rootdomain + query);
        }
        if (!ward) {
            var input = {
                gia: price,
                dien_tich: acreage,
                phap_ly: juridical,
            }
            var params = build_query(input)
            query += '?' + params;
            window.location.replace(muabandat + query);
        }
    }
});
var build_query = function (obj, num_prefix, temp_key) {
    var output_string = []
    Object.keys(obj).forEach(function (val) {
        var key = val;
        num_prefix && !isNaN(key) ? key = num_prefix + key : ''

        var key = encodeURIComponent(key.replace(/[!'()*]/g, escape));
        temp_key ? key = temp_key + '[' + key + ']' : ''
        if (typeof obj[val] === 'object') {
            var query = build_query(obj[val], null, key)
            output_string.push(query)
        } else {
            var value = encodeURIComponent(obj[val].replace(/[!'()*]/g, escape));
            if (value != '') {
                output_string.push(key + '=' + value)
            }
        }
    })
    return output_string.join('&')
}
$(document).ready(function () {
    var screensize = $(window).width();
    if (screensize <= 767) {
        $('.btn-support-popup').addClass('btn-sm');
    }
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_class = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
    });
})
$(document).ready(function (e) {
    if ($('#popup-htbd').length > 0) {
        setTimeout(function () {
            if (typeof $.cookie('popup') === 'undefined') {
                $.cookie("popup", 1);
                var targeted_popup_class = 'popup-1';
                $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
            }
        }, 30000);
    }
});
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Đang tải ảnh...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">Hình ảnh #%curr%</a> không thể tải.',
    }
});

$(document).ready(function () {
    $("#project").change(function () {
        $.ajax({
            url: "/ajaxfr/saleland/load_district_by_project",
            type: "post",
            dataType: "text",
            data: {
                project: $('#project').val()
            },
            success: function (data) {
                $('.seclect_district').html(data);
            }
        });
    });
});
$(document).ready(function () {
    if ($('#price_sale').length > 0) {
        convertPrice("price_sale", "format_price");
    }
    $("#district_id").change(function () {
        $.ajax({
            url: "/ajaxfr/saleland/get_ward",
            type: "post",
            dataType: "text",
            data: {
                district_id: $('#district_id').val()
            },
            success: function (data) {
                $('.seclect_ward').html(data);
            }
        });
    });
});

//Load Facebook SDK for JavaScript
(function (d, s, id) {
    var appId = '145574929640344';
    var pageId = '168565963804810';
    var logged_in_greeting = 'Dân Đầu Tư, xin chào quý khách !';
    var logged_out_greeting = 'Dân Đầu Tư, xin chào quý khách !';
    var ref = 'dandautu.vn';
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v3.0&appId=145574929640344&autoLogAppEvents=1';
    js.onload = function () {
        $('.fb-plugin-chat-container').html('<div class="fb-customerchat" page_id="' + pageId + '" ref="' + ref + '" minimized="true" logged_in_greeting="' + logged_in_greeting + '" logged_out_greeting="' + logged_out_greeting + '"></div>');
        if (detectIsMobile(true)) {
            var interval = setInterval(function () {
                var fbDialog = $('#fb-root .fb_dialog');
                if (fbDialog && fbDialog.length > 0) {
                    fbDialog.css('display', 'inline')
                            .html('<img src="/images/MessengerIcon.png" height="60" width="60" alt="" class="img">')
                            .click(function (e) {
                                window.open('//m.me/' + pageId + '?ref=' + ref, '_blank');
                            });

                    clearInterval(interval);
                }
            }, 250);
        }
    };
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function detectIsMobile(plusWidthScreen) {
    if (plusWidthScreen && screen && screen.width)
        return (screen.width <= 699 || navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false);
    else
        return (navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g) ? true : false);
}
//End Load Facebook SDK for JavaScript