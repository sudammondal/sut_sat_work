function validate(){
var isValid = true;
if($('#fName').val().length==0){
$('#fName').next(".error").html("First Name is required").show();
isValid = false;
}
else if($('#fName').val().length!=0){
$('#fName').next(".error").html("").show();
isValid = true;
}

if($('#lName').val().length==0){
$('#lName').next(".error").html("Last Name is required").show();
isValid = false;
}
else if($('#lName').val().length!=0){
$('#lName').next(".error").html("").show();
isValid = true;
}

if($('#email').val().length==0){
$('#email').next(".error").html("Email is required").show();
isValid = false;
}
else if($('#email').val().length!=0){
$('#email').next(".error").html("").show();
isValid = true;
}

if($('#phone').val().length==0){
$('#phone').next(".error").html("Mobile Number is required").show();
isValid = false;
}
else if($('#phone').val().length!=0){
$('#phone').next(".error").html("").show();
isValid = true;
}

}