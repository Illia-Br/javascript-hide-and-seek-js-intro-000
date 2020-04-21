function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var find = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < find.length; i++) {
    for (let c = 0; c < find[i].children.length; c++) {
      find[i].children[c].innerHTML = (parseInt(find[i].children[c].innerHTML, 10) + n).toString();
    }
  }
 return find
}


function deepestChild() {
  let find = document.getElementById('#grand-node').lastChild
  //let count = find[0]
//  find.querySelector(count[0])
  //while ((find.children)) {
    //  count = count.push(find.children[0])
    //  find = find.children[0]
//  }
  //return count[count.length]
}
