import { Container } from 'react-bootstrap'
import Header from '../components/header/head'
import Navbar from '../components/navbar/navbar'
import Index from '../components/contact'

const Contact = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid>
                <Index />
            </Container>
        </>
    )
}

export default Contact