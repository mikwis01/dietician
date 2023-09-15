import Link from "next/link"
import { MobileNavHamburger } from "@/components/MobileNavHamburger/MobileNavHamburger"
import Image from "next/image"
import LogoWhite from "@/assets/MultiDiet.png"
import LogoBlack from "@/assets/MultiDiet.webp"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { navLinks } from "@/constants/constants"
import { DynamicLogo } from "@/types/types"
import { useDynamicNav } from "@/hooks/useDynamicNav"

export const Nav: React.FC<DynamicLogo> = (dynamicLogo) => {
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const { navIsTransparent } = useDynamicNav(dynamicLogo)

    return (
        <nav
            className={`w-full h-16 grid place-items-center fixed z-20 text-white ${
                navIsTransparent
                    ? "bg-transparent"
                    : "bg-gradient-to-b from-customGreen-light to-customGreen-semiLight shadow-md transition-all"
            }`}>
            <div className="w-5/6 h-full flex items-center justify-between max-w-[1200px]">
                <Link href="/">
                    <Image
                        src={navIsTransparent ? LogoBlack : LogoWhite}
                        alt={"Dietetyk Marta Zarazińska"}
                        className="w-28"
                    />
                </Link>
                {isDesktop ? (
                    <ul className="flex gap-8 lg:gap-6 xl:gap-12">
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
