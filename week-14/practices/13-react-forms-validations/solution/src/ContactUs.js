import { useState, useEffect } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const onSubmit = e => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();
    // if (validationErrors.length > 0) {
    //   return alert(
    //     `Cannot submit: ${validationErrors.map((error) => {
    //       return `\n${error}`;
    //     })}`
    //   );
    // } else {
    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setValidationErrors([]);
    // }
  };

  useEffect(() => {
    const validate = () => {
      const validationErrors = [];

      if (!name) validationErrors.push('Please provide a Name');
      if (!email) validationErrors.push('Please provide an Email');
      return validationErrors;
    };

    const errors = validate();

    if (errors.length > 0) setValidationErrors(errors);
  }, [name, email]);

  return (
    <div>
      <h2>Contact Us</h2>
      {validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            id='name'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            id='email'
            type='text'
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            id='phone'
            type='text'
          />
        </div>
        <select
          name='phoneType'
          onChange={e => setPhoneType(e.target.value)}
          value={phoneType}
        >
          <option value='' disabled>
            Select a phone type...
          </option>
          <option value='Home'>Home</option>
          <option value='Work'>Work</option>
          <option value='Mobile'>Mobile</option>
        </select>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
