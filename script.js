const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(name){
  document.getElementById("title").innerText = name;

  document.getElementById("video").src =
  "https://www.w3schools.com/html/mov_bbb.mp4"; // placeholder video

  // You can expand this to include all cocktail ingredients dynamically
  const allIngredients = {
    Mojito: ["White Rum","Lime Juice","Mint Leaves","Sugar Syrup","Soda Water","Ice Cubes"],
    Margarita: ["Tequila","Triple Sec","Lime Juice","Salt","Ice"],
    Cosmopolitan: ["Vodka","Triple Sec","Cranberry Juice","Lime Juice","Ice"],
    BlueLagoon: ["Vodka","Blue Curacao","Lemonade","Ice","Lemon Slice"],
    PinaColada: ["White Rum","Coconut Cream","Pineapple Juice","Ice","Pineapple Slice"],
    MaiTai: ["White Rum","Dark Rum","Lime Juice","Orange Curacao","Orgeat Syrup"],
    OldFashioned: ["Bourbon","Sugar","Angostura Bitters","Orange Peel","Ice"],
    Negroni: ["Gin","Campari","Sweet Vermouth","Orange Slice","Ice"],
    Daiquiri: ["White Rum","Lime Juice","Sugar Syrup","Ice"],
    WhiskeySour: ["Bourbon","Lemon Juice","Sugar Syrup","Egg White","Ice"]
  };

  const ingredients = allIngredients[name] || ["Ingredient list coming soon"];
  const list = document.getElementById("ingredients");

  ingredients.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  });
}
