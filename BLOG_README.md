# Blog Setup - Ikizen Agency

## 📁 Estructura del Blog

```
src/
├── content/blog/           # Posts en formato MDX
│   ├── guia-desarrollo-web-moderno.mdx
│   ├── importancia-identidad-marca-digital.mdx
│   └── optimizacion-seo-nextjs.mdx
├── components/blog/        # Componentes del blog
│   ├── BlogCard.tsx       # Tarjeta de post
│   ├── BlogList.tsx       # Lista de posts
│   ├── BlogHeader.tsx     # Header de post individual
│   └── index.ts           # Exportaciones
├── app/blog/              # Páginas del blog
│   ├── page.tsx           # Página principal del blog
│   └── [slug]/page.tsx    # Página de post individual
├── lib/blog.ts            # Utilidades para manejar posts
└── types/blog.ts          # Tipos TypeScript
```

## 🚀 Cómo Agregar un Nuevo Post

### 1. Crear el archivo MDX
Crea un nuevo archivo en `src/content/blog/` con el formato:
`nombre-del-post.mdx`

### 2. Agregar metadata
Al inicio del archivo, agrega el frontmatter:

```mdx
---
title: "Título del Post"
description: "Descripción breve del post"
date: "2024-01-15"
author: "Ikizen Agency"
tags: ["tag1", "tag2", "tag3"]
readingTime: "5 min"
featured: false
coverImage: "/images/imagen.jpg" # Opcional
---

# Contenido del post aquí...
```

### 3. Escribir el contenido
Usa Markdown/MDX para escribir el contenido:

```mdx
# Título Principal

## Subtítulo

Párrafo de texto normal.

### Código
```jsx
const ejemplo = "código";
```

### Listas
- Item 1
- Item 2

### Enlaces
[Texto del enlace](https://ejemplo.com)
```

## 🎨 Componentes Disponibles

### BlogCard
Muestra una tarjeta con información del post:
- Imagen de portada
- Título y descripción
- Tags
- Información del autor y fecha
- Tiempo de lectura

### BlogList
Lista de posts con opciones:
- Mostrar posts destacados
- Grid responsivo
- Filtros por tags

### BlogHeader
Header para posts individuales:
- Título y descripción
- Metadatos del post
- Navegación de regreso
- Imagen de portada

## 🔧 Configuración

### Next.js
El blog está configurado para usar:
- MDX para contenido
- Server-side rendering
- Generación estática
- Optimización de imágenes

### SEO
- Metadata dinámica
- Sitemap automático
- Open Graph tags
- Twitter Cards
- Schema markup

### Estilos
- Tailwind CSS para componentes
- Estilos personalizados para contenido (prose.css)
- Tema oscuro consistente

## 📝 Convenciones

### Nombres de archivos
- Usar kebab-case: `mi-post-example.mdx`
- Descriptivos y SEO-friendly

### Metadata
- `title`: Máximo 60 caracteres
- `description`: Máximo 160 caracteres
- `tags`: 3-5 tags relevantes
- `readingTime`: Tiempo estimado de lectura

### Contenido
- Usar encabezados jerárquicos (H1, H2, H3)
- Incluir alt text en imágenes
- Usar enlaces internos cuando sea relevante
- Mantener párrafos cortos y legibles

## 🚀 Despliegue

Los posts se generan automáticamente al hacer build:
```bash
npm run build
```

El sitemap se actualiza automáticamente con nuevos posts.

## 📊 Analytics

Para agregar analytics al blog:
1. Configurar Google Analytics
2. Agregar eventos de tracking
3. Monitorear métricas de engagement

## 🔍 SEO

Cada post incluye:
- Meta tags optimizados
- Open Graph tags
- Twitter Cards
- Schema markup
- Sitemap automático

## 📱 Responsive

El blog está optimizado para:
- Desktop (3 columnas)
- Tablet (2 columnas)
- Mobile (1 columna)

## 🎯 Próximas Mejoras

- [ ] Sistema de comentarios
- [ ] Búsqueda de posts
- [ ] Filtros por categorías
- [ ] Newsletter integration
- [ ] Social sharing
- [ ] Related posts
- [ ] Reading progress bar
