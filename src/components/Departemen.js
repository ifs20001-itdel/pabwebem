import Carousel from 'react-bootstrap/Carousel';
import { Card, CardGroup, CardImg, Container, Image } from 'react-bootstrap';
import foto from "../assets/img/pengurus/gw.jpeg"
import dep1 from "../assets/img/departemen/Depagsos.png"
import dep2 from "../assets/img/departemen/Depkebdis.png"
import dep3 from "../assets/img/departemen/Depkominfo.png"
import dep4 from "../assets/img/departemen/Depol.png"
import dep5 from "../assets/img/departemen/Depsarpras.png"
import dep6 from "../assets/img/departemen/Depsenbud.png"
import dep7 from "../assets/img/departemen/Dhpm.png"
import dep8 from "../assets/img/departemen/Dpdk.png"
import dep9 from "../assets/img/departemen/Diptek.png"


function IndividualIntervalsExample() {
    return (
        <Container id="depart">
            < br />
            <h1 className="text-dark"><b>DEPARTEMEN</b></h1>
            < br />
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div class="card-group">
                        <div class="card">
                            <Image
                                src={dep1}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPAGSOS</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN AGAMA DAN SOSIAL</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep2}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPKEBDIS</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN KETERTIBAN DAN KEDISIPLINAN</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep3}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPKOMINFO</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN KOMUNIKASI DAN INFORMASI</h6>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <div class="card-group">
                        <div class="card">
                            <Image
                                src={dep4}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPOL</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN OLAHRAGA</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep5}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPSARPRAS</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN SARANA DAN PRASARANA</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep6}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DEPSENBUD</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN SENI DAN BUDAYA</h6>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div class="card-group">
                        <div class="card">
                            <Image
                                src={dep7}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DHPM</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN HUBUNGAN DAN PENGABDIAN MASYARAKAT</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep8}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DPDK</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN DALAM KAMPUS</h6>
                            </div>
                        </div>
                        <div class="card">
                            <Image
                                src={dep9}
                                alt="Card image"
                                className="card-img-top"
                                id="imgDepart"
                            />
                            <div class="card-body">
                                <h3 class="card-title" className="text-center"><b>DIPTEK</b></h3>
                                <h6 class="card-text" className="text-center">DEPARTEMEN ILMU PENGETAHUAN DAN TEKNOLOGI</h6>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default IndividualIntervalsExample;