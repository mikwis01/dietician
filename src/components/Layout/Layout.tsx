import { Fragment } from "react"
import Head from "next/head"
import { Nav } from "../Nav/Nav"
import { useAppContext } from "@/context/AppContext"
import { MobileNav } from "../MobileNav/MobileNav"
import { ComponentChildren } from "@/types/types"
import { AnimatePresence } from "framer-motion"

export const Layout: React.FC<ComponentChildren> = ({ children }) => {
  const { app } = useAppContext()

  return (
    <Fragment>
      <Head key={"global_head"}>
        <title>Marta Zarazińska - Dietetyk</title>
        <meta
          name="description"
          content="Pomogę Ci stać się lepszą wersją siebie dzięki zdrowszemu żywieniu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="min-h-screen bg-customGreen-backgrond">
        <AnimatePresence>{app?.mobileNavOn && <MobileNav />}</AnimatePresence>
        <Nav />
        <main>{children}</main>
      </div>
    </Fragment>
  )
}
