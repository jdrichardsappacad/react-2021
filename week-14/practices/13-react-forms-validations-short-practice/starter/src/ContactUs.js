import { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');

  const onSubmit = e => {
    // Prevent the default form behavior
    // so the page doesn't reload.

    e.preventDefault();
    // Create a new object for the contact us information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    // For now, just log the contact us information to the console
    // though ideally, we'd persist this information to a database
    // using a RESTful API.
    console.log(contactUsInformation);
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
  };

  return (
    <div>
      <h2>Contact Us</h2>
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
