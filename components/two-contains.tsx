type Props = {
    children: React.ReactNode
  }

  export function TwoColumn({children}:Props){
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-4 m-4">
            {children}
        </div>
    )
}

TwoColumn.main =  function Main({children}:Props){
    return (
        <div className="md:w-[768px]">
            {children}
        </div>
    )
}

TwoColumn.sidebar = function Sidebar({children}:Props){
    return (
        <div className="md:w-[240px] text-right sticky top-10 self-start">
            {children}
        </div>
    )
}
