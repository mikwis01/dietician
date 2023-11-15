import { StaticImageData } from "next/image"
import { Dispatch, SetStateAction } from "react"

export interface LayoutInterface {
    children?: React.ReactNode
    dynamicLogo: boolean
    noPt?: boolean
}

export interface DynamicLogo {
    dynamicLogo: boolean
}

export interface PillarInterface {
    icon: StaticImageData
    header: string
    content: string
}

export interface OfferTileInterface {
    header: string
    price: number
	time: string
    items: string[]
    isLastItem: boolean
    handleOfferModal: (offer: string) => void
}

export interface OfferModalInterface {
    pickedOffer: string
    setShowModal: Dispatch<SetStateAction<boolean>>
}

export interface AnimatedArticleInterface {
    children?: React.ReactNode
    className?: string
}

export interface ContactFormInterface {
    setIsError: Dispatch<SetStateAction<string>>
    setIsSuccess: Dispatch<SetStateAction<boolean>>
}
