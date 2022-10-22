import { Container, Image } from "react-bootstrap"
import gam1 from "../assets/img/berita/berita1.jpg"
import gam2 from "../assets/img/berita/berita2.jpg"
import gam3 from "../assets/img/berita/berita3.jpg"

import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <Container>
                    < br />
                    <h1 className="text-dark"><b>BERITA</b></h1>
                    < br />
                    <div id="contentBerita">
                        <div className="gamBar">
                            <Image
                                src={gam1}
                                alt="berita"
                                className="gambarFoto"
                            />
                        </div>
                        <div className="berIta">
                            <h3><b>Serah Terima Jabatan Ketua BEM IT DEL</b></h3>
                            <p id="news">Pengangkatan dan Pemberhentian Ketua dan Wakil Ketua BEM IT DEL kabinet wiryananta dilaksanakan pada tanggal 15 September 2022. Alasan pemberhentian ketua BEM yang sebelumnya dikarenakan kondisi kesehatan yang tidak memungkinkan untuk mengemban jabatan.</p>
                                <a href="https://www.instagram.com/p/Cim8DCeh2WX/" target="_blank">Selengkapnya...</a>
                        </div>
                    </div>
                </Container>
            </Carousel.Item>

            <Carousel.Item interval={500}>
                <Container>
                    < br />
                    <h1 className="text-dark"><b>BERITA</b></h1>
                    < br />
                    <div id="contentBerita">
                        <div className="gamBar">
                            <Image
                                src={gam2}
                                alt="berita"
                                className="gambarFoto"
                            />
                        </div>
                        <div className="berIta">
                            <h3><b>Vaksin IT Del</b></h3>
                            <p>Penyelenggaraan vaksin booster (vaksin ke-3) oleh tenaga Kesehatan kepada mahasiswa IT Del diselenggarakan pada tanggal 24 september 2022 di kampus Institut Teknologi Del.</p>
                            <a href="https://www.instagram.com/p/Ci9rIIkhPfJ/" target="_blank">Selengkapnya...</a>
                        </div>
                    </div>
                </Container>
            </Carousel.Item>
            <Carousel.Item>
                <Container>
                    < br />
                    <h1 className="text-dark"><b>BERITA</b></h1>
                    < br />
                    <div id="contentBerita">
                        <div className="gamBar">
                            <Image
                                src={gam3}
                                alt="berita"
                                className="gambarFoto"
                            />
                        </div>
                        <div className="berIta">
                            <h3><b>MEMPERINGATI HARI PEMBERONTAKAN G30S/PKI</b></h3>
                            <p>"Jika kita memiliki keinginan yang kuat dari dalam hati, maka seluruh alam semesta akan bahu membahu mewujudkannya." - Soekarno</p>
                            <a href="https://www.instagram.com/p/CjIeX__BL08/" target="_blank">Selengkapnya...</a>
                        </div>
                    </div>
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;