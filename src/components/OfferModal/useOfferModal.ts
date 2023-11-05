import { emailRegex, nameRegex } from "@/constants/constants"
import { Dispatch, SetStateAction, useState } from "react"

export const useOfferModal = (
    pickedOffer: string,
    setShowModal: Dispatch<SetStateAction<boolean>>
) => {
    const [name, setName] = useState("")
    const [nameIsValid, setNameIsValid] = useState(false)
    const [email, setEmail] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [formError, setFormError] = useState("")
    const [formLoading, setFormLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)

    const handleName = (val: string) => {
        setName(val)
        if (nameRegex.test(val)) {
            setNameIsValid(true)
        } else {
            setNameIsValid(false)
        }
    }

    const handleEmail = (val: string) => {
        setEmail(val)
        if (emailRegex.test(val)) {
            setEmailIsValid(true)
        } else {
            setEmailIsValid(false)
        }
    }

    const inputClass = (field: string, fieldValidation: boolean) =>
        `bg-customGreen-formBackground p-3 rounded placeholder:text-black/30 focus-visible:outline-black ${
            field === ""
                ? ""
                : field && fieldValidation
                ? "border-green-600 border-2 bg-green-100"
                : "border-red-600 border-2 bg-red-100"
        }`

    const sendOffer = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormLoading(true)

        try {
            const res = await fetch("/api/send_offer", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    offer: pickedOffer
                })
            })
            if (res.ok) {
                setFormLoading(false)
                setName("")
                setNameIsValid(false)
                setEmail("")
                setEmailIsValid(false)
                setFormSuccess(true)
                setTimeout(() => setShowModal(false), 5000)
            } else {
                setFormLoading(false)
                setName("")
                setEmail("")
                setFormError(
                    "Wystąpił błąd podczas wysyłania wiadomości! Spróbuj ponownie później."
                )
            }
        } catch (error) {
            setFormLoading(false)
            setName("")
            setNameIsValid(false)
            setEmail("")
            setEmailIsValid(false)
            setFormError("Wystąpił błąd podczas wysyłania wiadomości! Spróbuj ponownie później.")
        }
    }

    return {
        nameIsValid,
        emailIsValid,
        formError,
        formLoading,
        formSuccess,
        name,
        email,
        setName,
        setNameIsValid,
        setEmail,
        setEmailIsValid,
        setFormError,
        setFormLoading,
        setFormSuccess,
        handleName,
        handleEmail,
        inputClass,
        sendOffer
    }
}
