let btn=document.getElementById("boton");


function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  if(altura%1==0){
    altura=altura/100;
    let total = peso/(altura*altura);
    document.getElementById("resultado").innerHTML = total.toFixed(2);
  } else{
    let total = peso/(altura*altura);
    document.getElementById("resultado").innerHTML = total.toFixed(2);
  }
}
btn.addEventListener("click",calcular);

let btn2=document.getElementById("boton2");
function reinicio() {
  document.getElementById("resultado").innerHTML = "";
document.getElementById("peso").value="" ;
document.getElementById("altura").value="" ;
}
btn2.addEventListener("click",reinicio);