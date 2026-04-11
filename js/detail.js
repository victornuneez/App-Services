const loadProviderDetail = async () => {
    
    // Esta linea toma los id desde la URL y los limpia para poder usarlos de manera sencilla
    const params = new URLSearchParams(window.location.search); 
    const id = params.get("id");

    // Traemos los datos de los proveedores y lo convertimos en un objeto JSON
    const res = await fetch("data/providers.json");
    const providers = await res.json()
    
    // Seleccionamos el contenedor en donde iran los datos del proveedor
    const container =document.getElementById("provider-detail");

    // Buscamos el proveedor con el id que tenemos dentro del objeto JSON de proveedores
    const provider = providers.find(p => p.id === Number(id));

    // Validamos si existe el proveedor
    if(!provider) {
        container.innerHTML = `
        <div class="card">
            <h2>Proveedor no encontrado</h2>
            <p>El ID que buscas no existe.</p>
        </div>
        `;
        return;
    }
    //CARD DEL PROVEEDOR
    const card = `
        <div class="provider-detail-card">

            <h2 class="provider-name">${provider.name}</h2>
            <p class="provider-service">${provider.service}</p>
            <p class="provider-rating">
            ${"⭐".repeat(provider.rating)}
            (${provider.reviews || 0} reseñas)
            </p>
            <p class="provider-location">📍 ${provider.location || "Sin Ubicacion"}</p>
            <p class="provider-description">
                ${provider.description || "Sin descripcion disponible"}
            </p>

            <a href="https://wa.me/${provider.phone}" target="_blank" class="btn-primary">
                📞 WhatsApp
            </a>
        </div>
    `;

    container.innerHTML = card;
};

loadProviderDetail();