# CHANGELOG

Todos los cambios notables del proyecto ServiYA! están documentados en este archivo.

---

## [1.0.0] — Lanzamiento inicial

### Pruebas con usuarios

Se realizaron pruebas con 5 personas reales. A cada una se le asignó una tarea específica y se documentaron las dificultades encontradas, comentarios y los cambios aplicados como resultado.

---

### Usuario 1

**Tarea asignada:** Navegar al inicio y entender de qué trata la aplicación sin ayuda.

**Dificultad encontrada:** El usuario no entendió el propósito de la app solo con el hero. Necesitaba más contexto sobre por qué existe y qué problema resuelve.

**Comentario textual:** *"Entiendo que hay proveedores pero no sé bien para qué sirve ni por qué debería usarlo."*

**Cambio aplicado:** Se agregaron dos secciones en `index.html`:
- **Historia:** explica el problema que motivó la creación de ServiYA.
- **Objetivo:** comunica la propuesta de valor de forma directa.

```html
<section class="history">
  <div class="info-card">
    <h3>¿Porque existe ServiPy?</h3>
    <p>Encontrar un buen proveedor de servicios no deberia ser complicado...</p>
  </div>
</section>

<section class="objetive">
  <div class="info-card highlight">
    <h3>Nuestro Objetivo</h3>
    <p>Que encuentres, compares y contactes un proveedor en menos de 1 minuto.</p>
  </div>
</section>
```

---

### Usuario 2

**Tarea asignada:** Encontrar un proveedor y verificar en qué zonas trabaja.

**Dificultad encontrada:** Al ver el detalle del proveedor, no había información sobre las zonas de cobertura. El usuario no sabía si el proveedor llegaba a su barrio.

**Comentario textual:** *"Está bueno pero no sé si viene hasta donde vivo, eso es lo primero que miro."*

**Cambio aplicado:** Se agregó el campo `zones` en `providers.json` y se mostró en la card de detalle en `detail.js`:

```json
"zones": ["Villa Elisa", "San Lorenzo", "Lambaré"]
```

```javascript
<div class="info-item">
  <strong>Zonas de trabajo:</strong>
  <p>${provider.zones.join(", ")}</p>
</div>
```

---

### Usuario 3

**Tarea asignada:** Revisar el detalle de un proveedor y decidir si contratarlo.

**Dificultad encontrada:** El detalle no mostraba precio ni métodos de pago, que son los dos factores más importantes para tomar la decisión.

**Comentario textual:** *"No veo cuánto cobra ni si acepta transferencia. Eso es lo primero que necesito saber."*

**Cambio aplicado:** Se agregaron los campos `payments` y `price_estimate` en `providers.json` y se mostraron en el detalle del proveedor:

```json
"payments": ["Efectivo", "Transferencia"],
"price_estimate": "Desde 150.000 Gs."
```

```javascript
<div class="info-item">
  <strong>Métodos de pago:</strong>
  <p>${provider.payments.join(", ")}</p>
</div>
<div class="info-item">
  <strong>Precio estimado:</strong>
  <p>${provider.price_estimate}</p>
</div>
```

---

### Usuario 4

**Tarea asignada:** Completar el formulario de registro como si fuera un proveedor.

**Dificultad encontrada:** Los campos no tenían límite de caracteres, lo que generaba confusión sobre cuánto escribir y podía resultar en datos mal formateados.

**Comentario textual:** *"No sé hasta cuánto puedo escribir en cada campo, empecé a escribir mucho y no sé si está bien."*

**Cambio aplicado:** Se agregó el atributo `maxlength` en todos los campos del formulario en `register.html`:

```html
<input type="text" id="name" maxlength="20" placeholder="Nombre y Apellido">
<input type="text" id="service" maxlength="10" placeholder="Servicio">
<input type="text" id="zone" maxlength="40" placeholder="Zonas de servicio">
<input type="text" id="payments" maxlength="15" placeholder="Métodos de pago">
<input type="text" id="price_estimated" maxlength="30" placeholder="Precio estimado">
<input type="tel" id="phone" maxlength="15" placeholder="+595975123456">
<input type="text" id="location" maxlength="20" placeholder="Ubicacion">
<textarea id="description" maxlength="40"></textarea>
```

---

### Usuario 5

**Tarea asignada:** Ver el detalle de un proveedor y volver al listado.

**Dificultad encontrada:** No había forma visible de volver al listado desde la página de detalle. El usuario usó el botón atrás del navegador pero no lo encontró intuitivo dentro de la app.

**Comentario textual:** *"¿Cómo vuelvo? No encuentro un botón para ir al listado sin usar el atrás del navegador."*

**Cambio aplicado:** Se agregó un botón de volver en `detail-provider.html` con estilo propio en `detail.css`:

```html
<a href="providers.html" class="button-back">
  &lt; Volver
</a>
```

```css
.button-back {
  display: inline-block;
  margin-top: 40px;
  text-decoration: none;
  color: var(--muted);
  margin-left: 90px;
  font-weight: 600;
}

.button-back:hover {
  color: var(--text);
  transition: 0.2s ease;
}
```

---

*Proyecto: ServiYA!*
*Autor: Victor Nuñez (@victornuneez)*
