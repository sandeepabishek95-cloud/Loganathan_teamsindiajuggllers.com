const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const packageSelected = params.get("package");

// --- Cocktail page ---
if(name){
  document.getElementById("title").innerText = name;
  document.getElementById("video").src = "https://www.w3schools.com/html/mov_bbb.mp4";

  const ingredients = [
    "Vodka","Lime Juice","Mint Leaves","Sugar Syrup",
    "Ice Cubes","Soda Water","Salt","Orange Garnish"
  ];

  const list = document.getElementById("ingredients");
  list.innerHTML = "";
  ingredients.forEach(i=>{
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  });
}

// --- Packages page ---
function loadPackagePage(){
  if(!packageSelected) return;
  const packagesInfo = {
    basic: { bartender:1, cocktails:50, glasses:true, music:false, dj:false },
    standard: { bartender:1, cocktails:100, glasses:true, music:true, dj:false },
    premium: { bartender:2, cocktails:200, glasses:true, music:true, dj:true }
  };
  const pkg = packagesInfo[packageSelected];
  const detailsDiv = document.getElementById("package-details");
  if(detailsDiv){
    detailsDiv.innerHTML = `
      <h2>${packageSelected.toUpperCase()} Package</h2>
      <p>Bartenders: ${pkg.bartender}</p>
      <p>Cocktails: ${pkg.cocktails}</p>
      <p>Free glasses: ${pkg.glasses ? "Yes":"No"}</p>
      <p>Music: ${pkg.music ? "Yes":"No"}</p>
      <p>DJ & Party Lights: ${pkg.dj ? "Yes":"No"}</p>
      <a href="https://wa.me/917010022388" class="back-btn">Book Now</a>
    `;
  }
}

// --- Booking Form ---
const bookingForm = document.getElementById("booking-form");
if(bookingForm){
  bookingForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = this.name.value;
    const phone = this.phone.value;
    const date = this.date.value;
    const packageType = this.package.value;
    if(name && phone && date && packageType){
      document.getElementById("booking-message").innerText =
        `Thank you ${name}, your ${packageType} package booking is confirmed for ${date}!`;
      this.reset();
    }
  });
}

// --- Reviews ---
const REVIEWS = [
  { name:"Alice", review:"Amazing bartending service! My party was a hit." },
  { name:"Ravi", review:"Professional and elegant cocktails." },
  { name:"Sneha", review:"Loved the premium experience, highly recommended!" }
];

function loadReviews(){
  const reviewsContainer = document.getElementById("reviews");
  if(reviewsContainer){
    reviewsContainer.innerHTML = "";
    REVIEWS.forEach(r=>{
      const div = document.createElement("div");
      div.className="card";
      div.innerHTML = `<strong>${r.name}</strong><p>${r.review}</p>`;
      reviewsContainer.appendChild(div);
    });
  }
}

// --- Cocktail Search (basic demo) ---
const cocktails = [
  { name:"Mojito", ingredients:["Rum","Mint","Lime","Sugar","Soda"] },
  { name:"Margarita", ingredients:["Tequila","Triple sec","Lime"] },
  { name:"Cosmopolitan", ingredients:["Vodka","Cointreau","Lime","Cranberry"] },
  { name:"Pina Colada", ingredients:["Rum","Pineapple","Coconut milk"] },
  { name:"Blue Lagoon", ingredients:["Vodka","Blue Curacao","Lemonade"] }
];

const searchInput = document.getElementById("cocktail-search");
const searchResults = document.getElementById("cocktail-search-results");

if(searchInput){
  searchInput.addEventListener("input", function(){
    const query = this.value.toLowerCase();
    searchResults.innerHTML = "";
    cocktails.filter(c => c.name.toLowerCase().includes(query))
      .forEach(c=>{
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<strong>${c.name}</strong><p>Ingredients: ${c.ingredients.join(", ")}</p>`;
        searchResults.appendChild(card);
      });
  });
}

// --- Load homepage content ---
function loadHomePage(){
  loadReviews();
  // Dynamic background
  const hour = new Date().getHours();
  const body = document.getElementById("body");
  if(hour >= 6 && hour < 18) body.style.backgroundImage = "url('assets/bg-morning.jpg')";
  else body.style.backgroundImage = "url('assets/bg-night.jpg')";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
}
