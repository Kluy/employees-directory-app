import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import { fetchUsers, getPositions, getToken, postUser } from '../../gateway/gateway';
import './form.scss';

const Form = ({ onSubmit }) => {
  const [positions, setPositions] = useState([]);
  const [user, setUser] = useState({
    name: 'an',
    email: 'an@i.ua',
    phone: '380959595095',
    position_id: null,
    photo: null,
  });

  const sendRequest = e => {
    e.preventDefault();
    getToken().then(token => postUser(user, token));
  };

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
        setUser({ ...user, position_id: e.target.id });
        break;
      case 'file':
        setUser({ ...user, photo: e.target.files[0] });
        break;
    }
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
        {/* <Button type="submit" text="Sign up" onClick={e => onSubmit(e, user)} /> */}
        <Button type="submit" text="Sign up" onClick={e => sendRequest(e)} />
      </form>
    </section>
  );
};
export default Form;
