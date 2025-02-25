import "bootstrap/dist/css/bootstrap.min.css";
export default function Contact({ contacts, onDelete }) {
  return contacts.map((contact) => (
    <div className="contact" key = {contact.id}>
      <div className="contact__name">
        <h1>{contact.firstName}</h1>
        <p>{contact.lastName}</p>
      </div>
      <div className="contact__phone">
        <p>
          Phone: <span>{contact.phone}</span>
        </p>
      </div>
      <div className="contact__address">
        <p>
          Address: <span>{contact.address}</span>
        </p>
      </div>
        <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  ));
}
