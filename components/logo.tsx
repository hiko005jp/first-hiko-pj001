import Link from 'next/link'

export default function Logo({ boxOn = false}){

    const styleBasic:string = 'text-base font-bold tracking-widest'
    const styleBox:string = styleBasic + ' inline-block py-4 px-8 bg-slate-950 text-white'

    return (
        <Link href="/">
            <label className={boxOn ? styleBox: styleBasic}>CUBE</label>
        </Link>
    )
}