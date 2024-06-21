import './CardPreview.css';
import { Link } from 'react-router-dom';

export const CardPreview = ({image, title, seasons, id}) => {
    return(
        <Link to=''>
          <div className='card-style' >
                <img className='podcast-card-image' src={image} />
                <div>
                    <h1>{title}</h1>
                    <p> Season: {seasons}</p>
                    <p>{id}</p>
                </div>
           </div>
        </Link>
    )

}