import { useState, useEffect } from 'react'
import axios from 'axios'
import Personne from './Personne'


function App() {

  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/v1/personne")
      .then((response) => {
        setContacts(response.data);
        //  console.log(response.data)
        setError(null);
        axios("http://www.lemonde.fr").then(respo => console.log(respo.data)).catch(err => {console.log("ERR " +err)})
      })
      .catch(setError);
  }, []);



  if (error) console.log(error)
  if (error) return <p>An error occurred</p>

  return (
    <div className="App">
      {contacts.map((personne) => (
        <div>
          <div dangerouslySetInnerHTML={{ __html: personne.personneNom }}></div>
          <Personne
            key={personne.personne}
            personneNom={personne.personneNom}
            personnePrenom={personne.personnePrenom}
            email={personne.email}
          /></div>
      ))}
    </div>
  );

}

export default App;
