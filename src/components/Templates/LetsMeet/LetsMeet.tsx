import { Header } from "@/components/Header/Header"
import { LetsMeetContent } from "@/components/LetsMeetContent/LetsMeetContent"
import { AnimatedArticle } from "@/components/AnimatedArticle/AnimatedArticle"

export const LetsMeet = () => (
    <AnimatedArticle className="flex items-center justify-center">
        <div className="w-full flex flex-col items-center gap-6 lg:flex-row-reverse lg:w-5/6 lg:min-h-[832px] max-w-[1200px]">
            <div className="w-5/6 flex flex-col items-center gap-6 lg:w-2/3 lg:min-h-[832px]">
                <Header text={"Poznajmy się lepiej!"} />
                <LetsMeetContent />
            </div>
            <div className="bg-[url('../assets/SmilingWoman.png')] w-5/6 h-96 rounded-md bg-center bg-cover bg-no-repeat lg:w-1/3 lg:h-[60vh] lg:min-h-[832px]" />
        </div>
    </AnimatedArticle>
)
