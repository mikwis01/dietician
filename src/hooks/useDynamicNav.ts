import { useEffect, useState } from "react"
import { DynamicLogo } from "@/types/types"

export const useDynamicNav = ({ dynamicLogo }: DynamicLogo) => {
    const [navIsTransparent, setNavIsTransparent] = useState(true)

    const handleNavFade = () => {
        const scrollPosition = window.pageYOffset

        scrollPosition < 10 ? setNavIsTransparent(true) : setNavIsTransparent(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleNavFade)

        return () => window.removeEventListener("scroll", handleNavFade)
    }, [])

    if (dynamicLogo) {
        return {
            navIsTransparent
        }
    } else {
        return {
            navIsTransparent: dynamicLogo
        }
    }
}
