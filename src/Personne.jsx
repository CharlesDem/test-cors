  export default function Personne({
    personneNom, personnePrenom, email
  }) {
    return (
      <div className="contact">
        <h5 className="contact__name">{personneNom}</h5>
        <h6 className="contact__email">{personnePrenom}</h6>
        <p className="contact__tagline">{email}</p>
        <a href={personneNom}>click</a>
      </div>
    );
  }
  