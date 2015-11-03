var dlWeb = (function() {

  var nav = document.getElementById('dl-Nav');
  var aside = document.getElementById('dl-Aside');
  var header = document.getElementById('dl-Header')
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
    aside.insertBefore(nav, header.nextSibling);
  }

  function moveNavDown() {
    aside.insertBefore(nav, asideLastChild);
  }


  return {
    setup: function setup() {
      window.addEventListener("load", onResizeOrLoad);
      window.addEventListener("resize", onResizeOrLoad);
    }
  }
})();

dlWeb.setup()
