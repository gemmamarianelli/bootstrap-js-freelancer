let element = document.getElementById("submit");
let ore = document.getElementById("inputHour").value;
let lavoro = document.getElementById("inputWork").value;
let sconto = document.getElementById("inputDiscount").value;


let sconti = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



function calcoloSconti(sconto){
if(sconto !== sconti){
    
    console.log("hai il 25% di sconto");
}else{
    console.log("non fa parte dei codici sconto");
}
};

function submitForm(event){
    event.preventDefault();

    let button =document.getElementById("button").addEventListener("click", calcololavoro, calcoloSconti);
}


function calcololavoro(lavoro, ore){
   let prezzo = ore
   
    switch(lavoro){
case 'Backend':
prezzo *= 20.50;
break;


case 'Frontend' :
prezzo *= 15.30;
break;

case 'Analisi':
prezzo*=33.60;
    }
    if(sconti.includes(sconto)) prezzo *=0.25;
    console.log(prezzo);
};
