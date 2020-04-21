function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var find = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < find.length; i++) {
    
  find[i].innerHTML = (parseInt(find[i].innerHTML, 10) + n).toString();
 }
 return find
}

function deepestChild() {

}
