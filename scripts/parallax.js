const heroSection = document.querySelector(".hero");
const formSection = document.querySelector(".form-container");

const { defaultX: defaultXHero, defaultY: defaultYHero } =
  getBackgroundPosition(heroSection);
const { defaultX: defaultXForm, defaultY: defaultYForm } =
  getBackgroundPosition(formSection);
const speed = 5;

updateBlocks();

window.addEventListener("scroll", updateBlocks);

////////////////////////////////////////////////////////////////////////////

function getBackgroundPosition(element) {
  const defaultX = parseFloat(
    getComputedStyle(element).backgroundPosition.split(" ")[0]
  );
  const defaultY = parseFloat(
    getComputedStyle(element).backgroundPosition.split(" ")[1]
  );
  return { defaultX, defaultY };
}

function parallaxBlock(element, defaultPositionX, defaultPositionY, speed) {
  const resSpeed = speed * 0.1;
  element.style.backgroundPosition = `${defaultPositionX}px ${
    defaultPositionY -
    (element.getBoundingClientRect().y + window.scrollY) * resSpeed +
    window.scrollY * resSpeed
  }px`;
}

function updateBlocks() {
  parallaxBlock(heroSection, defaultXHero, defaultYHero, speed);
  parallaxBlock(formSection, defaultXForm, defaultYForm, speed);
}
