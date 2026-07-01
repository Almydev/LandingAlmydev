# Landing ALMYDEV

Landing page oficial de **ALMYDEV** — Transformamos procesos fragmentados en ecosistemas inteligentes.

## Tecnologías

- **React 18** + **Vite 6**
- CSS Modules
- Context API (tema oscuro/claro + i18n)
- Intersection Observer (scroll reveal)

## Características

- Diseño responsive (mobile-first)
- Modo claro / oscuro con persistencia en localStorage
- Internacionalización español / inglés (ES / EN)
- Navegación fija con menú hamburguesa en mobile
- Logo transparente en header (`logobg.png`)
- Banner principal con glow y sombra
- **Animaciones al hacer scroll** (fade-in + slide-up vía IntersectionObserver)
- **Tooltips en hover** para tags de Sectores y tecnologías
- **WhatsApp flotante** para contacto directo
- **Formulario de contacto** integrado con Formspree
- Secciones: Hero, Problema, Solución, Transformación, Capacidades, Metodología, Áreas, Stack Tecnológico, Filosofía, Contacto
- Módulo de clientes listo para expansión futura

## Estructura

```
src/
├── components/       # Componentes de la landing
│   ├── Header/       # Nav fijo + logo + toggles (tema / idioma)
│   ├── Hero/         # Banner principal + CTA
│   ├── Problem/      # "Cuando la información deja de fluir"
│   ├── Solution/     # "Nuestra respuesta"
│   ├── Transformation/  # Tabla antes/después
│   ├── Capabilities/    # Capacidades estratégicas
│   ├── Process/         # Metodología en 4 pasos
│   ├── Areas/           # Sectores con tooltips
│   ├── TechStack/       # Tecnologías con tooltips
│   ├── Philosophy/      # Filosofía + valores
│   ├── Contact/         # Formulario de contacto
│   └── Footer/          # Nav + redes + WhatsApp flotante
├── context/          # ThemeContext + I18nContext
├── hooks/            # useScrollReveal (IntersectionObserver)
├── modules/
│   └── clients/      # Módulo de gestión de clientes (CRUD futuro)
├── App.jsx
├── main.jsx
└── index.css
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

El servidor se levanta en `http://localhost:5173`.

## Construir para producción

```bash
npm run build
npm run preview
```

## Formulario de contacto

El formulario usa [Formspree](https://formspree.io). Para activarlo:

1. Crea una cuenta en formspree.io
2. Crea un nuevo formulario y copia su ID
3. Reemplaza `xxxxxxx` en `src/components/Contact/Contact.jsx:7` con tu ID

## Assets

Los assets (logo, banner, favicon) se cargan desde el repositorio principal de ALMYDEV en GitHub.

- **Logo sin fondo:** `logobg.png`
- **Favicon sin fondo:** `faviconbg.png`
- **Banner:** `banner.png`

---

© 2026 ALMYDEV. Información que fluye. Empresas que crecen.
