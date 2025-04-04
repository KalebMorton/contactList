import ContactList from './components/ContactList'
import './App.css'
import {useState} from "react";
import {useEffect} from 'react'

function App() {
  const [selectedContactId , setSelectedContactId ] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
        const rawData = await response.json()
        setUserData(rawData)
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);

  return (
    <>
      {selectedContactId ? (
        <div>
          <div>
            <h3>{userData[selectedContactId -1].name}</h3>
            <h3>{userData[selectedContactId -1].email}</h3>
            <h3>{userData[selectedContactId -1].phone}</h3>
          </div>
          <p>Website: {userData[selectedContactId -1].website}</p>
          <p>Username: {userData[selectedContactId -1].username}</p>
          <p>Company: {userData[selectedContactId -1].company.name}</p>
          <button onClick={()=>{setSelectedContactId(null)}}>Go Back</button>
          </div>
      ) : (
        <ContactList setSelectedContactId2={setSelectedContactId}/>
      )}
    </>
  )
}

export default App
