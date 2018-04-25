
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
  alert("can't be blank");  
  return false;  
}else if(last_name==null || last_name=="" || feedback==null || feedback==""){  
  alert("can't be blank.");  
  
  return false;  
  }  
  else 
  { 
alert("Submit your Feedback");
  }
  
}  


function validateform2(){  
var PartyDate=document.myform.PartyDate.value;  
var people=document.myform.people.value;  
var description=document.myform.description.value;  
  
  if (PartyDate==null || PartyDate==""){  
  alert("Enter Date");  
  return false;  
}else if(people==null || people=="" || description==null || description==""){  
  alert(" Can't be blank.");  
  
  return false;  
  } 
  else 
  { 
alert("Oder Confirm");
  }
  
}  
