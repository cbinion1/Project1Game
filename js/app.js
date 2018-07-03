console.log("linked up")

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
//(insert monster name here) takes out restraining order against you allowing the police to pummel you senseless
//for being within 50 yards of (monster name).
//
//(insert monster here) attempts to kick you in the privates, but re-thinks the idea and challenges you to a 
//dance-ff wherein you lose.
//
//You come across a (monster name) and accidentally insult his pokemon deck.  His resulting nerd rage causes 
//your limbs to fly off randomly until you're reduced to a pile of bloody chunks.  (Monster name) calls you a 
//dork.
//
//(Monster name) was a highly regarded therapist in a former life and is able to get you to see how your actions
//are just the results of deep-seated, repressed emotional trauma.  As a result, you grow very depressed and end up
//binge watch old episodes of Roseanne and eating more ice-cream than is healthy, expiring in your sleep.
//
//(Monster name) insults you, and you realize life is a cyclical pattern of conflict with no end.  You begin to 
//realize that to escape samsara you must rise above the prolific misery in the world and seek enlightenment.  
//Your mind blossoms with understanding just as the (monster name) stabs you.
//
//(Monster name) summons the ghost of Redd Foxx who has a heart attack and falls on you.
//
//(Monster name) slaps you so hard you start to cry.
//
//(Monster name) belches and lights it on fire, burning your eyes and lungs.  You are damaged by the sheer 
//awesomness!
//
//River monster attacks.  You die of dysentary.
//
//
$(document).ready(function() {
    console.log( "ready!" );





class monster {
	constructor(name, health, damage, type){
		this.name = name;
		this.health = health;
		this.damage = damage;
		this.type  = type;
	}
	attack(){
		health--;
	}



}

class playerChar {
	constructor(name, health, damage){
		this.name = name;
		this.health = health;
		this.damage = damage;
	}
	attack(){

	}
}

$('#health-bar').css("width", (playerChar.health * 10)+ "%");


document.getElementById('survival-timer').innerHTML =
  20 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('survival-timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('survival-timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
// const survivalTimerClock = () => {
// 	let minutes = 1200000;
// 	let seconds = 60;

// 	let seconds = Math.floor( (seconds/1000) % 60 );
// 	let minutes = Math.floor( (minutes/1000/60) % 60 );

// 		return {
// 			"minutes" : minutes,
// 			"seconds" : seconds
// 	};

// }
// console.log(survivalTimerClock);




});












