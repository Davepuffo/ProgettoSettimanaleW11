import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { Row, Col, } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container';
import Player from './Player';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_MUSIC, REMOVE_FROM_FAVOURITE, ADD_TO_FAVOURITE } from '../redux/action';
import { Star, StarFill } from 'react-bootstrap-icons'


const AlbumPage = ({ data }) => {

    const params = useParams()
    const dispatch = useDispatch()
    const [album, setALbum] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const [IsError, setIsError] = useState(false)
    console.log(params)
    const favourite = useSelector((state) => state.favouriteSong.content)

    const isFav = favourite.includes(data)


    const handleArtist = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + params.idAlbum)
            if (response.ok) {
                let result = await response.json()
                setALbum(result.data)
                console.log(result.data)
                setIsLoading(false)

            } else {
                console.log('error')
                setIsError(true)

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

                                {album.map((track) => {
                                    return (
                                        <Row >
                                            <Col className="col-4 pt-5 text-center" id="img-container" key={track.id}><img src={track.album.cover} alt="1" className='w-50' /></Col>
                                            <Col className="col-7 p-5 text-light align--center" onClick={() => {
                                                dispatch({
                                                    type: ADD_MUSIC,
                                                    payload: track,
                                                })
                                            }}>
                                                {track.title} - {track.duration}
                                            </Col>
                                            <Col className='col-1'>
                                                {isFav ? (
                                                    <StarFill
                                                        color="gold"
                                                        size={16}
                                                        className="mr-2 my-auto"
                                                        onClick={() =>
                                                            dispatch({
                                                                type: REMOVE_FROM_FAVOURITE,
                                                                payload: track,
                                                            })}
                                                    />
                                                ) : (
                                                    <Star
                                                        color="gold"
                                                        size={16}
                                                        className="mr-2 my-auto"
                                                        onClick={() => dispatch({
                                                            type: ADD_TO_FAVOURITE,
                                                            payload: track,
                                                        })} />

                                                )}
                                            </Col>
                                        </Row>
                                    )
                                })
                                }
                            </div>
                        </Row>

                    </div>
                </Row >
            </Container >

            <Player />
        </>
    )
}

export default AlbumPage


