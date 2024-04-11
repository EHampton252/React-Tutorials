# useMemo

UseMemo is most often used to avoid re-rendering expensive function calculations. Say you have a function that calculates 1,000 items and it slows down your application and the dependencies rarely change. You can "memoize" your function so that the function renders on the initial render of the application and only recalculates when the dependencies in the dependency array change. This is the most common application of useMemo although it is often unnecessary if you are properly optimising your code.

# useCallback

Very similar to useMemo except the useCallback stores the _function itself_ where as useMemo stores the _result_ of that function. The key useage here is that useCallback allows you to store the function between re-renders and then decide later if you want to re-run your function. Often times, useCallback is used to help prevent nested functions in a memo - however combining memo and useCallback is mostly for code organization and not so much as a performance optimizer (if you're already using memos).
