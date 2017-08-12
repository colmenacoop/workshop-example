$(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 7,
        paginationClickable: true,
		spaceBetween: 30,
		autoplay: 3500,
		autoplayDisableOnInteraction: false
    });
});