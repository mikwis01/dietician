import { useEffect, useRef } from "react"
import { useAnimation, useInView } from "framer-motion"

export const useFadeIn = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return { ref, mainControls }
}
