import { Layout } from "@/components/Layout/Layout"
import { LetsMeet } from "@/components/Templates/LetsMeet/LetsMeet"
import { LetsMeetSecond } from "@/components/Templates/LetsMeetSecond/LetsMeetSecond"
import { Hashimoto } from "@/components/Templates/Hashimoto/Hashimoto"

export default function About() {
    return (
        <Layout dynamicLogo={false}>
            <LetsMeet />
            <LetsMeetSecond />
            <Hashimoto />
        </Layout>
    )
}
