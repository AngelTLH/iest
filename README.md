# Plantilla estética para GitHub Pages

Base minimalista en HTML, CSS y JavaScript para empezar proyectos estáticos con buen orden.

## Estructura

```
assets/
  css/        # Estilos globales y utilidades
  js/         # Interacciones ligeras (menú, scroll suave)
  img/        # Íconos e imágenes
servicios/     # Página de "¿Qué hacemos?"
productos/     # Catálogo de entregables listos para usar
proceso/       # Roadmap detallado
guia-estilos/  # Guía rápida de utilidades y variables
contacto/      # Formulario estilizado
politica-privacidad/ # Placeholder editable de privacidad
index.html     # Página principal con CTA hacia cada sección
```

## Cómo usar

1. Clona el repositorio y abre `index.html` en tu navegador para ver la portada.
2. Edita el contenido específico en la carpeta correspondiente (`servicios/`, `proceso/`, etc.).
3. Ajusta las variables CSS en `assets/css/styles.css` para cambiar paleta y tipografía.
4. Sube el proyecto a GitHub y habilita **Pages** apuntando a la rama principal o carpeta `/docs` si prefieres mantener el código separado.

### Recepción privada de formularios

El formulario de `contacto/` no envía datos a GitHub. Para almacenar la información de manera privada:

1. Crea un endpoint seguro (ej. [Formspree](https://formspree.io/) con plan privado o una API propia detrás de autenticación).
2. En `contacto/index.html`, asigna la URL de ese endpoint al atributo `data-endpoint` del formulario con `data-secure-form`.
3. Opcional: configura almacenamiento cifrado o una base de datos privada en tu backend; la página solo hace `POST` al endpoint que definas.

Sin un endpoint configurado, el envío se bloqueará con un mensaje para evitar exponer datos.

## Personalización rápida

- Coloca tus imágenes en `assets/img` y actualiza las rutas en el HTML.
- Añade scripts adicionales en `assets/js` y enlázalos en el `<head>` o antes del cierre de `<body>`.
- Si migras a React, puedes mantener la estructura de estilos y convertir las secciones en componentes.

## Licencia

Puedes usar y modificar esta plantilla libremente en proyectos personales o profesionales.
