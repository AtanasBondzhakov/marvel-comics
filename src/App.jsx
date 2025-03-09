import { Route, Routes } from 'react-router'

import './App.css'

import Search from './components/search/Search.jsx'
import Characters from './components/characters/Characters.jsx'
import Comics from './components/comics/Comics.jsx'
import ComicBook from './components/comic-book/ComicBook.jsx'

function App() {
    return (
        <>
            <div className="app">
                <Search />

                <Routes>
                    <Route path='/characters/:charName' element={<Characters />} />
                    <Route path='/comics/:characterId' element={<Comics />} />
                    <Route path='/character/comics/:comicBookId' element={<ComicBook />} />
                </Routes>
            </div>
        </>
    )
}

export default App
