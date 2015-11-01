var nav = document.getElementById('dl-Nav');
var aside = document.getElementById('dl-Aside');
var asideFirstChild = aside.firstChild;
var asideLastChild = aside.lastChild;
var navItemActive = document.querySelector('.dl-Nav-Item--active');
var navFirstChild = nav.firstChild;
var isRoot = location.pathname === "/";

function onResizeOrLoad() {
  if (isRoot) {
    return;
  }
  if (window.innerWidth < 768) {
    moveNavUp();
    moveNavItemActive();
    openNavOnClickActiveItem();
  }
  if (window.innerWidth > 768) {
    moveNavDown();
  }
}

window.addEventListener("load", onResizeOrLoad);
window.addEventListener("resize", onResizeOrLoad);

function openNavOnClickActiveItem() {
  navItemActive.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('dl-Nav--isOpen');
  });
}

function moveNavItemActive() {
  nav.insertBefore(navItemActive, navFirstChild);
}

function moveNavUp() {
  aside.insertBefore(nav, asideFirstChild.nextSibling.nextSibling);
}

function moveNavDown() {
  aside.insertBefore(nav, asideLastChild);
}