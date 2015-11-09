var dlWeb = (function() {

  var nav = document.getElementById('dl-Nav');
  var aside = document.getElementById('dl-Aside');
  var header = document.getElementById('dl-Header')
  var asideFirstChild = aside.firstChild;
  var asideLastChild = aside.lastChild;
  var navItemActive = document.querySelector('.dl-Nav-Item--active');
  var navFirstChild = nav.firstChild;
  var isRoot = location.pathname === "/";

  navItemActive.addEventListener('click', function(e) {
    e.preventDefault();
    if (width !== "narrow") {
      return
    }
    nav.classList.toggle('dl-Nav--isOpen');
  });

  function onResizeOrLoad() {
    if (isRoot) {
      return;
    }
    if (window.innerWidth < 1024) {
      width = "narrow";
      moveNavUp();
      moveNavItemActive();
    }
    if (window.innerWidth > 1024) {
      width = "wide";
      moveNavDown();
    }
  }
  var onResizeOrLoadDebounced = debounce(onResizeOrLoad)

  function moveNavItemActive() {
    nav.insertBefore(navItemActive, navFirstChild);
  }

  function moveNavUp() {
    aside.insertBefore(nav, header.nextSibling);
  }

  function moveNavDown() {
    aside.insertBefore(nav, asideLastChild);
  }

  // https://davidwalsh.name/javascript-debounce-function
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
  }

  return {
    setup: function setup() {
      window.addEventListener("load", onResizeOrLoadDebounced);
      window.addEventListener("resize", onResizeOrLoadDebounced);
    }
  }
})();

dlWeb.setup()
