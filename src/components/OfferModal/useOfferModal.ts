import { emailRegex, nameRegex } from "@/constants/constants"
import { Dispatch, SetStateAction, useState } from "react"

export const useOfferModal = (
    setShowModal: Dispatch<SetStateAction<boolean>>,
    pickedOffer: string
) => {
    const [name, setName] = useState("")
    const [nameIsValid, setNameIsValid] = useState(false)
    const [email, setEmail] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [formError, setFormError] = useState("")
    const [formLoading, setFormLoading] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
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

    const resetForm = () => {
        setFormLoading(false)
        setName("")
        setNameIsValid(false)
        setEmail("")
        setEmailIsValid(false)
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
                    offer: pickedOffer,
					captcha
                })
            })
            if (res.ok) {
                resetForm()
                setFormSuccess(true)
                setTimeout(() => setShowModal(false), 5000)
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
        nameIsValid,
        emailIsValid,
        formError,
        formLoading,
        formSuccess,
        name,
        email,
		setCaptcha,
		captcha,
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
        sendOffer,
        resetForm
    }
}
