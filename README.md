# Assignment 7 Question Answers

### Project Features
 * Easy to use & fully responsive
 * Quick data load
 * accurately calculation
 * Creates a barrier to stop the user from adding the same item to the cart
 * A user has a maximum of 20 credit hours and a user cannot add more than 20 total credit hours of courses to the cart.
## 
### How I managed the state in my assignment project ?
React State (useState hook): The simplest way to manage state in a functional React component is by using the useState hook. we can declare state variables and their initial values within our component, and React will automatically re-render your component when the state changes.


After clicking the [select] button the data will transfer to the SideCart.jsx through a hook(useState) that I created in App.jsx.
Then the SideCart.jsx will display the credit_hour, course_name , price on the User Interface. 
