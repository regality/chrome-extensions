walk(document.body);

function walk(node) {
  let child, next;

  switch (node.nodeType)  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild
      while (child) {
        next = child.nextSibling
        walk(child)
        child = next
      }
      break
    case 3: // Text node
      handleText(node)
      break
  }
}

function handleText(textNode) {
  textNode.nodeValue =
    textNode.nodeValue
    .replace(/\bCloud\b/g, "Butt")
    .replace(/\bcloud\b/g, "butt")
}

