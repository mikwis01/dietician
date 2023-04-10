// import { navLinks } from "@/components/Nav/constants"
// import Link from "next/link"
import { MobileNavHamburger } from "@/components/MobileNavHamburger/MobileNavHamburger"
// import { useAppContext } from "@/context/AppContext"

export const Nav = () => {
  return (
    <nav className="w-full h-14 grid place-items-center">
      <div className="w-5/6 h-full flex items-center justify-between">
        <p>logo</p>

        <MobileNavHamburger />
        {/* <ul className="flex">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    </nav>
  )
}
