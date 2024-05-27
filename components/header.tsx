import Logo from 'components/logo'
import Nav from 'components/navi'
import Container from 'components/container'

export default function Header(){
    return(
        <header>
            <Container large>
                <div className="flex justify-between items-center">
                    <Logo boxOn />
                    <Nav />
                </div> 
            </Container>
        </header>
    )
}
