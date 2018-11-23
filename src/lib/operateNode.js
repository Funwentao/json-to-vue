function downOnePx(e) {

}

function upOnePx(e) {

}

function deleteNode(e) {
  e && e.parentNode.removeChild(e)
  return null
}

export {
  deleteNode
}