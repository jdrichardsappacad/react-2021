// ./src/components/ContactUs/index.js
import { useState, useEffect } from 'react';
import isEmail from 'validator/es/lib/isEmail';


function ContactUs(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

//  const validate = () => {
//   const validationErrors = [];

//   if (!name) validationErrors.push('Please provide a Name');

//   if (!email) {
//     validationErrors.push('Please provide an Email');
//   } else if (!isEmail(email)) {
//     validationErrors.push('Please provide a valid Email');
//   }

//   return validationErrors;
// };

useEffect(() => {
  const validate = () => {
    const validationErrors = [];

    if (!name) validationErrors.push('Please provide a Name');

    if (!email) {
      validationErrors.push('Please provide an Email');
    } else if (!isEmail(email)) {
      validationErrors.push('Please provide a valid Email');
    }

    return validationErrors;
  };

  const errors = validate();

  if (errors.length > 0) {
    setValidationErrors(errors);
  } else {
    setValidationErrors([]);

  }
}, [name, email]);



  const onSubmit = e => {
    e.preventDefault();
    // const errors = validate();

    // if (errors.length > 0) return setValidationErrors(errors);
    if(validationErrors.length > 0) return

    const contactUsInformation = {
      name,
      email,
      phone,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setValidationErrors([]);
  };

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
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            {props.phoneTypes.map(phoneType => (
              <option key={phoneType}>{phoneType}</option>
            ))}
          </select>
        </div>
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

ContactUs.defaultProps = {
  phoneTypes: ['Home', 'Work', 'Mobile'],
};

export default ContactUs;
