const randomCode = `
(function() {
  let divs = document.getElementsByTagName("div")
  for (let i = 0; i < divs.length; ++i) {
    let div = divs[i]
    let textColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    let bgColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
    let rotate = Math.round(Math.random() * 4 - 2).toString()
    let scale = (Math.random() * .2 + .9).toFixed(1)
    div.style.color = textColor
    div.style.backgroundColor = bgColor
    div.style.transform = \`rotate(\${rotate}deg) scale(\${scale})\`
  }
})()
`

const btn = document.getElementById('do-the-thing')

btn.onclick = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { code: randomCode })
  })
}
