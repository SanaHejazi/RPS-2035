const choises=["ROCK","PAPPER","SCISSOR"];
let Playerscore=document.getElementById("PlayerScore");
let=playerscore=0;
let check=0;
let Aiscore=document.getElementById("AiScore")
let=aiscore=0;
let Result=document.getElementById("Result")
let Status=document.getElementById("Status")
let PlayerChois;
let StartText=document.getElementById("Start")

function PlayGame(PlayerChois) {
    const CoputerChois = choises[Math.floor(Math.random() * 3)]
    let result;

    console.log(PlayerChois)
    console.log(CoputerChois)




    if (check==1)
    {
        if (PlayerChois === CoputerChois) {
        result = "it's Tie !"
        Result.style.color='yellow'
        aiscore++
        playerscore++
    } else {
        switch (PlayerChois) {
            case "ROCK":
                if (CoputerChois === "PAPPER") {
                    result = "You Lose !"
                    Result.style.color='red'
                    aiscore++
                } else {
                    result = "You Win !"
                    Result.style.color='green'
                    playerscore++
                }
                break;

            case "PAPPER":
                if (CoputerChois === "SCISSOR") {
                    result = "You Lose !"
                    Result.style.color='red'
                    aiscore++
                } else {
                    result = "You Win !"
                    Result.style.color='green'
                    playerscore++
                }
                break

            case "SCISSOR":
                if (CoputerChois === "ROCK") {
                    result = "You Lose !"
                    Result.style.color='red'
                    aiscore++
                } else {
                    result = "You Win !"
                    Result.style.color='green'
                    playerscore++
                }
                break;
        }


    }


        Aiscore.textContent = aiscore
        Playerscore.textContent = playerscore
        console.log(result)
        Result.textContent = result
        Status.textContent = "Computer Choose :" + " " + CoputerChois         //FIX THIS LINE...
        Aiscore.textContent = aiscore
        Playerscore.textContent = playerscore
        StartText.textContent="Play Again"

    }
    else {
        alert("Please Select Your Choise")
    }



}



