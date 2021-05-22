import { Row, Card, Button, Form } from 'react-bootstrap'
import Link from 'next/link';
import Styles from './styles/custom.module.scss'

const Index = () => {
    return (
        <>
            <Row className={`row justify-content-center align-items-center pt-5 mt-5`}>
                <Card className={ `${Styles.__Login_Card} text-center` }>
                <Card.Img className={`${Styles.__Login_Img}`} variant="top" src="/Login.jpg" />
                <Card.Body>
                    <Card.Title>Inicio de Sesion</Card.Title>
                    <Card.Text>
                        <p><small>
                            Estas a un solo paso de comenzar !
                        </small></p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Ingresa tu correo" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Contraseña" />
                            <Form.Text className="text-left text-muted">
                                <Link href="/registro">
                                    Registrate
                                </Link>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary">Ingresar</Button>
                    </Form>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default Index