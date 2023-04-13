import Link from "next/link"
import { MobileNavHamburger } from "@/components/MobileNavHamburger/MobileNavHamburger"
import Image from "next/image"
import Logo from "../../assets/MultiDiet.png"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { navLinks } from "@/constants/constants"

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <nav className="w-full h-16 grid place-items-center fixed z-10 bg-customGreen-backgrond/75 backdrop-blur-sm">
      <div className="w-5/6 h-full flex items-center justify-between">
        <Image src={Logo} alt={"Dietetyk Marta Zarazińska"} className="w-28" />
        {isDesktop ? (
          <ul className="flex gap-8">
            {navLinks.slice(1).map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <MobileNavHamburger />
        )}
      </div>
    </nav>
  )
}
