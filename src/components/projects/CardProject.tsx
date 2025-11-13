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
    <article className='flex flex-col border group' style={{ "viewTransitionName": title }}>
      <div className='relative w-full aspect-9/4 bg-transparent overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute scale-105 t-0 left-0 w-full h-full object-contain object-center "
        />

      </div>
      <div className='p-5 flex flex-col gap-3 justify-between flex-1 flex-wrap'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='line-clamp-4'>{description}</p>
        <div className='flex gap-6 justify-end xs:items-center xs:justify-between xs:ml-4 <- controlar '>
          <div className='hidden xs:flex mt-2 items-end'>
            {skills.map((skill, index) => {
              if (!(index < 4)) return
              if (skill === "SALIENT") return
              const Icon = SKILL_ICONS[skill]
              return <Icon
                key={skill}
                className={`size-10 p-2 rounded-full border -ml-4 relative bg-[#101010] duration-500 hover:-translate-y-5 hover:z-${10}`}
                title={skill} style={{ "zIndex": index }}
              />
            })}
            {
              skills.length > 3 && (
                <div className='ml-1 flex gap-1.5' aria-hidden="true">
                  <div className='size-2 bg-white rounded-full relative animate-none group-hover:animate-dot-bounce [animation-delay:0ms] group-hover:bg-st' aria-hidden="true"></div>
                  <div className='size-2 bg-white rounded-full relative animate-none group-hover:animate-dot-bounce [animation-delay:300ms] group-hover:bg-st' aria-hidden="true"></div>
                  <div className='size-2 bg-white rounded-full relative animate-none group-hover:animate-dot-bounce [animation-delay:600ms] group-hover:bg-st' aria-hidden="true"></div>
                </div>
              )
            }
          </div>
          <div className='flex gap-6 items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
              {
                links.figma.length !== 0 && (
                  <a href={links.figma} className='block md:hidden lg:block' target="_blank" rel="noopener noreferrer" aria-label={`Ir al figma del proyecto ${title}`}>
                    <Figma className='size-6 ' />
                  </a>
                )
              }
              {
                links.github.length !== 0 && (
                  <a href={links.github} className='' target="_blank" rel="noopener noreferrer" aria-label={`Ir al github del proyecto ${title}`}>
                    <Github className='size-6' />
                  </a>
                )
              }
              <a href={links.web} className='' target="_blank" rel="noopener noreferrer" aria-label={`Ir al github del proyecto ${title}`}>
                <Web className='size-6' />
              </a>
            </div>
            <a href={`proyectos/${id}`} aria-label={`Ver `}><h3>VER</h3></a>
          </div>
        </div>
      </div>
    </article >
  )
}