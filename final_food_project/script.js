
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


