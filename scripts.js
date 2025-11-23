/*
	1. get what's in field
	2. display in div
*/

document.addEventListener("DOMContentLoaded", function(){
    let btn = document.querySelector("button"); //button
    let fld = document.querySelector("input"); //text field
	let msgDiv = document.getElementsByClassName("message")[0]; //div w/ message
	
    btn.addEventListener("click", function(event){
		event.preventDefault(); //reloaded when field empty so that's removed
		let fldInfo = fld.value; //get value in the textfield
		let say = null; //init what message to display
		
		if(fldInfo.length>0){
		say = document.createTextNode("Thank you! Your email address "+ fldInfo +" has been added to our mailing list!");
		}else{
		say = document.createTextNode("Please enter a valid email address.");
		}
		
		msgDiv.innerHTML =""; //empty div tag material
		msgDiv.append(say); //add message to say
    });

})
