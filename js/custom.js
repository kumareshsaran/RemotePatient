var media = $('video').not("[autoplay='autoplay']");
//for media, you could give your scroll play videos a class if you need to make it more specific. This would play ALL html5 video tags when scrolled too. 
var tolerancePixel = 80;
$(document).on('scroll', checkMedia);
function checkMedia(){
  // Get current browser top and bottom
  var scrollTop = $(window).scrollTop() + tolerancePixel;
  var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

  media.each(function(index, el) {
    var yTopMedia = $(this).offset().top;
    var yBottomMedia = $(this).height() + yTopMedia;

    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
      $(this).get(0).play();
    } else {
      $(this).get(0).pause();
      // $(this).get(0).currentTime = 0;
    }
  });
}
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 7000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum)+'%');
          },
          complete: function() {
            $this.text(this.countNum+'%');
            //alert('finished');
          }

        });
    });
    a = 1;
  }
})