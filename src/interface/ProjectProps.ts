export interface ProjectProps {
  id: string
  title: string
  description: string
  skills: string[]
  links: Link
  success: string[]
  challenges: string[]
}

interface Link {
  figma: string
  web: string
  github: string
  seeMore: string
}