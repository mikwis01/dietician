import { PillarInterface } from "@/types/types"

export const Pillar: React.FC<PillarInterface> = ({ icon, header, content }) => {
    return (
        <div className="p-4 bg-customGreen-bluredBackground/75 w-full rounded-md">
            <div
                className={`w-14 h-14 bg-center bg-contain bg-no-repeat mb-4`}
                style={{ backgroundImage: `url(${icon.src})` }}
            />
            <h3 className="font-bold mb-4">{header}</h3>
            <p className="mb-4">{content}</p>
        </div>
    )
}
