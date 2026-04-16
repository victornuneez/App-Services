const loadingState = (container) => {
    container.innerHTML = `
    <div class="loading-state" role="status" aria-live="polite">
        <h3>Cargando proveedores...</h3>
    </div>
    `;
};

const emptyState = (container) => {
    container.innerHTML = `
    <div class="empty-state" role="status" aria-live="polite">
        <h3>Sin resultados</h3>
    </div>
    `;
};

const errorState = (container) => {
    container.innerHTML = `
    <div class="error-state" role="status" aria-live="polite">
        <h3>Error al cargar</h3>
    </div>
    `;
};

// Funcion de delay para mostrar el estado cargando en pantalla
const delay = (ms) => {
    return new Promise(end => setTimeout(end, ms));
}

// Funcion que se encarga de realizar las busquedas por categorias y letras.
const searchProviders = async (providers, container) => {
    // obtenemos el input que el usuario ingreso para realizar la busqueda
    const input = document.getElementById("search-input");

    // activamos el evento input, con solo agregar una letra en el buscador se ejecutara
    input.addEventListener("input", async () => {
        const text = input.value.toLowerCase();

        // Guardamos los proveedores o proveedor que coincidan con el caracter o caracteres de la busqueda.
        const filtered = providers.filter(p => 
            p.name.toLowerCase().includes(text) ||
            p.service.toLowerCase().includes(text) 
        );
        
        // Mostrar estado de cargando en pantalla
        loadingState(container);
        await delay(600);
        
        // Si la lista filtrada es igual a 0, entonces usamos la funcion de estado sin resultados
        if(filtered.length === 0) {
            emptyState(container);
        
        // Renderizamos la lista con los proveedores que coinciden con la busqueda.
        } else {
            renderProviders(filtered, container);
        }

    });
};


const loadProviders = async () => {
    
    // Seleccionamos el contenedor en donde se insertaran los datos
    const container = document.getElementById("providers-list");
    
    // Mostramos el estado de carga antes de hacer el fetch
    loadingState(container);

    try {
        // Traemos el archivo JSON
        const res = await fetch("data/providers.json");
        
        // Lo convertimos a objeto JSON
        const providers = await res.json();
        
        // Verificamos si providers existe y si tiene datos
        if(!providers || providers.length === 0) {
            emptyState(container);
            return;
        }
        // Usamos la funcion para renderizar la vista
        renderProviders(providers, container)

        // Usamos la funcion para filtrar los proveedores
        searchProviders(providers, container)

    } catch (error) {
        errorState(container);
        
    }

};
    
loadProviders();
