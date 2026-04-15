# ServiYA! 🔧

**Encontrá los mejores proveedores de servicios de Asunción.**

ServiYA! conecta personas con proveedores verificados de forma rápida y segura. Sin intermediarios, sin comisiones ocultas.

🌐 **Demo en vivo:** [https://victornuneez.github.io/App-Services/](https://victornuneez.github.io/App-Services/)

---

## ¿Qué es ServiYA!?

Una app web para encontrar y calificar proveedores de servicios locales en Paraguay. Albaniles, pintores, electricistas, plomeros y más — todos en un solo lugar, con calificaciones reales de la comunidad.

---

## Estructura del proyecto

```
App-Services/
├── index.html              # Página de inicio
├── providers.html          # Listado de proveedores
├── detail-provider.html    # Detalle de cada proveedor
├── register.html           # Formulario de registro
├── css/
│   ├── global.css
│   ├── home.css
│   ├── providers.css
│   ├── detail.css
│   └── register.css
├── js/
│   ├── main.js
│   ├── providers.js
│   ├── detail.js
│   └── register.js
├── data/
│   └── providers.json      # Fuente de datos desacoplada
├── components/
│   ├── navbar.html
│   └── footer.html
├── images/
│   └── logo-serviYA.png
├── README.md
└── CHANGELOG.md
```

---

## Páginas

### 1. Inicio (`index.html`)
- Hero con CTA hacia proveedores
- Proveedores destacados (rating ≥ 4)
- Historia y objetivo del proyecto
- Tarjetas de verificación

### 2. Proveedores (`providers.html`)
- Listado en cards con nombre, categoría, calificación visual, ubicación y precio
- Buscador en tiempo real por nombre o categoría
- 3 estados de UI: cargando, sin resultados, error
- Datos consumidos desde `data/providers.json` via `fetch()`

### 3. Detalle del proveedor (`detail-provider.html`)
- Información completa: descripción, zonas de trabajo, métodos de pago, precio estimado
- Botón directo a WhatsApp
- Botón de volver al listado

### 4. Registro (`register.html`)
- Formulario con validación y límite de caracteres
- Feedback visual al enviar

---

## Cómo ejecutar localmente

> ⚠️ El proyecto usa `fetch()` para cargar JSON y componentes HTML, por lo que necesitás un servidor local (no funciona abriendo el HTML directo desde el explorador de archivos).

**Con VS Code + Live Server:**
1. Instalá la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. Click derecho en `index.html` → *Open with Live Server*

**Con Python:**
```bash
# Python 3
python -m http.server 8000
# Luego abrí http://localhost:8000
```

**Con Node.js:**
```bash
npx serve .
```

---

## Cómo desplegar en GitHub Pages

1. Subí todos los archivos al repositorio en la rama `main`
2. Andá a **Settings → Pages**
3. En *Branch* seleccioná `main` y la carpeta `/ (root)`
4. Guardá y esperá 1-2 minutos
5. Tu sitio estará en `https://<tu-usuario>.github.io/<nombre-del-repo>/`

---

## Mejoras Lighthouse aplicadas

### Mejora #1 — SEO: Meta description

**Problema detectado:** Lighthouse reportó ausencia de meta description, lo que afecta el posicionamiento en buscadores.

**Solución aplicada** en `providers.html`:
```html
<meta name="description" content="Encontra proveedores de servicios locales
verificados en ServiYA. Albaniles, pintores, electricistas y más en Asunción.">
```

**Impacto:** La puntuación de SEO en Lighthouse pasó de tener advertencia a cumplir el criterio de descripción de página.

---

### Mejora #2 — Accesibilidad: Label asociado al buscador

**Problema detectado:** El input de búsqueda no tenía un `<label>` asociado, lo que impedía que lectores de pantalla identificaran correctamente el campo.

**Solución aplicada** en `providers.html`:
```html
<!-- Label visible solo para lectores de pantalla -->
<label for="search-input" class="visually-hidden">
  Buscar proveedor por categoria o nombre
</label>
<input type="text" id="search-input" placeholder="Buscar">

<!-- aria-live notifica a lectores de pantalla cuando cambian los resultados -->
<div id="providers-list" class="cards" aria-live="polite"></div>
```

**Impacto:** El campo de búsqueda ahora es accesible por teclado y compatible con lectores de pantalla. La puntuación de Accesibilidad en Lighthouse mejoró al cumplir el criterio de formularios con etiquetas.

---

## Tecnologías

- HTML5 semántico
- CSS3 con variables y media queries (sin frameworks)
- JavaScript vanilla (ES6+)
- JSON como fuente de datos desacoplada
- GitHub Pages para el despliegue

---

## Autor

**Victor Nuñez** — [@victornuneez](https://github.com/victornuneez)

