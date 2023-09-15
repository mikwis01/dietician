import React, { Fragment } from "react"
import { Header } from "@/components/Header/Header"

export const HashimotoContent = () => {
    return (
        <Fragment>
            <Header text="Hashimoto i insulinooporność" />
            <section className="w-full bg-customGreen-bluredBackground/75 p-4 rounded-md lg:w-full flex-1 flex flex-col lg:text-lg gap-6">
                <p className="opacity-80">
                    Okazało się, że mam niedoczynność tarczycy Hashimoto i insulinooporność. Znów
                    przytyłam, co było dla mnie okropnym uczuciem. Spoglądając na zdjęcia, na
                    których byłam szczupła, przełykałam ciężką gorycz porażki.
                </p>
            </section>
            <Header text="Dlatego wybrałam dietetykę" />
            <section className="w-full bg-customGreen-bluredBackground/75 p-4 rounded-md lg:w-full flex-1 flex flex-col lg:text-lg gap-6">
                <p className="font-bold">
                    Moje doświadczenia były dla mnie cenną lekcją, którą odrobiłam.
                </p>
                <p className="opacity-80">
                    Nauczyłam się przede wszystkim akceptować siebie taką, jaką jestem, ale też
                    wspierać moich podopiecznych w tym, żeby nie traktowali siebie tak surowo.
                </p>
                <p className="opacity-80">
                    W mojej pracy dzięki temu wykazuję się dużą empatią, potrafię słuchać i szukać
                    rozwiązać, bo sama przeżyłam te nieprzyjemne odczucia związane z niepozytywną
                    oceną swojego ciała na własnej skórze.
                </p>
                <p className="opacity-80">
                    Na tą chwilę jestem dumna, że{" "}
                    <b>okiełznałam swoją chorobę i problemy z sylwetka.</b> Moje doświadczenia
                    sprawiły, że od tamtej chwili pragnę pomagać ludziom, którzy tak jak niegdyś ja
                    borykają się z problemami zdrowotnymi i kompleksami.
                </p>
            </section>
        </Fragment>
    )
}
