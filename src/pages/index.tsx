import { Layout } from "@/components/Layout/Layout"
import { Landing } from "@/components/Templates/Landing/Landing"
import { Skills } from "@/components/Templates/Skills/Skills"
import { PartnershipValues } from "@/components/Templates/PartnershipValues/PartnershipValues"
import { Footer } from "@/components/Footer/Footer"

export default function Home() {
  return (
    <Layout dynamicLogo={true}>
      <Landing />
      <Skills />
      <PartnershipValues />
      <Footer />
    </Layout>
  )
}
