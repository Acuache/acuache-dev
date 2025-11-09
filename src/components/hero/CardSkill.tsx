interface CardSkillProps {
  label: string
  children: React.ReactNode;

}
export const CardSkill = ({ label, children }: CardSkillProps) => {
  return (
    <article className="flex gap-2 items-center mx-5 transition-shadow duration-300 hover:shadow-lg">
      {children}
      <p className="text-lg">{label}</p>
    </article>
  )
}