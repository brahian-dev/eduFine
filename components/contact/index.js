import { Row, Col } from 'react-bootstrap'
import styles from './styles/custom.module.scss'

const Index = () => {
    return (
        <>
            <Row className={ `${styles.__Contact}` }>
                <Col md={7} className="principalText row justify-content-center align-items-center">
                    <Col clasname="ml-3">
                        Contactanos
                        <Col className="mt-5 secondayText">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                        </Col>
                    </Col>
                </Col>
                <Col className="row justify-content-center align-items-center principalText pt-5 ml-5">
                    <img className={`${styles.__Contact_Img} img-fluid`} src="/imgSecondSection.png" alt="Edufine Image" />
                </Col>
            </Row>
        </>
    )
}

export default Index;