import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

// import ListItem from '../components/ListItem'
// import AddButton from '../components/AddButton'



// These routes match the django REST api routes 

const NotesListPage = () => {

    let [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes'); // wait for data to come back; this relative api is possible due to proxy url set in package.json
        let data = await response.json(); // if we don't use await we return a promise
        setNotes(data);
    }

    return (
        <div className="notes">
            {/*<div className="notes-header">
                <h2 className="notes-title">&#9782; Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>*/}

            <Link to={`/tax`}>
                <p>1099 Data Upload</p>
            </Link>

            {/*<div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem key={index} note={note} />
                ))}
            </div>

            <AddButton/>*/}
        </div>
    )
}

export default NotesListPage