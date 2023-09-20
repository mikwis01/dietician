import { motion } from "framer-motion"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { useFadeIn } from "@/hooks/useFadeIn"
import { pillars } from "@/constants/constants"
import { Header } from "../../Header/Header"
import { Pillar } from "@/components/Pillar/Pillar"

export const Pillars = () => {
    const { ref, mainControls } = useFadeIn()

    return (
        <motion.article
            className="flex items-center justify-center pt-24 lg:pt-32"
            variants={slideFromBottomVariantsMinimal}
            initial={"hidden"}
            animate={mainControls}
            transition={{ delay: 0.25 }}>
            <div className="w-full flex flex-col items-center gap-6 lg:w-5/6 max-w-[1200px]">
                <div className="w-5/6 lg:w-full">
                    <Header ref={ref} text={"Filary współpracy"} />
                </div>
                <div className="w-5/6 grid grid-rows-1 grid-cols-1 gap-6 sm:grid-rows-2 sm:grid-cols-2 lg:w-full lg:grid-rows-1 lg:grid-cols-4">
                    {pillars.map((item) => (
                        <Pillar
                            key={item.header}
                            icon={item.icon}
                            header={item.header}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </motion.article>
    )
}
