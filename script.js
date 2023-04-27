
const BOTON = document.getElementById("calcular");
const ERROR = document.getElementById("error")
const RESP = document.getElementsByClassName("item resultado")
const INPUT = document.getElementById("peso")
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');


BOTON.addEventListener("click", ()=>{
    let peso = parseInt( INPUT.value )
   if (peso>0){

    mostrarResultado(calcFlujo(peso), peso)

   }else {
    ERROR.style.display = "Block";
   }
})



function calcFlujo(peso){
    let res = 0;
    if (peso>30){
       res = calcSuperficieCorporal(peso)
    } else {
       res= hollidaySegar(peso)
    }
    return res;
}

function calcSuperficieCorporal(peso){
    return (((peso * 4) + 7) / (peso + 90))
}

function hollidaySegar(peso){
    let resto = peso
        let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo = flujo + aux * 20;
            resto = resto - aux;
        }
        if (resto>10){
           let aux = resto-10;
            flujo = flujo + aux * 50;
            resto = resto - aux;
        }

        flujo = flujo + resto * 100;
        return flujo;
}
function mostrarResultado (flujo, peso){
    var metodo = peso<=30 ? 'Método "Holliday-segar"' : 'Método "Sup. Corporal"';  
    if(peso > 30){
        
        var valorMilquiniento = flujo *1500;
        var valorDosMil = flujo *2000;
        
        var parte1 = `m+m/2 ${Math.round(1.5 * valorMilquiniento/24, 1)} cc/hr <br> ${metodo}   * 1500 `;
        FLU.innerHTML = `${Math.round(valorMilquiniento, 1)} cc <br>${Math.round( valorMilquiniento/24, 1)} cc/hr <br> ${parte1}`;

        var parte2 = `m+m/2 ${Math.round(1.5 * valorDosMil/24, 1)} cc/hr <br> ${metodo}   * 2000`;
        MAN.innerHTML = `${Math.round(valorDosMil, 1)} cc <br>${Math.round( valorDosMil/24, 1)} cc/hr <br> ${parte2}`;

    }
    else{
        FLU.innerHTML = `${Math.round(flujo, 1)} cc <br>${Math.round( flujo/24, 1)} cc/hr`;
        MAN.innerHTML = `m+m/2 ${Math.round(1.5 * flujo/24, 1)} cc/hr <br> ${metodo}`;
    }
    FLU.style.display = "Block";
    MAN.style.display = "Block";
    
}
