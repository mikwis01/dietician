import { Layout } from "@/components/Layout/Layout"

import { Footer } from "@/components/Footer/Footer"
import { LetsMeet } from "@/components/Templates/LetsMeet/LetsMeet"
import { LetsMeetSecond } from "@/components/Templates/LetsMeetSecond/LetsMeetSecond"
import { Hashimoto } from "@/components/Templates/Hashimoto/Hashimoto"

export default function Home() {
  return (
    <Layout dynamicLogo={false}>
      <LetsMeet />
      <LetsMeetSecond />
      <Hashimoto />
      <Footer />
    </Layout>
  )
}
