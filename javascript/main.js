jQuery(document).ready(function( $ ){

  // Header fixed on scroll
  $(window).scroll(function() {
    if($(this).scrollTop() > 2000){
      $('.cardl').addClass('animate');
      $('.cardr').addClass('animate');
      $('.mission').removeClass('fade-in-text');
      $('.vision').removeClass('fade-in-text');
    }
    else if ($(this).scrollTop() > 900) {
      $('.mission').addClass('fade-in-text');
      $('.vision').addClass('fade-in-text');
    }
    else if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#logo0').addClass('logo0');
      $('#logo1').addClass('logo1');
      $('.openbtn').addClass('upstyle');
      $('.menu-active').addClass('active');
      $("a[class!='menu-active']").addClass('changecolor');
      $('#hc-parag').addClass('animate');
      $('#hc-image').addClass('animate');
      $('.cardl').removeClass('animate');
      $('.cardr').removeClass('animate');
      $('.mission').removeClass('fade-in-text');
      $('.vision').removeClass('fade-in-text');
    }
    else {
      $('#header').removeClass('header-scrolled');
      $('#logo0').removeClass('logo0');
      $('#logo1').removeClass('logo1');
      $('.openbtn').removeClass('upstyle');
      $('.menu-active').removeClass('active');
      $("a[class!='menu-active']").removeClass('changecolor');
      $('#hc-parag').removeClass('animate');
      $('#hc-image').removeClass('animate');
    }
  });
});
