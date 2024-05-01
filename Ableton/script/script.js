// all icons
{
  /* <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>; */
}

// sets navigation extension to sticky when scrolling up
var navbarExt = document.getElementById("extension-navigation");

window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    navbarExt.style.position = "sticky";
    navbarExt.style.transform = "transform: translateY(120px, 50%)";
  } else {
    navbarExt.style.position = "relative";
  }
  this.oldScroll = this.scrollY;
};
