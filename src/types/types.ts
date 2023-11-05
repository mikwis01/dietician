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
    items: string[]
    isLastItem: boolean
    handleOfferModal: (offer: string) => void
}

export interface OfferModalInterface {
    pickedOffer: string
    setShowModal: Dispatch<SetStateAction<boolean>>
}
