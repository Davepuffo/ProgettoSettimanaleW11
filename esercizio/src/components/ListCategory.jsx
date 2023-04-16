import Row from "react-bootstrap/esm/Row"
import SingleCard from "./SingleCard"
import Button from "react-bootstrap/esm/Button"

const ListCategory = () => {

    return (
        <>
            <Row>
                <div>
                    {/* <div id="rock"> */}
                    {/* <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        > */}
                    <SingleCard query="rock" title="Rock Classics" />
                    <SingleCard query="pop" title="Pop Culture" />
                    <SingleCard query="hip-pop" title="#Hip-Pop" />
                    {/* </div>
                    </div> */}
                </div>
            </Row>
        </>
    )
}

export default ListCategory