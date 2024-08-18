function randomNumber() {
    return Math.round(Math.random() * 6);
}
var p1Value, p2Value;
var player = 0;

do {
    var rNum = randomNumber();
    if (player == 0) p1Value = rNum;
    else p2Value = rNum;
    switch (rNum) {
        case 1:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
            break;
        case 2:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
            break;
        case 3:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
            break;
        case 4:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
            break;
        case 5:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
            break;
        case 6:
            if (player == 0)
                document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
            else
                document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
            break;
    }
    ++player;
} while (player == 1);

if (p1Value > p2Value) 
    document.querySelector("h1").innerHTML = "Player 1 Win!";
else if (p1Value < p2Value)
    document.querySelector("h1").innerHTML = "Player 2 Win!";
else 
    document.querySelector("h1").innerHTML = "Draw Refresh Again";
