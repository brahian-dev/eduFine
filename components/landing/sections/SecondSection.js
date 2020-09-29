import { Row, Col } from 'react-bootstrap';
import styles from './styles/custom.module.scss'

const SecondSection = () => {
    return (
        <Row className={ `${styles.__Second_Section}` }>
            <Col md={7} className="justify-content-right principalText pt-5">
                <img className={`${styles.__Second_Section_Img} img-fluid`} src="/imgSecondSection.png" alt="Edufine Image" />
            </Col>
            <Col className="principalText row justify-content-end align-items-center pt-5 mt-5">
                <Col>EduFine sera tu mejor aliado</Col>
            </Col>
        </Row>
    )
}

export default SecondSection