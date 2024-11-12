import React from 'react';
import { Link } from 'react-router-dom';

const HomeworkLists = () => {
  return (
    <div>
      <h4>HTML & CSS</h4>
      <ul>
        <li>
          <Link to="webstudio">Web Studio</Link>
        </li>

        <h4>JavaScript</h4>
        <li>
          <Link to="moviesearch">Movie Search</Link>
        </li>

        <h4>Phonebook</h4>
        <li>
          <Link to="phonebook">Phonebook</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeworkLists;
