import { Row, Col } from 'react-bootstrap';
import styles from './styles/custom.module.scss'

const SecondSection = () => {
    return (
        <Row className={ `${styles.__Four_Section}` }>
            <Col md={7} className="row justify-content-right align-items-center principalText pt-5">
                <img className={`${styles.__Four_Section_Img} img-fluid`} src="/imgFourSection.png" alt="Edufine Image" />
            </Col>
            <Col md={5} xs={12} className="principalText row justify-content-end align-items-center pt-5 mt-5">
                <Col>! Haz que tus clases sean mas productivas ¡ </Col>
            </Col>
        </Row>
    )
}

export default SecondSection