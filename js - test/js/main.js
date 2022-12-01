console.log("loaded in");

//Will need to add an event listener to the button
let timer = null;
let number = 0;

document.getElementById("playBtn").addEventListener("click", function () {
  console.log("clicked");
  if (timer === null) {
    timer = setInterval(function () {
      number = Math.round(Math.random() * 10000);
      document.getElementById("playerNumber").innerHTML = number;
    }, 100);
  } else {
    clearInterval(timer);
    timer = null;
    //Althought it's unlikley to hit zero, we need to check for it.
    if (number >= 1000 || number <= 0) {
      alert("To bad! You've lost!");
    } else {
      alert("Congratulations! You've won!");
    }
  }
});
