// const SearchBar = () => {
//     search = async () => {
//         let div = document.querySelector('#searchResults .row')
//         div.innerHTML = ''
//         let searchQuery = document.querySelector('#searchField').value // gets the value from the search box

//         if (searchQuery.length > 2) {
//             //if there's a value in the search box => fetch the information from rapidapi & display the result
//             document.querySelector('#searchResults').style.display = 'block'

//             try {
//                 let response = await fetch(
//                     'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
//                     searchQuery,
//                     {
//                         method: 'GET',
//                         headers,
//                     }
//                 ) // gets the information

//                 if (response.ok) {
//                     let result = await response.json() // transforms the response to json
//                     let songs = result.data // gets the songs info

//                     for (let x = 0; x < result.data.length; x++) {
//                         div.innerHTML += albumCard(result.data[x])
//                     }
//                 } else {
//                     console.log('error')
//                 }
//             } catch (err) {
//                 console.log(err)
//             }
//         } else {
//             //else just hide the section!
//             document.querySelector('#searchResults').style.display = 'none'
//         }
//     }
//     return (
//         <>
//             <div className="input-group mt-3">
//                 <input
//                     type="text"
//                     className="form-control mb-2"
//                     id="searchField"
//                     placeholder="Search"
//                     aria-label="Search"
//                     aria-describedby="basic-addon2"
//                 />
//                 <div
//                     className="input-group-append mb-2"
//                 // style={{ marginbottom: 4 }}
//                 >
//                     <button
//                         className="btn btn-outline-secondary btn-sm"
//                         type="button"
//                         id="button-addon1"
//                         onClick="search()"
//                     >
//                         GO
//                     </button>
//                 </div>
//             </div></>
//     )
// }

// export default SearchBar