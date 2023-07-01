const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}
// ============================================================================================

// ============================================================================================

$(document).ready(function() {
    $('.call').on('click', function(e) {
        e.preventDefault();
        $('.calendly').toggleClass('calendly--open');
    });
    $('.calendly-close, .calendly-overlay').on('click', function() {
        $('.calendly').removeClass('calendly--open');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.calendly').length && !$(event.target).closest('.call').length) {
            $('.calendly').removeClass('calendly--open');
        }
    });
});
$(function () {
    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
    })
    
    // SLIDER1
    $('.testimonials__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    })
    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    // SLIDER2
    $('.case__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
    })
    $('.case__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickPrev')
    })
    $('.case__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.case__slider').slick('slickNext')
    })
});

$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    var scroll = $window.scrollTop() + ($window.height() / 1.5);

    $panel.each(function () {
        var $this = $(this);

        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });

        $body.addClass('color-' + $(this).data('color'));
        $body.find('.text').css('color', dataColor);
        }
    });    
}).scroll();


