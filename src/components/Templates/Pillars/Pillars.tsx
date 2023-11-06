import { pillars } from "@/constants/constants"
import { Header } from "../../Header/Header"
import { Pillar } from "@/components/Pillar/Pillar"
import { AnimatedArticle } from "@/components/AnimatedArticle/AnimatedArticle"

export const Pillars = () => (
    <AnimatedArticle className="flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-6 lg:w-5/6 max-w-[1200px]">
            <div className="w-5/6 lg:w-full">
                <Header text={"Filary współpracy"} />
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
    </AnimatedArticle>
)
