import { Header } from "@/components/Header/Header"
import { TextBox } from "@/components/TextBox/TextBox"
import React from "react"

export const Skills = () => {
  return (
    <article className="flex items-center py-8 justify-center lg:min-h-[calc(832px+4rem)]">
      <div className="flex flex-col items-center gap-6 lg:flex-row-reverse lg:w-5/6 lg:min-h-[832px]">
        <div className="flex flex-col items-center gap-6 lg:w-2/3 lg:min-h-[832px]">
          <Header
            text={
              "Zależy Ci na poprawie jakości życia, zdrowiu, lepszym samopoczuciu i wyglądzie? "
            }
          />
          <TextBox />
        </div>
        <div className="bg-[url('../assets/SkillsPic.webp')] w-5/6 h-96 rounded-md bg-center bg-cover bg-no-repeat lg:w-1/3 lg:h-[60vh] lg:min-h-[832px]" />
      </div>
    </article>
  )
}
