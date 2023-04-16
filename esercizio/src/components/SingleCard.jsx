import { useState } from "react"
import { useEffect } from "react"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { Row } from "react-bootstrap"


const SingleCard = ({ query, title }) => {
    // let rockArtists = [
    //     'queen',
    //     'u2',
    //     'thepolice',
    //     'eagles',
    //     'thedoors',
    //     'oasis',
    //     'thewho',
    //     'bonjovi',
    // ]

    // let rockRandomArtists = []

    const [songInfo, SetSongInfo] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const [IsError, setIsError] = useState(false)

    const handleArtist = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
            if (response.ok) {
                let result = await response.json()
                SetSongInfo(result.data)
                setIsLoading(false)
            } else {
                console.log('error')
                setIsError(true)
                setIsLoading(false)

            }
        } catch (err) {
            console.log(err)
            setIsLoading(false)
            setIsError(true)
        }
    }
    useEffect(() => {

        // while (rockRandomArtists.length < 4) {
        //     // pushes elements inside the array until it has 4 strings
        //     let artist =
        //         rockArtists[Math.floor(Math.random() * rockArtists.length)] // select an element from the array with an index between 0 and 7
        //     if (!rockRandomArtists.includes(artist)) {
        //         // checks if the artist is not already present in the array
        //         rockRandomArtists.push(artist) // pushes the artist in the array
        //     }
        // }
        // for (let j = 0; j < rockRandomArtists.length; j++)
        handleArtist()
    }, [])



    return (
        <>
            <Row className="flex-column" >
                <Col className="text-light text-start my-2"><h2>{title}</h2></Col>
                <Col className="d-flex">
                    {IsError && (
                        <Alert variant="danger">Qualcosa è andato storto!</Alert>
                    )}
                    {IsLoading && (
                        <div className="text-center">
                            <Spinner animation="border" role="status" variant="success">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}

                    {songInfo.slice(0, 4).map((song) => {
                        return (
                            <div className="col text-center mx-3" id={song.album.title} key={song.id}>
                                <Link to={'/album/' + song.album.id} >
                                    <img className="img-fluid" src={song.album.cover_medium} alt="1" style={{ height: 150, width: 150 }} />
                                </Link>
                                <p>
                                    <Link to={'/album/' + song.album.id} className="text-decoration-none text-light">
                                        Album: {song.album.title.length < 16
                                            ? `${song.album.title}`
                                            : `${song.album.title.substring(0, 16)}...`}
                                        <br />
                                    </Link>
                                    <Link to={'/artist/' + song.artist.id} className="text-decoration-none text-light"> Artist: {song.artist.name}</Link>
                                </p>
                            </div>
                        )
                    })
                    }</Col>
            </Row>
        </>
    )
}

export default SingleCard