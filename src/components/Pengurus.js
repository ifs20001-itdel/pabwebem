import { Card, Col, Container, Row, Image } from "react-bootstrap"
import gambar from "../assets/img/pengurus/gw.jpeg"
import gam1 from "../assets/img/pengurus/ketua.png"
import gam2 from "../assets/img/pengurus/wakil.png"
import gam3 from "../assets/img/pengurus/david.png"
import gam4 from "../assets/img/pengurus/lusye.png"
import gam5 from "../assets/img/pengurus/pany.png"
import gam6 from "../assets/img/pengurus/ketua.png"


const Pengurus = () => {
  return (
    <div>
      <Container>
        < br />
        <h1 className="text-white"><b>PENGURUS</b></h1>
        < br />
        <Row>
          <Col md={4} className="fotoWrapper" id="pengurus">
            <Card className="fotoImage" >
              <Image
                src={gam1}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">KETUA</Card.Title>
                  <Card.Text className="text-center">
                    SAMUEL TOBING
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="fotoWrapper">
            <Card className="fotoImage" >
              <Image
                src={gam2}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">WAKILKETUA</Card.Title>
                  <Card.Text className="text-center">
                    ROLASTA SITORUS
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="fotoWrapper">
            <Card className="fotoImage" >
              <Image
                src={gam3}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SEKRETARIS I</Card.Title>
                  <Card.Text className="text-center">
                    DAVID LUMBANTORUAN
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="fotoWrapper">
            <Card className="fotoImage" >
              <Image
                src={gam4}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SEKRETARIS II</Card.Title>
                  <Card.Text className="text-center">
                    LUSYE PASARIBU
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="fotoWrapper">
            <Card className="fotoImage" >
              <Image
                src={gam5}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BENDAHARA I</Card.Title>
                  <Card.Text className="text-center">
                    FANY LUMBANSIANTAR
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="fotoWrapper">
            <Card className="fotoImage" >
              <Image
                src={gam6}
                alt="Card image"
                className="gambarnih"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BENDAHARA II</Card.Title>
                  <Card.Text className="text-center">
                    SAMMY TOBING
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pengurus