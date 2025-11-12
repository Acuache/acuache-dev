export interface ProjectProps {
  id: string
  title: string
  description: string
  skills: string[]
  links: Link
}

interface Link {
  web: string
  github: string
  seeMore: string
}