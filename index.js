function randomNumber() {
    return Math.ceil((Math.random() * 6) );
}
var p1Value=randomNumber();
var p2Value=randomNumber();

var imagePath1=`./images/dice${p1Value}.png`
document.querySelector(".img1").setAttribute("src", imagePath1);

var imagePath2=`./images/dice${p2Value}.png`
document.querySelector(".img2").setAttribute("src", imagePath2);

if (p1Value > p2Value) 
    document.querySelector("h1").innerHTML = "Player 1 Win!";
else if (p1Value < p2Value)
    document.querySelector("h1").innerHTML = "Player 2 Win!";
else 
    document.querySelector("h1").innerHTML = "Draw Refresh Again";
