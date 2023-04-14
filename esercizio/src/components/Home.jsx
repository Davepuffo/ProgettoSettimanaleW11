import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import SearchBar from './SearchBar'
import { useEffect } from 'react'
import ListCategory from './ListCategory'
import Player from './Player'

const Home = () => {

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

    // let popArtists = [
    //     'maroon5',
    //     'coldplay',
    //     'onerepublic',
    //     'jamesblunt',
    //     'katyperry',
    //     'arianagrande',
    // ]

    // let hipHopArtists = [
    //     'eminem',
    //     'snoopdogg',
    //     'lilwayne',
    //     'drake',
    //     'kanyewest',
    // ]





    // window.onload = async () => {
    //     let rockRandomArtists = []
    //     let popRandomArtists = []
    //     let hipHopRandomArtists = []

    //     document.querySelector('#searchField').value = ''

    //     while (rockRandomArtists.length < 4) {
    //         let artist =
    //             rockArtists[Math.floor(Math.random() * rockArtists.length)]
    //         if (!rockRandomArtists.includes(artist)) {
    //             rockRandomArtists.push(artist)
    //         }
    //     }

    //     while (popRandomArtists.length < 4) {
    //         let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
    //         if (!popRandomArtists.includes(artist)) {
    //             popRandomArtists.push(artist)
    //         }
    //     }

    //     while (hipHopRandomArtists.length < 4) {
    //         let artist =
    //             hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
    //         if (!hipHopRandomArtists.includes(artist)) {
    //             hipHopRandomArtists.push(artist)
    //         }
    //     }

    //     for (let j = 0; j < rockRandomArtists.length; j++)
    //         await handleArtist(rockRandomArtists[j], '#rockSection')

    //     for (let k = 0; k < popRandomArtists.length; k++)
    //         await handleArtist(popRandomArtists[k], '#popSection')

    //     for (let l = 0; l < hipHopRandomArtists.length; l++)
    //         await handleArtist(hipHopRandomArtists[l], '#hipHopSection')
    // }

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
                                <a className="navbar-brand" href="/">
                                    <img
                                        src="/esercizio/public/Spotify_Logo.png"
                                        alt="logo/Spotify_Logo.png"
                                        width="131"
                                        height="40"
                                    />
                                </a>
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
                                                <a className="nav-item nav-link" href="/"
                                                ><i className="fas fa-home fa-lg"></i>&nbsp; Home
                                                </a>
                                            </li>
                                            <li>
                                                <a className="nav-item nav-link" href="#"
                                                ><i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                                                    Library</a
                                                >
                                            </li>
                                            <li>
                                                <p>barra di ricerca</p>
                                                {/* <SearchBar /> */}
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
                                <div id="searchResults" className='d-none'>
                                    <h2>Search Results</h2>
                                    <Row
                                        className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                                    ></Row>
                                </div>
                            </div>
                        </Row>

                    </div>
                </Row >
            </Container >

            <Player />
        </>
    )
}

export default Home