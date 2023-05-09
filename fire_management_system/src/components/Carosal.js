import Carousel from 'react-bootstrap/Carousel';
import one from './images/one.jpg';
import two from './images/two.jpg';
function Carosal() {
  return (
    <Carousel className="m-0 p-0 " fade style={{}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Forest fires are dangerous</h3>
          <p>It not only takes greenary away but the biodiversity of the earth too</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>FOrest fires are dangerous</h3>
          <p>It not only takes greenary away but the biodiversity of the earth too</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Forest fires are dangerous</h3>
          <p>
           It not only takes greenary away but the biodiversity of the earth too
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosal;