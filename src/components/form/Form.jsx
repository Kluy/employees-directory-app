import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPositions, getToken, postUser } from '../../gateway/gateway';
import './form.scss';

const Form = ({ setReset, onSubmit, reset }) => {
  const [positions, setPositions] = useState([]);
  const [fileInputText, setFileInputText] = useState('Upload your photo');
  const [radioInputChecked, setRadioInputChecked] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: null,
    photo: null,
  });

  const onChange = e => {
    switch (e.target.type) {
      case 'text':
        setUser({ ...user, name: e.target.value });
        break;
      case 'email':
        setUser({ ...user, email: e.target.value });
        break;
      case 'tel':
        setUser({ ...user, phone: e.target.value });
        break;
      case 'radio':
        console.log(e);
        console.log(e.target.value);
        setUser({ ...user, position_id: e.target.id });
        break;
      case 'file':
        setFileInputText(e.target.files[0].name);
        setUser({ ...user, photo: e.target.files[0] });
        break;
    }
  };

  const sendRequest = (e, user) => {
    e.preventDefault();
    getToken()
      .then(token => postUser(user, token))
      .then(result => {
        setReset(!reset);
        setUser({ name: '', email: '', phone: '', position_id: null, photo: null });
        setFileInputText('Upload your photo');
        setRadioInputChecked(false);
      });
  };

  useEffect(() => {
    getPositions().then(result => setPositions(result));
  }, []);

  return (
    <section className="post">
      <Heading text="Working with POST request" />
      <form className="form" action="post">
        <Input onChange={e => onChange(e)} type="text" placeholder="Your name" value={user.name} />
        <Input onChange={e => onChange(e)} type="email" placeholder="Email" value={user.email} />
        <Input onChange={e => onChange(e)} type="tel" placeholder="Phone" value={user.phone} />
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
                checked={radioInputChecked}
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
          {fileInputText}
        </label>
        {/* <Button type="submit" text="Sign up" onClick={e => onSubmit(e, user)} /> */}
        <Button type="submit" text="Sign up" onClick={e => sendRequest(e, user)} />
      </form>
    </section>
  );
};
export default Form;
