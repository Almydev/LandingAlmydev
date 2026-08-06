# AGENTS.md

Guía para agentes de IA y desarrolladores que trabajan en el proyecto **Landing ALMYDEV**.

## Repositorio y ramas

- Repositorio: `https://github.com/Almydev/LandingAlmydev`
- Rama `main` = producción. El deploy es automático en Render (blueprint `render.yaml`).

## Comandos

```bash
npm install
npm run dev              # Vite en :5173
npm run build            # Build de producción (debe terminar con EXIT 0)
npm run optimize:images  # Optimiza imágenes a WebP (sharp)
```

## Verificación

- **No hay suite de tests automatizada.** El patrón de verificación es `npm run build` EXIT 0 + smoke tests manuales en `https://almydev.com`.
- Cualquier cambio de frontend debe validarse con `npm run build` EXIT 0.

## Arquitectura

- **React 18 + Vite 6** + CSS Modules.
- **react-router-dom**: `/` (landing), `/privacidad`, `/terminos`, `/cookies`. El `render.yaml` ya tiene el rewrite SPA (`/*` → `/index.html`).
- Context: `ThemeContext` (tema claro/oscuro) y `I18nContext` (ES/EN) — ambos persisten en `localStorage`.
- `ScrollToTop` maneja el scroll al cambiar de ruta.
- Los textos legales viven en `src/pages/legal/legalContent.js` (bilingüe). Los datos del responsable, en `src/config/companyInfo.js`.

## Convenciones

- **Textos en español (es-CO)** en la UI, con equivalente EN en `I18nContext`.
- **No agregar comentarios** al código salvo que se pidan explícitamente.
- Estilos con CSS Modules (`*.module.css`).
- Al agregar strings visibles al usuario, añadir ambas traducciones en `I18nContext.jsx` (ES y EN).

## Integración con backend

- El formulario de contacto consume `POST /api/contact` del backend **erpAlmydev** (repo separado).
- URL configurable con `VITE_API_URL` (default dev: `http://localhost:4000/api`).
- El endpoint es público en el backend y guarda en `mensajes_contacto`.
- Para producción el backend debe desplegarse y su `CORS_ORIGINS` debe incluir `https://almydev.com`.

## Cumplimiento legal

- Sitio con consentimiento (ConsentBanner), checkbox en el formulario y páginas legales bilingües.
- **Datos del responsable pendientes**: al formalizar la empresa, rellenar `src/config/companyInfo.js` (razón social, NIT, domicilio, fechas) y registrar la política ante la SIC.

## Prevenciones

- No expongas secretos ni credenciales. `VITE_API_URL` es pública por diseño (Vite).
- No reviertas las decisiones de self-hosting (fuentes/imágenes locales) sin evaluar el impacto legal de los servicios de terceros.
- Mantén sincronizados los textos legales en ES y EN.
