import { Layout } from "@/components/Layout/Layout"
import { Landing } from "@/components/Templates/Landing/Landing"
import { Skills } from "@/components/Templates/Skills/Skills"
import Image from "next/image"
import MobileBacground from "@/assets/MobileBackground.webp"
import MobileBacgroundPattern from "@/assets/MobileBackgroundPattern.webp"
import DesktopBackground from "@/assets/DesktopBackground.webp"
import Dietician from "@/assets/Dietician.webp"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <Layout>
      <Landing />
      <Skills />
    </Layout>
  )
}
