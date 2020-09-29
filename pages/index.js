import { Container, Row } from 'react-bootstrap';
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import FirstSection from '../components/landing/sections/FirstSection'
import SecondSection from '../components/landing/sections/SecondSection'
import ThreeSection from '../components/landing/sections/ThreeSection'

const Home = () => {
    return (
        <>
            <Head>
                <title>Edufine</title>
            </Head>
            <Navbar />
            <Container fluid  className="mt-5">
                <FirstSection />
                <SecondSection />
                <ThreeSection />
            </Container>
        </>
    )
}

export default Home