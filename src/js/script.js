$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true, 
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('acatalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  });