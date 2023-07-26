// When the document loads
$(document).ready(function(){

    console.log("Hello");

    // When the document loads, animate the hero image upwards
    
    if ($("#carouselExample .carousel-inner .carousel-item").is(":visible")) {
      $(".hero-image-2").animate({ top: "-100px" });
      $(".hero-image").animate({ top: "-100px" });
    }
}); 
 
 
