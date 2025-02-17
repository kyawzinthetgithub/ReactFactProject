export default function Contact(abo) {
  return (
    <>
      <article className="contact-card">
        <img src={abo.img} alt="Photo of Mr. Whiskerson" />
        <h3>{abo.name}</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" alt="phone icon" />
          <p>{abo.phone}</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" alt="mail icon" />
          <p>{abo.email}</p>
        </div>
      </article>
    </>
  );
}
