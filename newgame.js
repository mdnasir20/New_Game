function calculateProfit() {
   
    var rounds = Number(document.querySelector("#rounds").value);
    var bet = 1;
    var winPerRound;
    var wins = 0;
    

    for (var i = 1; i <= rounds; i++) {
        var pips = Math.round( (Math.random()*5) + 1 ); 

        if (pips === 1 || pips === 3 || pips === 5) {
            winPerRound = 0;
        } else if ( pips === 2 || pips === 4 ) {
            winPerRound = bet*1.25;
        } else {
            winPerRound = bet*1.5;
        }

        wins += winPerRound; 
        var profit = rounds-wins;
    }
    document.getElementById("answer").innerHTML = "Bets were altogether " + rounds.toFixed(2) + " euros" + 
    "<br>" + "Wins were " + wins.toFixed(2) + " euros" + "<br>" + "Profit was " + profit.toFixed(2) + " euros";

}

