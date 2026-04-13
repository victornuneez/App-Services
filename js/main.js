const getStars = (rating) => {
    // El metodo repeat toma el caracter y lo multiplica por el valor del rating
    const stars = "★".repeat(rating);
    
    // Calcula cuantas estrellas vacias se necesitan para completar 5 estrellas.(Resta el 5 estrellas - el rating)
    const empty = "☆".repeat(5 - rating);

    // Concatenamos ambos resultados y devolvemos un resultado completo
    return stars + empty; 
}

// Funcion que renderiza los datos en el contenedor de la vista de proveedores
const renderProviders = (list, container) => {
    // Limpiamos la vista, osino cada vez que busquemos un proveedor los resultddos nuevos se acumularan debajo de los viejos infinitamente
    container.innerHTML = "";
    
    // Muestra cada proveedor en su respectiva carta
    list.forEach(provider => {

        // Creamos la card en HTML, repeat metodo de JS que repite un texto
        const card = `
        <div class="card">
        <h4 class="card-title">${provider.name}</h4>
        
        <p class="card-category">${provider.service}</p>
        
        <p class="card-rating">
            ${getStars(provider.rating)}
            <span class="rating-text">
                ${provider.rating}.0 • (${provider.reviews || 0} reseñas)
            </span>
        </p>

        <p class="card-location">
            📍 ${provider.location || "Sin ubicacion"}
        </p>

        <p class="card-price-tag">${provider.price_estimate}</p>

        <a href="detail-provider.html?id=${provider.id}" class="btn-primary">Ver mas</a>
        </div>
        `;
        // Inserta cada card antes de la tag de cierre, asi cada card se anhade al final
        container.insertAdjacentHTML('beforeend', card);
    });
};

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

const loadFooter = async () => {
    const footer = document.getElementById("footer");
    
    const res = await fetch("components/footer.html");

    const html = await res.text();

    footer.innerHTML = html;
}


const loadFeaturedProviders = async () => {
    const res = await fetch("data/providers.json");
    const providers = await res.json();

    // Obtenemos el contenedor en donde pondremos los proveedores destacados
    const container = document.getElementById("featured-providers")

    // validamos si hay un contenedor, osino retornamos para no romper las otras paginas
    if(!container)  {
        return;
    }
    
    // Obtenemos los proveedores con 4 de rating
    const featured = providers.filter(p => p.rating >= 4);
    
    // Limitamos los proveedores destacados a 3.
    const top = featured.slice(0, 3);

    // Insertamos las vistas en el contenedor
    renderProviders(top, container);
}




loadNavbar();
loadFeaturedProviders();
loadFooter();
