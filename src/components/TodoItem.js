import React from 'react';
import './todo.css'

const TodoItem = ({ todo }) => {
  return (
    <li>
      <img src="icon-192x192.png" alt="loding" className='todoImg'/>
      <span> {todo}</span>
    </li>
  );
};

export default TodoItem;
