//Need ternary for what language Read less etc
function readMore() {
$('.read-more-2').readmore({ speed: 75, lessLink: '<a href="#" class="read-more">Read less</a>',
moreLink: '<a href="#" class="read-more">Read more</a>', collapsedHeight: 80, embedCSS: false,
beforeToggle: function(trigger, element, expanded) {
        if (!expanded) {
            $('.read-more-2').css({maxHeight: '350px'});
            $('.text-shadow').css({boxShadow: 'unset'})
        } else {
            $('.text-shadow').css({boxShadow: 'inset 0 -20px 20px -10px var(--background)'})
        }
}
});
}

$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1500);
    readMore();

$('#down-button').click(function() {

    event.preventDefault();
    newLocation = this.href;
    console.log(newLocation);
    
    $('body').fadeOut(300, newpage);
    $('body').fadeIn(300, newpage);
    });
    
    function newpage() {
    window.location = newLocation;
    }
    });


    $(window).scroll(function() {
        if ($(window).scrollTop() < 200) {
            $('#down-button').fadeIn(600);
        } else {
            $('#down-button').fadeOut(600);
        }
    });
    

$(window).on("load",function() {
    

    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $('.fade').each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom+300) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
       });
    
    readMore();
    }).scroll(); //invoke scroll-handler on page-load
  });