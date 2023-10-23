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
let count = 0;
let slides = box.length-1;


const nextSlide = () => {
  box[count].classList.toggle("box-item_active");
  count >= slides ? count=0 :count++;
  box[count].classList.toggle("box-item_active");
};
next.addEventListener("click", nextSlide);



const prevSlide = () => {

  box[count].classList.toggle("box-item_active");
  count <= 0 ? count=slides :count--;
  box[count].classList.toggle("box-item_active");
};
prev.addEventListener("click", prevSlide);


