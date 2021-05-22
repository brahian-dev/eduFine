import Link from 'next/link';
import styles from './styles/custom.module.scss'
import { Navbar, Nav } from 'react-bootstrap'

const customNavbar = () => {
    return (
        <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand className={ styles.textTitle }>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        <Link href="/">
                            <a> Inicio </a>
                        </Link>
                    </Navbar.Text>
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        <Link href="/nosotros">
                            Nosotros
                        </Link>
                    </Navbar.Text>
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        <Link href="/contactanos">
                            Contactanos
                        </Link>
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                    <Link href="/login">
                        Iniciar Sesion
                    </Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default customNavbar