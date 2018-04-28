
function validateform(){  
var user_name=document.myform.user_name.value;  
var password=document.myform.password.value;  
  
  if (user_name==null || user_name==""){  
  alert("Enter User Name");  
  return false;  
}else if(password.length<8){  
  alert("Password must be at least 8 characters.");  
  
  return false;  
  }  
  else 
  { 
alert("Now you are logged in");
  }
  
}  


function validateform1(){  
var first_name=document.myform.first_name.value;  
var last_name=document.myform.last_name.value;  
var feedback=document.myform.feedback.value;  
  
  
if (first_name==null || first_name==""){  
  alert("enter first name");  
  return false;  
}

if (last_name==null || last_name==""){  
  alert("enter last name");  
  return false;  
}

if (feedback==null || feedback==""){  
  alert("enter feedback");  
  return false;  
}


  else 
  { 
alert("Submit your Feedback");
  }
  
}  


function validateform2()
{  
var PartyDate=document.myform.PartyDate.value;  
var people=document.myform.people.value;  
var description=document.myform.description.value;  
  
  if (PartyDate==null || PartyDate==""){  
  alert("select Date");  
  return false;  
}
if (people==null || people=="" ){  
  alert("Enter no of people");  
  return false;  
}

if (description==null || description==""){  
  alert("Enter description");  
  return false;  
}


  else 
  { 
alert("Oder Confirm");
  }
  
}  


function validateform4()
{  
var first_name=document.myform.first_name.value;  
var last_name=document.myform.last_name.value;  
var email=document.myform.email.value;  
var password=document.myform.password.value;  
var rpassword=document.myform.rpassword.value;  
var contact=document.myform.contact.value;  
  
  
  if (first_name==null || first_name==""){  
  alert("Enter First name");  
  return false;  
}

   if (last_name==null || last_name==""){  
  alert("Enter last name");  
  return false;  
   }

   if (email==null || email==""){  
  alert("enter email");  
  return false;  
   
   }
   
   
   if (email.indexOf('@')<=0){  
  alert("valid email id");  
  return false;  
   
   }
   
   
   
   if (password.length<8){  
  alert("Password must be at least 8 characters.");  
  
  return flase;  
   
   }
   
   if(password!=rpassword)
   {
	   alert("password are not same.");  
  
  return flase; 
   }
   
   if(rpassword == "")
   {
    alert("enter  re-password");  
    return false;
   }
   
   if(contact == "")
   {
    alert("enter contact");  
    return false;
   }


  else 
  { 
alert("Hey you are new customer");
  }
  
}  




