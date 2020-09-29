$(document).ready(function() {

  //INDEX IMAGES SLIDER
      $(function() {
  
      //configuration
      var width = 720;
      var speed = 1000;
      var pause = 3000;
      var current = 1;
  
      //cache DOM
      var $slider = $('#slider');
      var $slides = $slider.find('#slides');
      var $slide = $slides.find('.slide');
  
  
    setInterval(function() {
              //move image the defined width and speed to the left
        $slides.animate({'margin-left': '-='+width}, speed, function() {
              //count number of slides and loop back to first from last
        current++;
        if (current === $slide.length) {
          current = 1;
          $slides.css('margin-left', 0);
        }
      });			
    }, pause);
      });
  });

