import React from "react"

export const FormItemWrapper = ({
    children,
    grow
}: {
    children: React.ReactNode
    grow?: boolean
}) => <div className={`flex flex-col gap-1 ${grow && "flex-grow"}`}>{children}</div>
