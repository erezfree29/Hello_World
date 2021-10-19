/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMessages } from '../redux/Greeting';

const Greeting = () => {
  const messages = useSelector((state) => state.greetingReducer);
  const [message, setMessage] = useState({});

  setTimeout(() => { window.location.reload(1); }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(messages);
  }, [messages]);

  const hello = () => messages[0] && messages[Math.floor(Math.random() * messages.length)].body;
  console.log(messages[0].message);
  return (

    <div className="display">
      <h2>Display random messages from Redux </h2>
      <p>{messages && hello()}</p>
    </div>
  );
};

export default Greeting;
