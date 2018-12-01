
function showMsg()
{
    var name=document.forms[0].elements[0].value;
    var aadhar=document.forms[0].elements[1].value;
    var email=document.forms[0].elements[2].value;
    var dob=document.forms[0].elements[3].value;
    if(name==""||aadhar==""||email==""||dob=="")
    window.alert("All the form elements must be filled properly");
    else 
    {
        window.alert("Successfully submitted your form");
        document.forms[0].reset();
    }
}