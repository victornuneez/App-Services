const providerRegister = () => {
    //Busca en el HTML el formulario con este ID y lo guardamos
    const form = document.getElementById("register-form");

    // Esperamos a que el usuario haga click en enviar para activar las sig funciones
    // Guardamos el evento para poder usarlo
    form.addEventListener("submit", (event) => {
        // evitamos que la pagina se recargue para no perder los datos ingresados en el formulario
        event.preventDefault();

        // Guardamos los datos ingresados en el formulario en un objeto
        const provider = {
            name: document.getElementById("name").value,
            service: document.getElementById("service").value,
            phone: document.getElementById("phone").value,
            location: document.getElementById("location").value,
            description: document.getElementById("description").value
        };

        // Imprimimos los datos en la consola del navegador
        console.log(provider);

        // Avisamos al usuario que se registro correctamente
        form.innerHTML= "<p>Registro enviado correctamente</p">

        // Borramos todo lo que el usuario escribio en los campos del usuario.(lo dejamos limpio)
        form.reset();
    });

};

providerRegister();