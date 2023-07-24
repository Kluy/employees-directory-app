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

const Form = ({ setRegistered, registered }) => {
  const [positions, setPositions] = useState([]);
  const [fileInput, setFileInput] = useState('');
  const [fileInputText, setFileInputText] = useState('Upload your photo');
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '+380',
    position_id: null,
    photo: null,
  });

  const onChange = e => {
    const type = e.target.type;
    console.log(e.target.files);
    const fileReader = new FileReader();
    fileReader.onload = function (file) {
      console.log('ssdsd');
      console.log(fileReader.result);
    };

    if (type === 'text') {
      setUser({ ...user, name: e.target.value });
    } else if (type === 'email') {
      setUser({ ...user, email: e.target.value });
    } else if (type === 'tel') {
      setUser({ ...user, phone: e.target.value });
    } else if (type === 'radio') {
      setUser({ ...user, position_id: e.target.id });
    } else if (type === 'file') {
      const file = e.target.files[0];

      fileReader.readAsDataURL(file);
      if (file.size > 5000000) {
        setFileInput('File size is more than 5 Mb');
      } else if (file.type !== 'image/jpeg') {
        setFileInput('Please, upload only jpeg or jpg file format');
      } else {
        setFileInputText(e.target.files[0].name);
        setUser({ ...user, photo: e.target.files[0] });
      }
    }
  };

  const sendRequest = (e, user) => {
    e.preventDefault();
    // const formData = new FormData();
    // console.log(formData);
    getToken()
      .then(token => postUser(createFormData(user), token))
      .then(result => {
        if (result) {
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
      <div className="post__wrapper">
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
              minlength={2}
              maxlength={60}
            />
            {/* {user.name.length < 2 ? (
              <Text text="Please, enter user name" className="p1--form" />
            ) : (
              ''
            )} */}
            <Input
              onChange={e => onChange(e)}
              type="email"
              placeholder="Email"
              value={user.email}
            />
            <Input
              onChange={e => onChange(e)}
              type="tel"
              minlength={13}
              maxlength={13}
              value={user.phone}
            />
            <Text text="+38 (XXX) XXX - XX - XX" className="p1--form" />
            <fieldset className="fieldset">
              <legend className="legend">
                <Text text="Select your position" />
              </legend>
              {positions.map(({ id, name }) => (
                <div className="form__radio-wrapper" key={id}>
                  <Input
                    onChange={e => onChange(e)}
                    className="radio-input"
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
              className="file-input"
              type="file"
              id="user-photo"
              name="user-photo"
            />
            <label className="input file-input__label" htmlFor="user-photo">
              {fileInputText}
            </label>
            {/* <Text text={fileInput} className="p1--form" /> */}

            <Button
              type="submit"
              text="Sign up"
              onClick={e => sendRequest(e, user)}
              // disabled={true}
            />
            {/* <Button
              type="submit"
              text="Sign up"
              onClick={e => sendRequest(e, user)}
              disabled={true}
            /> */}
          </form>
        )}
      </div>
    </section>
  );
};

export default Form;
