import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import { getPositions, getToken, postUser } from '../../gateway/gateway';
import './form.scss';

const Form = () => {
  const [positions, setPositions] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position_id, setPositionID] = useState(null);
  const [photo, setPhoto] = useState(null);

  const sendRequest = e => {
    e.preventDefault();
    getToken().then(token => postUser({ name, email, phone, position_id, photo }, token));
  };

  const onChange = e => {
    switch (e.target.type) {
      case 'text':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'tel':
        setPhone(e.target.value);
        break;
      case 'radio':
        setPositionID(e.target.id);
        break;
      case 'file':
        setPhoto(e.target.files[0]);
        break;
    }
  };

  console.log('user');
  console.log({ name, email, phone, position_id, photo });

  useEffect(() => {
    getPositions().then(result => setPositions(result));
  }, []);

  return (
    <section className="post">
      <Heading text="Working with POST request" />
      <form className="form" action="post">
        <Input onChange={e => onChange(e)} type="text" placeholder="Your name" value={name} />
        <Input onChange={e => onChange(e)} type="email" placeholder="Email" value={email} />
        <Input onChange={e => onChange(e)} type="tel" placeholder="Phone" value={phone} />
        <fieldset className="fieldset">
          <legend className="legend">
            <Text text="Select your position" />
          </legend>
          {positions.map(({ id, name }) => (
            <div className="radio-wrapper" key={id}>
              <Input
                onChange={e => onChange(e)}
                className="input_radio"
                type="radio"
                id={id}
                name="position"
                value={name}
              />
              <label htmlFor={id}>{name}</label>
            </div>
          ))}
        </fieldset>
        <Input
          onChange={e => onChange(e)}
          className="input_file"
          type="file"
          id="user-photo"
          name="user-photo"
        />
        <label className="input input_file__label" htmlFor="user-photo">
          Upload your photo
        </label>
        {/* <Button type="submit" text="Sign up" onClick={sendRequest} disabled={true} /> */}
        <Button type="submit" text="Sign up" onClick={e => sendRequest(e)} />
      </form>
    </section>
  );
};
export default Form;
