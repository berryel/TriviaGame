$( document ).ready(function(){


	$('#quiz').hide();
	$('#scoreGif').hide();

	$('#startButton').click(function(){

    $(this).hide();
    $('#quiz').fadeIn(1000);
		});

	


	



	document.getElementById("quiz").onsubmit=function() {

		$('#quiz').hide();

       q1= parseInt(document.querySelector('input[name = "date"]:checked').value);
	   q2= parseInt(document.querySelector('input[name = "rev"]:checked').value);
	   q3= parseInt(document.querySelector('input[name = "say"]:checked').value);
	   q4= parseInt(document.querySelector('input[name = "rent"]:checked').value);
	   q5= parseInt(document.querySelector('input[name = "last"]:checked').value);
	   q6= parseInt(document.querySelector('input[name = "old"]:checked').value);
	   q7= parseInt(document.querySelector('input[name = "cult"]:checked').value);
	   q8= parseInt(document.querySelector('input[name = "friend"]:checked').value);
	   q9= parseInt(document.querySelector('input[name = "boss"]:checked').value);
	   q10=parseInt(document.querySelector('input[name = "married"]:checked').value);
	   
	   var score = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;

	   
	   
document.getElementById("score").innerHTML = 'Your score is: '+ score;
 $('#scoreGif').show();

return false;





};




	





});
