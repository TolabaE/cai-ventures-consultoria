import './Mision.css';
import {  Container, Row, Col, Image } from 'react-bootstrap';
import misionUno from '../../assets/misionUno.svg';
import misionDos from '../../assets/misionDos.svg';
import misionTres from '../../assets/misionTres.svg';

const Mision = () => {
    return (
        <Container className='misionVision'>
            <Row className='misionContainer'>
                <Col className='contImg' xl={3}  md={4} sm={3}>
                    <Image className='imgMision' fluid src={misionUno} width='150px' />
                </Col>
                <Col className='containerText' xl={7} md={8} sm={7}>
                    <h2 className='titleMision'>Misión</h2>
                    <p className='textMision'>Facilitar el camino hacia la titulación y el crecimiento profesional de estudiantes y egresados universitarios mediante un equipo multidisciplinario y metodologías ágiles e innovadoras.</p>
                </Col>
            </Row>

            <Row className='misionContainer'>
                <Col className='contImg' xl={3} md={4} sm={3}>
                    <Image className='imgMision' fluid src={misionDos} width='150px' />
                </Col>
                <Col className='containerText' xl={7} md={8} sm={7}>
                    <h2 className='titleMision'>Visión</h2>
                    <p className='textMision'>Somos una startup innovadora, dedicada a servir a la sociedad a través de la educación e investigación. Nuestro enfoque es generar un laboratorio de investigación de alcance nacional</p>
                </Col>
            </Row>

            <Row className='misionContainer'>
                <Col className='contImg' xl={3}  md={4} sm={3}>
                    <Image className='imgMision' fluid src={misionTres} width='150px' />
                </Col>
                <Col className='containerText' xl={7} md={8} sm={7}>
                    <h2 className='titleMision'>Objetivos</h2>
                    <p className='textMision'> Asesoramiento individualizado </p>
                    <p className='textMision'> Facilitar el proceso de investigación </p>
                    <p className='textMision'> Fomentar el crecimiento académico </p>
                    <p className='textMision'>  Ofrecer servicios especializados </p>
                    <p className='textMision'>  Promover la investigación de alta calidad </p>
                </Col>
            </Row>
        </Container>
    )
}


export default Mision;