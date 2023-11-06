import { Header } from "@/components/Header/Header"
import { SkillsContent } from "@/components/SkillsContent/SkillsContent"
import { AnimatedArticle } from "@/components/AnimatedArticle/AnimatedArticle"

export const Skills = () => (
    <AnimatedArticle className="flex items-center justify-center mt-8 lg:mt-20">
        <div className="w-full flex flex-col items-center gap-6 lg:flex-row-reverse lg:w-5/6 lg:min-h-[832px] max-w-[1200px]">
            <div className="w-5/6 flex flex-col items-center gap-6 lg:w-2/3 lg:min-h-[832px]">
                <Header
                    text={
                        "Zależy Ci na poprawie jakości życia, zdrowiu, lepszym samopoczuciu i wyglądzie? "
                    }
                />
                <SkillsContent />
            </div>
            <div className="bg-[url('../assets/SkillsPic.webp')] w-5/6 h-96 rounded-md bg-center bg-cover bg-no-repeat lg:w-1/3 lg:h-[60vh] lg:min-h-[832px]" />
        </div>
    </AnimatedArticle>
)
