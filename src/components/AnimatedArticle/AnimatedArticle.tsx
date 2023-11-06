import React from "react"
import { motion } from "framer-motion"
import { AnimatedArticleInterface } from "@/types/types"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { useFadeIn } from "@/hooks/useFadeIn"

export const AnimatedArticle: React.FC<AnimatedArticleInterface> = ({ children, className }) => {
    const { ref, mainControls } = useFadeIn()

    return (
        <motion.article
            className={`${className} relative`}
            variants={slideFromBottomVariantsMinimal}
            initial={"hidden"}
            animate={mainControls}
            transition={{ delay: 0.25 }}>
            <span ref={ref} className="absolute top-0" />
            {children}
        </motion.article>
    )
}
