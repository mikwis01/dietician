import { motion } from "framer-motion"
import { OfferTileInterface } from "@/types/types"
import React from "react"
import check from "../../assets/check.png"
import Link from "next/link"

export const OfferTile: React.FC<OfferTileInterface> = ({ price, header, items, isLastItem }) => {
    return (
        <div
            className={`bg-customGreen-bluredBackground/75 w-full rounded-md flex flex-col ${
                isLastItem && "md:ml-[50%] lg:ml-0"
            }`}>
            <div className="rounded bg-customGreen-button p-4 text-white">
                <p className="text-sm drop-shadow-lg">{header}</p>
                <h3 className="text-2xl">
                    {price} zł
                    <span className="text-sm">{` /1 godzina`}</span>
                </h3>
            </div>
            <div className="px-4 pt-8 pb-4">
                {items.map((content, i) => (
                    <div className="mb-4 flex items-center gap-4" key={i}>
                        <div
                            className="w-5 h-5 rounded-md bg-center bg-contain bg-no-repeat shrink-0"
                            style={{ backgroundImage: `url(${check.src})` }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                ))}
            </div>
            <div className="flex-grow" />
            <motion.div
                className="w-full flex justify-center pb-4 m-auto"
                whileTap={{ scale: 0.9 }}>
                <Link
                    href={"/kontakt"}
                    className="w-2/3 bg-customGreen-button rounded-md text-white p-4 grid place-items-center">
                    Wybierz pakiet
                </Link>
            </motion.div>
        </div>
    )
}
