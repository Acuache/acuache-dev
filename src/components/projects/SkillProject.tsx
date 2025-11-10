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
    <article
      onClick={handleClick}
      className={`p-2.5 rounded-full border cursor-pointer select-none transition-colors duration-150 ${isActive ? "border-emerald-500 ring-1 ring-emerald-300" : "grayscale opacity-80 hover:opacity-100 hover:grayscale-0"}`}
    >
      <div className="relative">
        {children}
        {isActive && (
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" aria-hidden="true" />
        )}
      </div>
    </article>
  )
}