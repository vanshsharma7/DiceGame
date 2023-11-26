var randomvar1=Math.floor((Math.random()*6)+1);

var randomvar2=Math.floor((Math.random()*6)+1);

let refreshElements = document.getElementsByClassName('refresh');

for (let i = 0; i < refreshElements.length; i++) {
    refreshElements[i].addEventListener('click', () => {
        location.reload();
    });
}


if(randomvar1==randomvar2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomvar1>randomvar2){
    document.querySelector("h1").innerHTML="&#128681 Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML="Player 2 Wins &#128681";
}
if(randomvar1==1){
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice1.png");
}
else if(randomvar1==2){
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice2.png");
}
else if(randomvar1==3){
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice3.png");
}
else if(randomvar1==4){
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice4.png");
}
else if(randomvar1==5){
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice5.png");
}
else{
    document.getElementsByTagName("img")[0].setAttribute("src","images/dice6.png");
}
if(randomvar2==1){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice1.png");
}
else if(randomvar2==2){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice2.png");
}
else if(randomvar2==3){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice3.png");
}
else if(randomvar2==4){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice4.png");
}
else if(randomvar2==5){
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice5.png");
}
else{
    document.getElementsByTagName("img")[1].setAttribute("src","images/dice6.png");
}