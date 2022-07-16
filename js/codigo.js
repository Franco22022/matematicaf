// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDzR3tl0fHzUEsiWjSsxqpbtHcRzFTSWg",
    authDomain: "proyecto-autentic-hbo.firebaseapp.com",
    projectId: "proyecto-autentic-hbo",
    storageBucket: "proyecto-autentic-hbo.appspot.com",
    messagingSenderId: "87848121970",
    appId: "1:87848121970:web:475bc11a9929ad7f96b4eb"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  //==================================================================
  //OBTENER LOS VALORES DE LOS INPUTs
  const txtemail=document.getElementById("txtcorreo");
  const txtpass=document.getElementById("txtpass");
  const btnregistro=document.getElementById("btnregistro");
  const btningreso=document.getElementById("btningreso");
  const btnlogout=document.getElementById("btnlogout");
  
  //REGISTRO DE USUARIO MEDIANTE CORREO Y CONTRASEÑA
  btnregistro.addEventListener("click",e=>{
      const email=txtemail.value;
      const pass=txtpass.value;
      const auth=firebase.auth();
  
      const registro=auth.createUserWithEmailAndPassword(email,pass);
      alert("Registro Exitoso!!");
      registro.catch(e=>console.log(e.message));
  });
  //INGRESO O LOGIN DEL USUARIO
  btningreso.addEventListener("click",e=>{
      const email=txtemail.value;
      const pass=txtpass.value;
      const auth=firebase.auth();
  
      const ingreso=auth.signInWithEmailAndPassword(email,pass);
      window.open("paginaIngreso.html","VentanaMensaje","width=550,height=600,scrollbars=NO");
      ingreso.catch(e=>console.log(e.message));
  });

  //---------------------------------------------calculadora----------------------------------------///

  function Sumar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum=num1+num2;
    document.getElementById("resp").innerHTML= sum;
  }
  
  function Restar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let rest=num1-num2;
    document.getElementById("resp").innerHTML= rest;
  }
  
  
  function Multiplica(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let mult=num1*num2;
    document.getElementById("resp").innerHTML= mult;
  }
  
  function Divide(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let div=num1/num2;
    document.getElementById("resp").innerHTML= div;
  }
  
  function Potencia(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let pot=num1**num2;
    document.getElementById("resp").innerHTML= pot;
  }
  function limpiar(){
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resp").innerHTML="";
  }
  function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDay()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
  }
  Documet.getElementById("fecha").innerHTML=muestraFecha();
  
  function muestraHora(){
    let hora;
    hora=new Date();
    let cadena=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;
  }
  document.getElementById("hola").innerHTML=muestraHora();
  /*/-------------------------------ECUCIONES----------------------------------------------/*/
  function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDate()+"/"+(fecha.getUTCMonth()+1)+"/"+fecha.getFullYear();
    return cadena
}
document.getElementById("fecha").innerHTML= muestraFecha();

function muestraHora(){
let hora;
hora=new Date();
let cadena= hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
return cadena
}
document.getElementById("hora").innerHTML= muestraHora();

function borrar() {
document.getElementById("formulario").reset();
}

function ecuacion(){
    resultados = document.getElementById("raices");

    var a = Number(document.rellenar.vc.value);
    var b = Number(document.rellenar.vl.value);
    var c = Number(document.rellenar.vi.value);
    var d;

    if (a==0)
    {
        var x1= (-c)/b;
        var x2=0;
    }
    else {
        d=b*b-4*a*c;
        if(d>0)
        {
            var x1 = (-b+(Math.sqrt(d)))/(2*a);
            var x2 = (-b-(Math.sqrt(d)))/(2*a);
        }
        if(d==0)
        {
            var x1= (-b)/2*a;
            var x2= (-b)/2*a;
        }
        if (d<0)
        {
            alert("Las raices solo existen en Narnia...");
        }
    }

    document.getElementById("x1").value = Number(x1.toFixed(2));
    document.getElementById("x2").value = Number(x2.toFixed(2));

}

function validanumero(elemento){
    if (!/^([0-9\-])*$/.test(elemento.value)){
        alert("Ingrese solo numeros");
        elemento.value = '';
    }
}
