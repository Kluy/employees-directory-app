import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import Image from '../image/Image';
import { useEffect } from 'react';
import { useState } from 'react';
import { getPositions, getToken, postUser } from '../../gateway/gateway';
import './form.scss';

const Form = ({ setReset }) => {
  const [positions, setPositions] = useState([]);
  const [fileInputText, setFileInputText] = useState('Upload your photo');
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: null,
    photo: null,
  });
  const [registered, setRegistered] = useState(false);

  const onChange = e => {
    const targetType = ['text', 'email', 'tel', 'radio', 'file'];

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
        setFileInputText(e.target.files[0].name);
        setUser({ ...user, photo: e.target.files[0] });
        break;
    }
  };

  const sendRequest = (e, user) => {
    e.preventDefault();
    getToken()
      .then(token => postUser(createFormData(user), token))
      .then(result => {
        if (result) {
          setReset(true);
          setRegistered(true);
        }
      });
  };

  const createFormData = user => {
    const formData = new FormData();
    for (const prop in user) {
      formData.append(prop, user[prop]);
    }
    return formData;
  };

  useEffect(() => {
    getPositions().then(result => setPositions(result));
  }, []);

  return (
    <section className="post">
      <Heading text={registered ? 'User successfully registered' : 'Working with POST request'} />
      <div className="post__box">
        {registered ? (
          <Image
            src="../../images/success-image.svg"
            className="registration"
            alt="User registered"
          />
        ) : (
          <form className="form" action="post" id="form">
            <Input
              onChange={e => onChange(e)}
              type="text"
              placeholder="Your name"
              value={user.name}
            />
            <Input
              onChange={e => onChange(e)}
              type="email"
              placeholder="Email"
              value={user.email}
            />
            <Input onChange={e => onChange(e)} type="tel" placeholder="Phone" value={user.phone} />
            <Text text="+38 (XXX) XXX - XX - XX" className="p1__form" />
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
              {fileInputText}
            </label>
            <Button
              type="submit"
              text="Sign up"
              onClick={e => sendRequest(e, user)}
              // disabled={true}
            />
            <Button
              type="submit"
              text="Sign up"
              onClick={e => sendRequest(e, user)}
              disabled={true}
            />
          </form>
        )}
      </div>
    </section>
  );
};

export default Form;
