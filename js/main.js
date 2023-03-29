// MOBILE NAVIGATION //
const navToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");
const mainHeader = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open-nav");
  mainHeader.classList.toggle("open-header");
});
/////////////////////////////sticky header /////////////////////////////////
const sectionHero = document.querySelector(".section-hero");
const sectionHeroOptions = {
  rootMargin: "-80px",
};
const sectionHeroObserver = new IntersectionObserver(function (
  entries,
  sectionHeroObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      mainHeader.classList.add("sticky");
    } else {
      mainHeader.classList.remove("sticky");
    }
  });
},
sectionHeroOptions);
sectionHeroObserver.observe(sectionHero);

////////////////////////////////////////////////////
// VIDEO PLAYER ICON //
const myviedoEl = document.querySelector(".my-video");
const piconEl = document.querySelector(".play-icon");

piconEl.addEventListener("click", () => {
  if (myviedoEl.paused) {
    myviedoEl.play();
    myviedoEl.setAttribute("controls", true);
    piconEl.style = "opacity:0";
  } else {
    myviedoEl.pause();
    piconEl.style = "opacity:1;";
  }
});

///////////////////////////////////////////////////////
// SLIDER //
const carouselEl = document.querySelector(".carousel-list");
const slides = Array.from(carouselEl.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const prevBtnEl = document.querySelector(".prev-btn");
const nextBtnEl = document.querySelector(".next-btn");

// set slide position next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// move to slide change slide
const moveToSlide = (carouselEl, currentSlide, targetSlide) => {
  carouselEl.style.transform = "translatex(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// DISPLAY NEXT IMAGE WHEN CLICKED ON NEXT BTN
nextBtnEl.addEventListener("click", (e) => {
  const currentSlide = carouselEl.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    moveToSlide(carouselEl, currentSlide, nextSlide);
  } else {
    prevBtnEl.focus();
  }
});

// DISPLAY PREVIOUS IMAGE WHEN I CLICKED ON PREVIOUS BTN
prevBtnEl.addEventListener("click", (e) => {
  const currentSlide = carouselEl.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    moveToSlide(carouselEl, currentSlide, prevSlide);
  } else {
    nextBtnEl.focus();
  }
});

/////////////////// price toggle ////////////////
const monthlyEl = document.querySelector(".month");
const yearlyEl = document.querySelector(".year");
const monthPrice = Array.from(document.querySelectorAll(".monthly"));
const yearPrice = Array.from(document.querySelectorAll(".yearly"));

yearlyEl.addEventListener("click", () => {
  yearlyEl.classList.add("active");
  monthlyEl.classList.remove("active");
  monthPrice.forEach((monthp, index) => {
    monthp.style.display = "none";
  });
  yearPrice.forEach((yearp, index) => {
    yearp.style.display = "block";
  });
});
monthlyEl.addEventListener("click", () => {
  yearlyEl.classList.remove("active");
  monthlyEl.classList.add("active");
  monthPrice.forEach((monthp) => {
    monthp.style.display = "block";
  });
  yearPrice.forEach((yearp) => {
    yearp.style.display = "none";
  });
});

//////////////////////testmeniols slider ////////////
const tprevBtnEl = document.querySelector(".tprev-btn");
const tnextBtnEl = document.querySelector(".tnext-btn");
const slider = document.querySelectorAll(".slide-item");
let currentIndex = 0;

function showSlide() {
  slider.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

tprevBtnEl.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.length - 1;
  }
  showSlide();
});
tnextBtnEl.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slider.length) {
    currentIndex = 0;
  }
  showSlide();
});
