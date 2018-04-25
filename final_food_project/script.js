
function validateform(){  
var user_name=document.myform.user_name.value;  
var password=document.myform.password.value;  
  
  if (user_name==null || user_name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  
  return false;  
  }  
  else 
  { 
alert("Login Sucessfully");
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
  alert("Name can't be blank");  
  return false;  
}

   if (last_name==null || last_name==""){  
  alert("Name can't be blank");  
  return false;  
   }

   if (email==null || email==""){  
  alert("Name can't be blank");  
  return false;  
   
   }
   
   
   if (email.indexOf('@')<=0){  
  alert("invalid email");  
  return false;  
   
   }
   
   
   
   if (password.length<6){  
  alert("Password must be at least 6 characters and enter same password.");  
  
  return flase;  
   
   }
   
   if(password!=rpassword)
   {
	   alert("password not matching.");  
  
  return flase; 
   }
   
   if(rpassword == "")
   {
    alert("enter confirm password");  
    return false;
   }
   
   if(contact == "")
   {
    alert("enter contact");  
    return false;
   }


  else 
  { 
alert("Sign Up");
  }
  
}  




