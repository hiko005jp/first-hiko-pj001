import Link from 'next/link'

export default function Navi(){
    return(
        <nav>
            <ul className='flex gap-8 hover:text-blue-900'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}