import css from './Button.module.css';
import { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('I am a web developer');

  const handleClick = text => {
    // console.log('I am button');
    setText(`${text}`);
  };

  const handleClickUpper = text => {
    // console.log(`${text}`);
    alert(`${text}`);
  };
  return (
    <div>
      <h1>I am a Junior Web Developer</h1>

      <button
        onClick={() =>
          handleClickUpper("My Name is Ramon, I'm a web developer")
        }
        className={css.myButton}
      >
        Click Me
      </button>
    </div>
  );
};

export default Button;
