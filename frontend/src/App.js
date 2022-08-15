import React, { useEffect } from 'react';
import {
    HashRouter as Router, // this allows react routes to work after hard refreshes
    Routes,
    Route,
} from "react-router-dom";

// import 'handsontable/dist/handsontable.full.css';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import TaxPage from './pages/TaxPage'


// These routes match the actual URL routes at port 3000 & 8000 (build)

function App() {

    useEffect(() => {
        document.title = "Self Service Tools"
    }, [])

    return (
        <div className="container dark">
            <div className="app">
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" exact element={ <NotesListPage /> } />
                        <Route path="/note/:id" element={ <NotePage /> } />
                        <Route path="/tax" element={ <TaxPage /> } />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};


export default App;
