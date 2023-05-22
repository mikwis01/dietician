import styles from "../../styles/Underline.module.css"
import { forwardRef, Ref } from "react"

export const Header = forwardRef((props: { text: string }, ref: Ref<HTMLDivElement>) => {
  const { text } = props

  return (
    <div
      className={`w-full text-lg bg-customGreen-bluredBackground/75 rounded-md p-4 font-bold ${styles.underline} lg:w-full lg:text-2xl`}
      ref={ref}>
      <h3>{text}</h3>
    </div>
  )
})
