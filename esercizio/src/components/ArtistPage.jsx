import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';


const ArtistPage = () => {

    const params = useParams()
    const [artist, setArtist] = useState(null)
    console.log(params)

    const handleArtist = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + params.idArtist)
            if (response.ok) {
                let result = await response.json()
                setArtist(result.data)
                console.log(result.data)
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
        <>

            <div className="col-12 col-md-9 offset-md-3 mainPage">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-10 mt-5">
                        <h2 className="titleMain"></h2>
                        <div id="followers"></div>
                        <div className="d-flex justify-content-center" id="button-container">
                            <Button
                                className="btn btn-success mr-2 mainButton d-none"
                                id="playButton"
                            >
                                PLAY
                            </Button>
                            <Button
                                className="btn btn-outline-light mainButton d-none"
                                id="followButton"
                            >
                                FOLLOW
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
                        <div className="mt-4 d-flex justify-content-start">
                            <h2 className="text-white font-weight-bold">Tracks</h2>
                        </div>
                        {artist.map((artist) => {
                            <div className="pt-5 mb-5">
                                <div className="row" id="apiLoaded"></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistPage