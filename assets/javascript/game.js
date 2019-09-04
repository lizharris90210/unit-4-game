// start jQuery
$( document ).ready(function() {

// winsLosses
    var wins = 0;
    var losses = 0;
    var scoreNumber = 0;
// crystals
    var amethyst= random(1, 12);
	var garnet= random(1, 12);
	var pearl= random(1, 12);
    var steven= random(1, 12);
// assigns random integer
    function random(min,max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min +1)) + min;
    }
    var randomTarget = random(19, 120);
        $("#target").html(random);
// reset
	function reset(){
		scoreNumber = 0;
		$("#scoreNumber").text(scoreNumber);
		amethyst= random(1, 12);
	    garnet= random(1, 12);
	    pearl= random(1, 12);
        steven= random(1, 12);
        randomTarget= random(19, 120);
    }
// functions on click

    $('#shield').on('click', function() {
        $("#target").text(randomTarget);
    })
    $("#amethyst").on("click", function(){
		scoreNumber += amethyst;
		winLose();
        $('#scoreNumber').text(scoreNumber);	
        console.log('amethyst',amethyst)
	});
    $("#garnet").on("click", function(){
		scoreNumber += garnet;
		winLose();
        $('#scoreNumber').text(scoreNumber);	
        console.log('garnet', garnet)
    });
    $("#pearl").on("click", function(){
		scoreNumber += pearl;
		winLose();
        $('#scoreNumber').text(scoreNumber);	
        console.log('pearl', pearl)
    });
    $("#steven").on("click", function(){
		scoreNumber += steven;
		winLose();
        $('#scoreNumber').text(scoreNumber);	
        console.log('steven', steven)
	});
// winLose
    function winLose (){
        if (scoreNumber === randomTarget){
            wins += 1;
            alert("Win!");
            $('#wins').text('Wins:' + wins);
            reset();
        } else if(scoreNumber > randomTarget){
            losses += 1;
            alert("You lose!");
            $('#losses').text('Losses:' + losses);
            reset();
        }}
});