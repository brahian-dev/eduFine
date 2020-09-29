import { Row, Col, Button } from 'react-bootstrap';

const FirstSection = () => {
    return (
        <Row>
            <Col md={7} className="principalText row justify-content-center align-items-center pt-5 mt-5">
                <Col className="ml-3">
                    ¿ Tienes problemas para organizar tus recursos virtuales ?
                    <Col>
                        <Button variant="primary" className="mt-5" size="lg">Comienza la aventura</Button>
                    </Col>
                </Col>
            </Col>
            <Col className="row justify-content-center align-items-center principalText pt-5 ml-5">
                <img className="images img-fluid" src="/imgFirstSection.jpg" alt="Edufine Image" />
            </Col>
        </Row>
    )
}

export default FirstSection