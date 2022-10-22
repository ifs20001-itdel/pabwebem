import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">BEM IT Del</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/" >BERANDA</Nav.Link>
                        <Nav.Link href="#pengurus">PENGURUS</Nav.Link>
                        <Nav.Link href="#depart">DEPARTEMEN</Nav.Link>
                        <Nav.Link href="#news">BERITA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar