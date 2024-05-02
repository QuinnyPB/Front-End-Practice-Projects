// all icons
{
  /* <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>; */
}

// sets navigation extension to sticky when scrolling up
var navbarExt = document.getElementById("extension-navigation");

window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    navbarExt.style.position = "sticky";
  } else {
    navbarExt.style.position = "relative";
  }
  this.oldScroll = this.scrollY;
};

// set mega-menu functionality
var moreBtn = document.getElementById("active");
moreBtn.onclick = function () {
  if (moreBtn.innerHTML == "More +") {
    moreBtn.innerHTML = "More -";
    document.getElementsByClassName("mega-menu-container")[0].style.display =
      "block";
  } else {
    moreBtn.innerHTML = "More +";
    document.getElementsByClassName("mega-menu-container")[0].style.display =
      "none";
  }
};
console.log(moreBtn.className);
