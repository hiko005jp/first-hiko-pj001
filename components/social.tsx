import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faGithub
} from "@fortawesome/free-brands-svg-icons"


export default function Social(){
    return(
        <ul className="flex gap-8">
            <li className="x-[16px]">
                <a href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="invisible w-6">twitter</span>
                </a>
            </li>
            <li className="x-[16px]">
                <a href="https://facebook.com/"  className="x-[16px]">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="invisible w-6">twitter</span>
                </a>
            </li>
            <li className="x-[16px]">
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="invisible w-6">github</span>
                </a>
            </li>
        </ul>

    )
}