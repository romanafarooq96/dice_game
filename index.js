var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var img= "dice"+random1+".png"
if (random1>random2){
    document.querySelector("h1").innerHTML="Player1 won";
}else if(random2>random1){
    document.querySelector("h1").innerHTML="Player2 won";
}
else{
    document.querySelector("h1").innerHTML="Tie";
}
document.querySelector(".img1").setAttribute("src","images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + random2 + ".png");