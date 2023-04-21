import Link from "next/link"
import { MobileNavHamburger } from "@/components/MobileNavHamburger/MobileNavHamburger"
import Image from "next/image"
import Logo from "@/assets/MultiDiet.webp"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { navLinks } from "@/constants/constants"

export const Nav = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <nav className="w-full h-16 grid place-items-center fixed z-20 bg-customGreen-backgrond/75 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-0 lg:text-xl">
      <div className="w-5/6 h-full flex items-center justify-between">
        <Image src={Logo} alt={"Dietetyk Marta Zarazińska"} className="w-28" />
        {isDesktop ? (
          <ul className="flex gap-8 lg:text-white lg:gap-6 xl:gap-12">
            {navLinks.slice(1).map((item, i) => (
              <li key={i} className="font-semibold">
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
