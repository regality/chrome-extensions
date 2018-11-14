

chrome.runtime.onMessage.addListener(request => {
  $(request.selector).css({
    backgroundColor: 'red',
    border: '3px solid black'
  })
});
