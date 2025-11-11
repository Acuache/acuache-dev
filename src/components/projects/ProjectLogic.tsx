import { Astroo, React, CSS, Figma, HTML, JavaScript, PostgreSQL, ReactRouter, Supabase, TailwindCSS, TanStack, TypeScript, Zod, Zustand, Star } from '@components/icons/react'
import { SkillProject } from '@components/projects/SkillProject'
import { CardProject } from '@components/projects/CardProject'
import { useState } from 'react'
import type { ProjectProps } from '@interface/ProjectProps'
import projects from '@data/projects.json'
import Tippy, { useSingleton } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';

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
  const filteredProjects = projects.filter((project: ProjectProps) => {
    if (allSkills.length === 0) return project.skills.includes("SALIENT")
    return allSkills.every((skill) => project.skills.includes(skill))
  })
  const [source, target] = useSingleton();

  return (
    <>
      <section className="flex flex-wrap items-center justify-center gap-6 max-w-2xl mx-auto my-5">
        <Tippy
          singleton={source}
          appendTo={() => document.body}
          delay={[0, 280]}
          duration={[120, 260]}
          placement="top"
          animation="shift-toward"
          moveTransition="transform 0.22s ease-out"
          className='text-sm text-white border-2 border-st px-1.5 py-0.5 rounded-2xl'
        />
        <Tippy
          key={"Destacado"}
          singleton={target}
          appendTo={() => document.body}
          delay={[0, 280]}
          duration={[120, 260]}
          placement="top"
          animation="shift-toward"
          content={"Destacados"}
          className='text-sm text-white border-2 border-st px-1.5 py-0.5 rounded-2xl'
        >
          <SkillProject active={allSkills.length === 0} setAllSkills={setAllSkills} label={"SALIENT"}>
            <Star className="size-6" />
          </SkillProject>
        </Tippy>
        {

          SKILLS_PROJECTS.map((skill) => (
            <Tippy
              key={skill.label}
              singleton={target}
              appendTo={() => document.body}
              delay={[0, 280]}
              duration={[120, 260]}
              placement="top"
              animation="shift-toward"
              content={skill.label}
              className='text-sm text-white border-2 border-st px-1.5 py-0.5 rounded-2xl'
            >
              <SkillProject setAllSkills={setAllSkills} label={skill.label} active={allSkills.includes(skill.label)}>
                <skill.icon className="size-6" />
              </ SkillProject >
            </Tippy>
          ))
        }
      </section>

      {
        filteredProjects.length === 0 ? (
          <p className='text-center'>No hay proyectos con esas tecnologias en especifico</p>
        ) : (
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {
              filteredProjects.map((project: ProjectProps) => (
                <CardProject key={project.title} {...project} />
              ))
            }
          </section>
        )
      }
    </>
  )
}