function getStyleTop(e){
  return parseInt(e.style.top)
}
function getStyleLeft(e){
  return parseInt(e.style.left)
}
function downOnePx (e) {
  e.style.top = getStyleTop(e) + 1 + 'px'
}

function upOnePx (e) {
  e.style.top = getStyleTop(e) - 1 + 'px'
}

function leftOnePx (e) {
  e.style.left = getStyleLeft(e) - 1 + 'px'
}

function rightOnePx (e) {
  e.style.left = getStyleLeft(e) + 1 + 'px'
}

function deleteNode(e) {
  e && e.parentNode.removeChild(e)
  return null
}

export {
  deleteNode,
  downOnePx,
  upOnePx,
  leftOnePx,
  rightOnePx
}