const params = new URLSearchParams(window.location.search);
const type = params.get("type") || "basic";

const packages = {
  basic: {
    title: "Basic Package",
    features: [
      "1 Bartender",
      "50 Cocktails",
      "Free Cocktail Glasses",
      "Perfect for small parties"
    ],
    images: [
      "https://source.unsplash.com/600x400/?cocktail",
      "https://source.unsplash.com/600x400/?bartender",
      "https://source.unsplash.com/600x400/?party"
    ],
    bg: "linear-gradient(135deg, #0f172a, #020617)" // simple background
  },
  standard: {
    title: "Standard Package",
    features: [
      "1 Bartender",
      "100 Cocktails",
      "Free Cocktail Glasses",
      "Music setup",
      "Great for medium parties"
    ],
    images: [
      "https://source.unsplash.com/600x400/?bar",
      "https://source.unsplash.com/600x400/?cocktail,party",
      "https://source.unsplash.com/600x400/?bartender",
      "https://source.unsplash.com/600x400/?event"
    ],
    bg: "linear-gradient(135deg, #1c1f3a, #0f172a)" // slightly more premium
  },
  premium: {
    title: "Premium Package",
    features: [
      "2 Bartenders",
      "200 Cocktails",
      "Free Cocktail Glasses",
      "DJ Music",
      "Party Lights",
      "Dance Events Conducted",
      "Ultimate nightlife experience"
    ],
    images: [
      "https://source.unsplash.com/600x400/?luxury,bar",
      "https://source.unsplash.com/600x400/?vip,cocktail",
      "https://source.unsplash.com/600x400/?nightlife",
      "https://source.unsplash.com/600x400/?premium,party",
      "https://source.unsplash.com/600x400/?dance,party"
    ],
    bg: "linear-gradient(135deg, #ff4d6d, #1c1f3a)" // vibrant premium look
  }
};

// Populate package dynamically
const pkg = packages[type];
document.getElementById("packageTitle").innerText = pkg.title;
document.body.style.background = pkg.bg;

// Add features
const featuresList = document.getElementById("packageFeatures");
pkg.features.forEach(f=>{
  const li = document.createElement("li");
  li.innerText = f;
  featuresList.appendChild(li);
});

// Add gallery images
const galleryDiv = document.getElementById("packageGallery");
pkg.images.forEach(src=>{
  const img = document.createElement("img");
  img.src = src;
  img.alt = pkg.title;
  img.classList.add("gallery-img");
  galleryDiv.appendChild(img);
});
