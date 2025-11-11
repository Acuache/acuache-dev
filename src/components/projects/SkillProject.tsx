interface SkillProjectProps {
  children: React.ReactNode
  label: string
  setAllSkills: React.Dispatch<React.SetStateAction<string[]>>
  active: boolean
}
export function SkillProject({ children, label, setAllSkills, active }: SkillProjectProps) {
  const handleClick = () => {
    if (label === "SALIENT") {
      setAllSkills([])
      return
    }
    setAllSkills(prev => active ? prev.filter(skill => skill !== label) : [...prev, label])
  }
  return (
    <article
      onClick={handleClick}
      className={`p-2.5 rounded-full border cursor-pointer select-none transition-colors duration-150 ${active ? "border-emerald-500 ring-1 ring-emerald-300" : "grayscale opacity-80 hover:opacity-100 hover:grayscale-0"}`}
    >
      <div className="relative">
        {children}
        {active && (
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" aria-hidden="true" />
        )}
      </div>
    </article>
  )
}