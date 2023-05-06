import { Header } from "@/components/Header/Header"
import { ValuesWrapper } from "@/components/ValuesWrapper/ValuesWrapper"
import React from "react"

export const PartnershipValues = () => {
  return (
    <article className="flex items-center justify-center mt-8 lg:mt-8 lg:min-h-screen">
      <div className="w-full flex flex-col items-center gap-6 lg:flex-row lg:w-5/6 lg:min-h-[832px]">
        <div className="w-5/6 flex flex-col items-center gap-6 lg:w-2/3 lg:min-h-[832px]">
          <Header text={"Co zyskasz w trakcie naszej współpracy?"} />
          <ValuesWrapper />
        </div>
        <div className="bg-[url('../assets/PartnershipPic.webp')] w-5/6 h-96 rounded-md bg-center bg-cover bg-no-repeat lg:w-1/3 lg:h-[60vh] lg:min-h-[832px]" />
      </div>
    </article>
  )
}
