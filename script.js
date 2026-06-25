function bookTable() {
  alert("🍽 Thank You! Your table booking request has been received.");
}

// Contact Form Message
const form = document.querySelector("form");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("✅ Thank you for contacting us! We will get back to you soon.");

    form.reset();
  });
}

// Fade Animation on Scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card, .review, .gallery img").forEach((el)=>{
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease";

  observer.observe(el);
});

// Navbar Background Change
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.style.background = "rgba(0,0,0,0.85)";
  }else{
    header.style.background = "rgba(255,255,255,0.08)";
  }
});
