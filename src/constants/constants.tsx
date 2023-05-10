import icon1 from "../assets/icon_1.webp"
import icon2 from "../assets/icon_2.webp"
import icon3 from "../assets/icon_3.webp"
import icon4 from "../assets/icon_4.webp"
import icon5 from "../assets/icon_5.webp"
import icon6 from "../assets/icon_6.webp"
import icon7 from "../assets/icon_7.webp"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export const navLinks = [
  {
    label: "Strona główna",
    href: "/oferta"
  },
  {
    label: "Oferta",
    href: "/oferta"
  },
  {
    label: "O mnie",
    href: "/o-mnie"
  },
  {
    label: "Kontakt",
    href: "/kontakt"
  }
]

export const skills = [
  "Odchudzaniu i efektywnym spalaniu tkanki tłuszczowej",
  "Poprawie wyglądu sylwetki",
  "Zaburzeniach odżywiania",
  "Chorobach metabolicznych",
  "Problemach hormonalnych",
  "Dietach dla kobiet w ciąży i okresie okołociążowym",
  "Dietach wegetariańskich",
  "Dietach dla sportowców"
]

export const partnershipValues = [
  {
    icon: icon1,
    content:
      "Wyłapiesz swoje dotychczasowe <b>błędy żywieniowe</b> i nauczysz się ich nie popełniać."
  },
  {
    icon: icon2,
    content:
      "Nauczysz się w jaki sposób kształtować swoje <b>odżywianie</b>, aby służyło Twojemu zdrowiu i sylwetce."
  },
  {
    icon: icon3,
    content:
      "Poczujesz się <b>komfortowo na diecie</b>, która wreszcie przestanie być dla Ciebie utrapieniem."
  },
  {
    icon: icon4,
    content: "Nauczysz się pracować z <b>jadłospisem</b> i modyfikować go wedle własnych potrzeb."
  },
  {
    icon: icon5,
    content:
      "Wypracujesz <b>zasady i rozwiązania</b>, które będziesz stosować na własnych warunkach."
  }
]

export const contactLinks = [
  {
    icon: icon7,
    content: "+48 333 444 555"
  },
  {
    icon: icon6,
    content: "kontakt@mariazarazinska.pl"
  }
]

export const socialLinks = [<FaFacebookF size={20} />, <FaInstagram size={25} />]
