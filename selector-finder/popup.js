

let input = document.getElementById('selector')
let btn = document.getElementById('find-selector')
let messageDiv = document.getElementById('message')

btn.onclick = function() {
  const selector = input.value
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { selector: selector })
  });
}
