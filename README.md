# Landing ALMYDEV

Landing page oficial de **ALMYDEV** — Transformamos procesos fragmentados en ecosistemas inteligentes.

## Tecnologías

- **React 18** + **Vite 6**
- CSS Modules
- Context API (tema oscuro/claro + i18n)

## Características

- Diseño responsive (mobile-first)
- Modo claro / oscuro con persistencia en localStorage
- Internacionalización español / inglés (ES / EN)
- Navegación fija con menú hamburguesa en mobile
- Banner principal de alto impacto visual
- Secciones: Hero, Problema, Solución, Transformación, Capacidades, Metodología, Áreas, Stack Tecnológico, Filosofía
- Módulo de clientes listo para expansión futura

## Estructura

```
src/
├── components/       # Componentes de la landing
│   ├── Header/       # Nav fijo + toggles (tema / idioma)
│   ├── Hero/         # Banner principal + CTA
│   ├── Problem/      # "Cuando la información deja de fluir"
│   ├── Solution/     # "Nuestra respuesta"
│   ├── Transformation/
│   ├── Capabilities/
│   ├── Process/
│   ├── Areas/
│   ├── TechStack/
│   ├── Philosophy/
│   └── Footer/
├── context/          # ThemeContext + I18nContext
├── modules/
│   └── clients/      # Módulo de gestión de clientes (CRUD)
├── App.jsx
├── main.jsx
└── index.css
```

## Cómo ejecutar

```bash
npm install
npm run dev
```

El servidor se levanta en `http://localhost:3000`.

## Construir para producción

```bash
npm run build
npm run preview
```

## Assets

Los assets (logo, banner, favicon) se cargan desde el repositorio principal de ALMYDEV en GitHub. Para usarlos localmente, copia los archivos de la carpeta `ALMYDEV/` a `src/assets/` y `public/`.

---

© 2026 ALMYDEV. Información que fluye. Empresas que crecen.
