# Raul Lencinas – Terapias Integrativas

Landing page profesional construida con **Astro 4 + React + TypeScript + Tailwind CSS**.

## Stack técnico

- **Astro 4** – framework SSG con hidratación parcial
- **React 18** – para componentes interactivos
- **TypeScript** – tipado estricto
- **Tailwind CSS 3** – utility-first styling
- **Google Fonts** – Cormorant Garamond + Lato

## Paleta de colores

| Nombre     | Valor     | Uso                          |
|------------|-----------|------------------------------|
| Forest     | `#1C3A1C` | Fondo oscuro, navbar         |
| Sage-700   | `#2f5030` | Fondos secundarios           |
| Sage-500   | `#4d7d4c` | Acentos verdes               |
| Earth-700  | `#5f3a26` | Tarjetas marrones            |
| Earth-mid  | `#8f5a34` | Botones, detalles            |
| Earth-light| `#cda97f` | Acentos dorados              |
| Gold       | `#C4A35A` | Shimmer en botones           |
| Cream      | `#F5F0E8` | Fondo claro, texto en oscuro |

## Tipografías

- **Cormorant Garamond** (serif) → títulos, display, citas
- **Lato** (sans-serif) → cuerpo de texto, UI

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.astro        # Navegación sticky con scroll effect
│   ├── Hero.astro          # Sección principal con hojas decorativas
│   ├── SobreMi.astro       # Presentación del terapeuta
│   ├── Servicios.astro     # Grid de servicios (4 col + cards)
│   ├── Metodologia.astro   # Proceso terapéutico paso a paso
│   ├── Contacto.astro      # Formulario + links de contacto
│   ├── Footer.astro        # Pie de página
│   └── WAButton.astro      # Botón flotante WhatsApp
├── layouts/
│   └── BaseLayout.astro    # Layout HTML base
├── pages/
│   └── index.astro         # Página principal
└── styles/
    └── global.css          # Fuentes, animaciones, variables CSS
```

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Personalización necesaria

### 1. Número de WhatsApp
Buscar y reemplazar `5491100000000` con el número real de Raul (con código de país, sin +).

### 2. Foto de perfil
Agregar la imagen en `/public/raul-foto.jpg` y reemplazar el placeholder en `SobreMi.astro`:
```html
<!-- Reemplazar el div placeholder por: -->
<img src="/raul-foto.jpg" alt="Raul Lencinas" class="w-full h-full object-cover" />
```

### 3. Instagram
Actualizar el link en `Contacto.astro` y `Footer.astro` con el usuario real.

### 4. Precios de sesiones
Agregar sección de precios en `Servicios.astro` cuando estén definidos.

### 5. Textos / bio
Todos los textos están centralizados en cada componente. Buscar y editar directamente.

## Deploy recomendado

- **Vercel** → `vercel deploy` (cero configuración)
- **Netlify** → drag & drop del build `dist/`
- **Cloudflare Pages** → conectar repo de GitHub
