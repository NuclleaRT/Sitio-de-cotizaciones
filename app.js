
let txtTitulo = document.getElementById('txtTitulo');
let imgLogo = document.getElementById('logo');
let txtDolarEuro = document.getElementById('dolar-euro');
let txtDolar = document.getElementById('dolar');

let valorPeso ;
let valorDolar ;

async function cargaTitulo(){
   
    txtTitulo.textContent = "Cambio de Monedas"
    imgLogo.src = "https://images.vexels.com/content/144761/preview/gold-coins-icon-6b1d7a.png";
}

async function obtCotizaciones(){
    let respuesta = await fetch('https://open.er-api.com/v6/latest/USD');
    let datosRespuesta = await respuesta.json();

    let respuestaDolar = await fetch('https://open.er-api.com/v6/latest/USD');
    let dtDolar = await respuestaDolar.json();

    console.log("el valor del dolar es: "+ datosRespuesta.rates.CLP, dtDolar.rates.USD);
    valorPeso = datosRespuesta.rates.CLP;
    valorDolar = dtDolar.rates.USD;
    return  dtDolar.rates.USD;
}

 function mostrarCotizaciones(){
    let dolarPeso = document.createElement('p');
    dolarPeso.innerText = valorPeso.toString();

    let parrafoDolar = document.createElement('p');
    parrafoDolar.innerText = valorDolar;

    let imgGift = document.createElement('img');
    imgGift.classList.add("gift");
    imgGift.src = "/loading.gif";   
    
    let imgGift2 = document.createElement('img');
    imgGift2.classList.add('gift');
    imgGift2.src = "/loading.gif";

    txtDolarEuro.appendChild(imgGift);
    txtDolar.appendChild(imgGift2);

    setTimeout(function(){
        imgGift.style.display = "none";
        txtDolarEuro.appendChild(dolarPeso);

        imgGift2.style.display = "none";
        txtDolar.appendChild(parrafoDolar);

    },2000);

    
 }

obtCotizaciones();