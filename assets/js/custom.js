// Home banner slider

$('.home-banner-slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


// Testimonials

$('.testimonial').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// Partners

$('.our-partners').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

// Counter

var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

// Accordint

$(function () {
    $('.acc__title').click(function (j) {

        var dropDown = $(this).closest('.acc__card').find('.acc__panel');
        $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});


// Sub-menu ---------------------

$(document).ready(function () {
    $("#has-child-gi").on("click", function () {
        $("#dp-menu-gi").toggleClass("submenu-active");
    });
    $("#has-child-li").on("click", function () {
        $("#dp-menu-li").toggleClass("submenu-active");
    });
});

// Menu-oppen -------------------

$(document).ready(function () {
    $("#berger-menu,#overlay-sections, .menu-link").on("click", function () {
        $(".menu").toggleClass("menu-active");
        $(".menu-bar").toggleClass("crose");
        $("#overlay-sections").toggleClass("overlay");
    });
});


// Smooth Scrolling ------------

$(document).foundation();