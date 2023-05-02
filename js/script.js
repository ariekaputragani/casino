$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    navText: ['<div class="nav-button owl-prev"><i class="fa fa-angle-left"></i></div>', '<div class="nav-button owl-next"><i class="fa fa-angle-right"></i></div>']
  });
});

$("#form-login").submit(function() {
	$("#le-alert").removeClass("hidden");
})