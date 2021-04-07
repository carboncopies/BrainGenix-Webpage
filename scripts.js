var mobileHam = new Hamburger('.b-hamburger');
mobileHam.el.addEventListener('click', function() {
     mobileHam.toggle();
     if (mobileHam.status === true) {
          console.log("hamburger opened!");
     } else {
          console.log("hamburger closed... :(");
     }
});