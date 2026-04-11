
// Funcion que se encarga de realizar las busquedas por categorias y letras.
const searchProviders = (providers, container) => {
    // obtenemos el input que el usuario ingreso para realizar la busqueda
    const input = document.getElementById("search-input");

    // activamos el evento input, con solo agregar una letra en el buscador se ejecutara
    input.addEventListener("input", () => {
        // guardamos el texto que escribio el usuario en minusculas
        const text = input.value.toLowerCase();

        // Guardamos los proveedores o proveedor que coincidan con el caracter o caracteres de la busqueda.
        const filtered = providers.filter(p => 
            p.name.toLowerCase().includes(text) ||
            p.service.toLowerCase().includes(text) 
        );
        
        // Renderizamos la lista con los proveedores que coinciden con la busqueda.
        renderProviders(filtered, container);
    });
};


const loadProviders = async () => {
    try {
        // Traemos el archivo JSON
        const res = await fetch("data/providers.json");
        
        // Lo convertimos a objeto JSON
        const providers = await res.json();
        
        // Seleccionamos el contenedor en donde se insertaran los datos
        const container = document.getElementById("providers-list");
        
        if(!providers || providers.length === 0) {
            container.innerHTML = "<p>No hay proveedores disponibles</p>";
            return;
        }
        // Usamos la funcion para renderizar la vista
        renderProviders(providers, container)

        // Usamos la funcion para filtrar los proveedores
        searchProviders(providers, container)

    } catch (error) {
        const container = document.getElementById("providers-list");
        container.innerHTML = "<p> Error cargando proveedores</p>";
    }

};
    
loadProviders();
