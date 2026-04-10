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
        
        // recorremos cada proveedor
        providers.forEach(provider => {
            // Creamos la card en HTML, repeat metodo de JS que repite un texto
            const card = `
            <div class="card">
            <h4>${provider.name}</h4>
            <br>
            <p>${provider.service}</p>
            <br>
            <p>${"⭐".repeat(provider.rating)}</p>
            <br>
            <a href="detail-provider.html?id=${provider.id}" class="btn-primary">Ver mas</a>
            </div>
            `;
            // Inserta cada card antes de la tag de cierre, asi cada card se anhade al final
            container.insertAdjacentHTML('beforeend', card)
        });
    } catch (error) {
        container.innerHTML = "<p> Error cargando proveedores</p>"
    }

    };
    
loadProviders();