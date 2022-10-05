const scrollElements = document.querySelectorAll(".js-scroll");

// __ Detecter un élément lorsqu'il est dans "View" :
// Pour obtenir la distance d'un élément par rapport au haut de la page, on utilise la méthode getBoundingCLientRect().top
//Pour obtenir la hauteur de la page, on utilise window.innerHeight ou document.documentElement.clientHeight

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    } 
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});