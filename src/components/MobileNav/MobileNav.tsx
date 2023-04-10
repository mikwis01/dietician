import { navLinks } from "@/constants/constants"
import { motion } from "framer-motion"
import Link from "next/link"
const MobileNavVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1
  }
}

export const MobileNav = () => {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center">
      <motion.div
        className="w-[300vw] h-[300vw] bg-gradient-to-b from-customGreen-light to-customGreen-semiLight rounded-[50%] flex items-center justify-center flex-none"
        variants={MobileNavVariants}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5 }}>
        <div className="fixed h-screen w-screen flex items-center justify-center">
          <ul className="flex flex-col gap-4 text-center text-white">
            {navLinks.map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ filter: "brightness(0.85)" }}
                whileTap={{ scale: 0.9 }}>
                <Link href={item.href}>{item.label}</Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
