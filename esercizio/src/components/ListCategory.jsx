import Row from "react-bootstrap/esm/Row"
import SingleCard from "./SingleCard"
import Button from "react-bootstrap/esm/Button"

const ListCategory = () => {

    return (
        <>
            <Row>
                <div className="col-2"></div>
                <div className="col-10">
                    <div id="hiphop">
                        <h2>Rock Classics</h2>
                        <Row
                        // className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        // id="hipHopSection"
                        >
                            <SingleCard query="queen" />
                            <SingleCard query="u2" />
                            <SingleCard query="eagles" />
                            <SingleCard query="eagles" />
                        </Row>
                    </div>

                    <div id="hiphop">
                        <h2>Pop Culture</h2>
                        <Row
                        // className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        // id="hipHopSection"
                        >
                            <SingleCard query="maroon5" />
                            <SingleCard query="coldplay" />
                            <SingleCard query="onerepublic" />
                            <SingleCard query="jamesblunt" />

                        </Row>
                    </div>

                    <div id="hiphop">
                        <h2>HipHop</h2>
                        <Row
                        // className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        // id="hipHopSection"
                        >
                            <SingleCard query="eminem" />
                            <SingleCard query="snoopdogg" />
                            <SingleCard query="lilwayne" />
                            <SingleCard query="drake" />

                        </Row>
                    </div>
                </div>
            </Row>
        </>
    )
}

export default ListCategory