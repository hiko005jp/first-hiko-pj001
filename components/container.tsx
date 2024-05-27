import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode,
    large: boolean
  }

export default function Container({children,large = false}:Props){
    return (
        <div className={large ? "w-11/12 max-w-1280px my-0 mx-auto" : "w-11/12 max-w-1152px my-0 mx-auto"}>
            {children}
        </div>
    )
}