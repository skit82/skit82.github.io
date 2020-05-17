$(document).ready(function() {

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
      variableWidth: true,
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
          	centerMode: true,
          	infinite: true,
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