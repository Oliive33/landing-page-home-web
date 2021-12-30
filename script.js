// function toggle() {
//   var bg = document.querySelector("section");
//   bg.classList.toggle("active");
// }

const tl = gsap.timeline({
  defaults: {
    ease: "power2.out",
  },
});
tl.fromTo(
  ".h1animate",
  {
    y: "100%",
    opacity: 0,
  },
  {
    duration: 2,
    y: "0%",
    opacity: 1,
    ease: "power1.out",
  }
);
tl.to(
  ".animation",
  {
    duration: 2.5,
    opacity: 0,
    display: "none",
    ease: "power1.out",
  },
  "+=1"
);
tl.fromTo(
  ".p",
  {
    y: "100%",
    opacity: 0,
  },
  {
    duration: 1.5,
    y: "0%",
    opacity: 1,
  },
  "-=1"
);
tl.fromTo(
  ".heroImg",
  {
    y: "100%",
  },
  {
    duration: 1,
    y: "0%",
    opacity: 1,
    ease: "power1.in",
  },
  "-=3"
);
tl.fromTo(
  ".logo",
  {
    y: "100%",
    opacity: 0,
  },
  {
    duration: 1,
    y: "0%",
    opacity: 1,
  },
  "-=0.5"
);
tl.fromTo(
  ".nav__btns",
  {
    y: "100%",
    visibilty: "none",
  },
  {
    duration: 2,
    y: "0%",
    visibilty: "visible",
  },
  "-=1.5"
);
tl.fromTo(
  ".social , .ul",
  {
    y: "100%",
    opacity: 0,
  },
  {
    duration: 2,
    y: "0%",
    opacity: 1,
    delay: 0.25,
    stagger: 0.25,
  },
  "-=1"
);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Selection du thème si l'utilisateur sélectionne le mode
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// ON obtient le thème actuel de l'interface après validation du dark-theme
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// Validation du thème si l'utilisateur le choisit
if (selectedTheme) {
  // Opération ternaire, on demande quel thème ?
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
// Activation / Désactivation du thème avec le boutton
themeButton.addEventListener("click", () => {
  // Ajoute et enlève l'icone
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // On sélectionne le thème et l'icone actuel que l'utilisateur choisi
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
