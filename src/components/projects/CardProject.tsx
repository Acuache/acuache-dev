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

export function CardProject({ title, description, skills, links }: ProjectProps) {
  return (
    <article className='flex flex-col' style={{ "viewTransitionName": title }}>
      <div className='w-full h-75 bg-red-600/20'>

      </div>
      <div className='p-5 flex flex-col gap-3 justify-between flex-1'>
        <h3 className='text-2xl'>{title}</h3>
        <p>{description}</p>
        <div className='flex items-center justify-between '>
          <div className='flex gap-2'>
            {skills.map((skill) => {
              if (skill === "SALIENT") return
              const Icon = SKILL_ICONS[skill]
              return Icon
                ? <Icon key={skill} className="size-6" title={skill} />
                : <span key={skill}>{skill}</span>
            })}
          </div>
          <div className='flex gap-6'>
            <div className='flex gap-3'>
              <a href={links.github} className=''>
                <Github className='size-6' />
              </a>
              <a href={links.github} className=''>
                <Web className='size-6' />
              </a>
            </div>
            <a href={links.seeMore}>Ver más</a>
          </div>
        </div>
      </div>
    </article>
  )
}