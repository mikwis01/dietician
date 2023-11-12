import { useState } from "react"
import { emailRegex, messageRegex, nameRegex } from "@/constants/constants"

export const useContactForm = () => {
    const [formError, setFormError] = useState("")
    const [formLoading, setFormLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [name, setName] = useState("")
    const [nameIsValid, setNameIsValid] = useState(false)
    const [email, setEmail] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [message, setMessage] = useState("")
    const [messageIsValid, setMessageIsValid] = useState(false)
    const [captcha, setCaptcha] = useState<string | null>()

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

    const handleMessage = (val: string) => {
        setMessage(val)
        if (messageRegex.test(val)) {
            setMessageIsValid(true)
        } else {
            setMessageIsValid(false)
        }
    }

    const resetForm = () => {
        setFormLoading(false)
        setName("")
        setNameIsValid(false)
        setEmail("")
        setEmailIsValid(false)
        setMessage("")
        setMessageIsValid(false)
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
                    message,
                    captcha
                })
            })
            if (res.ok) {
                resetForm()
                setFormSuccess(true)
            } else {
                resetForm()
                setFormError(
                    "Wystąpił błąd podczas wysyłania wiadomości! Spróbuj ponownie później."
                )
            }
        } catch (error) {
            resetForm()
            setFormError("Wystąpił błąd podczas wysyłania wiadomości! Spróbuj ponownie później.")
        }
    }

    return {
        formError,
        formLoading,
        formSuccess,
        name,
        nameIsValid,
        email,
        emailIsValid,
        message,
        messageIsValid,
        captcha,
        setCaptcha,
        setName,
        setNameIsValid,
        setEmail,
        setEmailIsValid,
        setFormError,
        setFormLoading,
        setFormSuccess,
        handleName,
        handleEmail,
        handleMessage,
        inputClass,
        sendOffer
    }
}
