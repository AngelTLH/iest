# Plantilla estética para GitHub Pages

Base minimalista en HTML, CSS y JavaScript para empezar proyectos estáticos con buen orden.

## Estructura

```
assets/
  css/        # Estilos globales y utilidades
  js/         # Interacciones ligeras (menú, scroll suave)
  img/        # Íconos e imágenes
servicios/     # Página independiente para el bloque de servicios
proceso/       # Roadmap detallado
guia-estilos/  # Guía rápida de utilidades y variables
contacto/      # Formulario estilizado
index.html     # Página principal con CTA hacia cada sección
index.html     # Página principal con secciones reutilizables
```

## Cómo usar

1. Clona el repositorio y abre `index.html` en tu navegador para ver la portada.
2. Edita el contenido específico en la carpeta correspondiente (`servicios/`, `proceso/`, etc.).
3. Ajusta las variables CSS en `assets/css/styles.css` para cambiar paleta y tipografía.
1. Clona el repositorio y abre `index.html` en tu navegador para ver la plantilla.
2. Ajusta las variables CSS en `assets/css/styles.css` para cambiar paleta y tipografía.
3. Duplica o elimina bloques de secciones en `index.html` según tus necesidades.
4. Sube el proyecto a GitHub y habilita **Pages** apuntando a la rama principal o carpeta `/docs` si prefieres mantener el código separado.

## Personalización rápida

- Coloca tus imágenes en `assets/img` y actualiza las rutas en el HTML.
- Añade scripts adicionales en `assets/js` y enlázalos en el `<head>` o antes del cierre de `<body>`.
- Si migras a React, puedes mantener la estructura de estilos y convertir las secciones en componentes.

## Licencia

Puedes usar y modificar esta plantilla libremente en proyectos personales o profesionales.
