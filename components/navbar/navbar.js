import styles from './styles/custom.module.scss'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const customNavbar = () => {
    return (
    //     <Navbar bg="light" expand="lg">
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
        <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand className={ styles.textTitle }>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        Inicio
                    </Navbar.Text>
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        Nosotros
                    </Navbar.Text>
                    <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                        Contactanos
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className={ `p-3 ${ styles.textItems }` }>
                    Iniciar Sesion
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default customNavbar