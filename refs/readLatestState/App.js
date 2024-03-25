// Original code

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

// Mine

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const timeoutID = useRef(null);

  function handleSend() {
    clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

// My solution above still works, however, the timing is off because I used the ref to store the timeoutID and clear it when the button is clicked.
// Might not be wrong, but it still works and the prompt wasn't totally clear if that mettered. I can't see why the timing in this scenario would matter.
// Regardless, close but not the exact solution.

import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

// This solution is the same as mine, but it uses a ref to store the text value instead of the timeoutID.

// React Solution:
// "State works like a snapshot, so you can’t read the latest state from an asynchronous operation like a timeout. 
// However, you can keep the latest input text in a ref. A ref is mutable, so you can read the current property at any time. 
// Since the current text is also used for rendering, in this example, you will need both a state variable (for rendering), 
// and a ref (to read it in the timeout). You will need to update the current ref value manually."