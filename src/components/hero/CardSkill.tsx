interface CardSkillProps {
  label: string
  children: React.ReactNode;

}
export const CardSkill = ({ label, children }: CardSkillProps) => {
  return (
    <article className="inline-flex items-center gap-2 mx-5 whitespace-nowrap transition-shadow duration-300 hover:shadow-lg">
      {children}
      <p className="text-lg">{label}</p>
    </article>
  )
}