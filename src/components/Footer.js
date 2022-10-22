import { Button, Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Beranda</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pengurus</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Departemen</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Berita</a></li>
                </ul>
                <p class="text-center text-muted">&copy; 2022 Kelompok 8 PABWE</p>
            </footer>
        </div>
    )
}

export default Header