$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
       items: 4, // Number of items to display
       loop: true, // Infinite loop
       margin: 10, // Space between items
       autoplay: true, // Autoplay
       autoplayTimeout: 3000, // Autoplay interval in milliseconds
       responsive:{
          0:{
             items:1
          },
          600:{
             items:3
          },
          1000:{
             items:4
          }
       }
    });
 });