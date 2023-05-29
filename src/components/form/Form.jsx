import React from 'react';
import Button from '../button/Button';
import Heading from '../heading/Heading';
import Input from '../input/Input';
import Text from '../text/Text';
import './form.scss';

const Form = () => {
  const positionsList = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];
  const fileUploadText = 'Upload your photo';

  return (
    <section className="post">
      <Heading text="Working with POST request" />
      <form className="form" action="post">
        <Input type="text" placeholder="Your name" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Phone" />
        <fieldset className="fieldset">
          <legend className="legend">
            <Text text="Select your position" />
          </legend>
          {positionsList.map(elem => (
            <div className="radio-wrapper" key={elem}>
              <Input className="input_radio" type="radio" id={elem} name="position" value={elem} />
              <label htmlFor={elem}>{elem}</label>
            </div>
          ))}
        </fieldset>
        <Input className="input_file" type="file" id="upload" />
        <label className="input input_file__label" htmlFor="upload">
          {fileUploadText}
        </label>
        <Button type="submit" text="Sign up" disabled={true} />
      </form>
    </section>
  );
};
export default Form;
