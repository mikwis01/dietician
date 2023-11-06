import { Header } from "../../Header/Header"
import check from "@/assets/check.png"
import { coopText, helpText } from "@/constants/constants"
import { ContactForm } from "../../ContactForm/ContactForm"
import { AnimatedArticle } from "../../AnimatedArticle/AnimatedArticle"
import { useState } from "react"

export const Contact = () => {
    const [isError, setIsError] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    return (
        <AnimatedArticle className="flex flex-col items-center">
            {isError && (
                <div className="pb-6 w-5/6 max-w-[1200px]">
                    <p className="bg-red-400 text-white rounded p-4">{isError}</p>
                </div>
            )}
            {isSuccess && (
                <div className="pb-6 w-5/6 max-w-[1200px]">
                    <p className="bg-green-400 text-white rounded p-4">
                        Wiadmość została wysłana! Dziękuję za kontakt.
                    </p>
                </div>
            )}
            <div className="w-full flex flex-col items-center gap-6 lg:w-5/6 max-w-[1200px]">
                <div className="w-5/6 lg:w-full">
                    <Header text={"Formularz kontaktowy"} />
                </div>
                <div className="w-5/6 grid grid-rows-1 grid-cols-1 gap-6 md:grid-rows-1 md:grid-cols-2 lg:w-full justify-center">
                    <div className="bg-customGreen-bluredBackground/75 w-full rounded-md p-4">
                        <p className="font-bold mb-2">Współpraca ze mną jest dla Ciebie, jeśli:</p>
                        <ul>
                            {coopText.map((text) => (
                                <ListItem text={text} key={text} />
                            ))}
                        </ul>
                        <p className="font-bold my-2">Z moją pomocą:</p>
                        <ul>
                            {helpText.map((text) => (
                                <ListItem text={text} key={text} />
                            ))}
                        </ul>
                    </div>
                    <ContactForm setIsError={setIsError} setIsSuccess={setIsSuccess} />
                </div>
            </div>
        </AnimatedArticle>
    )
}

const ListItem = ({ text }: { text: string }) => (
    <li className="ml-4 flex items-center gap-4 py-2">
        <div
            className="w-5 h-5 rounded-md bg-center bg-contain bg-no-repeat shrink-0"
            style={{ backgroundImage: `url(${check.src})` }}
        />
        <p className="opacity-80">{text}</p>
    </li>
)
