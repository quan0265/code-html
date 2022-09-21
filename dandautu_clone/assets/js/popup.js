$(document).ready(function (e) {
    if ($('#popup-sell').length > 0) {
        if (typeof $.cookie('popup-sell') === 'undefined') {
            setTimeout(function () {
                $.cookie("popup-sell", 1, {path: '/'});
                var targeted_popup_sell = 'popup-sell';
                $('[data-popup="' + targeted_popup_sell + '"]').fadeIn(350);
                $('#popup-sell').css('z-index', '999999');
            }, 35000);
        }
    }
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_close = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_close + '"]').fadeOut(350);
        $("#popup-sell").remove();
        e.preventDefault();
    });
});

function PopupSellLandHL() {
    var name = $('#name_seller').val();
    var phone = $('#phone_seller').val();
    var email = $('#email_seller').val();
    var note = $('#note_seller').val();
    if (name === "") {
        $('#validate_error').html("Vui lòng nhập Họ và tên của Quý khách");
        $('#validate_error').css('display', 'block');
        return;
    }
    if (phone === "") {
        $('#validate_error').html("Vui lòng nhập Số điện thoại của Quý khách!");
        $('#validate_error').css('display', 'block');
        return;
    }
    $.ajax({
        url: '/ajaxfr/contacts/popup_sell',
        type: "post",
        dateType: "text",
        data: {
            name: name,
            email: email,
            phone: phone,
            url: window.location.href,
            note: note,
            projects: 2,
        },
        beforeSend: function () {
            $('.btn-form-sell-land').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
            $('.ajax-loading').show();
            $('.disable-box').css("z-index", "9999");
            $('.disable-box').css("width", "100%");
            $('.disable-box').css("height", "100%");
            $('.boxer').css("opacity", "0.6");
        },
        success: function (response) {
            var data = JSON.parse(response);
            if (data.status === 'true') {
                $('#form_popup_register').css('display', 'none');
                $('#validate_success').css('display', 'block');
                $('#validate_success').html(data.success);
                $('#validate_error').css('display', 'none');
            } else {
                $('#validate_error').css('display', 'block');
                $('#validate_success').css('display', 'none');
                $('#validate_error').html(data.error);
            }
        },
        complete: function (xhr) {
            $(".btn-form-sell-land").html('GỬI THÔNG TIN');
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

$(document).ready(function (e) {
    if ($('#popup-buy').length > 0) {
        if (typeof $.cookie('popup-buy') === 'undefined') {
            setTimeout(function () {
                $.cookie("popup-buy", 1, {path: '/'});
                var targeted_popup_buy = 'popup-buy';
                $('[data-popup="' + targeted_popup_buy + '"]').fadeIn(350);
                $('#popup-buy').css('z-index', '999999');
            }, 25000);
        }
    }
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_close = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_close + '"]').fadeOut(350);
        $("#popup-buy").remove();
        e.preventDefault();
    });
});

function PopupBuyLandHL() {
    var name = $('#name_buyer').val();
    var phone = $('#phone_buyer').val();
    var email = $('#email_buyer').val();
    var note = $('#note_buyer').val();
    if (name === "") {
        $('#validate_error').html("Vui lòng nhập Họ và tên của Quý khách");
        $('#validate_error').css('display', 'block');
        return;
    }
    if (phone === "") {
        $('#validate_error').html("Vui lòng nhập Số điện thoại của Quý khách!");
        $('#validate_error').css('display', 'block');
        return;
    }
    $.ajax({
        url: '/ajaxfr/contacts/popup_buy',
        type: "post",
        dateType: "text",
        data: {
            name: name,
            email: email,
            phone: phone,
            url: window.location.href,
            note: note,
            projects: 2,
        },
        beforeSend: function () {
            $('.btn-form-buy-land').html('<i class="fa fa-circle-o-notch fa-spin"></i> loading...');
        },
        success: function (response) {
            var data = JSON.parse(response);
            if (data.status === 'true') {
                $('#form_popup_register').css('display', 'none');
                $('#validate_success').css('display', 'block');
                $('#validate_success').html(data.success);
                $('#validate_error').css('display', 'none');
            } else {
                $('#validate_error').css('display', 'block');
                $('#validate_success').css('display', 'none');
                $('#validate_error').html(data.error);
            }
        },
        complete: function (xhr) {
            $(".btn-form-buy-land").html('GỬI THÔNG TIN');
        },
        error: function (xhr, status, errorThrown) {
            alert("Không thể gửi sự kiện, kiểm tra mạng");
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });
}
