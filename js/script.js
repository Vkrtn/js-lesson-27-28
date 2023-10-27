// const box = document.querySelectorAll(".box-item");

// box.forEach(el => el.onclick = ()=> console.log(this.innerText))

// box.forEach((el) =>
//   el.addEventListener("click", () => {
//     el.style.background
//       ? (el.style.background = "")
//       : (el.style.background = "red");
//   })
// );

// classlist
// add,remove,toggle,contains

// box.className += " active";


const box = document.querySelectorAll(".box-item");
const next = document.querySelector(".slider-btn_next");
const prev = document.querySelector(".slider-btn_prev");
const sliderDots = document.querySelectorAll(".dot");
const slidesHTML = document.querySelector(".slides");

let count = 0;
let slides = box.length - 1;



const setCurrentSlide = () => box[0].classList.toggle("box-item_active");
setCurrentSlide();

const nextSlide = () => {
  box[count].classList.toggle("box-item_active");
  sliderDots[count].classList.toggle("dot-active");
  count >= slides ? (count = 0) : count++;
  box[count].classList.toggle("box-item_active");
  sliderDots[count].classList.toggle("dot-active");
};
next.addEventListener("click", nextSlide);

const prevSlide = () => {
  box[count].classList.toggle("box-item_active");
  sliderDots[count].classList.toggle("dot-active");
  count <= 0 ? (count = slides) : count--;
  box[count].classList.toggle("box-item_active");
  sliderDots[count].classList.toggle("dot-active");
};
prev.addEventListener("click", prevSlide);

const setActiveDot = () => sliderDots[0].classList.toggle("dot-active");
setActiveDot();

// sliderDots.forEach((el) => {
//   el.addEventListener("click", function () {
//     box[count].classList.remove("box-item_active");
//     sliderDots[count].classList.remove("dot-active");
//     box[slides].classList.remove("box-item_active");
//     sliderDots[slides].classList.remove("dot-active");
//     slides = this.dataset.number;
//     box[slides].classList.toggle("box-item_active");
//     sliderDots[slides].classList.toggle("dot-active");
//   });
// });
