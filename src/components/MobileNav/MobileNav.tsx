import { navLinks } from "@/constants/constants"
import { AnimatePresence, motion } from "framer-motion"
import { VscChromeClose } from "react-icons/vsc"
import Link from "next/link"
const MobileNavVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1
  }
}

const MobileNavItemsVariants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const MobileNav = () => {
  return (
    <div className="fixed h-screen w-screen flex items-center justify-center">
      <AnimatePresence>
        <motion.span
          variants={MobileNavItemsVariants}
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
          transition={{ delay: 0.4 }}
          className="absolute top-3 right-[8.333%]">
          <VscChromeClose size={35} color="white" />
        </motion.span>
        <motion.div
          className="w-[300vw] h-[300vw] bg-gradient-to-b from-customGreen-light to-customGreen-semiLight rounded-[50%] flex items-center justify-center flex-none"
          variants={MobileNavVariants}
          initial={"hidden"}
          animate={"visible"}
          exit={"hidden"}
          transition={{ duration: 0.4 }}>
          <div className="fixed h-screen w-screen flex flex-col items-center justify-center">
            <motion.ul
              className="flex flex-col gap-6 text-center text-white"
              variants={MobileNavItemsVariants}
              initial={"hidden"}
              animate={"visible"}
              exit={"hidden"}
              transition={{ delay: 0.4 }}>
              {navLinks.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ filter: "brightness(0.85)" }}
                  whileTap={{ scale: 0.9 }}>
                  <Link href={item.href}>{item.label}</Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
