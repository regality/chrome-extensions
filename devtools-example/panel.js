chrome.devtools.panels.elements.onSelectionChanged.addListener(function() {
  chrome.devtools.inspectedWindow.eval(
    `(function() {
      return {
        text: $0.textContent.substr(0, 50),
        class: $0.className,
        tag: $0.tagName
      }
    })()`,
    function(result, isException) {
      let details = document.getElementById('details')
      details.innerHTML = `
        <b>tag:</b> ${result.tag}<br />
        <b>text:</b> ${result.text}<br />
        <b>class:</b> ${result.class}<br />
      `
    }
  )
})

const removeBtn = document.getElementById('remove')
const rotateBtn = document.getElementById('rotate')
const highlightBtn = document.getElementById('highlight')

removeBtn.onclick = function() {
  chrome.devtools.inspectedWindow.eval('$0.remove()')
}

highlightBtn.onclick = function() {
  chrome.devtools.inspectedWindow.eval('$0.style.backgroundColor = "red"')
}

rotateBtn.onclick = function() {
  chrome.devtools.inspectedWindow.eval('$0.style.transform', function(result) {
    let newStyle
    switch (result) {
      case 'rotate(90deg)': newStyle = 'rotate(180deg)'; break;
      case 'rotate(180deg)': newStyle = 'rotate(270deg)'; break;
      case 'rotate(270deg)': newStyle = 'rotate(360deg)'; break;
      case 'rotate(360deg)': newStyle = 'rotate(90deg)'; break;
      default: newStyle = 'rotate(90deg)'
    }
    chrome.devtools.inspectedWindow.eval(`$0.style.transform = "${newStyle}"`)
  })
}
