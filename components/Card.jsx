

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


export const CardPreview = ({image, title, seasons}) => {

  return (
    <Card className='card' >
      <Card.Img className= 'podcast-card-image' variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Seasons:{seasons}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}