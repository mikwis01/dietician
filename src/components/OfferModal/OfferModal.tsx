import React from "react"
import { FormItemWrapper } from "../FormItemWrapper/FormItemWrapper"
import { OfferModalInterface } from "@/types/types"
import { motion } from "framer-motion"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { VscChromeClose } from "react-icons/vsc"
import { Spinner } from "../Spinner/Spinner"
import { useOfferModal } from "./useOfferModal"

export const OfferModal: React.FC<OfferModalInterface> = ({ pickedOffer, setShowModal }) => {
    const {
        nameIsValid,
        emailIsValid,
        formError,
        formLoading,
        formSuccess,
        name,
        email,
        handleName,
        handleEmail,
        inputClass,
        sendOffer
    } = useOfferModal(pickedOffer, setShowModal)

    return (
        <motion.div
            className="fixed bottom-0 z-50 bg-black/40 h-screen w-full grid place-items-center backdrop-blur-sm border-green-600"
            variants={slideFromBottomVariantsMinimal}
            initial={"hidden"}
            animate={"visible"}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 0.25 }}>
            <div className="bg-[#D2DBC4] w-[300px] sm:w-[500px] lg:w-[600px] rounded-md">
                <div className="bg-customGreen-button p-4 font-bold text-white rounded-t-md flex justify-between">
                    <h2 className="drop-shadow-lg text-lg lg:text-xl">{pickedOffer}</h2>
                    <motion.span
                        className="cursor-pointer"
                        onClick={() => setShowModal(false)}
                        whileTap={{ scale: 0.9 }}>
                        <VscChromeClose size={35} color="white" />
                    </motion.span>
                </div>
                {formError && (
                    <div className="px-8 pt-4">
                        <p className="bg-red-400 text-white rounded p-4">{formError}</p>
                    </div>
                )}
                {formSuccess && (
                    <div className="px-8 pt-4">
                        <p className="bg-green-400 text-white rounded p-4">
                            Wiadmość została wysłana! Dziękuję za kontakt.
                        </p>
                    </div>
                )}
                <p className="px-8 pt-8 opacity-80 mb-4">
                    Wypełnij i wyślij formularz, a odezwę się do Ciebie w przeciagu 48 godzin!
                </p>
                <form
                    onSubmit={(e) => sendOffer(e)}
                    className="bg-customGreen-bluredBackground/75 w-full rounded-md px-8 pb-8 flex flex-col gap-6">
                    <FormItemWrapper>
                        <label htmlFor="name" className="font-black">
                            Imię i nazwisko
                        </label>
                        {name !== "" && !nameIsValid && (
                            <p className="text-sm text-red-500 pb-2">
                                Proszę wprowadzić imię i nazwisko w formacie 'Imię Nazwisko', gdzie
                                imię i nazwisko są oddzielone spacją.
                            </p>
                        )}
                        <input
                            id="name"
                            type="text"
                            placeholder="Imię i nazwisko"
                            className={inputClass(name, nameIsValid)}
                            value={name}
                            onChange={(e) => handleName(e.target.value)}
                        />
                    </FormItemWrapper>
                    <FormItemWrapper>
                        <label htmlFor="email" className="font-black">
                            Email
                        </label>
                        {email !== "" && !emailIsValid && (
                            <p className="text-sm text-red-500 pb-2">
                                Proszę wprowadzić poprawny adres e-mail. Adres e-mail powinien mieć
                                format 'nazwa@domena', na przykład 'przyklad@email.com'.
                            </p>
                        )}
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className={inputClass(email, emailIsValid)}
                            value={email}
                            onChange={(e) => handleEmail(e.target.value)}
                        />
                    </FormItemWrapper>
                    <div className="flex justify-center">
                        <button
                            disabled={!nameIsValid || !emailIsValid}
                            className="w-1/2 bg-customGreen-button rounded-md text-white p-4 grid place-items-center font-bold disabled:opacity-50">
                            {formLoading ? <Spinner /> : <span>Wyślij</span>}
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}
