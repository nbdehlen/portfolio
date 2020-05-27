// $('.read-more-2').readmore({ speed: 75, lessLink: '<a href="#" class="read-more">Read less</a>',
// moreLink: '<a href="#" class="read-more">Read more</a>', collapsedHeight: 62});


$('.read-more-2').readmore({ speed: 75, lessLink: '<a href="#" class="read-more">Read less</a>',
moreLink: '<a href="#" class="read-more">Read more</a>', collapsedHeight: 69, embedCSS: false,
beforeToggle: function(trigger, element, expanded) {
        if (!expanded) {
    
            // $('#project-article-2').css({height: '500px'});
            $('.read-more-2').css({maxHeight: '200px'});
            $('.text-shadow').css({boxShadow: 'unset'})

            // $(window).width() <= '830px' ? $('#project-article-2').css({height: '840px'}) : $('#project-article-2').css({height: '542px'});
        } else {
            // $('#project-article-2').css({height: '300px'});
            $('.read-more-2').css({maxHeight: '200px'});
            $('.text-shadow').css({boxShadow: 'inset 0 -20px 20px -10px var(--background)'})

            // $(window).width() <= '830px' ? $('#project-article-2').css({height: '840px'}) : $('#project-article-2').css({height: '542px'});
        }
}
,
// afterToggle: function(trigger, element, expanded) {
//     $('#project-article-2').css({height: '900px'});
// }

});


//  $('.article-text').readmore({ speed: 75, lessLink: '<a href="#">Read less</a>',
//  moreLink: '<a href="#">Read more</a>' });

//  $('article').readmore({ speed: 75, lessLink: '<a href="#">Read less</a>',
//  moreLink: '<a href="#">Read more</a>' });

// $('*').width();

// $('.project-section').fadeOut();

$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1500);

$('#down-button').click(function() {

    event.preventDefault();
    newLocation = this.href;
    
    $('body').fadeOut(300, newpage);
    $('body').fadeIn(300, newpage);

    // $('#down-button').css({display: 'none'})
    
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
    
// const fade = ['.about-container', '.exp-h2', '.skills-article', '.project-article', '.grey-text-p'];

$(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();

    //   for (i=0; i<fade.length; i++) {

    //   $(fade[i]).each(function() {
        $('.fade').each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();
        
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom+120) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
        }
       });
    // }
    }).scroll(); //invoke scroll-handler on page-load
  });