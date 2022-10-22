import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Pideo from '../assets/video/BEM IT DEL.mp4'

function NoTransitionExample() {
    return (
            <Carousel slide={false} className="pideo">
                <Carousel.Item id="pideo">
                    <video autoPlay muted loop className="pideonih">
                        <source src={Pideo} type="video/mp4"  />
                    </video>
                </Carousel.Item>
            </Carousel>
    );
}

export default NoTransitionExample;