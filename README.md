# Landing ALMYDEV

Landing page oficial de **ALMYDEV** — Transformamos procesos fragmentados en ecosistemas inteligentes.

Sitio en producción: [https://almydev.com](https://almydev.com)

## Tecnologías

- **React 18** + **Vite 6**
- **React Router** (páginas legales `/privacidad`, `/terminos`, `/cookies`)
- CSS Modules
- Context API (tema oscuro/claro + i18n)
- Intersection Observer (scroll reveal)
- **@fontsource/inter** (fuente self-hosted, sin Google Fonts)

## Características

- Diseño responsive (mobile-first)
- Modo claro / oscuro con persistencia en localStorage
- Internacionalización español / inglés (ES / EN)
- Navegación fija con menú hamburguesa en mobile
- **Páginas legales bilingües**: Política de Privacidad, Términos y Condiciones, Política de Cookies
- **Aviso de preferencias de almacenamiento** (ConsentBanner)
- **Checkbox de consentimiento** obligatorio en el formulario de contacto
- Imágenes en **WebP** self-hosted (logo, banner, favicon)
- WhatsApp flotante (izquierda en mobile, para no competir con el menú)
- Secciones: Hero, Problema, Solución, Transformación, Capacidades, Metodología, Áreas, Stack Tecnológico, Filosofía, Contacto

## Estructura

```
src/
├── components/           # Componentes de la landing
│   ├── Header/           # Nav fijo + logo + toggles (tema / idioma)
│   ├── Hero/             # Banner principal + CTA
│   ├── Problem/          # "Cuando la información deja de fluir"
│   ├── Solution/         # "Nuestra respuesta"
│   ├── Transformation/   # Tabla antes/después
│   ├── Capabilities/     # Capacidades estratégicas
│   ├── Process/          # Metodología en 4 pasos
│   ├── Areas/            # Sectores con tooltips
│   ├── TechStack/        # Tecnologías con tooltips
│   ├── Philosophy/       # Filosofía + valores
│   ├── Contact/          # Formulario de contacto
│   ├── Footer/           # Nav + redes + WhatsApp flotante + links legales
│   ├── ConsentBanner/    # Aviso de preferencias de almacenamiento
│   └── ScrollToTop.jsx   # Scroll al tope al cambiar de ruta
├── pages/legal/          # Documentos legales bilingües (contenido + layout)
├── context/              # ThemeContext + I18nContext
├── hooks/                # useScrollReveal (IntersectionObserver)
├── services/             # contactService.js (consumo de la API)
├── config/               # companyInfo.js (datos legales de la empresa)
├── assets/               # Imágenes WebP self-hosted (PNG originales incluidos)
├── App.jsx               # Rutas de la SPA
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

El formulario envía la información a la **API propia** de ALMYDEV (`POST /api/contact`), implementada en el backend del proyecto [erpAlmydev](https://github.com/Almydev/erpAlmydev).

La URL de la API se configura con la variable de entorno `VITE_API_URL`:

- **Dev:** `http://localhost:4000/api` (por defecto)
- **QA:** `https://erp-qa.onrender.com/api`
- **Prod:** URL del backend en producción

## Despliegue (Render)

### Landing (este repo)

1. El `render.yaml` define el servicio estático `landing-almydev`.
2. Cada push a `main` dispara auto-deploy en Render.
3. El formulario apunta a `VITE_API_URL` (definida en `render.yaml`).

### Backend (erpAlmydev) — requerido para el formulario

Para que el formulario funcione en producción:

1. **Desplegar el backend**: haz push a la rama `qa` (o `main`) del repo `erpAlmydev`. En Render, dispara un *Deploy → Clear build cache & deploy*.
2. **CORS**: verifica que la variable `CORS_ORIGINS` del servicio ERP en Render incluya `https://almydev.com` y `https://www.almydev.com` (ya está en `render.yaml` y en el default de `application.yml`).
3. **Verificar**: prueba el formulario en `https://almydev.com`. El endpoint es público (`permitAll`) y guarda los mensajes en la tabla `mensajes_contacto`.

## Cumplimiento legal

El sitio incluye:

- **Política de Privacidad y Tratamiento de Datos** (`/privacidad`) — Ley 1581 de 2012.
- **Términos y Condiciones** (`/terminos`).
- **Política de Cookies / Preferencias de almacenamiento** (`/cookies`).
- **Aviso de consentimiento** al primer ingreso (ConsentBanner).
- **Checkbox de consentimiento** en el formulario de contacto.

### Datos de la empresa

Los datos legales del responsable se centralizan en `src/config/companyInfo.js`. Al formalizar la empresa, rellena:

```
legalName:   '[RAZÓN SOCIAL PENDIENTE]'
nit:         '[NIT PENDIENTE]'
domicile:    '[CIUDAD / DIRECCIÓN PENDIENTE]'
lastUpdated: '[FECHA DE ACTUALIZACIÓN]'
```

Además, registra la Política de Tratamiento de Datos ante la **Superintendencia de Industria y Comercio (SIC)**.

## Optimización de imágenes

Las imágenes se optimizan a WebP (quality 90) con [sharp](https://sharp.pixelplumbing.com/):

```bash
npm run optimize:images
```

- Los **PNG originales** se conservan en `src/assets/` como fuente de calidad.
- Script: `scripts/optimize-images.mjs`.

## Assets

- **Logo:** `src/assets/logobg.webp` (fuente: `logobg.png`)
- **Banner:** `src/assets/banner.webp` (fuente: `banner.png`)
- **Favicon / og:image:** `public/faviconbg-64.png`, `public/faviconbg-256.png` (fuente: `src/assets/faviconbg.png`)

---

© 2026 ALMYDEV. Información que fluye. Empresas que crecen.
