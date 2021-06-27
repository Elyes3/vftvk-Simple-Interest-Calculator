function compute()
{
       p = document.getElementById("principal").value;
    r= document.getElementById("rate").value;
    numyears=document.getElementById("years").value;
    d = new Date();
    v= d.getFullYear();
    intv=parseInt(v);
    intnumyears=parseInt(numyears);
    
    if ((intnumyears<0) && (parseFloat(p)<0))
    {window.alert("The amount must be positive , number of years can't be negative");}
    else if (numyears<0){
    window.alert("the number of years can't be negative");}
    else if (parseFloat(p)<0){
    window.alert("The amount must be positive");
    }
    else if (numyears=="" && p==""){
    window.alert("The texfields should contain a value");
    }
    else if (p==""){
    window.alert("You must fill the textfield Amount");
    }
    else if (numyears==""){
    window.alert("You must fill the textfield No. Of Years");
    }
    else
    {CalculatedAmount=p*(r/100)*numyears;
    addedRow=document.createElement("tr");
    tableval=document.getElementsByTagName("table")[0];
    SearchedYear=intv+intnumyears;
    addedRow.innerHTML="<td colspan='2'>If you deposit " + p +",<br>at an interest rate of " + r +"%.<br>You will receive an amount of " + CalculatedAmount +",<br>In the year " + SearchedYear +"</center>";
        tableval.appendChild(addedRow);
    } 
    
}
        
