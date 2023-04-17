import { navLinks } from "@/constants/constants"
import { motion } from "framer-motion"
import { VscChromeClose } from "react-icons/vsc"
import Link from "next/link"
import { useAppContext } from "@/context/AppContext"
import { scaleVariants, slideFromBottomVariants } from "@/utils/motion"

export const MobileNav = () => {
  const { handleToggleMobileNav } = useAppContext()

  return (
    <div className="fixed h-screen w-screen flex items-center justify-center z-30">
      <motion.div
        className="w-[300vw] h-[300vw] bg-gradient-to-b from-customGreen-light to-customGreen-semiLight rounded-[50%] flex items-center justify-center flex-none relative"
        variants={scaleVariants}
        initial={"hidden"}
        animate={"visible"}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.25 }}>
        <div className="fixed h-screen w-screen flex flex-col items-center justify-center">
          <motion.span
            variants={slideFromBottomVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 0.25 }}
            className="absolute top-3 right-[8.333%]"
            onClick={handleToggleMobileNav}
            whileTap={{ scale: 0.9 }}>
            <VscChromeClose size={35} color="white" />
          </motion.span>
          <motion.ul
            className="flex flex-col gap-8 text-center text-white"
            variants={slideFromBottomVariants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 0.25 }}>
            {navLinks.map((item, i) => (
              <motion.li key={i} whileTap={{ scale: 0.9 }} className="text-lg">
                <Link href={item.href}>{item.label}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  )
}
