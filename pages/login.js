import { Container } from 'react-bootstrap'
import Header from '../components/header/head'
import Navbar from '../components/navbar/navbar'
import Index from '../components/login'

const Login = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid className="mt-5">
                <Index />
            </Container>
        </>
    )
}

export default Login