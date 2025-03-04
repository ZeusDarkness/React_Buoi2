import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./component/contact";
function App() {
  const [contact, setContact] = useState([
    {
      id: 1,
      firstName: "Chidi",
      lastName: "Anagonye",
      phone: "555-366-8987",
      address: "ST. John's University, Sydney, Australia",
    },
    {
      id: 2,
      firstName: "Eleanor",
      lastName: "Shellstrop",
      phone: "555-483-1457",
      address: "335 Avalon St, Apt 2C, Pheonix, Arizona",
    },
    {
      id: 3,
      firstName: "Tahani",
      lastName: "Al-Jamil",
      phone: "555-276-7991",
      address: "1 Lacaster Terrace, London, England",
    },
    {
      id: 4,
      firstName: "Jason",
      lastName: "Mendoza",
      phone: "555-366-8388",
      address: "335 Avalon St, Apt 2C, Pheonix, Arizona",
    },
  ]);
  function handleDeleteContact(id){
    setContact(contact.filter(person => person.id !== id));
    
  }
  function handleDeleteAllContact(){
    setContact([]);
  }

  return (
    <>
      <div style={{display: "flex", gap: "10px", marginTop: "50px"}}>
        <Contact contacts={contact} onDelete = {handleDeleteContact} />
      </div>
      <button className= "btn__all btn btn-danger" onClick={handleDeleteAllContact}>Delete All</button>
    </>
  );
}

export default App;
