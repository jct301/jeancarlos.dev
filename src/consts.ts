import type { Site, Page, Links, Socials } from '@types'
// Global
export const SITE: Site = {
  TITLE: 'jeancarlos.dev',
  DESCRIPTION: 'Bienvenido a mi portafolio y blog.',
  AUTHOR: 'Jean Carlos',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Experiencia',
  DESCRIPTION: 'Experiencia profesional.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Articulos',
  DESCRIPTION: 'Articulos recientes escritos.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Proyects',
  DESCRIPTION: 'Proyectos recientes en los que he participado.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Buscar',
  DESCRIPTION: 'Busca articulos y proyectos con palabras clave.',
}

// Links
export const LINKS: Links = [
  {
    TEXT: 'Inicio',
    HREF: '/',
  },
  {
    TEXT: 'Experiencia',
    HREF: '/experiencia',
  },
  {
    TEXT: 'Proyectos',
    HREF: '/proyectos',
  },
  {
    TEXT: 'Articulos',
    HREF: '/articulos',
  }
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'jeancarlos.ingenieria@gmail.com',
    HREF: 'mailto:jeancarlos.ingenieria@gmail.com',
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'jeancarlos',
    HREF: 'https://github.com/jean-carlos-tr',
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'jeancarlos',
    HREF: 'https://www.linkedin.com/in/jeancarlost/',
  },
]
