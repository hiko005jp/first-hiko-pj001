import Image from "next/image"
import rocket from "public/rocket.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Localtest(){
    return(
        <>
    <Link
      href="/"
      className="bg-white-300 flex flex-row justify-center items-center rounded-lg px-2 pt-2 pb-2 border-[2px] border-main500 shadow-md space-x-2 md:px-4 w-[130px] border-[#fe9611]"
    ><FontAwesomeIcon icon={faMailchimp} />
    
    </Link>

            <Image
                src={rocket}
                alt="空飛ぶロケット"
                layout="responsive"
                placeholder="blur"
            />

        </>
    )
}