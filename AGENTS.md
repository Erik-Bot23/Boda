<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Proyecto: Invitación de boda — Pablo & Marisol

Sitio web de una sola página (one-page) tipo invitación de boda, en español, con estética editorial: fondos crema, acentos terracota y tipografía serif elegante.

---

## 1. Cómo trabajar en este repositorio

Estas reglas aplican a cualquier agente que retome el proyecto:

- **El dueño del proyecto está aprendiendo Next.js.** No implementar código de la aplicación salvo que lo pida explícitamente. Lo normal es **entregar el código en el chat, con explicación breve de qué hace y por qué**, y que él lo pegue en los archivos.
- **Idioma: español.** Nombres de archivos/componentes en español cuando son de dominio del negocio (`NuestraHistoria`, `ElGranDia`, `CodigoVestimenta`).
- **Antes de sugerir APIs de Next.js**, leer la guía correspondiente en `node_modules/next/dist/docs/` (este proyecto usa Next 16; hay cambios respecto a versiones anteriores).
- **No romper el bloque `nextjs-agent-rules`** del inicio de este archivo: `next dev` lo regenera.
- **Al terminar cada avance**, actualizar la sección *Estado actual* y agregar una línea a la *Bitácora*.
- Avanzar **por fases**, una sección a la vez, verificando en el navegador antes de seguir.

---

## 2. Stack

| Pieza | Versión / nota |
|---|---|
| Next.js | 16.4.5 (App Router) |
| React | 19.3.0 |
| TypeScript | 5, `strict: true` |
| Tailwind CSS | 4 (vía `@tailwindcss/turbopack`) |
| Fuentes | `next/font/google` (auto-alojadas) |
| Base de datos | PostgreSQL — **aún no implementada** (Fase 10) |

`next.config.ts` ya trae activado: `cacheComponents`, `partialPrefetching`, `experimental.agentFeedback` y la regla de Turbopack para CSS. **No tocar sin necesidad.**

Alias de importación disponible: `@/*` → raíz del proyecto (`@/data/wedding-data`).

---

## 3. Datos del evento

Fuente única de verdad: `data/wedding-data.ts`. Ningún componente debe hardcodear fecha, lugares ni nombres.

| Dato | Valor |
|---|---|
| Novios | Pablo & Marisol |
| Fecha | 28 de diciembre, 12:00 del mediodía |
| Año | 2026 (confirmado) |
| Ceremonia | Iglesia Santo Domingo, Oaxaca de Juárez, Oaxaca |
| Recepción | Salón Shalom, Oaxaca de Juárez, Oaxaca |
| Ciudad | Oaxaca, México |
| Zona horaria | UTC−6 todo el año (`-06:00`) |
| Código de vestimenta | Formal (evitar blanco) |

**Pendientes de contenido:**

- [x] Año confirmado: 2026.
- [ ] Link de Google Maps de la iglesia.
- [ ] Link de Google Maps del salón.
- [ ] Direcciones exactas (calle y número) de ambos lugares.
- [ ] Hora de la recepción (hoy figura "Por confirmar").
- [ ] Fotos reales → guardar en `public/images/`.

---

## 4. Sistema de diseño

### 4.1 Paleta (tokens de Tailwind en `app/globals.css`)

Definidos en el bloque `@theme`, por lo que generan utilidades (`bg-*`, `text-*`, `border-*`) y aceptan opacidad (`bg-cream/80`).

| Token | HEX | Uso |
|---|---|---|
| `cream` | `#F3EBE1` | Fondo principal de secciones claras |
| `sand` | `#D8BFA8` | Líneas divisorias, íconos, fondos secundarios |
| `terracotta` | `#C08D52` | Acento principal: botones, enlaces, el "&" |
| `cinnamon` | `#A66443` | Hover de botones, textos secundarios |
| `coffee` | `#5C3A21` | Header/Footer, countdown, FAQ, títulos |
| `ink` | `#1A1817` | Texto principal (nunca negro puro) |

> ✅ **Corregido:** el token quedó como `--color-coffee` (dos "e") y `app/page.tsx` usa `text-coffee` / `bg-coffee` correctamente. Se deja constancia porque fue un typo silencioso de Tailwind.

### 4.2 Tipografía

- **Títulos:** Cormorant Garamond (variable, normal + italic) → utilidad `font-serif`.
- **Cuerpo, botones y navegación:** Montserrat (variable) → utilidad `font-sans`.
- Declaradas en `app/layout.tsx` con `variable: "--font-cormorant"` / `"--font-montserrat"` y mapeadas en `@theme inline`.
- Son fuentes variables: **no** se les pasa `weight`; el navegador interpola los pesos.
- El `<html>` lleva `lang="es"`.

### 4.3 Aplicación de la paleta por sección

| Sección | Fondo | Texto / detalles |
|---|---|---|
| Header | Transparente sobre el Hero → al hacer scroll `coffee` o `cream` | Texto blanco → `ink` o blanco |
| Hero | Foto a pantalla completa | Texto blanco con sombra sutil |
| Nuestra Historia | `cream` | Títulos `coffee`, texto `ink`, botón con borde `terracotta` |
| Countdown | `coffee` | Números `cream`, títulos/etiquetas `terracotta` |
| El Gran Día | `cream` | Íconos `terracotta`, botón mapa `terracotta` con texto blanco |
| Vestimenta / Hospedaje | `cream` o blanco | Divisorias `sand`, texto `ink` |
| Galería | `cream` | — |
| FAQ | `ink` o `coffee` | Texto `cream`, signos "+" en `terracotta` |
| Footer | `ink` con foto de fondo | Texto `sand` |

**Botones:** fondo `terracotta`, texto blanco, hover `cinnamon`, transición suave (300 ms). Bordes redondeados tipo píldora cuando aplique.

### 4.4 Reglas generales

- No usar negro puro `#000` ni blanco puro como fondo de sección.
- **Sin modo oscuro automático:** se eliminó el `@media (prefers-color-scheme: dark)` a propósito.
- Foco visible en `terracotta` para accesibilidad (ya en `globals.css`).
- `scroll-behavior: smooth` global para la navegación por anclas.
- Anclas de sección con `id` en español (`#historia`, `#countdown`, `#gran-dia`, `#vestimenta`, `#hospedaje`, `#galeria`, `#faq`, `#rsvp`).

---

## 5. Estructura de archivos

```
app/
  layout.tsx          # Fuentes, metadata, <html lang="es">
  page.tsx            # Ensamblaje de todas las secciones (hoy: prueba de humo temporal)
  globals.css         # Tokens de color, fuentes y estilos base
components/
  layout/
    Header.tsx        # Menú fijo/scroll + hamburguesa móvil        (vacío)
    Footer.tsx        # Fondo oscuro con foto y texto arena          (vacío)
  sections/
    Hero.tsx          # Foto, nombres y fecha                        (vacío)
    NuestraHistoria.tsx                                              (vacío)
    ElGranDia.tsx     # Ceremonia, recepción y botón de mapa         (vacío)
    CodigoVestimenta.tsx                                             (vacío)
    Hospedaje.tsx                                                    (vacío)
    Galeria.tsx                                                      (vacío)
    PreguntasFrecuentes.tsx                                          (vacío)
  ui/
    Button.tsx        # Botón reutilizable (variantes)               (vacío)
    Countdown.tsx     # Contador en tiempo real (client component)   (vacío)
data/
  wedding-data.ts     # Datos de la boda (hoy: solo el comentario inicial)
public/
  images/             # Fotos reales (vacía, creada)
  icons/              # Íconos (creada)
```

---

## 6. Decisiones técnicas ya tomadas

1. **Tailwind 4 con `@theme`**: los colores son tokens, no hex repetidos en los componentes. Las fuentes usan `@theme inline` porque su valor lo inyecta `next/font` en `<html>`.
2. **`dateISO` con offset `-06:00`**: el countdown debe apuntar a un instante único, sin depender de la zona horaria del visitante. Oaxaca ya no aplica horario de verano.
3. **`mapsUrl: string | null`**: si no hay link, el componente muestra "Ubicación próximamente" en vez de un botón roto. Cuando se pegue el link, el botón aparece solo.
4. **Día de la semana derivado**, no escrito a mano: se calculará con `Intl.DateTimeFormat("es-MX", …)` desde `dateISO` para que nunca se desincronice si cambia la fecha.
5. **Fotos por fases**: primero un componente reutilizable `PhotoPlaceholder` (fondo arena, borde fino, texto sutil) que reserva el espacio con la proporción correcta; después se sustituye por `next/image` cuando existan las fotos.
6. **Una sola fuente de datos**: `data/wedding-data.ts`, importada con `@/data/wedding-data`.
7. **Componentes de servidor por defecto.** Solo serán `"use client"` los que necesiten estado o efectos: Header (scroll/hamburguesa), Countdown, FAQ y RSVP.

---

## 7. Roadmap por fases

- [x] **Fase 1 — Fundamentos**: paleta, fuentes, estilos base, metadata. *Completada.*
- [x] **Fase 2 — Datos**: `data/wedding-data.ts` con `couple`, `event`, `ceremony` y `dressCode`. *Falta añadir `reception` (se usará en la Fase 6).*
- [ ] **Fase 3 — Header + Hero**: header transparente que se vuelve sólido al hacer scroll, menú hamburguesa móvil, Hero con foto/nombres/fecha y `PhotoPlaceholder`. *Código entregado; pendiente de pegar.*
- [ ] **Fase 4 — Nuestra Historia**: texto, fotos y botón a historia completa.
- [ ] **Fase 5 — Countdown**: contador días/horas/minutos/segundos en tiempo real.
- [ ] **Fase 6 — El Gran Día**: ceremonia, recepción, hora, dirección y botón a Google Maps.
- [ ] **Fase 7 — Vestimenta + Hospedaje**: secciones informativas con botones.
- [ ] **Fase 8 — Galería**: grid/carrusel con `next/image`.
- [ ] **Fase 9 — FAQ**: acordeón accesible.
- [ ] **Fase 10 — RSVP + PostgreSQL**: formulario (nombre, acompañantes, restricciones alimenticias), server action y persistencia.

---

## 8. Estado actual (al 4 de noviembre de 2026)

- **Fase 1** completa y verificada en el navegador.
- **Fase 2** completa: `data/wedding-data.ts` con `couple`, `event`, `ceremony` y `dressCode`. Falta añadir `reception` (Fase 6).
- Typo `coffe`/`coffee` corregido; año confirmado (**2026**).
- **Fase 3 entregada**: `components/ui/PhotoPlaceholder.tsx`, `components/sections/Hero.tsx`, `components/layout/Header.tsx` y ensamblaje en `app/page.tsx`. Pendiente de pegar y verificar.
- `app/page.tsx` sigue mostrando la prueba de humo hasta que se pegue la Fase 3.
- `public/images/` existe y está vacía; el Hero usa `PhotoPlaceholder` con overlay oscuro.

### Próximo paso concreto

1. Pegar `PhotoPlaceholder`, `Header`, `Hero` y el nuevo `app/page.tsx`.
2. Verificar en escritorio y móvil: header transparente → crema con blur, hamburguesa, cierre con `Escape`.
3. Continuar con la **Fase 4: Nuestra Historia**.

---

## 9. Trampas conocidas

- **Tailwind falla en silencio**: una clase con el token mal escrito (`bg-coffee` vs `--color-coffe`) no genera CSS y no lanza error. Verificar en el inspector que la propiedad exista.
- **Fuentes variables**: no pasar `weight` a Montserrat ni a Cormorant Garamond.
- **`@theme` vs `@theme inline`**: colores → `@theme`; fuentes de `next/font` → `@theme inline`.
- **No reactivar el modo oscuro** automático del template.
- **Nombrar archivos con mayúscula inicial** en componentes (`Hero.tsx`), como ya está el esqueleto.

---

## 10. Bitácora

| Fecha | Avance |
|---|---|
| 2026-11-04 | Fase 1 entregada e implementada: tokens de color, Cormorant Garamond + Montserrat, estilos base y metadata. |
| 2026-11-04 | Fase 2 entregada: estructura tipada de `data/wedding-data.ts` con datos reales; pendiente de pegar. |
| 2026-11-04 | Detectado y documentado el typo `coffe` / `coffee` que hacía invisible un color de la paleta. |
| 2026-11-04 | Fase 2 verificada; año confirmado (2026). Detectado que faltaba `reception` y que `timeLabel` era redundante. |
| 2026-11-04 | Fase 3 entregada: `PhotoPlaceholder`, `Hero`, `Header` con scroll y menú móvil, y ensamblaje en `app/page.tsx`. |
