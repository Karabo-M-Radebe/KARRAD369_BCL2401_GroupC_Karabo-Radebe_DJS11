import './Carousel.css';
import  Carousel  from 'react-bootstrap/Carousel';

export const _Carousel = () => {

    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <CarouselImage src={image} />
                    <Carousel.Caption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>   

        </>
    )
}