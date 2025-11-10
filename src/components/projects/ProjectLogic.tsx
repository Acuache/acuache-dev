import { Astroo, React, CSS, Figma, HTML, JavaScript, PostgreSQL, ReactRouter, Supabase, TailwindCSS, TanStack, TypeScript, Zod, Zustand } from '@components/icons/react'
import { SkillProject } from '@components/projects/SkillProject'
import { CardProject } from '@components/projects/CardProject'
import { useState } from 'react'
import type { ProjectProps } from '@interface/ProjectProps'
import projects from '@data/projects.json'

const SKILLS_PROJECTS = [
  {
    label: "Astro",
    icon: Astroo
  },
  {
    label: "CSS",
    icon: CSS
  },
  {
    label: "HTML",
    icon: HTML
  },
  {
    label: "React",
    icon: React
  },
  {
    label: "Figma",
    icon: Figma
  },
  {
    label: "JavaScript",
    icon: JavaScript
  },
  {
    label: "PostgreSQL",
    icon: PostgreSQL
  },
  {
    label: "React Router",
    icon: ReactRouter
  },
  {
    label: "Supabase",
    icon: Supabase
  },
  {
    label: "TailwindCSS",
    icon: TailwindCSS
  },
  {
    label: "TanStack Query",
    icon: TanStack
  },
  {
    label: "TypeScript",
    icon: TypeScript
  },
  {
    label: "Zod",
    icon: Zod
  },
  {
    label: "Zustand",
    icon: Zustand
  },
]

export const ProjectLogic = () => {
  const [allSkills, setAllSkills] = useState<string[]>([])
  // const filterSkills = projects.map((project) => project.skills.includes())

  return (
    <>
      <section className="flex flex-wrap items-center justify-center gap-6 max-w-lg mx-auto my-5">
        <p>All</p>
        {
          SKILLS_PROJECTS.map((skill, index) => (
            <SkillProject key={index} setAllSkills={setAllSkills} label={skill.label}>
              <skill.icon className="size-6" />
            </ SkillProject >
          ))
        }
        <p>Remove</p>
      </section>
      <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {
          projects.map((project: ProjectProps) => (
            <CardProject {...project} />
          ))
        }
      </section>
    </>
  )
}