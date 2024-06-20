import './CardPreview.css';

export const CardPreview = ({image, title, seasons, id}) => {
    return(
        <>
          <div className='card-style' >
                <img className='podcast-card-image' src={image} />
                <div>
                    <h1>{title}</h1>
                    <p> Season: {seasons}</p>
                    <p>{id}</p>
                </div>
           </div>
        </>
    )

}