import ListCategory from './ListCategory'
import Player from './Player'
import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

const Home = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [searchSong, SetSearchSong] = useState([])
    const [IsLoading, setIsLoading] = useState(false)
    const [IsError, setIsError] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
            if (response.ok) {
                let result = await response.json()
                SetSearchSong(result.data)
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
                                                <Link className="nav-item nav-link text-start" to={'/'}
                                                ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                                                </Link>
                                            </li>
                                            <li>
                                                <a className="nav-item nav-link text-start" href="#"
                                                ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                                    Library</a
                                                >
                                            </li>
                                            <li>
                                                <div className="input-group mt-3">
                                                    <input type="text" className="form-control mb-2" id="searchField" placeholder="Search"
                                                        aria-label="Search" aria-describedby="basic-addon2" onChange={handleChange} value={query} />
                                                    <div className="input-group-append">
                                                        {/* style="margin-bottom: 4%" */}
                                                        <button className="btn btn-outline-secondary btn-sm py-2" type="button" id="button-addon1"
                                                            onClick={handleSubmit}>
                                                            GO
                                                        </button>
                                                    </div>
                                                </div>
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
                                <Row
                                    className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                                >
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

                                    {searchSong ?
                                        <>
                                            <h2>Search Results</h2>
                                            {searchSong.slice(0, 4).map((song) => (
                                                <>
                                                    <div className="col text-center mx-3" id={song.album.title} key={song.id}>
                                                        <Link to={'/album/' + song.album.id} data={song.id} >
                                                            <img className="img-fluid" src={song.album.cover_medium} alt="1" style={{ height: 150, width: 150 }} />
                                                        </Link>
                                                        <p>
                                                            <Link to={'/album/' + song.album.id} data={song.id} className="text-decoration-none text-light">
                                                                Album: {song.album.title.length < 16
                                                                    ? `${song.album.title}`
                                                                    : `${song.album.title.substring(0, 16)}...`}
                                                                <br />
                                                            </Link>
                                                            <Link to={'/artist/' + song.artist.id} className="text-decoration-none text-light"> Artist: {song.artist.name}</Link>
                                                        </p>
                                                    </div>
                                                </>
                                            ))
                                            }
                                        </>
                                        :
                                        (<div>.</div>)
                                    }

                                </Row>

                            </div>
                        </Row>
                        <ListCategory />
                    </div>
                </Row >
            </Container >

            <Player />
        </>
    )
}

export default Home