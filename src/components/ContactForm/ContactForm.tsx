import React from "react"
import { FormItemWrapper } from "../FormItemWrapper/FormItemWrapper"

export const ContactForm = () => {
    const inputClass = "bg-customGreen-formBackground p-3 rounded placeholder:text-black/30"

    return (
        <form className="bg-customGreen-bluredBackground/75 w-full rounded-md p-4 flex flex-col gap-4">
            <FormItemWrapper>
                <label htmlFor="name" className="font-black">
                    Imię i nazwisko
                </label>
                <input id="name" type="text" placeholder="Imię i nazwisko" className={inputClass} />
            </FormItemWrapper>
            <FormItemWrapper>
                <label htmlFor="email" className="font-black">
                    Email
                </label>
                <input id="email" type="email" placeholder="Email" className={inputClass} />
            </FormItemWrapper>
            <FormItemWrapper grow>
                <label htmlFor="message" className="font-black">
                    Wiadomość
                </label>
                <textarea
                    id="message"
                    placeholder="Wiadomość"
                    className={`${inputClass} h-full`}></textarea>
            </FormItemWrapper>
            <div className="flex justify-center">
                <button className="w-1/2 bg-customGreen-button rounded-md text-white p-4 grid place-items-center font-bold">
                    Wyślij
                </button>
            </div>
        </form>
    )
}
