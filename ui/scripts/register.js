
function validateEmail()
{
    // @TODO
    var email=document.getElementById("email").value;
    if(email.localeCompare("zzz")==0)
    {
        document.getElementById("email").style.color="green";
    }
    else{
        document.getElementById("email").style.color="black";
    }
}