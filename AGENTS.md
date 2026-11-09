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
| Fecha | 28 de diciembre de 2026 |
| Ceremonia | Centro Cristiano Izcalli — 5:00 PM |
| Recepción | Centro Cristiano Izcalli — 8:00 PM |
| Dirección | Jacarandas 6, Santa Rosa de Lima, 54740 Cuautitlán Izcalli, Méx. |
| Ciudad | Cuautitlán Izcalli, Estado de México |
| Zona horaria | UTC−6 todo el año (`-06:00`) |
| Código de vestimenta | Formal (evitar blanco) |

> Ceremonia y recepción son en el mismo lugar y comparten el mismo link de Google Maps. El countdown apunta al inicio de la ceremonia (`2026-12-28T17:00:00-06:00`).

**Pendientes de contenido:**

- [x] Año confirmado: 2026.
- [x] Link de Google Maps (uno para ceremonia y recepción).
- [x] Direcciones exactas del lugar.
- [x] Horas de ceremonia (5:00 PM) y recepción (8:00 PM).
- [ ] Fotos reales → guardar en `public/images/`.
- [ ] Texto real de "Nuestra Historia" (hoy es texto de ejemplo).
- [ ] Hoteles recomendados para la sección de Hospedaje.

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
  page.tsx            # Ensamblaje: Hero → Historia → Countdown → Gran Día
  globals.css         # Tokens de color, fuentes y estilos base
components/
  layout/
    Header.tsx        # Menú fijo/scroll + hamburguesa móvil        (listo)
    Footer.tsx        # Fondo oscuro con foto y texto arena          (vacío)
  sections/
    Hero.tsx          # Foto, nombres, fecha, hora y ciudad          (listo)
    NuestraHistoria.tsx  # Texto + <details> expandible + foto       (listo)
    CuentaRegresiva.tsx  # Sección café que envuelve al Countdown    (listo)
    ElGranDia.tsx     # Lugar, horarios y botón de Google Maps       (listo)
    CodigoVestimenta.tsx  # Título "Formal" + descripción           (implementado)
    Hospedaje.tsx     # Hoteles; hoy muestra estado "próximamente"  (implementado)
    Galeria.tsx                                                      (vacío)
    PreguntasFrecuentes.tsx                                          (vacío)
  ui/
    Button.tsx        # Botón reutilizable (variantes)               (vacío)
    Countdown.tsx     # Contador en tiempo real (client component)   (listo)
    PhotoPlaceholder.tsx  # Espacio reservado para fotos             (listo)
data/
  wedding-data.ts     # Fuente única de verdad (couple, event, venues, dressCode)
public/
  images/             # Fotos reales (vacía)
  icons/derecha.png   # Flecha del botón "Ver nuestra historia completa"
```

---

## 6. Decisiones técnicas ya tomadas

1. **Tailwind 4 con `@theme`**: los colores son tokens, no hex repetidos en los componentes. Las fuentes usan `@theme inline` porque su valor lo inyecta `next/font` en `<html>`.
2. **`dateIso` con offset `-06:00`**: el countdown debe apuntar a un instante único, sin depender de la zona horaria del visitante. Cuautitlán Izcalli ya no aplica horario de verano.
3. **`mapsUrl: string | null`**: si no hay link, el componente muestra "Ubicación próximamente" en vez de un botón roto. Cuando se pegue el link, el botón aparece solo. Hoy ceremonia y recepción comparten el mismo link y la misma dirección.
4. **Día de la semana derivado**, no escrito a mano: se calculará con `Intl.DateTimeFormat("es-MX", …)` desde `dateIso` para que nunca se desincronice si cambia la fecha.
5. **Fotos por fases**: primero un componente reutilizable `PhotoPlaceholder` (fondo arena, borde fino, texto sutil) que reserva el espacio con la proporción correcta; después se sustituye por `next/image` cuando existan las fotos.
6. **Una sola fuente de datos**: `data/wedding-data.ts`, importada con `@/data/wedding-data`.
7. **Componentes de servidor por defecto.** Solo son `"use client"` los que necesitan estado o efectos: Header (scroll/hamburguesa) y Countdown. FAQ y RSVP lo serán cuando se implementen.
8. **"Historia completa" con `<details>` nativo**: no necesita JavaScript ni `"use client"`. El `<summary>` es un botón accesible por teclado y `group-open:` cambia el texto y rota la flecha.
9. **Countdown sin desfase**: el intervalo recalcula desde `Date.now()` en cada tick (no resta 1). El primer render muestra `--` para que servidor y cliente coincidan y no haya error de hidratación.
10. **La ceremonia y la recepción comparten tarjeta**: como son en el mismo lugar, `ElGranDia` muestra un solo `venue` y una lista con los dos horarios.

---

## 7. Roadmap por fases

- [x] **Fase 1 — Fundamentos**: paleta, fuentes, estilos base, metadata. *Completada.*
- [x] **Fase 2 — Datos**: `data/wedding-data.ts` con `couple`, `event`, `ceremony`, `reception` y `dressCode`. *Completada.*
- [x] **Fase 3 — Header + Hero**: header transparente que se vuelve sólido al hacer scroll, menú hamburguesa móvil desde `lg`, Hero con foto/nombres/fecha/hora/ciudad y `PhotoPlaceholder`. *Completada y verificada.*
- [x] **Fase 4 — Nuestra Historia**: texto, foto y `<details>` que expande la historia completa con flecha. *Completada; falta el texto real.*
- [x] **Fase 5 — Countdown**: contador días/horas/minutos/segundos en tiempo real dentro de una sección café. *Completada y verificada.*
- [x] **Fase 6 — El Gran Día**: Centro Cristiano Izcalli, ceremonia 5:00 PM, recepción 8:00 PM, dirección y botón a Google Maps. *Completada y verificada.*
- [x] **Fase 7 — Vestimenta + Hospedaje**: `CodigoVestimenta` lista; `Hospedaje` implementado con estado "próximamente" hasta tener hoteles. *Falta corregir 3 detalles de clases y el texto "Ingresar" del enlace de hoteles.*
- [ ] **Fase 8 — Galería**: grid/carrusel con `next/image`.
- [ ] **Fase 9 — FAQ**: acordeón accesible.
- [ ] **Fase 10 — RSVP + PostgreSQL**: formulario (nombre, acompañantes, restricciones alimenticias), server action y persistencia. *Por ahora solo formulario visual.*
- [ ] **Cierre — Footer**: fondo oscuro con foto y texto arena, al final de `page.tsx`.

---

## 8. Estado actual (al 9 de noviembre de 2026)

- **Fases 1 a 7 implementadas.** `tsc --noEmit` y `eslint` pasan sin errores.
- `app/page.tsx` ensambla: `Header` → `Hero` → `NuestraHistoria` → `CuentaRegresiva` → `ElGranDia` → `CodigoVestimenta` → `Hospedaje`.
- **Datos definitivos**: 28 de diciembre de 2026, Centro Cristiano Izcalli (Cuautitlán Izcalli), ceremonia 5:00 PM y recepción 8:00 PM. Mismo lugar y mismo link de Google Maps.
- **Countdown** apunta a `2026-12-28T17:00:00-06:00` (inicio de la ceremonia).
- **Nuestra Historia** usa `<details>` nativo; la flecha es `public/icons/derecha.png`.
- **Header** cambia a menú completo desde `lg` (1024px); en tablet usa hamburguesa.
- **Hospedaje** queda en modo "Muy pronto compartiremos recomendaciones..." hasta recibir datos de hoteles. El arreglo `hotels` ya existe en `wedding-data.ts` y se llena solo.
- **Pendiente de contenido**: fotos reales, texto real de la historia y hoteles recomendados.

### Detalles por corregir de la Fase 7

- `CodigoVestimenta.tsx`: la clase `px-8py-10` no tiene espacio; debe ser `px-8 py-10`.
- `Hospedaje.tsx`: `mx-w-15xl` no existe; debe ser `max-w-5xl`.
- `Hospedaje.tsx`: el enlace "Ver sitio" tiene `<span aria-hidden="true"> Ingresar </span>`; debe ser una flecha (`→`) o la imagen `derecha.png`.

### Próximo paso concreto

1. Corregir esos 3 detalles al retomar.
2. Continuar con la **Fase 8: Galería**.
3. Cuando lleguen los datos de hoteles, llenar `hotels` en `wedding-data.ts`.

---

## 9. Trampas conocidas

- **Tailwind falla en silencio**: una clase con el token mal escrito (`bg-coffee` vs `--color-coffe`) no genera CSS y no lanza error. Verificar en el inspector que la propiedad exista.
- **Typos de clases ya detectados**: `tracking-[o.45em]` (letra "o" en vez de cero), `trracking` (doble "r") y `tracking-[0.3em]` mal escrito no generan CSS. Revisar siempre `tracking`, `leading`, `text`, `bg`, `border`.
- **Clases pegadas sin espacio**: `px-8py-10` es una sola clase inválida y Tailwind la ignora; debe ser `px-8 py-10`. Lo mismo con `mx-w-15xl`: no existe, es `max-w-5xl`.
- **Texto de relleno en enlaces**: revisar que no quede `<span>Ingresar</span>` dentro de un enlace que ya dice "Ver sitio"; usar solo la flecha o el ícono.
- **Prop de hidratación**: es `suppressHydrationWarning`, no `suppressContentEditableWarning`. Este último existe en React y por eso TypeScript no marca error, pero no hace nada para el countdown.
- **Anclas con acento**: el label puede llevar acento (`Galería`), pero el `id`/`href` no (`#galeria`). `#galería` se percent-codifica y no coincide con `id="galeria"`.
- **`group-open:`**: para que funcionen `group-open:hidden` / `group-open:inline` / `group-open:rotate-90`, el `<details>` debe tener la clase `group`.
- **Color de token en estilos inline**: usar `var(--color-cinnamon)` dentro de `color-mix(...)`, no repetir el hex.
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
| 2026-11-04 | Fase 3 implementada y verificada: `PhotoPlaceholder`, `Hero`, `Header` con scroll y menú móvil, y ensamblaje en `app/page.tsx`. |
| 2026-11-08 | Fase 4 implementada: divisor corregido, `<details>` nativo para "historia completa" y flecha `public/icons/derecha.png`. |
| 2026-11-08 | Fase 5 implementada y verificada: `Countdown` cliente con `useEffect`, `suppressHydrationWarning` y recálculo desde `Date.now()`. |
| 2026-11-08 | Revisión: detectados typos silenciosos (`tracking-[o.45em]`, `trracking`, `suppressContentEditableWarning`) y `href="#galería"` con acento. Corregidos. |
| 2026-11-08 | Fase 6 implementada y verificada: Centro Cristiano Izcalli, ceremonia 5:00 PM, recepción 8:00 PM, dirección y Google Maps. Countdown apunta a las 17:00. |
| 2026-11-08 | `AGENTS.md` actualizado: datos reales, roadmap, decisiones, trampas y bitácora. Próximo: Fase 7. |
| 2026-11-09 | Fase 7 implementada: `CodigoVestimenta` y `Hospedaje` creados y ensamblados en `app/page.tsx`. Hospedaje queda con estado "próximamente" hasta tener datos de hoteles. |
| 2026-11-09 | Revisión Fase 7: `tsc` y `eslint` sin errores. Detectados 3 detalles: `px-8py-10` sin espacio, `mx-w-15xl` inválido y `<span>Ingresar</span>` en el enlace de hoteles. Se corrigen al retomar. |
| 2026-11-09 | Pausa: no se entrega más código. Próximo: corregir los 3 detalles y continuar con la Fase 8 (Galería). |
