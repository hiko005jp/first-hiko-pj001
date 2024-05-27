import Logo from 'components/logo'
import Container from 'components/container'
import Social from './social'

const flexNormal = "gap-2 flex flex-col"
const flexBig = "md:flex md:flex-row md:justify-between"
const flexSideBig = " md:text-left"
const flexSideNomal = flexNormal + " items-center text-center " +  flexBig + " " + flexSideBig

export default function Footer(){
    return(
        <footer className="p-8 bg-neutral-200">
            <Container large={false}>
                <div className={flexSideNomal}>
                    <Logo />
                    <Social />
                </div>
            </Container>
        </footer>
    )
}
