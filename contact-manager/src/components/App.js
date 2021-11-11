import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
	const [contacts, setContacts] = useState([]);
	const LOCAL_STORAGE_KEY = "contacts";

	const addContactHandler = (contact) => {
		console.log(contact);
		setContacts([...contacts, contact]);
	};

	useEffect(() => {
		const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retriveContacts) {
			setContacts(retriveContacts);
		}
	}, [contacts]);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div className='ui container'>
			<Header className='header' />
			<AddContact className='body' addContactHandler={addContactHandler} />
			<ContactList className='body' contact={contacts} />
		</div>
	);
}

export default App;
