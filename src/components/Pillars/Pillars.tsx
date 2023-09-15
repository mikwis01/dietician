import { motion } from "framer-motion"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { useFadeIn } from "@/hooks/useFadeIn"

export const Pillars = () => {
    const { ref, mainControls } = useFadeIn()

    return (
        <motion.article
            className="flex items-center justify-center pt-24 lg:pt-32"
            variants={slideFromBottomVariantsMinimal}
            initial={"hidden"}
            animate={mainControls}
            transition={{ delay: 0.25 }}>
            <div className="w-full flex flex-col items-center gap-6 lg:flex-row-reverse lg:w-5/6 max-w-[1200px]">
                <div ref={ref} className="w-5/6 flex flex-col items-center gap-6 lg:w-2/3">
                    <div className="p-4 bg-lime-500">
                        <h1></h1>
                    </div>
                </div>
            </div>
        </motion.article>
    )
}
