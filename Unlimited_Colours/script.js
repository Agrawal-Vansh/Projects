const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColor = function () {
    console.log('Start button clicked. Current intervalId:', intervalId);
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
      console.log('New interval started. New intervalId:', intervalId);
    } else {
      console.log('Interval already running. intervalId:', intervalId);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  
  const stopChangingColor = function () {
    console.log('Stop button clicked. Current intervalId:', intervalId);
    if (intervalId) {
      clearInterval(intervalId);
      console.log('Interval cleared. intervalId before setting to null:', intervalId);
      intervalId = null;
      console.log('intervalId after setting to null:', intervalId);
    }
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  