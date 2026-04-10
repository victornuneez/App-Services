const loadProviderDetail = async () => {
    
    // Esta linea toma los id desde la URL y los limpia para poder usarlos de manera sencilla
    const params = new URLSearchParams(window.location.search); 
    const id = params.get("id");

    // Traemos los datos de los proveedores y lo convertimos en un objeto JSON
    const res = await fetch("data/providers.json");
    const providers = await res.json()

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

    // Seleccionamos el contenedor en donde iran los datos del proveedor
    const container =document.getElementById("provider-detail");

    const card = `
        <div class="card">
            <h2>${provider.name}</h2>
            <br>
            <p>${provider.service}</p>
            <br>
            <p>${"⭐".repeat(provider.rating)}</p>
        </div>
    `;

    container.innerHTML = card;
};

loadProviderDetail();