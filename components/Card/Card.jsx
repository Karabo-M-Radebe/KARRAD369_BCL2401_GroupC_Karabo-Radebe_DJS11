import './Card.css'

export const _Card = ({image, title, seasons}) => {
    return(
        <>
            <div className='card-style' >
                <image className='podcast-card-image' src={image} />
                <div>
                    <h1>{title}</h1>
                    <p> Season: {seasons}</p>
                </div>
           </div>
        </>
    )

}
