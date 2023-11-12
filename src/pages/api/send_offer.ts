import { NextApiRequest, NextApiResponse } from "next"
import { transporter, mailOptions } from "@/config/nodemailer"
import { emailRegex, messageRegex, nameRegex } from "@/constants/constants"
const captchaSecret = process.env.RECAPTCHA_SECRET_KEY

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const { name, email, offer, message, captcha } = JSON.parse(req.body)
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify`

        const captchVerificationResponse = await fetch(verificationURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `secret=${captchaSecret}&response=${captcha}`
        })

        const captchaVerification = await captchVerificationResponse.json()

        const securityConditionFailed = offer
            ? !nameRegex.test(name) || !emailRegex.test(email) || !captchaVerification.success
            : !nameRegex.test(name) || !emailRegex.test(email) || !messageRegex.test(message) || !captchaVerification.success

        if (securityConditionFailed) {
            return res.status(400).send({ message: "Bad request" })
        } else {
            try {
                await transporter.sendMail({
                    ...mailOptions,
                    subject: "Strona dietetyk: Wiadomość od klienta",
                    text: `Witaj Marta! Ktoś właśnie chce skorzystać z twoich usług. Odezwij się do swojego nowego klienta!`,
                    html: `<h3>Witaj Marta! Ktoś właśnie chce skorzystać z twoich usług.</h3> 
					<p>Odezwij się do swojego nowego klienta!</p>
					<p><b>Imię:</b> ${name}</p>
					<p><b>Email:</b> ${email}</p>
					${offer ? `<p><b>Oferta:</b> ${offer}</p>` : ``}
					${message ? `<p><b>Wiadomość:</b> ${message}</p>` : ``}
				`
                })

                res.status(200).json({ success: true })
            } catch (error) {
                console.log(error)
                return res.status(400).send({ message: "Bad request" })
            }
        }
    } else {
        return res.status(400).send({ message: "Bad request" })
    }
}

export default handler
