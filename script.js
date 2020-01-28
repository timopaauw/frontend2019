//even checken of het script werkt
console.log("Ja hallo")



//hamburgermenu
//selecteer het hamburgermenu
var hamburgerButton = document.querySelector(".hamburgerMenu");

//selecteer het menu
var menu = document.getElementsByTagName("nav")[0];

//spreek de class geklapt aan
function uitklappen() {
    menu.classList.toggle("uitgeklapt");
}

//bij een klik zal uitklappen getriggered worden
hamburgerButton.addEventListener("click", uitklappen);

//einde hamburgermenu


//hieronder is het javascript voor de back to top knop de vinden


(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('naarBovenFade');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('naarBovenFade');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
        //maakt het scrollen nu wel smooth!
      window.scrollBy(0, -40);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.naarBoven');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
