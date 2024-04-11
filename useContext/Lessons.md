# useContext

UseContext is very useful if you want to read and _subscribe_ to a context from your component. For example, if you are using a theme you can create a ThemeContext and wrap your components (usually as a high level like App.js or Main.js) and you then have access to that theme from your components. The theme value can be stored as a state allowing you to set and read the state from lower down the tree. You can also nest multiple contexts or combine them to save on organization.

Further, you can also extract contexts to components in the event your contexts get more complicated. For example, you might have an AppContext that is broken out into its own imported component and that componment contains the logic for your theme, users, data, etc. This is where a useReducer might be used.
