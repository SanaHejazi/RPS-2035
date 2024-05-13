let P1CHOOSE;
let P2CHOOSE;
let index=0;
let P1SCORE=0;
let P2SCORE=0;
let p1Turn=document.getElementById("P1Turn")
let p2Turn=document.getElementById("P2Turn")
let p1Score=document.getElementById("Player1Score")
let p2Score=document.getElementById("Player2Score")
let result=document.getElementById("Result")

function Start()
{
p2Turn.textContent=null
p1Turn.textContent="CHOOSE !"
console.log("START IS RUNNING")
document.addEventListener('keydown', function(event)
{

    if(event.keyCode == 87) {       // W
        P1CHOOSE="ROCK";
        p1Turn.textContent=null;
        p2Turn.textContent="CHOOSE !";
        console.log("key W")

        document.addEventListener('keydown', function(event)
{
    if(event.keyCode == 38) { // AUP
        P2CHOOSE="ROCK";
        p1Turn.textContent=P1CHOOSE;
        result.textContent=" IT'S TIE !"
        p2Turn.textContent=P2CHOOSE

    }
    else if(event.keyCode == 37) { // AL
        P2CHOOSE="PAPPER";
        p1Turn.textContent=P1CHOOSE;
        result.textContent=" PLAYER 2 WIN !"
        p2Turn.textContent=P2CHOOSE;

    }
    else if(event.keyCode == 39){ //AR
        P2CHOOSE="SCISSOR";
        p1Turn.textContent=P1CHOOSE;
        result.textContent=" PLAYER 1 WIN !"
        p2Turn.textContent=P2CHOOSE;

        console.log("key AR")
    }

})

    }
    else if(event.keyCode == 65)  { //A
        P1CHOOSE="PAPPER";
        p1Turn.textContent=null;
        p2Turn.textContent="CHOOSE !";

        document.addEventListener('keydown', function(event)
{
    if(event.keyCode == 38) {
        P2CHOOSE="ROCK";
        p1Turn.textContent=P1CHOOSE;

        result.textContent=" PLAYER 1 WIN !"
        p2Turn.textContent=P2CHOOSE

                console.log("key A")

    }
    else if(event.keyCode == 37) {
        P2CHOOSE="PAPPER";
        p1Turn.textContent=P1CHOOSE;
        p2Turn.textContent=P2CHOOSE;
        result.textContent=" IT'S TIE !"
        console.log("A  -  <-")

    }
    else if(event.keyCode == 39){
        P2CHOOSE="SCISSOR";
        p1Turn.textContent=P1CHOOSE;
        p2Turn.textContent=P2CHOOSE;
        result.textContent=" PLAYER 2 WIN !"

    }

})

    }
    else if(event.keyCode == 68){  //D
        P1CHOOSE="SCISSOR";
        p1Turn.textContent=null;
        p2Turn.textContent="CHOOSE !";
        console.log("key D")

        document.addEventListener('keydown', function(event)
{
    if(event.keyCode == 38) {
        P2CHOOSE="ROCK";
        p1Turn.textContent=P1CHOOSE;
        p2Turn.textContent=P2CHOOSE;
        result.textContent=" PLAYER 2 WIN !"

    }
    else if(event.keyCode == 37) {
        P2CHOOSE="PAPPER";
       p1Turn.textContent=P1CHOOSE;
        p2Turn.textContent=P2CHOOSE;
        result.textContent=" PLAYER 1 WIN !"

                console.log("key AL")

    }
    else if(event.keyCode == 39){
        P2CHOOSE="SCISSOR";
        p1Turn.textContent=P1CHOOSE;
        p2Turn.textContent=P2CHOOSE;
        result.textContent=" IT'S TIE !"

    }

})

    }
})



    console.log(" SCORE IF STATEMENT IS RUNNING")

    if (result.textContent===" PLAYER 1 WIN !")
    {
        console.log("P1 Win")
        P1SCORE++
    }
    else if (result.textContent===" PLAYER 2 WIN !")
    {
        console.log("P2 Win")
        P2SCORE++
    }
    else if (result.textContent===" IT'S TIE !")
    {
        console.log("P1     Win")
        console.log("P2     Win")
        P1SCORE++
        P2SCORE++
    }


    p1Score.textContent=P1SCORE
    p2Score.textContent=P2SCORE

    result.textContent="Result"


}





















