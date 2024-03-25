// Original code

import { useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  let timeoutID = null;

  function handleSend() {
    setIsSending(true);
    timeoutID = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 3000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        disabled={isSending}
        onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending &&
        <button onClick={handleUndo}>
          Undo
        </button>
      }
    </>
  );
}

// Mine

import { useState, useRef } from 'react'

export default function Chat() {
	const [text, setText] = useState('')
	const [isSending, setIsSending] = useState(false)
	let timeoutID = useRef(null)

	function handleSend() {
		setIsSending(true)
		timeoutID.current = setTimeout(() => {
			alert('Sent!')
			setIsSending(false)
		}, 3000)
	}

	function handleUndo() {
		setIsSending(false)
		clearTimeout(timeoutID.current)
	}

	return (
		<>
			<input disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
			<button disabled={isSending} onClick={handleSend}>
				{isSending ? 'Sending...' : 'Send'}
			</button>
			{isSending && <button onClick={handleUndo}>Undo</button>}
		</>
	)
}

// The undo functionality was not working because the timeoutID was being re-rendered when the undo button was clicked.
// Because the timeoutID was originally a local variable, it was being re-initialized every time the component re-rendered.
// The solution was to use a ref to store the timeoutID so that it would persist between re-renders.

// React Solution:
// "Whenever your component re-renders (such as when you set state), all local variables get initialized from scratch.
// This is why you can’t save the timeout ID in a local variable like timeoutID and then expect another event handler to “see” it in the future.
// Instead, store it in a ref, which React will preserve between renders."
