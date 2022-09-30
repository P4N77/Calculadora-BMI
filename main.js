let btn=document.getElementById("boton");


function calcular() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let total=0
  if(altura%1==0){
    altura=altura/100;
    total = peso/(altura*altura);
    document.getElementById("resultado").innerHTML = total.toFixed(2);
  } else{
    total = peso/(altura*altura);
    document.getElementById("resultado").innerHTML = total.toFixed(2);
  }

  if(total>=18.5 && total<=24.9){
    document.getElementById("resultado").style.backgroundColor="green";
    } else if(total>=25 && total<=29.9){
      document.getElementById("resultado").style.backgroundColor="yellow";
    } else if(total>=30 && total<=34.9){
      document.getElementById("resultado").style.backgroundColor="orange";
    }else if(total>=35 && total<=39.9){
      document.getElementById("resultado").style.backgroundColor="red";
    }else if(total>=40){
        document.getElementById("resultado").style.backgroundColor="red";
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