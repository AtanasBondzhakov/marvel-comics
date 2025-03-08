import { Route, Routes } from 'react-router'

import './App.css'

import Search from './components/search/Search.jsx'
import Characters from './components/characters/Characters.jsx'

function App() {
    return (
        <>
            <div className="app">
                <Search />

                <Routes>
                    <Route path='/characters' element={<Characters />} />
                </Routes>
            </div>
        </>
    )
}

export default App
