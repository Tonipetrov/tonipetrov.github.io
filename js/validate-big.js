var noticeEmail=document.getElementById('notice-email');
var noticeMessage=document.getElementById('notice-message');
function validateEmail(email) {   
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

document.getElementById('email').onblur = function(){
   if(!validateEmail(this.value)){
	   noticeEmail.innerHTML="PLease enter valid email address";
	   this.style.backgroundColor="brown";
	   }
   else{
	   noticeEmail.innerHTML="";
	   this.style.backgroundColor="transparent";
	   }
};
document.getElementById('message').onblur = function(){
   if(this.value<8){
	   noticeMessage.innerHTML="Your message must be at least 7 symbols long.";
	   this.style.backgroundColor="brown";
	   }
   else{
	   noticeMessage.innerHTML="";
	   this.style.backgroundColor="transparent";
	   }
};
document.getElementById('submit').onclick = function(e){
   if(noticeEmail.innerText||noticeMessage.innerText){
	   e.preventDefault();
   }
};