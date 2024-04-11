# useRef

UseRefs are used to preserve objects between renders (specfically objects that are not needed for rendering). Ref objects are also mutable and regular Javascript objects so react is not aware of when you change them hence why you shouldn't use them for state management.
Because refs are not useed for tracking state, changing a refs current value does not trigger a re-render which makes refs great for saving objects that do not effect the visual output of a component.

A common mistake is to read or write to the ref object during render which will cause errors. Instead a ref should be modified or read in an event handler or effect.

If you have to read or wite a ref during render thats a pretty good sign to just use state instead.
