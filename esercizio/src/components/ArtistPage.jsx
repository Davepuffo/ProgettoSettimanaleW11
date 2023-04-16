import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { Row, Col, } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import Player from './Player';


const ArtistPage = () => {

    const params = useParams()
    const [artist, setArtist] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const [IsError, setIsError] = useState(false)
    console.log(params)

    const handleArtist = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + params.idArtist)
            if (response.ok) {
                let result = await response.json()
                setArtist(result.data)
                console.log(result.data)
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
        handleArtist()
    }, [])

    return (
        <>
            <Container fluid>
                <Row>
                    {/* <!--SIDEBAR VERTICAL--> */}
                    <div className="col-2">
                        <nav
                            className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                            id="sidebar"
                        >
                            <div className="nav-container">
                                <Link className="navbar-brand" to="/">
                                    <img
                                        src="/public/Spotify_Logo.png"
                                        alt="logo/Spotify_Logo.png"
                                        width="131"
                                        height="40"
                                        color='white'
                                    />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <ul>
                                            <li>
                                                <Link className="nav-item nav-link text-start" to="/"
                                                ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="nav-item nav-link text-start" href="#"
                                                ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                                    Library</a
                                                >
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="nav-btn">
                                <Button className="btn signup-btn" type="button">Sign Up</Button>
                                <Button className="btn login-btn" type="button">Login</Button>
                                <hr />
                                <a href="#">Cookie Policy</a> |
                                <a href="#"> Privacy</a>
                            </div>
                        </nav>
                    </div>
                    {/* <!--END SIDEBAR VERTICAL-->

                    <!--MAIN--> */}
                    <div className="col-12 col-md-9 offset-md-3 mainPage">
                        <Row>
                            <div className="col-9 col-lg-11 my-4 mainLinks d-none d-md-flex">
                                <a href="#">TRENDING</a>
                                <a href="#">PODCAST</a>
                                <a href="#">MOODS AND GENRES</a>
                                <a href="#">NEW RELEASES</a>
                                <a href="#">DISCOVER</a>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-10">

                                <Row className="flex-column" >
                                    <Col className="text-light text-start my-2"><h2>Tracks</h2></Col>
                                    <Col className="d-flex p-0 pe-5">
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
                                        <Row>
                                            {artist.map((song) => {
                                                return (
                                                    <Col className='col-3 my-2b' id={song.album.title} key={song.id}>
                                                        <Link to={'/album/' + song.album.id}>
                                                            <img className="img-fluid" src={song.album.cover_medium} alt="1" style={{ height: 150 }} />
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
                                                    </Col>
                                                )
                                            })
                                            }
                                        </Row>
                                    </Col>
                                </Row>


                            </div>
                        </Row>
                    </div>
                </Row >
            </Container >

            <Player />
        </>
    )
}

export default ArtistPage


