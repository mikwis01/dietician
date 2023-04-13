import { Layout } from "@/components/Layout/Layout"
import Image from "next/image"
import MobileBacground from "../assets/MobileBackground.png"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Layout>
      <article className="flex flex-col items-center justify-between min-h-screen pt-16">
        <section className="flex-1 w-5/6 flex flex-col justify-center items-center gap-8 my-8 min-[500px]:my-16">
          <h1 className="font-black text-xl w-full">
            Problemy ze zdrowiem i sylwetką nie muszą być już Twoim zmartwieniem!
          </h1>
          <h2 className="opacity-80 w-full">
            Pomogę Ci stać się lepszą wersją siebie dzięki zdrowszemu żywieniu.
          </h2>
          <ul className="w-full flex  gap-5 text-sm font-bold text-center">
            <motion.li
              className="w-1/2 max-w-[12.5rem] h-12 bg-customGreen-button rounded-md text-white px-2"
              whileTap={{ scale: 0.9 }}>
              <Link href={"/o-mnie"} className="w-full h-full grid place-items-center">
                Poznaj mnie lepiej
              </Link>
            </motion.li>
            <motion.li
              className="w-1/2 max-w-[12.5rem] h-12 border-customGreen-button border-[3px] rounded-md text-customGreen-semiLight px-2"
              whileTap={{ scale: 0.9 }}>
              <Link href={"/oferta"} className="w-full h-full grid place-items-center">
                Sprawdź moją ofertę
              </Link>
            </motion.li>
          </ul>
        </section>
        <Image src={MobileBacground} alt="dasdsa" className="flex-1 max-h-96" />
      </article>
    </Layout>
  )
}
