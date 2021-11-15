var mobileHam = new Hamburger('.b-hamburger');
mobileHam.el.addEventListener('click', function() {
     mobileHam.toggle();
     if (mobileHam.status === true) {
          document.querySelector("body nav").classList.remove("active");
     } else {
          document.querySelector("body nav").classList.add("active");
     }
});