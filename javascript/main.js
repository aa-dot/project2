/*(function ($) {
    "use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
})(jQuery);*/

/*count the numbers*/
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

/*read more and read less
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  */
/*ebram*/
  // import {blurphone} from 'grill';
function blurphone(){
    let chphone=document.getElementById("phone").value;
    if(isNaN(chphone)){
       
         document.getElementById("validphone").innerHTML="Invalid PLZ Enter Numbers";
         document.getElementById("phone").focus();
          chphone.select();
    }   
        else if(chphone=="undefined" || chphone.length<11){
          document.getElementById("validphone").innerHTML="Invalid Enter 11 Numbers only";
          document.getElementById("phone").focus();
   
    }
    else{
      document.getElementById ("validphone").innerHTML="Valid";
    }
    
   }