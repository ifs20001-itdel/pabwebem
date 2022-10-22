import { Row, Col, Container } from 'react-bootstrap';

const Visi = () => {
    return (
        <Container>
            <div className="visinih">
                <h1 className="text-center" id="visiBem"><b>Visi</b></h1>
                <h4 className="text-center">Mewujudkan pemerintahan BEM IT Del yang <br /> berintegritas, kreatif, inovatif, dan luwes</h4><br />

                <h1 className="text-center" id="misiBem" ><b>Misi</b></h1> <br />
                <ol className="text-center" id="misiOl">
                    <li>Menjadikan IT Del sebagai wadah penampung dan penyalur inspirasi dan aspirasi mahasiswa IT Del.</li> <br />
                    <li>Mengoptimalkan pembangunan internal BEM IT Del berdasarkan Tri Dharma perguruan tinggi.</li><br />
                    <li>Menjadikan BEM IT Del sebagai fasilitas inovasi dan kreativitas mahasiswa</li><br />
                    <li>Mewujudkan BEM IT Del sebagai lembaga yang mengedepankan konstribusi <br /> secara aktif, solutif, inovatif, dan kolaboratif sesuai dengan 3M.</li>
                </ol>
            </div>
        </Container>

    )
}

export default Visi