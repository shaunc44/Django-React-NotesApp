import React, {useState, useEffect} from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useNavigate, useParams } from 'react-router-dom';


const NotePage = () => {
	let params = useParams(); // have to use useParams as of react-router-dom v6
	let navigate = useNavigate();
	let noteId = params.id;

	let [note, setNote] = useState(null); // where do note and setNote come from????

	useEffect(() => {
		getNote();
	}, [noteId]);


	let getNote = async () => {
		if (noteId === 'new') return;
		let response = await fetch(`/api/notes/${noteId}/`);
		let data = await response.json();
		setNote(data);
	}


	let createNote = async () => {
		fetch(`/api/notes/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify(note)
		})
	}


	let updateNote = async () => {
		fetch(`/api/notes/${noteId}/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify(note)
		})
	}


	let deleteNote = async () => {
		fetch(`/api/notes/${noteId}/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		navigate('/');
	}


	let handleSubmit = () => {
		if (noteId !== 'new' && note.body === '') {
			console.log('DELETE TRIGGERED');
			deleteNote();
		}
		else if (noteId !== 'new') {
			console.log('UPDATE TRIGGERED');
			updateNote();
		} 
		else if (noteId === 'new' && note.body !== null) {
			console.log('CREATE TRIGGERED');
			createNote();
		}
		navigate('/');
	}


	let handleChange = (value) => {
		setNote(note => ({ ...note, 'body': value}));
	}

	return (
		<div className="note">
			<div className="note-header">
				<h3>
					<ArrowLeft onClick={handleSubmit} />
				</h3>
				{noteId !== 'new' ? (
					<button onClick={deleteNote}>Delete</button>
				): (
					<button onClick={handleSubmit}>Done</button>
				)}
			</div>

			<textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
		</div>
	)
}

export default NotePage