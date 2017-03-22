$( document ).ready(function(){

	document.getElementById("quizTemp").onsubmit=function() {
       q1= parseInt(document.querySelector('input[name = "date"]:checked').value);
	   q2= parseInt(document.querySelector('input[name = "rev"]:checked').value);
	   q3= parseInt(document.querySelector('input[name = "say"]:checked').value);
	   q4= parseInt(document.querySelector('input[name = "rent"]:checked').value);
	   q5= parseInt(document.querySelector('input[name = "last"]:checked').value);
	   q6= parseInt(document.querySelector('input[name = "old"]:checked').value);
	   q7= parseInt(document.querySelector('input[name = "cult"]:checked').value);
	   q8= parseInt(document.querySelector('input[name = "friend"]:checked').value);
	   q9= parseInt(document.querySelector('input[name = "boss"]:checked').value);
	   q10= parseInt(document.querySelector('input[name = "married"]:checked').value);
	   
	   score = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
	   
document.getElementById("score").innerHTML = 'Your score is: '+ score;

return false; 
};


	   




	// if (score == 0)  {
	// 	score2 = "Naw, homie you are not a Martin fan.<br /><img src='https://media.giphy.com/media/slU9sPnjk2LtK/giphy.gif' width='300' />";
	
 //    else if(score == 25) {
 //    	score2 = "You know some things but not enough. Try again.<br /><img src='https://media.giphy.com/media/Tjafu8r1bDqXS/giphy.gif' width='300' />";
    
 //    else (score == 50) {
 //    	score2 = "You aight. Try again.<br /><img src='https://media.giphy.com/media/bWluAdXTbtcvC/giphy.gif' width='300' />";
    
 //    else (score == 75) {
 //    	score2 = "You are a some timy Martin fan.<br /><img src='https://media.giphy.com/media/NaYyhwIhoBvlS/giphy.gif' width='300' />";
 //    else (score == 100){
 //    	score2="You are a true Martin fan!<br /><img src='https://media.giphy.com/media/gxQplC2lysqac/giphy.gif' width='300' />";
	

	// document.getElementById("scoreGif").innerHTML= score2;










});
