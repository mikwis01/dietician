import Image from "next/image"
import MobileBacground from "@/assets/MobileBackground.webp"
import MobileBacgroundPattern from "@/assets/MobileBackgroundPattern.webp"
import DesktopBackground from "@/assets/DesktopBackground.webp"
import Dietician from "@/assets/Dietician.webp"
import Link from "next/link"
import { motion } from "framer-motion"
import ScrollDown from "@/assets/ScrollDown.png"
import { AnimatedArticle } from "@/components/AnimatedArticle/AnimatedArticle"

export const Landing = () => (
    <AnimatedArticle className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-between min-h-screen pt-16 lg:flex-row lg:w-5/6 max-w-[1200px]">
            <section className="flex-1 w-5/6 flex flex-col justify-center items-center gap-8 my-8 min-[500px]:my-16 min-[500px]:text-center lg:w-1/2 lg:text-start lg:gap-12 lg:items-start 2xl:gap-16">
                <h1 className="font-black text-xl w-full md:text-2xl lg:text-3xl xl:text-4xl sm:text-center lg:text-left">
                    Problemy ze zdrowiem i sylwetką nie muszą być już Twoim zmartwieniem!
                </h1>
                <h2 className="opacity-80 w-full md:text-lg lg:text-xl sm:text-center lg:text-left">
                    Pomogę Ci stać się lepszą wersją siebie dzięki<br></br> zdrowszemu żywieniu.
                </h2>
                <ul className="w-full flex gap-5 text-sm font-bold text-center lg:justify-start xl:text-lg sm:justify-center">
                    <motion.li
                        className="w-1/2 max-w-[12.5rem] h-12 bg-customGreen-button rounded-md text-white px-2 xl:h-14 xl:max-w-[14rem]"
                        whileTap={{ scale: 0.9 }}>
                        <Link href={"/o-mnie"} className="w-full h-full grid place-items-center">
                            Poznaj mnie lepiej
                        </Link>
                    </motion.li>
                    <motion.li
                        className="w-1/2 max-w-[12.5rem] h-12 border-customGreen-button border-[3px] rounded-md text-customGreen-semiLight px-2 xl:h-14 xl:max-w-[14rem]"
                        whileTap={{ scale: 0.9 }}>
                        <Link href={"/oferta"} className="w-full h-full grid place-items-center ">
                            Sprawdź moją ofertę
                        </Link>
                    </motion.li>
                </ul>
            </section>
            <section className="relative lg:w-1/2">
                <Image
                    src={MobileBacground}
                    alt="Tło - Marta Zarazińska Dietetyk"
                    className="flex-1 max-h-96 lg:hidden"
                    width={1024}
                    height={727}
                />
                <Image
                    src={MobileBacgroundPattern}
                    alt="Wzór - Marta Zarazińska Dietetyk"
                    className="absolute top-3/4 w-40 min-[500px]:w-60 md:w-72 lg:hidden"
                    width={613}
                    height={159}
                />
                <Image
                    src={MobileBacgroundPattern}
                    alt="Wzór - Marta Zarazińska Dietetyk"
                    className="absolute top-1/3 right-0 w-40 min-[500px]:w-60 md:w-72 lg:hidden"
                    width={613}
                    height={159}
                />
            </section>
            <div className="hidden absolute lg:block w-1/2 h-full right-0 top-0">
                <Image
                    src={ScrollDown}
                    alt="Zescrolluj niżej"
                    width={25}
                    height={25}
                    className="absolute bottom-5 left-0 animate-bounce z-[19]"
                />
                <Image
                    src={DesktopBackground}
                    alt="Tło - Marta Zarazińska Dietetyk"
                    width={700}
                    height={1056}
                    className="h-full w-5/6 right-0 absolute"
                />
                <Image
                    src={Dietician}
                    alt="Marta Zarazińska Dietetyk"
                    width={1000}
                    height={1000}
                    className="absolute bottom-0 w-11/12 max-w-3xl"
                />
            </div>
        </div>
    </AnimatedArticle>
)
