document.addEventListener("DOMContentLoaded", () => {

    const $botonSearch = document.getElementById("search");
    console.log(anuncio)
    $botonSearch.onclick = creaElementos(jsonAnuncios);
    
const jsonRespuesta ={
    0: {
      "titulo" : "Computadora - Wikipedia, la enciclopedia …",
      "href": "https://es.wikipedia.org/wiki/Computadora",
      "resumen": "Computadora, computador u ordenador ​ ​ ​ es una máquina electrónica digital programable que ejecuta una serie de comandos para procesar los datos de entrada, obteniendo convenientemente información que posteriormente se envía a las unidades de salida. Una computadora está compuesta por …",
    },
    1: {
      "titulo" : "Significado de Computadora (Qué es, Concepto y …",
      "href": "https://www.significados.com/computadora",
      "contenido": "WebLa computadora tiene su origen en dispositivos que permiten realizar cálculos de forma …",
    },
    2: {
        "titulo" : "",
        "href": "",
        "contenido": "",
    },
    3: {
        "nombre-producto" : "",
        "descripcion": "",
        "precio": "",
    },
    4: {
        "nombre-producto" : "",
        "descripcion": "",
        "precio": "",
    },
    5: {
        "nombre-producto" : "",
        "descripcion": "",
        "precio": "",
    },
    
}
const jsonAnuncios ={
    0: {
        "nombre-producto" : "Teclado Mecánico Gamer Evga Z20...",
        "precio": "$.00",
        "href": "https://www.tienda.com",
    },
    1: {
        "nombre-producto" : "Mouse Microsoft Surface Arc Touch Mouse...",
        "precio": "$1,749.00",
        "href": "https://www.tienda2.com",
    },
    2: {
        "nombre-producto" : "Teclado Ergonómico Inalambrico...",
        "precio": "$2,499.00",
        "href": "https://www.tienda1.com",
    },
    3: {
        "nombre-producto" : "Monitor Led Aoc G24900vx De 23.8 Resolución...",
        "precio": "$3,199.00",
        "href": "https://www.tienda.com",
    },
    4: {
        "nombre-producto" : "Procesador Amd Ryzen 7 5800X 3.8Ghz 8 Core...",
        "precio": "$5,997.00",
        "href": "https://www.tienda2.com",
    },
    5: {
        "nombre-producto" : "Laptop Lenovo T460s Core i5 6th Gen 8Gb 256Gb...",
        "precio": "$8.600.00",
        "href": "https://www.tienda1.com",
    },
    6: {
        "nombre-producto" : "Procesador Intel Core I9...",
        "precio": "$12,899.00",
        "href": "https://www.tienda.com",
    },
    7: {
        "nombre-producto" : "Teclado y Mouse Logitech Logitech Mk270 2.4Ghz...",
        "precio": "$746.00",
        "href": "https://www.tienda3.com",
    },
    8: {
        "nombre-producto" : "Monitor Gamer Curvo 27 Xzeal Xz4010-1 1Ms...",
        "precio": "$4,699.00",
        "href": "https://www.tienda1.com",
    },
    9: {
        "nombre-producto" : "Mouse Microsoft Surface Mobile Mouse Azul...",
        "precio": "$1,199.00",
        "href": "https://www.tienda.com",
    },
    10: {
        "nombre-producto" : "Procesador Intel Core I7...",
        "precio": "$9,099.00",
        "href": "https://www.tienda31com",
    },
}
    
    function creaElementos(jsonAnuncios,jsonRespuesta) {  
        const $textoBusqueda = document.getElementById("busqueda"); 
        console.log($textoBusqueda)
        const $container_respuestas = document.getElementById("container-respuestas"); 
        var div =document.createElement("div");

        $container_respuestas.appendChild(div);
        

  
        creaCardAnuncio(jsonAnuncios);  
  
    }
  })
  
  function creaCardAnuncio(anuncios) {
  
    const $card = document.createElement("div");
    $card.setAttribute("class", "card text-right");
    $card.setAttribute("id", `${index}}`);
    $card.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${anuncios["titulo"]}</h5>
            <p class="card-text">${anuncios["resumen"]}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
        </div>
    `;
    $contenedorResultados.appendChild($card);
  }
  