function proceed()
{
    var accno=document.forms[0].elements[0].value;
    var amount=document.forms[0].elements[1].value;
    if(accno=="" && amount=="")
    {
        alert("Account number or Amount can't be left empty.");
    }
    else if(isNaN(accno))
    {
        alert("Account number must be in digits");
    }
    else if(isNaN(amount))
    {
        alert("Amount must be in digits");
    }
    else{
        alert("Transaction of Rs. "+amount+" is Successful");
        document.forms[0].reset();      
    }
}