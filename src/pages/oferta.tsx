import { Layout } from "@/components/Layout/Layout"
import { Footer } from "@/components/Footer/Footer"
import { Pillars } from "@/components/Pillars/Pillars"

export default function Offer() {
    return (
        <Layout dynamicLogo={false}>
            <Pillars />
            <Footer />
        </Layout>
    )
}
