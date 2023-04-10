import { useAppContext } from "../../context/AppContext"
import { RiMenu3Line } from "react-icons/ri"

export const MobileNavHamburger = () => {
  const { handleToggleMobileNav } = useAppContext()

  return (
    <button
      className="h-8 w-8 bg-gradient-to-b from-customGreen-light to-customGreen-semiLight rounded grid place-items-center"
      onClick={handleToggleMobileNav}>
      <RiMenu3Line size={22} color="white" />
    </button>
  )
}
