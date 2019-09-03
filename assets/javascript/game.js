// start jQuery
$( document ).ready(function () {
    var gems = ['#garnet', '#amethyst', '#pearl', '#steven'];
    var randomGem = 
    // assigns gem random integer 1 to 12
        function randomGem() {
        min = Math.ceil(1);
        max = Math.floor(12);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var randomTarget = 
        function randomTarget() {
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    // winsLosses
    var wins = 0;
    var losses = 0;

    // starts at 0 and adds every gem click randomGem until = randomTarget, or goes over
    var scoreNumber = 0;
        document.getElementById("image").onclick = function() {
        document.getElementById("totalScore").innerHTML = "image.randomGem" + "scoreNumber";

        if (scoreNumber === randomTarget) {
            document.getElementById('wins').innerHTML = "Wins:" + "1";
        } else {(scoreNumber > randomTarget) 
            document.getElementById('losses').innerHTML = "Losses:" + "1";
        }}
    
    // images to click
        // randomTarget returns a random integer 19 to 120
    ('#randomTarget').on("click") =
        function randomTarget(){
        min = Math.ceil(19);
        max = Math.floor(120);
        return Math.floor(Math.random() * (max - min)) + min;
        }
        // array of crystals gets assigned randomGem number
        document.getElementsByClassName("image").addEventListener("click", function (randomGem) {
                document.getElementById("image").innerHTML = randomGem(1, 12);  
        })

    });