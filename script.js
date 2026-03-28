// Dynamic Day/Night background
const hour = new Date().getHours();
const body = document.body;
if(hour >=6 && hour <18){
    body.style.backgroundImage = "url('assets/bg-morning.jpg')";
}else{
    body.style.backgroundImage = "url('assets/bg-night.jpg')";
}
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";

// Cocktail list
const cocktails = [
  {name:"Mojito", ingredients:["Rum","Lime Juice","Mint","Sugar Syrup","Soda Water"]},
  {name:"Margarita", ingredients:["Tequila","Lime Juice","Triple Sec","Salt"]},
  {name:"Cosmopolitan", ingredients:["Vodka","Triple Sec","Cranberry Juice","Lime Juice"]},
  {name:"Blue Lagoon", ingredients:["Vodka","Blue Curacao","Lemonade"]},
  {name:"Pina Colada", ingredients:["Rum","Coconut Cream","Pineapple Juice"]},
  // You can add more cocktails with ingredients here
];

// Load cocktails on homepage
const cocktailCards = document.getElementById("cocktailCards");
if(cocktailCards){
  cocktails.forEach(c => {
    const a = document.createElement("a");
    a.href = `cocktail.html?name=${encodeURIComponent(c.name)}`;
    a.className = "card";
    a.innerHTML = `<h3>${c.name}</h3>`;
    cocktailCards.appendChild(a);
  });
}

// Search functionality
const searchInput = document.getElementById("cocktailSearch");
if(searchInput){
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    cocktailCards.innerHTML = "";
    cocktails.filter(c => c.name.toLowerCase().includes(term) || c.ingredients.join(" ").toLowerCase().includes(term))
             .forEach(c => {
                const a = document.createElement("a");
                a.href = `cocktail.html?name=${encodeURIComponent(c.name)}`;
                a.className = "card";
                a.innerHTML = `<h3>${c.name}</h3>`;
                cocktailCards.appendChild(a);
             });
  });
}

// Cocktail page
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if(name){
  const title = document.getElementById("title");
  const video = document.getElementById("video");
  const list = document.getElementById("ingredients");

  if(title) title.innerText = name;
  if(video) video.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // Placeholder video

  const cocktailData = cocktails.find(c => c.name === name);
  if(cocktailData && list){
    cocktailData.ingredients.forEach(i => {
      const li = document.createElement("li");
      li.innerText = i;
      list.appendChild(li);
    });
  }
}
