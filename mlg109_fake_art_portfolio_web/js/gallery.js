"use strict"; // Define que El código JavaScript debe ejecutarse en "Modo estricto". Por ejemplo, no se pueden usar variables no declaradas, etc.

/*************
 ** VARIABLES GLOBALES
 *************/
var color = 'black'; // Color para el cambio a negro cuando mostramos el índice
var colorW = '#dbdbdb'; // Color del icono del menú desplegable
var tipo = ''; // Parámetro recibido que indica la galería con la que inicia

// Array asociativo de tipo recibido de index.html y su valor. Este último será el título
var titulos = {'tresD':'3D', 'pixArt':'Pixel Art', 'concepArt':'Concept Art', 'ilus':'Ilustrations'}; 

/*************
 ** Arrays asociativos de nombre_de_imagen/Texto_sobre_imagen
 *************/
// Array de definición de la galería de 3D
var tresD_ar = { 
    '3D_1.jpg':'Neon Gun<br />01/01/2023', 
    '3D_2.jpg':'Candy Weapon<br />02/01/2023', 
    '3D_3.jpg':'Cybor<br />03/01/2023', 
    '3D_4.jpg':'Skull Knight<br />04/01/2023',
    '3D_5.jpg':'Cyborg Katana<br />05/01/2023',
    '3D_6.jpg':'Light Paladin<br />06/01/2023',
    '3D_7.jpg':'Cyberpunk Boy<br />07/01/2023',
    '3D_8.jpg':'Neon Soldier<br />08/01/2023',
    '3D_9.jpg':'Laser Robot<br />09/01/2023',
    '3D_10.jpg':'Tokyo Nights<br />10/01/2023',
    '3D_11.jpg':'Goth Girl<br />11/01/2023',
    '3D_12.jpg':'Normal Guy<br />12/01/2023',
    '3D_13.jpg':'Purple Monster<br />13/01/2023',
    '3D_14.jpg':'Blue Monster<br />14/01/2023',
    '3D_15.jpg':'Retrobot<br />15/01/2023',
    '3D_16.jpg':'Old House<br />16/01/2023'
};

// Array de definición de la galería de Pixel Art
var pixArt_ar = { 
    'PixelArt_1.jpg':'Pink Geisha<br />01/02/2023', 
    'PixelArt_2.jpg':'Starboy<br />02/02/2023', 
    'PixelArt_3.jpg':'Cyber Gun<br />03/02/2023', 
    'PixelArt_4.jpg':'Shogun<br />04/02/2023',
    'PixelArt_5.jpg':'Last Tree<br />05/02/2023',
    'PixelArt_6.jpg':'Fabrik<br />06/02/2023',
    'PixelArt_7.jpg':'Nameless City<br />07/02/2023',
    'PixelArt_8.jpg':'Le Rouge<br />08/02/2023',
    'PixelArt_9.jpg':'Magic Forest<br />09/02/2023',
    'PixelArt_10.jpg':'The way<br />10/02/2023',
    'PixelArt_11.jpg':'Lost<br />11/02/2023'
};

// Array de definición de la galería de Concept Art
var concepArt_ar = { 
    'ConceptArt_1.jpg':'Birth of Femto<br />01/03/2023', 
    'ConceptArt_2.jpg':'Griffith<br />02/03/2023', 
    'ConceptArt_3.jpg':'Oiran<br />03/03/2023', 
    'ConceptArt_4.jpg':'Tayu<br />04/03/2023',
    'ConceptArt_5.jpg':'Dragon Egg<br />05/03/2023',
    'ConceptArt_6.jpg':'Monster Fruit<br />06/03/2023',
    'ConceptArt_7.jpg':'Dead Knight<br />07/03/2023',
    'ConceptArt_8.jpg':'Doctor<br />08/03/2023',
    'ConceptArt_9.jpg':'Dark Souls City<br />09/03/2023',
    'ConceptArt_10.jpg':'Angel<br />10/03/2023'
};

// Array de definición de la galería de Ilustration
var ilus_ar = { 
    'Illustrations_1.jpg':'The Spider Web<br />01/04/2023', 
    'Illustrations_2.jpg':'Bunny<br />02/04/2023', 
    'Illustrations_3.jpg':'Cat Eyes<br />03/04/2023', 
    'Illustrations_4.jpg':'Spider Garden<br />04/04/2023',
    'Illustrations_5.jpg':'Future<br />05/04/2023',
    'Illustrations_6.jpg':'My new firend<br />06/04/2023',
    'Illustrations_7.jpg':'The wait<br />07/04/2023',
    'Illustrations_8.jpg':'Mr.Nameless<br />08/04/2023',
    'Illustrations_9.jpg':'Ellie<br />09/04/2023',
    'Illustrations_10.jpg':'Wolfs<br />10/04/2023',
    'Illustrations_11.jpg':'The Cloud<br />11/04/2023',
    'Illustrations_12.jpg':'Lisa<br />12/04/2023'
};

/*************
 ** CAPTURAMOS EL PARAMETRO RECIBIDO DE INDEX.HTML E INICIALIZAMOS LA GALERIA 
 *************/
function getParm() { 
    /* window.location.search: devuelve la parte de la URL que contiene 
     * parámetros incluyendo el signo de ingerrogación ?. Por ejemplo:
     *         http://www.Marina.com/gallery.html?tipo=3d&titulo=galeria
     *          devolvería: ?tipo=3d&titulo=galeria
     */

    // Quitamos la ? cogiendo la parte del string desde la posición 1, eliminando la 0
    var paramstr = window.location.search.substr(1); 
    // separamos por & por si hay más de un parámetro y los mentemos en el array paramarr
    var paramarr = paramstr.split ("&"); // & es el caracter separador de los parámentros
    // params será un array asociativo de clave/valor
    var params = {}; 

    for ( var i = 0; i < paramarr.length; i++) {
        // Separamos key del value a través del signo =
        var tmparr = paramarr[i].split("="); // = es el caracter separador de clave/valor
        // Metemos en params la clave (tmparr[0]) y el valor (tmparr[1])
        params[tmparr[0]] = tmparr[1];  
    }
    
    // Inicializamos la variable global tipo con el valor de filtro 
    if (params['tipo']) { // tipo es el valor esperado
        tipo = params['tipo'];
    } else {
        tipo = 'tresD'; // Si no viene ninguno, por defecto muestra la primera categoría
    }
    // Ponemos el título de la galería solicitada
    document.getElementById("titulo").innerText = titulos[tipo];
    // Llamamos a mostrar galería solicitada con el tipo que obtenemos
    mostrar2(tipo); 
    // Visualizamos el elemento works que contiene la galería, que por defecto está 
    // como display=none
    document.getElementById("works").style.display = "block";
    
}

/*************
 ** ESTA FUNCIÓN GENERA DINÁMICAMENTE LA GALERÍA DE IMÁGENES
 *************/
function mostrar2(tipo) {
    var path = "";
    var arr = [];
    switch (tipo) {
        case 'tresD':
            path = "img/3D/";
            arr = tresD_ar;
            break;
        case 'pixArt':
            path = "img/PixelArt/";
            arr = pixArt_ar;
            break;
        case 'concepArt':
            path = "img/ConceptArt/";
            arr = concepArt_ar;
            break;
        case 'ilus':
            path = "img/Ilustration/";
            arr = ilus_ar;
            break;
    }
    var verImagenes = "";
    var ampliar = 1;
    for (var key in arr) { 
        // Generamos en verImagenes el código para cada imagen a mostrar
        verImagenes += "<figure class='"+tipo+"'>";
        verImagenes += "<img src='"+path+key+"' alt='"+arr[key]+"'>";
        verImagenes += "<figcaption onclick='ampliarImagen("+ampliar+")'>"+arr[key]+"</figcaption>";
        verImagenes += "</figure>";
        // Añadimos a id_galeria cada una de las imágenes
        document.getElementById("id_galeria").innerHTML = verImagenes;
        // Incrementamos la variable ampliar que sirve de índice para ampliar la imagen
        ampliar++;
    }
    // Añadimos al título el tipo según el array titulos[] de la galeria seleccionada
    document.getElementById("titulo").innerText = titulos[tipo];
}


/*************
 ** FUNCIONES PARA EL MENU 
 *************/
function animar() {
    // Si tiene la clase "cambiar", la quita
    // Si NO tiene la clase "cambiar", se la pone
    document.getElementById("icono").classList.toggle("cambiar");
}

function openMenu() {
    // Cambiamos los colores
    color = 'black';
    colorW = '#dbdbdb';
    cambiar_color();
    // Animamos las barras del menú
    animar();
    // Visualizamos submenu
    document.getElementById("indice").style.display = "block";
    document.getElementById("id_logo_min").style.display = "none";
    document.getElementById("works").style.display = "none";
    document.getElementById("titulo").style.display = "none";
}

function closeMenu() {
    // Cambiamos los colores
    color = '#dbdbdb';
    colorW = 'black';
    cambiar_color();
    // Animamos las barras del menú
    animar();
    // Ocultamos submenu
    document.getElementById("indice").style.display = "none";
    document.getElementById("id_logo_min").style.display = "block";
    document.getElementById("works").style.display = "block";
    document.getElementById("titulo").style.display = "block";
}

function submenu() {
    if (document.getElementById("indice").style.display === "block") {
        // En caso de tener el submenu visualizado
        closeMenu();
    } else {
        // En caso de tener el submenu oculto
        openMenu();
    }
}

function cambiar_color() {
    // Cambia los colores cuando pulsamos el menu desplegable
    document.getElementById("icono").style.backgroundColor  = color;
    document.getElementById("id_encabezado").style.backgroundColor  = color;
    document.getElementById("id_logo_min").style.backgroundColor  = color;
    document.getElementById("logo_min").style.backgroundColor  = color;
    document.getElementById("menu").style.backgroundColor  = color;
    document.getElementById("bar1").style.backgroundColor  = colorW;
    document.getElementById("bar2").style.backgroundColor  = colorW;
    document.getElementById("bar3").style.backgroundColor  = colorW;
}

function aplicarFiltro (tipo) {
    /**
     * Muestra solo los figure con class igual al contenido de idclass
     */
    closeMenu()
    mostrar2(tipo);
}

/*************
 ** FUNCIONES PARA AMPLIAR LA IMAGEN SELECCIONADA Y CERRARLA
 *************/
function ampliarImagen(n) {
    /**
     * Función llamada desde el HTML
     * Se le pasa como parámetro el número de orden que ocupa
     * la imagen en la galería
     */

    //Se busca el figure de la posición correspondiente
    var figure = document.getElementById("id_galeria").children[n - 1];

    //Se busca la ruta de la imagen
    var ruta_imagen = figure.firstElementChild.getAttribute("src");

    //Se busca la imagen de la ventana modal y se le asigna el valor de la ruta en su atributo src
    var imagen = document.getElementById("modal").firstElementChild.firstElementChild;
    imagen.setAttribute("src", ruta_imagen);

    //Se extrae el texto del figcaption del figure pulsado y se añade en el de la ventana modal
    var pie = document.getElementById("modal").firstElementChild.lastElementChild;
    pie.innerHTML = figure.lastElementChild.innerHTML;

    //Se muestra la ventana modal
    document.getElementById("modal").style.display = "flex";
}

function cerrarVentana() {
    /**
     * Oculta la ventana modal
     */
    document.getElementById("modal").style.display = "none";
}
