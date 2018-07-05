//Survive in a death mansion.  Certain areas may be detrimental and cause health to 
//reduce just by being in the room.  Some monsters automatically kill the player. (Monsters could be 
//randomly generated based on location/floor).  Moving into a room instantiates a monster.
//Game design should be mutable div in the html that displays the current background with a monster sprite 
//in the foreground that the player can fight.
//Monsters attack not by bloody hack and slash, but funny, or offensive descriptions.
//
//The way to win the game is to simply stay put at the beginning.  Moving around the mansion will result in the 
//PC's inevitable death.  Staying put for the duration of the timer will result in a win.
//
$(document).ready(function() {
    console.log( "ready!" );

//---------------------Event Fricken' Do'ers!---------------------------
$("#start-game-button").on("click", () => {
	$(".btn").replaceWith("<button type='button' id='main-hall' class='btn btn-dark btn-lg btn-block'>Main Hall</button>");
	foyer();
	startTimer();
	

$("#fight").on("click", () => {
	console.log("Fight! Fight!")
	playerChar.attack();
	monster.attack();
	console.log(playerOne);
	console.log(zombieOne);
	});
$("#run").on("click", () => {
	console.log("Run away!!!")
	foyer();
	});
$("#main-hall").on("click", () => {
	mainHallway();
	});
$("#den").on("click", () => {
	den();
	});
$("#lounge").on("click", () => {
	lounge();
	});
});
//----------------------------------------------------------------------
//--------------------Class\Method Creation-----------------------------
class monster {
	constructor(health, damage, resistance){
		this.health = health;
		this.damage = damage;
		this.resistance = resistance;
	}
	attack(){
		if (this.damage >= playerChar.resistance) {
			playerChar.health -= 2
		} else if (this.damage < playerChar.resistance) {
			playerChar.health--
		}
		$('#health-bar').css("width", (playerChar.health * 10)+ "%");
	}
}

class playerChar {
	constructor(health, damage, resistance){
		this.health = health;
		this.damage = damage;
		this.resistance = resistance;
	}
	attack(){
		if (this.damage >= monster.resistance) {
			monster.health -= 2
		} else if (this.damage < monster.resistance) {
			monster.health--
		}
	}
}

const playerOne = new playerChar(10, 2, 2);
// const zombieOne = new monster(6, 1, 1);
// const zombieDog = new monster(2, 1, 1);
// const yeti = new monster(20, 10, 10);

//--------------------------------------------------------------------
//-------------------------------Health Bar---------------------------


$('#health-bar').css("width", (playerChar.health * 10)+ "%");


//--------------------------------------------------------------------
//---------------------------Countdown Timer------------------------------
document.getElementById('survival-timer').innerHTML =
  10 + ":" + 00;


function startTimer() {
  var presentTime = document.getElementById('survival-timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m===0){console.log('timer completed')}
  
  document.getElementById('survival-timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  return sec;
}
//---------------------------------------------------------------------------
//----------------------------Room Functions----------------------------------------------------------------------------------
const foyer = () => {
	$(".game-screen").attr('src', 'images/door2.jpg');
	$(".description").text("You've entered the foyer of a large and spooky house.  The door slams shut behind you and you can hear the clicks of some sort of mechanism ticking away.  You realize you only have to survive until the door opens...  Before you lay a long hallway with doors on both sides.");

	//$(".sounds")[0].play();
}

const mainHallway = () => {
	$(".game-screen").attr('src', 'images/mainfloorhall.jpg');
	$(".description").text("You step into a large hall, at the end of which is a grand staircase.  Before you can see any more, a hideous zombie shuffles up to you asking for loose change!");
	$(".btn").remove();
	$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
	$(".buttons").append("<button type='button' id='run' class='btn btn-light btn-lg btn-block'>Run Away!</button>");
	$(".buttons").append("<button type='button' id='den' class='btn btn-light btn-lg btn-block'>Den</button>");
	$(".buttons").append("<button type='button' id='lounge' class='btn btn-warning btn-lg btn-block'>Lounge</button>");
	const zombieOne = new monster(6, 1, 1);
	
	$("#fight").on("click", () => {
	console.log("Fight! Fight!")
	playerChar.attack();
	monster.attack();
	console.log(playerOne);
	console.log(zombieOne);
	});
	
	$("#run").on("click", () => {
	console.log("Run away!!!")
	foyer();
	});
	
	$("#den").on("click", () => {
	den();
	});

	$("#lounge").on("click", () => {
	lounge();
	});
}

const den = () => {
	$(".game-screen").attr('src', 'images/den.jpg');
	$(".description").text("You jump out of the dangrous hallway into what appears to be a den.  It looks nice... well, it looked nice at one point.  Before the monsters and blood.");
	$(".btn").remove();
	$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
	$(".buttons").append("<button type='button' id='run' class='btn btn-light btn-lg btn-block'>Run Away!</button>");
	$(".buttons").append("<button type='button' id='main-hall' class='btn btn-light btn-lg btn-block'>Main Hall</button>");
	const zombieOne = new monster(6, 1, 1);

	$("#fight").on("click", () => {
	console.log("Fight! Fight!")
	playerChar.attack();
	monster.attack();
	console.log(playerOne);
	console.log(zombieOne);
	});
	
	$("#run").on("click", () => {
	console.log("Run away!!!")
	foyer();
	});

	$("#main-hall").on("click", () => {
	mainHallway();
	});
}	

const lounge = () => {
	$(".game-screen").attr('src', 'images/lounge.jpeg');
	$(".description").text("You enter the lounge.  The haunting sounds of 50's era crooners fills the air with non-ironic din.")
	$(".btn").remove();
	$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
	$(".buttons").append("<button type='button' id='run' class='btn btn-light btn-lg btn-block'>Run Away!</button>");
	$(".buttons").append("<button type='button' id='main-hall' class='btn btn-light btn-lg btn-block'>Main Hall</button>");
	const zombieOne = new monster(6, 1, 1);

	$("#fight").on("click", () => {
	console.log("Fight! Fight!")
	playerChar.attack();
	monster.attack();
	console.log(playerOne);
	console.log(zombieOne);
	});
	
	$("#run").on("click", () => {
	console.log("Run away!!!")
	foyer();
	$(".btn").remove();
	});

	$("#main-hall").on("click", () => {
	mainHallway();
	});
}



});
//--------------------Timer function------------------------
// let seconds = 0;

// const timePasses = () => {
// 	console.log(`It has been ${seconds} seconds`)
// 	seconds++;
		
// 		clearInterval(timePassing);	
// 	}

// const timePassing = setInterval(timePasses, 1000);
//----------------------------------------------------------
//-------------------------Loop Craziness!------------------
// for (let i = 0; i < attackDescriptions.length; i++){

// }

// for (let i = 0; i < killDescriptions.length; i++){

// }

// for (let i = 0; i < playerAttackDesc.length; i++){

// }
const attackDescriptions = [
"You accidentally insult the monster's pokemon deck.  His resulting nerd rage causes your limbs to fly off randomly until you're reduced to a pile of bloody chunks. He calls you a dork.",
"The monster attempts to cut out your spleen, but re-thinks the idea and challenges you to a dance-off wherein you lose.",
"The monster takes out restraining order against you allowing the police to pummel you senseless for being within 50 yards of him.",
"This particular monster was a highly regarded therapist in a former life and is able to get you to see how your actions are just the results of deep-seated, repressed emotional trauma.  As a result, you grow very depressed and end up binge watch old episodes of Roseanne and eating more ice-cream than is healthy, The subsequent heart attack is devastating.",
"The monster insults you, and you realize life is a cyclical pattern of conflict with no end.  You begin to realize that to escape samsara you must rise above the prolific misery in the world and seek enlightenment. Your mind blossoms with understanding and then the monster stabs you.",
"The monster summons the ghost of Redd Foxx who has a heart attack and falls on you.",
"The monster slaps you so hard you start to cry.",
"The monster belches and lights it on fire, burning your eyes and lungs.  You are damaged by the sheer awesomness!",

];

const killDescriptions = [
"You die of dysentary.  Because even though you aren't even playing Oregon Trail, it can still kill you.",
"The monster moves towards you with slavering jaws ready to chew your face off and you are comforted in the knowledge that your imminent death is better than the Orwellian horror that awaits you outside, should you have managed to successfully escape.  (Oooh! sick contemporary political commentary!)",
"You curl up into a ball and let entropy take you.",
"You begin to feel like you are getting a handle on 'adulting' but quickly realize it's not a real thing and die from sheer, explosive ennui",
"The years of time spent in front of a screen, playing video games, have ill-prepared you for the reality of true horror cliche. You are slowly tea-bagged to death by testicle monster while desperately trying to spam the attack button.",
"You start to feel the crushing weight of defeat, but suddenly remember that poster with the kitten hanging on to a string.  You steel yourself to handle anything the mansion could throw at you but are quickly torn to pieces by the incessant, self-esteem shattering taunts and stabbings",

];

const playerAttackDesc = [
"You kick the monster in the gnards.  Against all known monster lore, it seems to work!",
"You suddenly point behind the monster, who turns around to look, proving that the oldest trick in the book is still in the book for a reason. The resulting stabbing you give it is glorious to behold.",
"You stab the monster.  That's it.  No commentary.  No wildly funny and improbable thing happens.  Just the stabbing.",
"The monster launches into a series of complicated judo maneuvers.  You politely wait for it to finish before shooting it.",
"The monster appears to have bad comb-over and orange skin so you punch it.  Hard.",
"You kick and flail at the monster somewhat successfully.",

];




