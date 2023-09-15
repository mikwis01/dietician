import Link from "next/link"
import { motion } from "framer-motion"

const Custom404 = () => {
    return (
        <main className="h-screen w-screen bg-customGreen-backgrond flex flex-col items-center justify-center gap-8">
            <h1 className="font-bold text-2xl">Błąd: 404</h1>
            <h2 className="text-lg text-center">Nie mogliśmy znaleźć tej strony</h2>
            <motion.div
                className="h-12 w-36 bg-customGreen-semiLight text-white font-bold rounded-md"
                whileHover={{ filter: "brightness(0.85)" }}
                whileTap={{ scale: 0.9 }}>
                <Link href={"/"} className="w-full h-full grid place-items-center">
                    Strona główna
                </Link>
            </motion.div>
        </main>
    )
}

export default Custom404
