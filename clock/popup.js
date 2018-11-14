setInterval(() => {
  const clock = document.getElementById('clock')
  clock.innerText = (new Date()).toLocaleTimeString()
}, 1000)
