import { useState } from "react"
import { useEffect } from "react"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { Link } from 'react-router-dom'


const SingleCard = ({ query }) => {

    const [songInfo, SetSongInfo] = useState(null)

    const handleArtist = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
            if (response.ok) {
                let result = await response.json()
                SetSongInfo(result.data[0])
            } else {
                console.log('error')
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        handleArtist()
    }, [])


    return (
        <Col sm={6} lg={3} >
            {songInfo &&
                <div className="col text-center" id={songInfo.album.title}>
                    <Link to={'/album/' + songInfo.album.id}>
                        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" style={{ height: 150 }} />
                    </Link>
                    <p>
                        <Link to={'/album/' + songInfo.album.id}>
                            Album: {songInfo.album.title.length < 16
                                ? `${songInfo.album.title}`
                                : `${songInfo.album.title.substring(0, 16)}...`}
                            <br />
                        </Link>
                        <Link to={'/artist/' + songInfo.artist.id}> Artist: {songInfo.artist.name}</Link>
                    </p>
                </div>
            }
        </Col>
    )
}

export default SingleCard