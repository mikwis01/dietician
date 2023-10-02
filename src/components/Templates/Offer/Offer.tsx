import { motion } from "framer-motion"
import { slideFromBottomVariantsMinimal } from "@/utils/motion"
import { useFadeIn } from "@/hooks/useFadeIn"
import { Header } from "@/components/Header/Header"
import { offerTiles } from "@/constants/constants"
import { OfferTile } from "@/components/OfferTile/OfferTile"
import Link from "next/link"

export const Offer = () => {
    const { ref, mainControls } = useFadeIn()

    return (
        <motion.article
            className="flex items-center justify-center mt-8 lg:mt-20"
            variants={slideFromBottomVariantsMinimal}
            initial={"hidden"}
            animate={mainControls}
            transition={{ delay: 0.25 }}>
            <div className="w-full flex flex-col items-center gap-6 lg:w-5/6 max-w-[1200px]">
                <div className="w-5/6 lg:w-full">
                    <Header ref={ref} text={"Opieka i konsultacje dietetyczne"} />
                </div>
                <div className="w-5/6 bg-customGreen-bluredBackground/75 rounded-md p-4 lg:w-full">
                    <p className="font-bold mb-4">
                        Masz pytania dotyczące Twojej diety, suplementacji, stanu zdrowia, które
                        chcesz omówić ze mną?{" "}
                        <Link
                            href="mailto:kontakt@martazarazinska.pl"
                            className="text-customGreen-semiDark hover:underline">
                            Napisz do mnie!
                        </Link>
                    </p>
                    <p>
                        Jeśli nie potrzebujesz jadłospisu, wybierz opcję konsultacji dietetycznej. W
                        trakcie rozmowy odpowiem na Twoje pytania oraz poszukamy wspólnie dobrych
                        rozwiązań dopasowanych do Ciebie i Twoich celów.
                    </p>
                </div>
                <div className="w-5/6 grid grid-rows-1 grid-cols-1 gap-6 md:grid-rows-2 md:grid-cols-2 lg:w-full lg:grid-rows-1 lg:grid-cols-3 justify-center">
                    {offerTiles.map((offer, i) => (
                        <OfferTile
                            key={offer.header}
                            header={offer.header}
                            price={offer.price}
                            items={offer.items}
                            isLastItem={i === offerTiles.length - 1}
                        />
                    ))}
                </div>
            </div>
        </motion.article>
    )
}
