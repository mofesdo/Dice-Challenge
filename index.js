var randomNumber1 = Math.round(Math.random()*5) + 1;
var randomNumber2 = Math.round(Math.random()*5) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

document.getElementById("img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.getElementById("img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
  document.getElementById("winner").textContent = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.getElementById("winner").textContent = "Player 2 Wins! 🚩";
}
else{
    document.getElementById("winner").textContent = "Draw!";
}
