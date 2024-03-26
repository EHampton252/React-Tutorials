# useReducer

UseReducer is a useful way to replace useState so that you can more easily deal with event handlers that get passed down several components. The key difference between with managing state wirh reducers is that you are telling React what the user did by "dispatching actions". This is achieved by creating functions which use **dispatch** to create an **action** that shows what happened. Convention dictates that every action have a **type: string** field that describes what happened and is specific to a component.

Then, you write your reducer function which is where the state logic goes ( first arg is state, second is action). These functions are often written use switch/case statements.

## NOTE

Reducers should not be used to send requests, schedule timeouts, or perform side effects.
