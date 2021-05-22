import { Container } from 'react-bootstrap';
import Header from '../components/header/head'
import Navbar from '../components/navbar/navbar'
import FirstSection from '../components/landing/sections/FirstSection'
import SecondSection from '../components/landing/sections/SecondSection'
import ThreeSection from '../components/landing/sections/ThreeSection'
import FourSection from '../components/landing/sections/FourSection'

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Container fluid  className="mt-5">
                <FirstSection />
                <SecondSection />
                <ThreeSection />
                <FourSection />
            </Container>
        </>
    )
}

export default Home