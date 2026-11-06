# HIGHLINE — Servicio Automotriz

Landing de HIGHLINE (Córdoba): car audio, alarmas, cierres centralizados, polarizados,
sensores, baterías, cerrajería del automotor y parabrisas.

No es un e-commerce. Las personas eligen los servicios que les interesan y mandan
**una sola consulta por WhatsApp** con la lista armada y el modelo de su auto.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (disponible para lo que se sume; el diseño actual vive en `globals.css` con design tokens)
- `next/font` para las tipografías y `next/image` para la foto del hero
- Sin dependencias de UI externas: los íconos son SVG propios

## Correr en local

```bash
npm install
npm run dev
```

## Estructura

```
src/
  app/
    layout.tsx        fuentes, metadata y SEO
    page.tsx          orden de las secciones
    globals.css       design tokens + estilos (incluye todo el responsive)
  components/
    Navbar.tsx        navegación + menú hamburguesa (mobile)
    Hero.tsx          portada con foto
    Especialidades.tsx  mosaico + popup de cada servicio + barra de consulta
    Secciones.tsx     cómo trabajamos, horarios, FAQ, cierre y pie
    Icons.tsx         íconos SVG
  data/
    servicios.ts      LOS 9 SERVICIOS, teléfono y rubros  ← editar acá
  lib/
    whatsapp.ts       armado de los links de WhatsApp
```

## Qué editar

| Qué | Dónde |
| --- | --- |
| Servicios, textos y detalle de cada uno | `src/data/servicios.ts` |
| Número de WhatsApp | `TEL` y `TEL_DISPLAY` en `src/data/servicios.ts` |
| Horarios | `src/components/Secciones.tsx` |
| Preguntas frecuentes | `src/components/Secciones.tsx` |
| Colores y tipografías | bloque `:root` de `src/app/globals.css` |
| Foto del hero | `public/hero-interior.jpg` |

## Pendientes antes de publicarla como sitio real

- **Precios**: hoy cada servicio dice "Consultar precio". Falta que el cliente los defina.
- **Foto del hero**: la actual es de stock (Pexels, licencia libre). Reemplazar por una foto propia del taller.
- **Trabajos realizados**: falta una galería con fotos reales. No usar fotos de stock ahí.
- **Dirección**: hoy figura solo "Córdoba Capital", sin domicilio ni mapa.
