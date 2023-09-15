import React from "react"
import { StaticImageData } from "next/image"

export const ValuesItem = ({ icon, content }: { icon: StaticImageData; content: string }) => {
    return (
        <div className="w-full flex gap-2 justify-center items-center bg-customGreen-bluredBackground/75 rounded-md px-2 py-4 md:gap-4 md:flex-1 md:justify-start md:p-4">
            <div
                className={`w-14 h-14 rounded-md bg-center bg-contain bg-no-repeat`}
                style={{ backgroundImage: `url(${icon.src})` }}
            />
            <p
                className="text-sm lg:text-base w-4/5"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}
