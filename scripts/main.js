// Plant Array
//---------------------------------

const plantsArray = [
  {
    name: "Ficus Tree",
    price: "R350.00",
    description: "This is a Ficus Tree",
    image: "plant1.png",
  },
  {
    name: "White Sprite Succulent",
    price: "R350.00",
    description: "This is a White Sprite Succulent",
    image: "plant2.png",
  },
  {
    name: "Snake plant",
    price: "R350.00",
    description: "This is a Snake plant",
    image: "plant3.png",
  },
  {
    name: "Parlour Palm",
    price: "R350.00",
    description: "This is a Parlour Palm",
    image: "plant4.png",
  },
  {
    name: "Japanese Maple",
    price: "R350.00",
    description: "This is a Japanese Maple",
    image: "plant5.png",
  },
];

// When the document loads
$(document).ready(function(){
    // ---------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $(".hero-image-2").animate({ top: "-30px" });
    $(".hero-image").animate({ top: "-30px" });

    //Hide all description text from the plant cards
    
    // load loadPlants function
    onLoadPlants();
   loadTable();

    
}); 
//----------------------
// load all plants
//----------------------
onLoadPlants = () => {
  
  for (let i = 0; i < plantsArray.length; i++) {
    const currentPlant = plantsArray[i];
    // 1: select the plants container add the plant card to it.
    $("#plantsContainer").append($("#plantCardTemplate").html());
    //2: create that contains the most recently made card
    let currentCard = $("#plantsContainer").children().eq(i + 1);
    $(currentCard).find(".card-img-top").attr("src", "../assets/" + currentPlant.image);
    $(currentCard).find("#nameText").text(currentPlant.name);
    $(currentCard).find("#priceText").text(currentPlant.price);
    $(currentCard).find("#descriptionText").text(currentPlant.description);
    

    //  Hide the description text from the plant card
    $(currentCard).find("#descriptionText").hide();
  }
}

   
  
//  Removes the nearest "table-row" to the div with class .removeButton
$(".removeButton").click(function(){
   $(this).closest('.table-row').remove();

})

$("#plantsContainer").on("click", ".card", function () {
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  // Res the image top
  $(this).find(".card-img-top").toggleClass("small");
});
loadTable = () => {
  for (let i = 0; i < plantsArray.length; i++) {
    const plantData = plantsArray[i];

    $("#plantTableBody").append($("#tableRowTemplate").html());

    let currentPlant = $("#plantTableBody")
      .children()
      .eq(i + 1);
    $(currentPlant)
      .find(".table-image-size")
      .attr("src", "../assets/" + plantData.image);
    $(currentPlant).find("#table-title-text").text(plantData.name);
  }
};
$("#plantTableBody").on("click", ".removeButton", function(){
  const index = $(this).parent().index() -1;
  $(this).parent().remove()
  plantsArray.splice(index,1)
  console.log(plantsArray)
 
 
})

 
 
