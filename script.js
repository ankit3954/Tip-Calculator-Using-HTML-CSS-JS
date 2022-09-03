var tipPercentage = 0;
var prevClickedBtnID = null;

function resetData(){
    document.getElementById("bill-amount").value = 0;
    document.getElementById("people-num").value = 0;
    document.getElementById("tip").innerHTML ="$0.00";
    document.getElementById("total").innerHTML = "$0.00";
    document.getElementById("custom").value = null;
    document.getElementById(prevClickedBtnID).classList.remove("clicked-btn");
}


function myFunction2(clicked){
    tipPercentage = clicked;

    document.getElementById(clicked).classList.toggle("clicked-btn");
    if(prevClickedBtnID !== null){
        document.getElementById(prevClickedBtnID).classList.remove("clicked-btn");
    }
    prevClickedBtnID = clicked;
}

function myFunction(){
    var amountOfBill = document.getElementById("bill-amount").value;
    var noOfPeople = document.getElementById("people-num").value;
    if(tipPercentage === 0)
       tipPercentage = document.getElementById("custom").value;

   

    amountOfBill = +(amountOfBill);
    noOfPeople = +(noOfPeople);
    tipPercentage = +(tipPercentage);
   

    var tip = (tipPercentage * amountOfBill)/100;
    var totalBill = (+tip + amountOfBill);
    var totalPerPerson = (totalBill/noOfPeople).toFixed(2);
    var tipPerPerson = (tip/noOfPeople).toFixed(2);

    document.getElementById("tip").innerHTML ="$" + tipPerPerson;
    document.getElementById("total").innerHTML = "$" + totalPerPerson

}


