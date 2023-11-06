import React, { useEffect } from "react"
import { FormItemWrapper } from "../FormItemWrapper/FormItemWrapper"
import { useContactForm } from "./useContactForm"
import { Spinner } from "../Spinner/Spinner"
import { ContactFormInterface } from "@/types/types"

export const ContactForm: React.FC<ContactFormInterface> = ({ setIsError, setIsSuccess }) => {
    const {
        formError,
        formLoading,
        formSuccess,
        name,
        nameIsValid,
        email,
        emailIsValid,
        message,
        messageIsValid,
        handleName,
        handleEmail,
        handleMessage,
        inputClass,
        sendOffer
    } = useContactForm()

    useEffect(() => {
        setIsError(formError)
        setIsSuccess(formSuccess)
    }, [formError, formSuccess])

    return (
        <form
            onSubmit={(e) => sendOffer(e)}
            className="bg-customGreen-bluredBackground/75 w-full rounded-md p-4 flex flex-col gap-4">
            <FormItemWrapper>
                <label htmlFor="name" className="font-black">
                    Imię i nazwisko *
                </label>
                {name !== "" && !nameIsValid && (
                    <p className="text-sm text-red-500 pb-2">
                        Proszę wprowadzić imię i nazwisko w formacie 'Imię Nazwisko', gdzie imię i
                        nazwisko są oddzielone spacją.
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
                    Email *
                </label>
                {email !== "" && !emailIsValid && (
                    <p className="text-sm text-red-500 pb-2">
                        Proszę wprowadzić poprawny adres e-mail. Adres e-mail powinien mieć format
                        'nazwa@domena', na przykład 'przyklad@email.com'.
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
            <FormItemWrapper grow>
                <label htmlFor="message" className="font-black">
                    Wiadomość *
                </label>
                {message !== "" && !messageIsValid && (
                    <p className="text-sm text-red-500 pb-2">
                        Proszę wprowadzić wiadomość długości od 3 do 1000 znaków.
                    </p>
                )}
                <textarea
                    id="message"
                    placeholder="Wiadomość"
                    className={`${inputClass(message, messageIsValid)} h-full`}
                    value={message}
                    onChange={(e) => handleMessage(e.target.value)}
                />
            </FormItemWrapper>
            <div className="flex justify-center">
                <button
                    disabled={!nameIsValid || !emailIsValid || !messageIsValid}
                    className="w-1/2 bg-customGreen-button rounded-md text-white p-4 grid place-items-center font-bold disabled:opacity-50">
                    {formLoading ? <Spinner /> : <span>Wyślij</span>}
                </button>
            </div>
        </form>
    )
}
