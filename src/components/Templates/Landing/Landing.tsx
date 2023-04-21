import Image from "next/image"
import MobileBacground from "@/assets/MobileBackground.webp"
import MobileBacgroundPattern from "@/assets/MobileBackgroundPattern.webp"
import DesktopBackground from "@/assets/DesktopBackground.webp"
import Dietician from "@/assets/Dietician.webp"
import Link from "next/link"
import { motion } from "framer-motion"

export const Landing = () => {
  return (
    <article className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center min-h-screen justify-between pt-16 lg:flex-row lg:w-5/6">
        <section className="flex-1 w-5/6 flex flex-col justify-center items-center gap-8 my-8 min-[500px]:my-16 min-[500px]:text-center lg:w-1/2 lg:text-start lg:gap-12 lg:items-start 2xl:gap-16">
          <h1 className="font-black text-xl w-full md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Problemy ze zdrowiem i sylwetką nie muszą być już Twoim zmartwieniem!
          </h1>
          <h2 className="opacity-80 w-full md:text-lg lg:text-xl 2xl:text-2xl">
            Pomogę Ci stać się lepszą wersją siebie dzięki<br></br> zdrowszemu żywieniu.
          </h2>
          <ul className="w-full flex gap-5 text-sm font-bold text-center min-[500px]:justify-center lg:justify-start xl:text-lg">
            <motion.li
              className="w-1/2 max-w-[12.5rem] h-12 bg-customGreen-button rounded-md text-white px-2 xl:h-14 xl:max-w-[15rem]"
              whileTap={{ scale: 0.9 }}>
              <Link href={"/o-mnie"} className="w-full h-full grid place-items-center">
                Poznaj mnie lepiej
              </Link>
            </motion.li>
            <motion.li
              className="w-1/2 max-w-[12.5rem] h-12 border-customGreen-button border-[3px] rounded-md text-customGreen-semiLight px-2 xl:h-14 xl:max-w-[15rem]"
              whileTap={{ scale: 0.9 }}>
              <Link href={"/oferta"} className="w-full h-full grid place-items-center ">
                Sprawdź moją ofertę
              </Link>
            </motion.li>
          </ul>
        </section>
        <section className="relative lg:w-1/2">
          <Image src={MobileBacground} alt="dasdsa" className="flex-1 max-h-96 lg:hidden" />
          <Image
            src={MobileBacgroundPattern}
            alt="dsds"
            className="absolute top-3/4 w-40 min-[500px]:w-60 md:w-72 lg:hidden"
          />
          <Image
            src={MobileBacgroundPattern}
            alt="dsds"
            className="absolute top-1/3 right-0 w-40 min-[500px]:w-60 md:w-72 lg:hidden"
            priority={true}
          />
        </section>
        <div className="hidden absolute lg:block w-1/2 h-full right-0 top-0">
          <Image src={DesktopBackground} alt="dasdsa" className="h-full w-4/5 right-0 absolute" />
          <Image
            src={Dietician}
            alt="dasdas"
            className="absolute bottom-0 right-0 w-11/12 max-w-6xl"
          />
        </div>
      </div>
    </article>
  )
}