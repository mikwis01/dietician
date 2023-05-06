import { partnershipValues } from "@/constants/constants"
import React from "react"
import { ValuesItem } from "../ValuesItem/ValuesItem"

export const ValuesWrapper = () => {
  return (
    <div className="rounded-md flex-1 flex flex-col gap-4 md:gap-6 md:w-full">
      {partnershipValues.map((item) => (
        <ValuesItem key={item.content} icon={item.icon} content={item.content} />
      ))}
    </div>
  )
}
