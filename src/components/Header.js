import { Button, Col, Container, Row } from 'react-bootstrap';
import Audio from '../assets/video/Mars Institut Teknologi Del.mp3'

const Header = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">BEM IT DEL</div>
            <div className="title">WIRYANANTA</div>
            <div className="headerButton mt-4 text-center">
              <Button variant="dark" href="#pideo" id="tombol">Lihat Selengkapnya</Button>
            </div>
            <audio autoPlay loop>
              <source src={Audio} />
            </audio>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header