import type { ProjectProps } from '@interface/ProjectProps'
import { Github, Web } from '@components/icons/react'
import {
  Astroo,
  React as ReactIcon,
  CSS,
  HTML,
  JavaScript,
  TypeScript,
  TailwindCSS,
  Zod,
  Zustand,
  ReactRouter,
  TanStack,
  Supabase,
  PostgreSQL,
  Figma,
} from '@components/icons/react'

const SKILL_ICONS: Record<string, any> = {
  Astro: Astroo,
  React: ReactIcon,
  CSS,
  HTML,
  JavaScript,
  TypeScript,
  'React Router': ReactRouter,
  'TanStack Query': TanStack,
  TailwindCSS,
  Zod,
  Zustand,
  Supabase,
  PostgreSQL,
  Figma,
}

export function CardProject({ id, title, description, skills, links }: ProjectProps) {
  const imageUrl = new URL(`../../assets/images/projects/${id}.webp`, import.meta.url).href

  return (
    <article className='flex flex-col border' style={{ "viewTransitionName": title }}>
      <div className='relative w-full aspect-9/4 bg-transparent overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute scale-105 t-0 left-0 w-full h-full object-contain object-center "
        />

      </div>
      <div className='p-5 flex flex-col gap-3 justify-between flex-1'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='line-clamp-4'>{description}</p>
        <div className='flex gap-6 items-center justify-between ml-4 <- controlar'>
          <div className=' flex mt-2'>
            {skills.map((skill, index) => {
              if (skill === "SALIENT") return
              const Icon = SKILL_ICONS[skill]
              return <Icon
                key={skill}
                className={`size-11 p-2 rounded-full border -ml-4 relative bg-[#101010] duration-500 hover:-translate-y-5 hover:z-${10}`}
                title={skill} style={{ "zIndex": index }}
              />
            })}
          </div>
          <div className='flex gap-6 items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
              <a href={links.github} className='' target="_blank" rel="noopener noreferrer">
                <Github className='size-6' />
              </a>
              <a href={links.web} className='' target="_blank" rel="noopener noreferrer">
                <Web className='size-6' />
              </a>
            </div>
            <a href={links.seeMore}>Ver más</a>
          </div>
        </div>
      </div>
    </article >
  )
}