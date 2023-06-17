var blocks = document.getElementsByClassName("card__box-item");

// Add a click event listener to each block
for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function() {
    // Remove the active class from all blocks
    for (var j = 0; j < blocks.length; j++) {
        blocks[j].classList.remove("active");
    }
    // Add the active class to the clicked block
    this.classList.add("active");
    });
}

// Select the first block by default
blocks[1].classList.add("active");
// ---------------------------------------------------------------

// ---------------------------------------------------------------
const btns = document.querySelectorAll('.price-btns');
const oneActiveBtn = document.querySelector('.return');
const oneActiveBtns = document.querySelector('.returns');
const oneActiveBt = document.querySelector('.retur');
const oneActiveBts = document.querySelector('.returs');

btns.forEach((btn, index) =>{
    btn.addEventListener('click', () =>{
        console.log(index)
    const divs = document.querySelectorAll('.inclusive__box')
    divs.forEach(div =>{
        div.classList.remove('active')
    });
    divs[index].classList.add('active');
    });
});

oneActiveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[0].classList.add('active');
});

oneActiveBtns.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[0].classList.add('active');
});

oneActiveBt.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[1].classList.add('active');
    activeIndex = 1;
});

oneActiveBts.addEventListener('click', (event) => {
    event.preventDefault();
    const divs = document.querySelectorAll('.inclusive__box');
    divs.forEach(div => {
        div.classList.remove('active');
    });
    divs[1].classList.add('active');
    activeIndex = 1;
});
// ----------------------------------------------------------------------------
$(function () {
    // -----------------------------------------------------------------------------
    $('.grow__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('grow__acc-link--active')) {
            $(this).removeClass('grow__acc-link--active')
            $(this).children('.grow__acc-text').slideUp()
        } else {
            $('.grow__acc-link').removeClass('grow__acc-link--active')
            $('.grow__acc-text').slideUp()
            $(this).addClass('grow__acc-link--active')
            $(this).children('.grow__acc-text').slideDown()
        }
    });
    // -----------------------------------------------------------------------------
    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('faq__acc-link--active')) {
            $(this).removeClass('faq__acc-link--active')
            $(this).removeClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideUp()
        } else {
            $('.faq__acc-link').removeClass('faq__acc-link--active')
            $('.faq__acc-text').slideUp()
            $(this).addClass('faq__acc-link--active')
            $(this).children('.faq__acc-text').slideDown()
        }
    });
    // SLIDER1
    $('.testimonials__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: false,
        waitForAnimate: true,
        infinite: true,
    })
    $('.testimonials__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    });
    // --------------------------------------------------------------------------------------
    $(".price-btns").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href');
        var targetElement = $(id);
        var padding = 140;
        var top = targetElement.offset().top - padding;
        $('body,html').animate({ scrollTop: top }, 800)
    });
});