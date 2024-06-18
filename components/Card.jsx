

// export const Card = ({image, title, description}) => {
//     return(
//         <>
//         <image>{image}</image>
//         <h1>{title}</h1>
//         <p>{description}</p>
//         </>
//     )

// }

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';



export const CardPreview = ({image, title, seasons}) => {

  return (
    // <Card className='card' >
    //   <Card.Img className= 'podcast-card-image' variant="top" src={image} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>Seasons:{seasons}</Card.Text>
    //     <Button variant="primary">Read More</Button>
    //   </Card.Body>
    // </Card>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: Array.length }).map((_, idx) => (
        <Col key={idx}>
          <Card className='card'>
            <Card.Img className='podcast-card-image' variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text> Seasons: {seasons} </Card.Text>
              <Button className='card-button' Link>Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

