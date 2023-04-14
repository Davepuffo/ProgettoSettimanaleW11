const Player = () => {
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
            <div className="row">
                <div className="col-lg-10 offset-lg-2">
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 mt-1" id="playerControls">
                            <div className="row justify-content-center">
                                <div className="col-2 col-sm-1">
                                    <a href="#">
                                        <img src="/esercizio/public/playerbuttons/Shuffle.png" alt="shuffle" />
                                    </a>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <a href="#">
                                        <img src="/assets/images/playerbuttons/Previous.png" alt="previous" />
                                    </a>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <a href="#">
                                        <img src="/assets/images/playerbuttons/Play.png" alt="play" />
                                    </a>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <a href="#">
                                        <img src="/assets/images/playerbuttons/Next.png" alt="next" />
                                    </a>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <a href="#">
                                        <img src="/assets/images/playerbuttons/Repeat.png" alt="repeat" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center py-3" id="playBar">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div id="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="0"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
