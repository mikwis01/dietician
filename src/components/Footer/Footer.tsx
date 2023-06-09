import { contactLinks, socialLinks } from "@/constants/constants"
import styles from "../../styles/Underline.module.css"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { useFadeIn } from "@/hooks/useFadeIn"
import { motion } from "framer-motion"

export const Footer = () => {
  const { ref, mainControls } = useFadeIn()

  return (
    <footer className="h-[350px] w-full mt-20 bg-gradient-to-b from-customGreen-light to-customGreen-semiLight flex flex-col text-white font-bold justify-center items-center">
      <div className="h-[350px] w-full absolute bg-[url('../assets/FooterBackground.webp')] bg-no-repeat bg-center bg-cover lg:opacity-70" />
      <motion.div
        className="h-[350px] absolute w-5/6 py-6 flex flex-col gap-6 justify-between max-w-[1200px]"
        variants={slideFromBottomVariantsMinimal}
        initial={"hidden"}
        animate={mainControls}
        transition={{ delay: 0.25 }}>
        <div className="flex flex-col gap-8">
          <h3 className={`text-lg ${styles.underline} lg:text-2xl`} ref={ref}>
            Nie trać więcej czasu na nieskuteczne metody i zacznij już dziś!
          </h3>
          <ul className="flex flex-col gap-4 text-sm lg:text-lg">
            {contactLinks.map((item) => (
              <li className="flex items-center gap-4" key={item.content}>
                <div
                  className="w-5 h-5 rounded-md bg-center bg-contain bg-no-repeat"
                  style={{ backgroundImage: `url(${item.icon.src})` }}
                />
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex gap-2 text-sm">
          {socialLinks.map((item, i) => (
            <li className="flex items-center gap-4" key={i}>
              <div className="w-10 h-10 bg-gradient-to-b from-customGreen-semiLight to-customGreen-semiDark rounded grid place-items-center">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </footer>
  )
}
