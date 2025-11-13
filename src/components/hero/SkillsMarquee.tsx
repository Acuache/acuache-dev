import Marquee from "react-fast-marquee";
import { CardSkill } from '@components/hero/CardSkill'
import { Astroo, React, CSS, Figma, HTML, JavaScript, PostgreSQL, ReactRouter, Supabase, TailwindCSS, TanStack, TypeScript, Zod, Zustand } from '@components/icons/react'
const SKILLS = [
  {
    label: "Astro",
    icon: Astroo
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
// Faltaría mejorar el logo de TanStack
export const SkillsMarquee = () => {
  return (
    <Marquee pauseOnHover gradient gradientColor="#101010" gradientWidth={80} speed={35} className="my-10">
      {SKILLS.map((skill) => (
        <CardSkill key={skill.label} label={skill.label}>
          <skill.icon className="size-8" />
        </CardSkill>
      ))}
    </Marquee>
  );
};