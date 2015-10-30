var nav = document.getElementById('dl-Nav');
var aside = document.getElementById('dl-Aside');
var asideFirstChild = aside.firstChild;
var asideLastChild = aside.lastChild;

  isRoot = location.pathname == "/";

function onResizeOrLoad() {
  if (isRoot) {
    return;
  }
  if (window.innerWidth < 768) {
    moveNavUp()
    moveNavItemActive()
  }
  if (window.innerWidth > 768) {
    moveNavDown()
  }
}

window.addEventListener("load", onResizeOrLoad);
window.addEventListener("resize", onResizeOrLoad);


function moveNavItemActive () {
  var navItemActive = document.querySelector('.dl-Nav-Item--active');
  var navFirstChild = nav.firstChild;
  nav.insertBefore(navItemActive, navFirstChild);
}

function moveNavUp () {
  insertAfter(asideFirstChild.nextSibling, nav);
}

function moveNavDown () {
  aside.insertBefore(nav, asideLastChild);
}

function insertAfter (referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
