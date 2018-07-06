
$(document).ready(function() {
    console.log( "ready!" );
	let game = {};

	//---------------------Event Fricken' Do'ers!---------------------------
	$("#start-game-button").on("click", () => {
		$(".btn").replaceWith("<button type='button' id='main-hall' class='btn btn-dark btn-lg btn-block'>Main Hall</button>");
		game.playerOne = new character(10, 2, 2);
		foyer();
		startTimer(5);

	$("#fight").on("click", () => {
		console.log("Fight! Fight!")
		game.playerOne.attack();
		game.playerOne.death();
		game.zombie.attack();
		game.zombie.death();
		if (game.playerOne.health > 0){
		randoMonAttack();}
		console.log(game.playerOne);
		console.log(game.zombie);
		});
	
	$("#run").on("click", () => {
		console.log("Run away!!!")
		returnFoyer();
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
	class character {
		constructor(health, damage, resistance){
			this.health = health;
			this.damage = damage;
			this.resistance = resistance;
		}
		attack(){
			if (this.damage >= this.resistance) {
				this.health -= 2
			} if (this.damage < this.resistance) {
				this.health--
			} if (this.health <= 0) {
			}
		}
		death(){
			if (game.playerOne.health <= 0){
				endGame();
			} if (game.zombie.health <= 0){
				alert("You have killed the zombie!  Good for you!")			
			}
		}
	}

	//--------------------------------------------------------------------
	//-------------------------------Health Bar---------------------------


	//$('#health-bar').css("width", (game.playerChar.health * 10)- "%");


	//--------------------------------------------------------------------
	//---------------------------Countdown Timer------------------------------
	let timeoutHandle;
	const startTimer = (minutes) => {
	    let seconds = 60;
	    let mins = minutes
	    const tick = () => {
	        let counter = document.getElementById("survival-timer");
	        let current_minutes = mins-1
	        seconds--;
	        counter.innerHTML =
	        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
	        if( seconds > 0 ) {
	            timeoutHandle=setTimeout(tick, 1000);
	        } else {

	            if(mins > 1){

	               setTimeout(function () { countdown(mins - 1); }, 1000);

	            }
	        } 
	    }
	    tick();
	}

	//--------------------Timer function part deaux------------------------------
	let seconds = 0;

	const otherTimer = () => {

		seconds++;
			if(document.getElementById("survival-timer")===0){
		return endGame();
	}
			clearInterval(timePasses);	
		}

	const timePasses = setInterval(otherTimer, 100);
	//---------------------------------------------------------------------------
	//----------------------------Room Functions----------------------------------------------------------------------------------
	const foyer = () => {
		$(".game-screen").attr('src', 'images/door2.jpg');
		$(".description").text("For some inexplicable reason you've entered the foyer of a large and spooky house.  The door slams shut behind you and you can hear the clicks of some sort of mechanism ticking away.  You realize you only have to survive until the door opens...  Before you lay a long hallway with doors on both sides.");
		$(".sounds")[0].play();

	}

	const returnFoyer = () => {
		$(".game-screen").attr('src', 'images/door2.jpg');
		$(".description").text("You pee your pants and run back to the foyer.  The monsters laugh at you.  They are all gonna laugh at you.");
		$(".btn").remove();
		$(".buttons").append("<button type='button' id='main-hall' class='btn btn-dark btn-lg btn-block'>Main Hall</button>");
		$("#main-hall").on("click", () => {
		mainHallway();
		});

	}

	const mainHallway = () => {
		$(".game-screen").attr('src', 'images/mainfloorhall.jpg');
		$(".description").text("You step into a large hall, at the end of which is a grand staircase.  Before you can see any more, a hideous zombie shuffles up to you asking for loose change!");
		$(".btn").remove();
		$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
		$(".buttons").append("<button type='button' id='run' class='btn btn-secondary btn-lg btn-block'>Run Away!</button>");
		$(".buttons").append("<button type='button' id='den' class='btn btn-light btn-lg btn-block'>Den</button>");
		$(".buttons").append("<button type='button' id='lounge' class='btn btn-warning btn-lg btn-block'>Lounge</button>");
		game.zombie = new character(6, 1, 1);
		
		$("#fight").on("click", () => {
		game.playerOne.attack();
		game.playerOne.death();
		game.zombie.attack();
		game.zombie.death();
		if (game.playerOne.health > 0){
		randoMonAttack();}
		console.log(game.playerOne);
		console.log(game.zombie);
		});
		
		$("#run").on("click", () => {
		console.log("Run away!!!")
		returnFoyer();
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
		$(".description").text("You jump out of the dangrous hallway into what appears to be a den.  It looks nice... well, it looked nice at one point.  Before the monsters and blood.  There's a dog nearby, only... it's not really alive.");
		$(".btn").remove();
		$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
		$(".buttons").append("<button type='button' id='run' class='btn btn-secondary btn-lg btn-block'>Run Away!</button>");
		$(".buttons").append("<button type='button' id='main-hall' class='btn btn-light btn-lg btn-block'>Main Hall</button>");
		game.zombieDog = new character(2, 1, 3);

		$("#fight").on("click", () => {
		game.playerOne.attack();
		game.playerOne.death();
		game.zombieDog.attack();
		game.zombieDog.death();
		if (game.playerOne.health > 0){
		randoMonAttack();}
		console.log(game.playerOne);
		console.log(game.zombieDog);
		});
		
		$("#run").on("click", () => {
		console.log("Run away!!!")
		returnFoyer();
		});

		$("#main-hall").on("click", () => {
		mainHallway();
		});
	}	

	const lounge = () => {
		$(".game-screen").attr('src', 'images/lounge.jpeg');
		$(".description").text("You enter the lounge.  The haunting sounds of 50's era crooners fills the air with non-ironic din.  A hipster Yeti runs towards you shouting 'I was listening to them before they were cool!'")
		$(".btn").remove();
		$(".buttons").append("<button type='button' id='fight' class='btn btn-danger btn-lg btn-block'>Fight!</button>");
		$(".buttons").append("<button type='button' id='run' class='btn btn-secondary btn-lg btn-block'>Run Away!</button>");
		$(".buttons").append("<button type='button' id='main-hall' class='btn btn-light btn-lg btn-block'>Main Hall</button>");
		game.yeti = new character(20, 10, 10);

		$("#fight").on("click", () => {
		game.playerOne.attack();
		game.playerOne.death();
		game.yeti.attack();
		game.yeti.death();
		if (game.playerOne.health > 0){
		randoMonAttack();}
		console.log(game.playerOne);
		console.log(game.yeti);
		});

		$("#run").on("click", () => {
		console.log("Run away!!!")
		returnFoyer();
		$(".btn").remove();
		});

		$("#main-hall").on("click", () => {
		mainHallway();
		});
	}


	const endGame = () => {
			$(".game-screen").attr('src', 'images/youDied.jpg');
			randoDeath();
			$(".btn").remove();
			$(".buttons").append("<button type='button' id='restart' class='btn btn-outline-danger'>Restart</button>");

		// $("#restart").on("click", () => {
		// 	foyer();
		// })
	}

	//-------------------------Loop Craziness!------------------
	const randoMonAttack = () => {
		
			let randoMon = [Math.floor(Math.random()*attackDescriptions.length)];

				$(".description").text(attackDescriptions[randoMon]);
		}



	const randoDeath = () => {

			let randoDeathKill = [Math.floor(Math.random()*killDescriptions.length)];
		
				$(".description").text(killDescriptions[randoDeathKill]);
		}
			


	// const randoPlayAttack = () => {

	// 		let randoAttack = [Math.floor(Math.random()*playerAttackDesc.length)];
		
	// 			$(".description").text(playerAttackDesc[randoAttack]);
	// 	}




	const attackDescriptions = [
	"You accidentally insult the monster's pokemon deck.  His resulting nerd rage causes your limbs to fly off randomly until you're reduced to a pile of bloody chunks. He calls you a dork.",
	"The monster attempts to cut out your spleen, but re-thinks the idea and challenges you to a dance-off wherein you lose.",
	"The monster takes out restraining order against you allowing the police to pummel you senseless for being within 50 yards of him.",
	"This particular monster was a highly regarded therapist in a former life and is able to get you to see how your actions are just the results of deep-seated, repressed emotional trauma.  As a result, you grow very depressed and end up binge watch old episodes of Roseanne and eating more ice-cream than is healthy, The subsequent heart attack is devastating.",
	"The monster insults you, and you realize life is a cyclical pattern of conflict with no end.  You begin to realize that to escape samsara you must rise above the prolific misery in the world and seek enlightenment. Your mind blossoms with understanding and then the monster stabs you.",
	"The monster summons the ghost of Redd Foxx who has a heart attack and falls on you.",
	"The monster slaps you so hard you start to cry.",
	"The monster belches and lights it's burp on fire, burning your eyes and lungs.  You are damaged by the sheer awesomness!",
	"You kick the monster in the gnards.  Against all known monster lore, it seems to work!",
	"You suddenly point behind the monster, who turns around to look, proving that the oldest trick in the book is still in the book for a reason. The resulting stabbing you give it is glorious to behold.",
	"You stab the monster.  That's it.  No commentary.  No wildly funny and improbable thing happens.  Just the stabbing.",
	"The monster launches into a series of complicated judo maneuvers.  You politely wait for it to finish before shooting it.",
	"The monster appears to have bad comb-over and orange skin so you punch it.  Hard.",
	"You kick and flail at the monster somewhat successfully."
	];

	const killDescriptions = [
	"You die of dysentary.  Because even though you aren't even on the Oregon Trail, it can still kill you.",
	"The monster moves towards you with slavering jaws ready to chew your face off and you are comforted in the knowledge that your imminent death is better than the Orwellian horror that awaits you outside, should you have managed to successfully escape.  (Oooh! sick contemporary political commentary!)",
	"You curl up into a ball and let entropy take you.",
	"You begin to feel like you are getting a handle on 'adulting' but quickly realize it's not a real thing and die from sheer, explosive ennui.",
	"The years of time spent in front of a screen, playing video games, have ill-prepared you for the reality of true horror cliche. You are slowly tea-bagged to death by testicle monster while desperately trying to spam the attack button.",
	"You start to feel the crushing weight of defeat, but suddenly remember that poster with the kitten hanging on a string.  You steel yourself to handle anything the mansion could throw at you but are quickly torn to pieces by the incessant, self-esteem shattering taunts and stabbings",
	"You feel the claws and sharp bits of metal of your enemies surrounding you.  Suddenly there's a light at the end of a long tunnel.  Oh, wait...."

	];

	// const playerAttackDesc = [
	// "You kick the monster in the gnards.  Against all known monster lore, it seems to work!",
	// "You suddenly point behind the monster, who turns around to look, proving that the oldest trick in the book is still in the book for a reason. The resulting stabbing you give it is glorious to behold.",
	// "You stab the monster.  That's it.  No commentary.  No wildly funny and improbable thing happens.  Just the stabbing.",
	// "The monster launches into a series of complicated judo maneuvers.  You politely wait for it to finish before shooting it.",
	// "The monster appears to have bad comb-over and orange skin so you punch it.  Hard.",
	// "You kick and flail at the monster somewhat successfully."

	//];

});


