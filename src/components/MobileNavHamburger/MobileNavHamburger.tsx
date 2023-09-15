import { useAppContext } from "../../context/AppContext"
import { RiMenu3Line } from "react-icons/ri"
import { motion } from "framer-motion"

export const MobileNavHamburger = () => {
    const { handleToggleMobileNav } = useAppContext()

    return (
        <motion.button
            className="h-8 w-8 bg-gradient-to-b from-customGreen-semiLight to-customGreen-semiDark rounded grid place-items-center"
            onClick={handleToggleMobileNav}
            whileTap={{ scale: 0.9 }}>
            <RiMenu3Line size={22} color="white" />
        </motion.button>
    )
}
