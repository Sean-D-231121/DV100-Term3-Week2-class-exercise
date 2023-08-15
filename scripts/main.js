// Plant Array
//---------------------------------

const plantsArray = [
  {
    name: "Ficus Tree",
    price: 210,
    description: "This is a Ficus Tree",
    image: "plant1.png",
    lightAmount: "low",
    addedDate: "2023-03-25",
    onSale: false,
  },
  {
    name: "White Sprite Succulent",
    price: 220,
    description: "This is a White Sprite Succulent",
    image: "plant2.png",
    lightAmount: "bright",
    addedDate: "2023-10-22",
    onSale: true,
  },
  {
    name: "Snake plant",
    price: 350,
    description: "This is a Snake plant",
    image: "plant3.png",
    lightAmount: "low",
    addedDate: "2023-01-05",
    onSale: true,
  },
  {
    name: "Parlour Palm",
    price: 245,
    description: "This is a Parlour Palm",
    image: "plant4.png",
    lightAmount: "low",
    addedDate: "2023-03-09",
    onSale: true,
  },
  {
    name: "Japanese Maple",
    price: 330,
    description: "This is a Japanese Maple",
    image: "plant5.png",
    lightAmount: "bright",
    addedDate: "2023-11-10",
    onSale: true,
  },
];
let appliedFilter = "";
let appliedSort = "date added";

// When the document loads
$(document).ready(function(){
    // ---------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $(".hero-image-2").animate({ top: "-30px" });
    $(".hero-image").animate({ top: "-30px" });

    //Hide all description text from the plant cards
    
    // load loadPlants function
    filterAndSortPlants();
   loadTable();

    
});
//----------------------
// load all plants
//----------------------
onLoadPlants = (plantsToShow) => {
  $("#plantsContainer").empty();

  for (let i = 0; i < plantsToShow.length; i++) {
    const currentPlant = plantsToShow[i];
    // 1: select the plants container add the plant card to it.
    $("#plantsContainer").append($("#plantCardTemplate").html());
    //2: create that contains the most recently made card
    let currentCard = $("#plantsContainer").children().eq(i);
    $(currentCard).find(".card-img-top").attr("src", "../assets/" + currentPlant.image);
    $(currentCard).find("#nameText").text(currentPlant.name);
    $(currentCard).find("#priceText").text("R "+currentPlant.price + ".00");
    $(currentCard).find("#descriptionText").text(currentPlant.description);
    

    //  Hide the description text from the plant card
    $(currentCard).find("#descriptionText").hide();
    
  }
}

   

// Filter or sort is clicked
$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');
 
  filterAndSortPlants()
  
})
$("input[name='sortRadio']").click(function () {
  appliedSort = $(this).attr('value');
  
  filterAndSortPlants();
});

filterAndSortPlants = () =>{
  let filteredAndSortedPlantArray = [];
  if(appliedFilter){
    if(appliedFilter === "bright" || "low"){
      filteredAndSortedPlantArray = plantsArray.filter(plant => plant.lightAmount === appliedFilter);
    }if(appliedFilter === "onSale"){
      filteredAndSortedPlantArray = plantsArray.filter(plant => plant.onSale === true)
    }
  }else{
    filteredAndSortedPlantArray = plantsArray;
  }
  // Sort plants
  if (appliedSort === "date added") {
    filteredAndSortedPlantArray = filteredAndSortedPlantArray.sort((a, b) => {
      let dateSortItemA = new Date(a.addedDate);
      let dateSortItemB = new Date(b.addedDate);
      return dateSortItemB - dateSortItemA;
    });
  } else if (appliedSort === "low-to-high") {
    // sort plants from low to high price
    filteredAndSortedPlantArray = filteredAndSortedPlantArray.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (appliedSort === "sortAlpha") {
    // sort plants from low to high price
    filteredAndSortedPlantArray = filteredAndSortedPlantArray.sort((a,b) =>{
      if(a.name < b.name){
        return -1;
      }
      if(a.name > b.name){
        return 1;
      }
      return 0;
    })
  }
 
  onLoadPlants(filteredAndSortedPlantArray);
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
      .eq(i);
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
  
 
 
})

 
 
