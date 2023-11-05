import { Layout } from "@/components/Layout/Layout"
import { Pillars } from "@/components/Templates/Pillars/Pillars"
import { Offer } from "@/components/Templates/Offer/Offer"

export default function OfferView() {
    return (
        <Layout dynamicLogo={false}>
            <Pillars />
            <Offer />
        </Layout>
    )
}
