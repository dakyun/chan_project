$('.photo-box').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    pauseOnHover:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint:700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
});

$(document).ready(function(){
        $('#discography-albums').bxSlider({
            minSlides:3,
            maxSlides:3,
            moveSlides:1,
            slideMargin:100,
            pager:false,
            controls:false,
            slideWidth:500,
            hideControlOnEnd:true,
            infiniteLoop:false,
    });
  });

const sections = $(".section")
const speed = 850

//스크롤 애니메이션
$(window).on('scroll', function(){
  let scrollTop = $(window).scrollTop()
  sections.each(function(i){
    if(scrollTop >= sections.eq(i).offset().top-speed){
      sections.eq(i).find('.show-up').addClass('active')
    }
  })
})