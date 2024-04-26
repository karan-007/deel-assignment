Q1 - What is the difference between Component and PureComponent? Give an example where it might break my app.
A - PureComponents are the components which return the same value if same props is being passed to them. On the other hand normal component will be re-erndered.

Q2 - Context + ShouldComponentUpdate might be dangerous. Why is that?
A - Context is being used for state management. All the components wrapped under the a particular context provider have access to the state. If we ShouldComponentUpdate in one if the child components and temper the state i.e. not properly set the state then it would break the compoents and its children.

Q3 - Describe 3 ways to pass information from a component to its PARENT.
A - - Using a callback function and pass info as the arguments. - Setting the state by child which is being intialized at parent. - using redux, setting redux state in child and consuming at parent. - Using pubsub, publish at child and have a listener attached at parent.

Q4 - Give 2 ways to prevent components from re-rendering.
A - Using useMemo will memoize the value of a function call or constant and will prevent rendering if the values present in dependency array does not changes.same can be done for component using React.Memo.

- Using useCallback for calling functions, this will not rerender the component if the dependency arr values are unchnanged.
- Creating single responsiblity files i.e. not passing uneccesary props to a component which are not required in the component.

Q5 - What is a fragment and why do we need it? Give an example where it
might break my app.
A - Fragments are tags provided by react using which we can group multiple children without adding extra nodes to DOM. We can not give styles to fragments. If a parent tag have some styles which would affect the children and if children are wrapped in fragments then parent styles would not be applied in children and hence break our page.

Q6 - Give 3 examples of the HOC pattern.
A - Auth HOC - this takes care of the auth check, component passed under the Auth hoc will be render only if user is Authenticated.

- Error bounderies - component passed under the Error bounderies hoc will only break the wrapped component if any error occured in that component rather than breaking the whole app.
- Styles HOC - If we want some common styles on a component, we can wrap the component in styles HOC to add styles.

Q7 - What's the difference in handling exceptions in promises,
callbacks and async...await?
A - Promises - We can handle errors in catch block of promise call.

- Callback - In case of error we can pass appropiate error msg while calling a callback func.
- Async await - The variable where the reponse of a async call is strored will have error code and msg in case of async call fail.

Q8 - How many arguments does setState take and why is it async.
A - There are 2 args that can be passed in setState, first is the value that need to set to state second is the callback which will be called after updating he state. setState is async because it is a imp operation and react does not set state directly instead it passed it into a queue which can takes time to excecute as there may be operation already present to excecuted in the queue.

Q9 - List the steps needed to migrate a Class to Function
Component.
A - Remove the class and constructor.

- Use useState for state.
- remove render() method and use return()
- Remove all other lifecylce methods and use them in useEffect with proper dependencies.

Q10 - List a few ways styles can be used with components.
A - Using inline styling - Using stlyes wrt classes and ids - Setting CSS via js. used for conditionally setting styles to components. - Using libraries such as styled-components, tailwind css etc

Q11. How to render an HTML string coming from the server.
A - Creating a HTML parser function to parse HTML from string

- Using dangerouslySetInnerHTML it sets the inner HTML of a component which expects string.
