import styles from "../../styles/Underline.module.css"

export const Header = ({ text }: { text: string }) => {
  return (
    <div
      className={`w-full text-lg bg-customGreen-bluredBackground/75 backdrop-blur-sm rounded-md p-4 font-bold ${styles.underline} lg:w-full lg:text-2xl`}>
      <h3>{text}</h3>
    </div>
  )
}
