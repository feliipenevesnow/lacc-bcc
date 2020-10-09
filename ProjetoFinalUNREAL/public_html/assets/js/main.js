!(function ($) {
    "use strict";

    var tema = 0;
    var notificacoes = 0;
    var show = 0;


    $('#functions2').click(function () {
        tema = 0;
        if ($(window).scrollTop() > 100) {
            $('.liContraste').css('background-color', 'rgba(50, 50, 50, 0.2)');
        } else {
            $('.liContraste').css('background-color', 'rgba(0, 0, 0, 0.8)');
        }
        $('.liWhite').css('color', 'white');
        $('h1').css('color', 'black');
        $('h2').css('color', 'black');
        $('h3').css('color', 'black');
        $('#h3').css('color', '#2f4d5a');
        $('h4').css('color', '#444444');
        $('p').css('color', '#444444');
        $('.header-scrolled').css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('section').css('background-color', 'white');
        $('.icon-box').css('background-color', 'white');
        $('#oQueE').removeClass('oQueEConstraste').addClass('oQueE');
        $('.referencias .referencia-item p').css('background-color', 'white');
        $('#footer').css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('.imagens-info').css('background-color', 'white');
        $('.back-to-top').css('background-color', 'rgba(0, 0, 0, 0.5)');
        $('.txtNovidade').css('color', 'white');
        notifica("Modo Normal");
    });




    $('#functions3').click(function () {
        tema = 1;
        $('.liContraste').css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('.liWhite').css('color', 'white');
        $('h1').css('color', 'white');
        $('h2').css('color', 'white');
        $('h3').css('color', 'white');
        $('h4').css('color', 'white');
        $('p').css('color', 'white');
        $('.header-scrolled').css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('section').css('background-color', 'rgba(0, 0, 0)');
        $('.icon-box').css('background-color', 'rgba(0, 0, 0)');
        $('#oQueE').removeClass('oQueE').addClass('oQueEConstraste');
        $('.referencias .referencia-item p').css('background-color', 'rgba(255, 255, 255, 0.1)');
        $('#footer').css('background-color', 'rgba(0, 0, 0)');
        $('.imagens-info').css('background-color', 'rgba(0, 0, 0, 0.5)');
        $('.back-to-top').css('background-color', 'rgba(0, 0, 0, 0.5)');
        notifica("Modo Contraste");
    });



    $('#functions4').click(function () {
        tema = 2;
        $('.liContraste').css('background-color', 'rgba(0, 0, 0, 0.8)');
        $('.liWhite').css('color', 'white');
        $('h1').css('color', 'blue');
        $('h2').css('color', 'blue');
        $('h3').css('color', 'white');
        $('h4').css('color', 'white');
        $('p').css('color', 'white');
        $('.header-scrolled').css('background-color', '#800080');
        $('section').css('background-color', '#800080');
        $('.icon-box').css('background-color', '#800080');
        $('#oQueE').removeClass('oQueE').addClass('oQueERoxo');
        $('.referencias .referencia-item p').css('background-color', 'rgba(255, 255, 255, 0.1)');
        $('#footer').css('background-color', '#800080');
        $('.imagens-info').css('background-color', '#800080');
        $('.back-to-top').css('background-color', '#800080');
        notifica("Modo Cor Livre");
    });

    function notifica(txt) {
        $('.divNotificacao').remove();
        switch (tema) {
            case 0:
                $('<div>', {
                    id: notificacoes,
                    class: 'divNotificacao',
                }).appendTo('body');


                $('#texto').text(txt).css({color: 'white', background: 'black'});
                $('#divNt').css({color: 'white', background: 'black'});

                $('.divNotificacao').append($('.conteudo').html());

                $('.divNotificacao').addClass('notificacao');
                break;
            case 1:
                $('<div>', {
                    id: notificacoes,
                    class: 'divNotificacao',
                }).appendTo('body');


                $('#texto').text(txt).css({color: 'black', background: 'white'});
                $('#divNt').css({color: 'black', background: 'white'});

                $('.divNotificacao').append($('.conteudo').html());

                $('.divNotificacao').addClass('notificacao');
                break;
            case 2:
                $('<div>', {
                    id: notificacoes,
                    class: 'divNotificacao',
                }).appendTo('body');


                $('#texto').text(txt).css({color: 'white', background: 'blue'});
                $('#divNt').css({color: 'white', background: 'blue'});

                $('.divNotificacao').append($('.conteudo').html());

                $('.divNotificacao').addClass('notificacao');
                break;
        }
    }






    $('.liWhite').css("color", "white");



    $('#functions1').click(function () {
        if ($('#videoBackGround').prop('muted'))
        {
            notifica("Som Desmutado");
            $('#videoBackGround').prop('muted', false);
            $('#functions1').attr('src', 'assets/img/sound.png');
        } else {
            notifica("Som Multado");
            $('#videoBackGround').prop('muted', true);
            $('#functions1').attr('src', 'assets/img/noSound.png');
        }
    });



    $('#functions5').click(function () {
        if (show == 0) {
            $('#functions5').removeClass('volta').addClass('vai');
            $('aside').removeClass('asideHide').addClass('asideShow');
            show = 1;
        } else {
            $('#functions5').remove('vai').addClass('volta');
            $('aside').removeClass('asideShow').addClass('asideHide');
            show = 0;
        }
    });



    var scrolltoOffset = $('#header').outerHeight() - 31;
    if (window.matchMedia("(max-width: 991px)").matches) {
        scrolltoOffset += 30;
    }
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            e.preventDefault();
            if (target.length) {

                var scrollto = target.offset().top - scrolltoOffset;
                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });






    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });


    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button id="button" type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });
        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });
        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }


    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 200;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                    bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 300) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('.liContraste').css('background-color', 'rgba(50, 50, 50, 0.2)');
        } else {
            $('#header').removeClass('header-scrolled');
            $('.liContraste').css('background-color', 'rgba(0, 0, 0, 0.8)');
        }
    });
    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');

    }



    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });


    $(".referencias-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });


    $(".Screenshots-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });


    function animacao() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true
        });
    }

    $(window).on('load', function () {
        animacao();
    });



})(jQuery);