const cocktails = [
  {name:"Mojito", ingredients:["White Rum","Sugar","Lime","Soda Water","Mint"]},
  {name:"Margarita", ingredients:["Tequila","Triple Sec","Lime Juice","Salt"]},
  {name:"Cosmopolitan", ingredients:["Vodka","Triple Sec","Cranberry Juice","Lime Juice"]},
  {name:"Blue Lagoon", ingredients:["Vodka","Blue Curacao","Lemonade","Ice"]},
  {name:"Pina Colada", ingredients:["White Rum","Coconut Cream","Pineapple Juice","Pineapple"]},
  {name:"Old Fashioned", ingredients:["Bourbon","Sugar","Bitters","Orange Twist"]},
  {name:"Negroni", ingredients:["Gin","Campari","Sweet Vermouth"]},
  {name:"Whiskey Sour", ingredients:["Whiskey","Lemon Juice","Sugar","Egg White"]},
  {name:"Daiquiri", ingredients:["Rum","Lime Juice","Sugar Syrup"]},
  {name:"Mai Tai", ingredients:["White Rum","Dark Rum","Orange Curacao","Lime Juice","Orgeat Syrup"]},
  {name:"Martini", ingredients:["Gin","Dry Vermouth","Olive"]},
  // Add as many as you want
];

// Dynamic Cocktail Cards for index.html
const cocktailCards = document.getElementById('cocktailCards');
const searchInput = document.getElementById('cocktailSearch');

function displayCocktails(filter="") {
  cocktailCards.innerHTML = "";
  cocktails.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || c.ingredients.some(i=>i.toLowerCase().includes(filter.toLowerCase())))
  .forEach(c => {
    const a = document.createElement('a');
    a.href = `cocktail.html?name=${encodeURIComponent(c.name)}`;
    a.classList.add('card');
    a.innerHTML = `<h3>${c.name}</h3><p>${c.ingredients.slice(0,3).join(", ")}...</p>`;
    cocktailCards.appendChild(a);
  });
}
displayCocktails();

// Search functionality
if(searchInput){
  searchInput.addEventListener('input',(e)=>{
    displayCocktails(e.target.value);
  });
}

// Cocktail Page Dynamic Ingredients
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if(name){
  document.getElementById("title").innerText = name;
  document.getElementById("video").src = "https://www.w3schools.com/html/mov_bbb.mp4";
  const cocktail = cocktails.find(c=>c.name===name);
  const list = document.getElementById("ingredients");
  if(cocktail){
    cocktail.ingredients.forEach(i=>{
      const li = document.createElement("li");
      li.innerText = i;
      list.appendChild(li);
    });
  }
}
