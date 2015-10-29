var nav = document.getElementById('dl-Nav')
var header = document.getElementById('dl-Header')
var aside = document.getElementById('dl-Aside')
var asideFirstChild = aside.firstChild
var asideLastChild = aside.lastChild

var isRoot = location.pathname == "/";

var events = ['resize', 'load'];

for (var e in events) {
  var evt = events[e];
  var loopThroughEvents = function(evt) {
    window.addEventListener( evt, function() {
      console.log(evt)
    })
  }
}

window.addEventListener('resize', function () {
  if (isRoot == false){
    if (window.innerWidth < 768) {
      moveNavUp()
    }
    if (window.innerWidth > 768) {
      moveNavDown()
    }
  }
});


function moveNavUp () {
  insertAfter(asideFirstChild.nextSibling, nav);
}

function moveNavDown () {
  aside.insertBefore(nav, asideLastChild);
}

function insertAfter (referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
