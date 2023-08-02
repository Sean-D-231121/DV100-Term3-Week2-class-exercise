// When the document loads
$(document).ready(function(){

    console.log("Hello");
    // ---------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    
    

    //Hide all description text from the plant cards
    $(".description").hide();
    //When  a card is clicked

   

    
}); 
if ($("#carouselExample .carousel-inner .carousel-item").is(":visible")) {
  $(".hero-image-2").animate({ top: "-30px" });
  $(".hero-image").animate({ top: "-30px" });
}
 $(".card").click(function () {
   //  toggle price and description text
   $(this).find(".card-text.price").toggle()
   
   $(this).find(".description").toggle();
   // Res the image top
   $(this).children(".card-img-top").toggleClass("small");
 });
//  Removes the nearest "table-row" to the div with class .removeButton
$(".removeButton").click(function(){
   $(this).closest('.table-row').remove();

})

 
 
