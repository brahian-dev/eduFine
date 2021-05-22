import { Row, Card, Button, Form } from 'react-bootstrap'
import Styles from './styles/custom.module.scss'

const Index = () => {
    return (
        <>
            <Row className={`row justify-content-center align-items-center pt-5 mt-5`}>
                <Card className={ `${Styles.__Login_Card} text-center` }>
                <Card.Img className={`${Styles.__Login_Img}`} variant="top" src="/Login.jpg" />
                <Card.Body>
                    <Card.Title>Registro</Card.Title>
                    <Card.Text>
                        <p><small>
                            Bienvenido a los ambientes virutales !
                        </small></p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Ingresa tu nombre" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Ingresa tu apellido" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Confirma tu contraseña" />
                        </Form.Group>
                        <Button variant="primary">Registrarme</Button>
                    </Form>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default Index