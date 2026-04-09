// FUNCION PARA INSERTAR EL NAVBAR EN CADA PAGINA
const loadNavbar = async () => {
    // Obtenemos el contenedor de navbar
    const navbar = document.getElementById("navbar");

    // Traemos el archivo navbar en un objeto y pausa la funcion hasta que llegue.
    const res = await fetch("components/navbar.html");

    // Convertimos el objeto res en texto(HTML)
    const html = await res.text();

    // Insertamos dentro de la etiqueta header la barra de navegacion(navbar)
    navbar.innerHTML = html;
}

// Ejecutamos la funcion
loadNavbar();