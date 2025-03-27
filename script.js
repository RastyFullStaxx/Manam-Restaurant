// Header Animation
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("main-navbar");
  
    if (navbar) {
      let hideTimeout;
  
      const showNavbar = () => {
        navbar.style.transform = "translateY(0)";
      };
  
      const hideNavbar = () => {
        navbar.style.transform = "translateY(-100%)";
      };
  
      const resetHideTimer = () => {
        showNavbar();
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(hideNavbar, 2000);
      };
  
      window.addEventListener("scroll", resetHideTimer);
      window.addEventListener("mousemove", resetHideTimer);
  
      resetHideTimer();
    }
  });
  
// Script to auto-fill number from badge
document.querySelectorAll('.guest-select').forEach(badge => {
  badge.addEventListener('click', () => {
    document.getElementById('guests').value = badge.dataset.value;
  });
});

// Replace alert in form submit
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const toast = new bootstrap.Toast(document.getElementById("toastSuccess"));
    toast.show();

    this.reset();
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Comfort food.",
    "Bold twists.",
    "Timeless taste.",
    "Filipino soul in every bite."
  ];

  const typeTarget = document.getElementById("typewriter");

  if (!typeTarget) return; // Exit if the typewriter element is not present

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    const displayText = currentPhrase.substring(0, charIndex);
    typeTarget.textContent = displayText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeLoop, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, 1000);
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, 200);
      }
    }
  }

  typeLoop();
});


// MENU TABS LOGIC
document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ JavaScript loaded and DOM ready");

  const tabs = document.querySelectorAll('#menu-tabs button');
  const sections = document.querySelectorAll('.menu-category-section');

  console.log("Found tabs:", tabs.length);
  console.log("Found sections:", sections.length);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target;
      console.log("🟢 Tab clicked:", targetId);

      // Toggle active class
      tabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      // Toggle sections
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('d-none');
          console.log(`✅ Showing section: ${section.id}`);
        } else {
          section.classList.add('d-none');
        }
      });
    });
  });
});






  