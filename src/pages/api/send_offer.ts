import { NextApiRequest, NextApiResponse } from "next"
import { transporter, mailOptions } from "@/config/nodemailer"
import { emailRegex, messageRegex, nameRegex } from "@/constants/constants"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, offer, message } = JSON.parse(req.body)
    const securityConditionFailed = offer
        ? !nameRegex.test(name) || !emailRegex.test(email)
        : !nameRegex.test(name) || !emailRegex.test(email) || !messageRegex.test(message)

    if (req.method === "POST") {
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
