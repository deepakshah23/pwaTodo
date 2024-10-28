import React from 'react';
import './todo.css'

const TodoItem = ({ todo }) => {
  return (
    <li>
      <img src="icon-192x192.png" loading="lazy" alt="Lazy Loaded Image" className='todoImg'/>
      <span>{todo}</span>
    </li>
  );
};

export default TodoItem;