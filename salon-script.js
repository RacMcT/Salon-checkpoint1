//Hamburger Menu JS:

/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

