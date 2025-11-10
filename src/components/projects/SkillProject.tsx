import { useState } from 'react'

interface SkillProjectProps {
  children: React.ReactNode
  label: string
  setAllSkills: React.Dispatch<React.SetStateAction<string[]>>
}
export function SkillProject({ children, label, setAllSkills }: SkillProjectProps) {
  const [isActive, setIsActive] = useState<boolean>(false)
  const handleClick = () => {
    const nextIsActive = !isActive
    setIsActive(nextIsActive)
    setAllSkills(prev => nextIsActive ? [...prev, label] : prev.filter(skill => skill !== label))
  }
  return (
    <article onClick={handleClick} className={`p-2.5 rounded-full border cursor-pointer ${isActive ? "" : "grayscale"}`}>
      {children}
    </article>
  )
}