// Original code

let timeoutID;

function DebouncedButton({ onClick, children }) {
  return (
    <button onClick={() => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        onClick();
      }, 1000);
    }}>
      {children}
    </button>
  );
}

export default function Dashboard() {
  return (
    <>
      <DebouncedButton
        onClick={() => alert('Spaceship launched!')}
      >
        Launch the spaceship
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Soup boiled!')}
      >
        Boil the soup
      </DebouncedButton>
      <DebouncedButton
        onClick={() => alert('Lullaby sung!')}
      >
        Sing a lullaby
      </DebouncedButton>
    </>
  )
}

// Mine

import { useRef } from 'react'

function DebouncedButton({ onClick, children }) {
	const timeoutID = useRef(null)
	return (
		<button
			onClick={() => {
				clearTimeout(timeoutID.current)
				timeoutID.current = setTimeout(() => {
					onClick()
				}, 1000)
			}}
		>
			{children}
		</button>
	)
}

export default function Dashboard() {
	return (
		<>
			<DebouncedButton onClick={() => alert('Spaceship launched!')}>Launch the spaceship</DebouncedButton>
			<DebouncedButton onClick={() => alert('Soup boiled!')}>Boil the soup</DebouncedButton>
			<DebouncedButton onClick={() => alert('Lullaby sung!')}>Sing a lullaby</DebouncedButton>
		</>
	)
}

// The buttons are debounced so that they only fire the alert after 1 second of inactivity.
// The solution was to use a ref to store the timeoutID so that it would persist between re-renders.
// This way, the timeoutID will not be re-initialized every time the component re-renders.

// React Solution:
// "A variable like timeoutID is shared between all components. This is why clicking on the second button resets the first button’s pending timeout.
// To fix this, you can keep timeout in a ref. Each button will get its own ref, so they won’t conflict with each other.
// Notice how clicking two buttons fast will show both messages."
