import { Row, Col } from 'react-bootstrap';
import styles from './styles/custom.module.scss'

const ThreeSection = () => {
    return (
        <Row>
            <Col md={7} className="principalText row justify-content-center align-items-center pt-5 mt-5">
                <Col>Creamos Ambientes virtuales, para que te sea mas facil enseñar</Col>
            </Col>
            <Col  className="row justify-content-center align-items-center principalText pt-5 ml-5">
                <img className={`${styles.__Second_Section_Img} img-fluid`} src="/imgThreeSection.jpg" alt="Edufine Image" />
            </Col>
        </Row>
    )
}

export default ThreeSection