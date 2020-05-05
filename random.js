/* I FIRST DECLARE ALL MY VARIABLES WITH THIS FORMAT */
/* THIS IS BEGINNING TO BECOME TIRING FOR ME AND I WANT TO LOOK A MORE BETTER APPROACH */

var one = "Aspire to inspire before we expire.", two="Every moment is a fresh beginning", three="Change the world by being yourself.", four="Yesterday you said tomorrow. Just do it", five="Don’t you know your imperfections is a blessing? ", six ="Winning doesn't always mean being first.", seven ="It always seems impossible until it", eight="We must not allow other people's limited perceptions to define us.", nine ="Knowing is not enough; we must apply.", ten ="Smile in the Mirror. ... ", quote = document.getElementsByClassName("quote"), time_left = document.getElementsByClassName("time_left");


/* THEN I PUT THE VARIABLES IN AN ARRAY */
var arr = [one, two, three, four, five, six, seven, eight, nine, ten];

/* THIS FUNCTION IS FOR LOOPING THROUGH ALL THE ELEMENTS IN THE ARRAY "arr" AND DISPLAYING THEM IN THE HTML AT RANDOM */
/* IT WORKS LIKE THIS */

function uniquefunc1(){
/* FOR-LOOP LOOPS THROUGH ALL THE ELEMENTS IN THE ARRAY */
for (i=0; i < arr.length; i++){
		
/* THIS IS TO CHOOSE AN ELEMENT AT RANDOM BETWEEN 0 TO 10 */
/* BUT NOTE THAT "Math.random()" CHOOSES A NUMBER BETWEEN 0 TO 10.99 AND Math.floor() THEN ROUNDS IT DOWN */

quote[0].innerHTML = arr[Math.floor(Math.random()*11)]		
	
	}
}

/* THE FUNCTION IS CALLED IMMEDIATELY THE HTML IS LOADED/OPENED */
uniquefunc1()
/* AND IS ALSO CALLED AFTER EVERY 30 SECONDS USING A UNIQUE IN-BUILT JAVASCRIPT FUNCTION CALLED "setInterval(myfunction, interval_of_time)" */
setInterval(uniquefunc1, 30000)


/* THIS FUNCTION IS FOR THE COUNTDOWN TIMER */
function uniquefunc2(){

var now = time_left[0].innerHTML--	;		

if (now == 0){
time_left[0].innerHTML = 30;		
		}
	}
uniquefunc2()
setInterval(uniquefunc2, 1000)
