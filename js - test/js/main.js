{
  let timer = null;
  let number = 0;
  document.getElementById("playBtn").addEventListener("click", function () {
    setTimeout(() => {}, 3000);
    if (timer === null) {
      timer = setInterval(function () {
        number = Math.round(Math.random() * 10000);
        document.getElementById("playerNumber").innerHTML = number;
      }, 100);
      setTimeout(() => {
        clearInterval(timer);
        timer = null;
        if (number > 1000 || number <= 0) {
          alert("Too bad! You've lost!");
        } else {
          alert("You win!");
        }
      }, 3000);
    }
  });
}
