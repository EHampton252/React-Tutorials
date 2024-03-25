// Original code

import { useRef } from 'react';

export default function Toggle() {
  const isOnRef = useRef(false);

  return (
    <button onClick={() => {
      isOnRef.current = !isOnRef.current;
    }}>
      {isOnRef.current ? 'On' : 'Off'}
    </button>
  );
}

// Mine

import { useRef, useState } from 'react'

export default function Toggle() {
	const [status, setStatus] = useState('off')
	const isOnRef = useRef(false)

	return (
		<button
			onClick={() => {
				setStatus(!status)
			}}
		>
			{status ? 'On' : 'Off'}
		</button>
	)
}

// The component was not re-rendering because the function was using a ref to store the value of the status.
// However, because the status was not being re-rendered along with the component, the ref was not being updated.
// The solution was to remove the ref and use a useState instead so the value will re-render with the component.

// React Solution:
// "In this example, the current value of a ref is used to calculate the rendering output: {isOnRef.current ? 'On' : 'Off'}.
// This is a sign that this information should not be in a ref, and should have instead been put in state. To fix it, remove the ref and use state instead."
