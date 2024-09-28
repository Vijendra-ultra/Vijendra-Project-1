const btnnavEl = document.querySelector(".nav--btn");
const headerEl = document.querySelector(".nav");

btnnavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Mechanism is to add a class named nav-open to header which has a class called nav .  we are selecting a button  called nav--btn and analysing any click events, in case there any we add a class called nav-open to header. If user clicks again we remive the class.

/////////////////////////////////////////////////////

// Implementation to enable smooth scrolling in Safari

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //   Scroll back towards top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    // closing mobile navigation
    if (link.classList.contains("navigation-item"))
      headerEl.classList.remove("nav-open");
  });
});

////////////////////////////////////////////////////////////////////

// Sticky navigation script
const sectionHeroEl = document.querySelector(".hero--section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin:'-80px',
  }
);

obs.observe(sectionHeroEl);
