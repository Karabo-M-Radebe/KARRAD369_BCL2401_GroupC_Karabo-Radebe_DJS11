

export const Card = ({image, title, seasons}) => {
    return(
        <Card className='card'>
        <image className='podcast-card-image'>{image}</image>
        <h1>{title}</h1>
        <p>Seasons: {seasons}</p>
        </Card>
    )

}
