import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
function FormContact() {


    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = () => {
    const formData = {
      name: name,
      email: email,
      message: message
    };
    console.log(formData);
    // Aquí puedes proceder a hacer lo que quieras con los datos del formulario
  };
  return (
    <div>
       <form id="miFormulario" >
  
    <div  className="form-outline mb-4">
    <input
            type="text"
            id="form4Example1"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      <label className="form-label" for="form4Example1">Name</label>
    </div>
  
   
    <div data-mdb-input-init class="form-outline mb-4">
    <input
            type="email"
            id="form4Example2"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
      <label className="form-label" for="form4Example2">Email address</label>
    </div>
  
   
    <div data-mdb-input-init class="form-outline mb-4">
    <textarea
            className="form-control"
            id="form4Example3"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
      <label className="form-label" for="form4Example3">Message</label>
    </div>
  
    <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary btn-block mb-4"
        >
          Enviar
        </button>
  </form> 
    </div>
  )
}

export default FormContact