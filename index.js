var face1;
var face2;
face1=Math.floor(Math.random()*6)+1;
face2=Math.floor(Math.random()*6)+1;
var img1=face1+".svg";
var img2=face2+".svg";
document.querySelector(".player1").setAttribute("src","images/"+img1);
document.querySelector(".player2").setAttribute("src","images/"+img2);
if(face1==face2){
    document.querySelector("h1").textContent="Draw!";
}
else if(face1>face2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins!"
}