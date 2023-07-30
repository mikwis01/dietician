import { Layout } from "@/components/Layout/Layout"

import { Footer } from "@/components/Footer/Footer"
import { LetsMeet } from "@/components/Templates/LetsMeet/LetsMeet"
import { LetsMeetSecond } from "@/components/Templates/LetsMeetSecond/LetsMeetSecond"

export default function Home() {
  return (
    <Layout>
      <LetsMeet />
      <LetsMeetSecond />
      <Footer />
    </Layout>
  )
}
