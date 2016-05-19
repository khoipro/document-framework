$(document).ready(function() {
    var checkCookie = $.cookie("nav-item");
    if (checkCookie != "") {
        $('.main-menu > ul > li > a:eq(' + checkCookie + ')').addClass('active').next().show();
    }
    $('.main-menu > li > ul > li > a').click(function () {
        var checkElement = $(this).next();
        $('.main-menu li li .active').removeClass('active');
        $(this).addClass('active');
    });

    $('.main-menu > li > a').click(function () {
        var navIndex = $('.pure-menu-list > li > a').index(this);
        $.cookie("nav-item", navIndex);
        $('.main-menu li ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        $('.main-menu li a').removeClass('active');

        $(this).addClass('active');
    });

    var includeDiv = $(".content");
    $(window).on('hashchange', function() {
        var href = location.hash.slice(1) +".html";
        includeDiv.load('includes/' + href);
        $('.welcome').hide();
        $('.header').hide();
    });

    if ($('#back-to-top').length) {
        var scrollTrigger = 200, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            // location.reload();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

});


