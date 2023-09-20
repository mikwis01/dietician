import { StaticImageData } from "next/image"

export interface LayoutInterface {
    children?: React.ReactNode
    dynamicLogo: boolean
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
}
