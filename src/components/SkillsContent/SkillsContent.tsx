import { skills } from "@/constants/constants"

export const SkillsContent = () => {
  return (
    <section className="w-full bg-customGreen-bluredBackground/75 backdrop-blur-sm p-4 rounded-md lg:w-full flex-1 flex flex-col justify-between">
      <p className="opacity-80">
        Podczas współpracy ze mną otrzymasz jasny i realny plan, który pomoże Ci osiągnąć wymarzone
        cele krok po kroku. Zaoferuję Ci też kompletne wsparcie w trakcie jego realizacji.
        <br />
        <br />
        Specjalizuję się w:
      </p>
      <ul className="list-disc pl-10 font-semibold py-4">
        {skills.map((skill) => (
          <li key={skill} className="py-4">
            {skill}
          </li>
        ))}
      </ul>
      <p>
        Zmiany nie muszą być trudne, jeśli zaczną być podejmowane odpowiednio wcześnie i zostaną
        odpowiednio przemyślane.
      </p>
    </section>
  )
}
