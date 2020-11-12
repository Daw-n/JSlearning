var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

var Image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

//for second dice image
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var Image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



//conditions for h1 text
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}