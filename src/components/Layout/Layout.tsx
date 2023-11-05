import { Fragment } from "react"
import Head from "next/head"
import { Nav } from "../Nav/Nav"
import { useAppContext } from "@/context/AppContext"
import { MobileNav } from "../MobileNav/MobileNav"
import { LayoutInterface } from "@/types/types"
import { AnimatePresence } from "framer-motion"
import { Footer } from "../Footer/Footer"

export const Layout: React.FC<LayoutInterface> = ({ children, dynamicLogo, noPt }) => {
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
            <div className="min-h-screen bg-customGreen-backgrond flex flex-col">
                <AnimatePresence>{app?.mobileNavOn && <MobileNav />}</AnimatePresence>
                <Nav dynamicLogo={dynamicLogo} />
                <main className={`flex-grow ${!noPt && "pt-24"} pb-8`}>{children}</main>
                <Footer />
            </div>
        </Fragment>
    )
}
