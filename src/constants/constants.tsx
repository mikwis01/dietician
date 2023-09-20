import icon1 from "../assets/icon_1.webp"
import icon2 from "../assets/icon_2.webp"
import icon3 from "../assets/icon_3.webp"
import icon4 from "../assets/icon_4.webp"
import icon5 from "../assets/icon_5.webp"
import icon6 from "../assets/icon_6.webp"
import icon7 from "../assets/icon_7.webp"
import dish_tray from "../assets/dish-tray.png"
import heart from "../assets/plus-heart.png"
import brain from "../assets/brain.png"
import books from "../assets/books.png"
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
        content:
            "Nauczysz się pracować z <b>jadłospisem</b> i modyfikować go wedle własnych potrzeb."
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
        content: "kontakt@martazarazinska.pl"
    }
]

export const socialLinks = [<FaFacebookF size={20} />, <FaInstagram size={25} />]

export const pillars = [
    {
        icon: dish_tray,
        header: "Odżywianie",
        content:
            "Dieta przestanie być dla Ciebie przykrym obowiązkiem i będzie dostosowana do Ciebie, a nie na odwrót. Odzyskasz zdrowe relacje z jedzeniem, a odżywianie stanie się o wiele prostsze."
    },
    {
        icon: heart,
        header: "Styl życia",
        content:
            "Ze mną zaopiekujesz też inne elementy stylu życia takie jak aktywność fizyczna, higiena snu, panowanie nad stresem które ułatwią Ci utrzymanie zdrowia i wymarzonej sylwetki."
    },
    {
        icon: brain,
        header: "Psychika",
        content:
            "Oprócz zdrowia ciała, ważne jest zdrowie ducha, dlatego podczas współpracy uczę jak nie zajadać emocji, wyjść z błędnego koła odchudzania, odzyskać pewność siebie i zaakceptować swoje ciało."
    },
    {
        icon: books,
        header: "Edukacja",
        content:
            "Wprowadzanie zdrowych nawyków wymaga czasu, pracy i wiedzy. Wykorzystując różne techniki i uczę Cię jak przejść przez ten proces w taki sposób, aby efekty zostały z Tobą na długo."
    }
]

export const offerTiles = [
    {
        header: "Pierwsza konsultacja",
        price: 230,
        items: [
            "szczegółowy wywiad żywieniowo-zdrowotny",
            "interpretacja wyników badań",
            "omówienie dotychczasowych błędów dietetycznych",
            "opracowanie indywidualnej strategii działania, sprecycowanie zadań",
            "spersonalizowane <b>zalecenia</b> dotyczące żywienia i stylu życia",
            "plan suplementacji",
            "podsumowanie konsultacji wysłane na maila",
            "spersonalizowany <b>1 tygodniowy jadłospis</b> w formie PDF wraz z listą zakupów"
        ]
    },
    {
        header: "Kolejna konsultacja",
        price: 150,
        items: [
            "analiza i omówienie dotychczasowych postępów dietoterapii",
            "weryfikacja wcześniejszej strategii działania i ustalenie nowej",
            "modyfikacja dotychczasowego jadłospisu lub stworzenie nowego uwzględniającego zmiany, uwagi i sugestie",
            "spersonalizowane zalecenia  dopasowane do celu diety (np. odchudzania, poprawy stanu zdrowia)",
            "spersonalizowane <b>zalecenia</b> dotyczące żywienia i stylu życia",
            "weryfikacja planu suplementacyjnego, wprowadzenie ewentualnych zmian",
            "podsumowanie konsultacji wysłane na maila",
            "spersonalizowany <b>1 tygodniowy jadłospis</b> w formie PDF wraz z listą zakupów"
        ]
    },
    {
        header: "Konsultacja dietetyczno-zdrowotna",
        price: 130,
        items: [
            "szczegółowy wywiad żywieniowo-zdrowotny",
            "analiza dotychczasowego żywienia i stylu życia oraz omówienie błędów",
            "interpretacja wyników badań",
            "spersonalizowane wskazówki dotyczące udoskonalenia żywienia ",
            "opracowanie indywidualnej strategii i dalszych działań",
            "zalecenia dotyczące żywienia i stylu życia",
            "podsumowanie konsultacji wysłane na maila"
        ]
    }
]
