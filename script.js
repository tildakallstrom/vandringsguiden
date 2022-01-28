//Hämta to-the-top-knapp
mybutton = document.getElementByClass("topBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// vid klick, scrollas man upp
function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}
