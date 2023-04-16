import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import ArtistPage from './components/ArtistPage'
import AlbumPage from './components/AlbumPage'
import ListCategory from './components/ListCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artist/:idArtist' element={<ArtistPage />} />
          <Route path='/album/:idAlbum' element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
