//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const hamburger=document.querySelector(".hamburger");
const navmenu =document.querySelector(".navmenu");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active")}

)

document.querySelectorAll(".nav-link").forEach
(n => n.addEventListener("click",()=> {
  hamburger.classList.remove("active");
  navmenu.classList.remove("active");

}))