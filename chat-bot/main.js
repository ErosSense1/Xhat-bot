import { txt, but, msg, clean } from "./functions.js";

but.addEventListener("click", msg);
but.addEventListener("click", clean);
but.addEventListener("click", c);
txt.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    event.preventDefault();
    but.click();
  }
});
function c() {
  but.style.backgroundColor = "#a434d8";
  setTimeout(() => {
    but.style.backgroundColor = "";
  }, 100);
}
window.onkeydown = (e) => {
  if (e.key == "Emter") {
    c();
  }
};

window.onload = msg;
