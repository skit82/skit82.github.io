$(document).ready(function() {

    $('.main-nav__mob-icon').on('click', function() {
        $('.main-nav__list').slideToggle(400, function(){
          if($(this).css('display') === 'none'){
          $(this).removeAttr('style')
          };
      });
    })

    $('[data-toggle]').on('click', function(e){
    var tgt = $(this).data('target');
      if (tgt && $(tgt).length > 0) {
        $(tgt).toggleClass('collapse');

        e.preventDefault();
        return false;
      }
    })

    $(document).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('.page-footer__icon-img').is(':hidden')) {
                $('.page-footer__icon-img').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('.page-footer__icon-img').stop(true, false).fadeOut('fast'); }
    });
    $('.page-footer__icon-img').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 900);
  });

    $('.page-header__descr-link, .stock__caption-link, .food__caption-link, .manager__redact-link, .food__redact, .stock__redact-link ').click(function() {
        $('.popup-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });
    
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup, .popup-stock, .popup-dish').length == 0) {
            $(this).fadeOut();                    
        }
    });

    $("form-stock__remove").on("click", function(){
        if( $("input").val() != "" ) {
        alert("Вы уверены");
        }
    });

    $('.dish__descr-link, .dish__caption-link').click(function() {
        $('.rubric-fade').fadeIn();
        return false;
    });    
    
    $('.popup-close').click(function() {
        $(this).parents('.rubric-fade').fadeOut();
        return false;
    });        

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.rubric-fade').fadeOut();
        }
    });
    
    $('.rubric-fade').click(function(e) {
        if ($(e.target).closest('.popup-rubric').length == 0) {
            $(this).fadeOut();                    
        }
    });

  	$('.slaider__list').slick({
    	dots: false,
    	centerMode: "true",
      // variableWidth: true,
      adaptiveHeight: true,
    	infinite: true,
    	speed: 300,
    	prevArrow: '<img class="left-arrow" src="img/icon-left.png">',
    	nextArrow: '<img class="right-arrow" src="img/icon-right.png">',
    	slidesToShow: 3,
    	slidesToScroll: 1,
    	responsive: [
    	{
        	breakpoint: 1440,
        	settings: {
          	infinite: true,
          	slidesToShow: 1,
          	slidesToScroll: 1,
          	// centerMode: "-100px",
            adaptiveHeight: true,
            variableWidth: true,
          	dots: false
        }
      	},
	      {
	        breakpoint: 767,
	        settings: {
	          infinite: true,
	          slidesToShow: 1,
	          adaptiveHeight: true,
	          centerMode: true,
	          slidesToScroll: 1
	        }
	      },
	      {
	        breakpoint: 520,
	        settings: {
	          infinite: true,
	          slidesToShow: 1,
	          adaptiveHeight: true,
	          slidesToScroll: 1
	        }
      	}
    	]
  	});
});