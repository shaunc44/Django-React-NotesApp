import {
  HashRouter as Router, // this allows react routes to work after hard refreshes
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'


function App() {
    return (
        <div className="container dark">
            <div className="app">
                <Header />
                <Router>
                    <Routes>
                        <Route path="/" exact element={ <NotesListPage /> } /> 
                        <Route path="/note/:id" element={ <NotePage /> } />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};


export default App;
