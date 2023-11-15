import { AnimatePresence } from "framer-motion"
import { Header } from "@/components/Header/Header"
import { offerTiles } from "@/constants/constants"
import { OfferTile } from "@/components/OfferTile/OfferTile"
import Link from "next/link"
import { useState } from "react"
import { OfferModal } from "@/components/OfferModal/OfferModal"
import { AnimatedArticle } from "@/components/AnimatedArticle/AnimatedArticle"

export const Offer = () => {
    const [showModal, setShowModal] = useState(false)
    const [pickedOffer, setPickedOffer] = useState("")
    const handleOfferModal = (offer: string) => {
        setShowModal(true)
        setPickedOffer(offer)
    }

    return (
        <AnimatedArticle className="flex items-center justify-center mt-8 lg:mt-20">
            <div className="w-full flex flex-col items-center gap-6 lg:w-5/6 max-w-[1200px]">
                <div className="w-5/6 lg:w-full">
                    <Header text={"Opieka i konsultacje dietetyczne"} />
                </div>
                <div className="w-5/6 bg-customGreen-bluredBackground/75 rounded-md p-4 lg:w-full">
                    <p className="font-bold mb-4">
                        Masz pytania dotyczące Twojej diety, suplementacji, stanu zdrowia, które
                        chcesz omówić ze mną?
                        <Link
                            href="/kontakt"
                            className="text-customGreen-semiDark hover:underline ml-1">
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
							time={offer.time}
                            price={offer.price}
                            items={offer.items}
                            isLastItem={i === offerTiles.length - 1}
                            handleOfferModal={handleOfferModal}
                        />
                    ))}
                </div>
            </div>
            {showModal && (
                <AnimatePresence>
                    <OfferModal pickedOffer={pickedOffer} setShowModal={setShowModal} />
                </AnimatePresence>
            )}
        </AnimatedArticle>
    )
}
