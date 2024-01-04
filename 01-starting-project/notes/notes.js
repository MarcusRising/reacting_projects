/*
In this solution, a new Card component function is created and exported.

export default function Card({ name, children }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      {children}
    </article>
  );
The Card component function destructure the (automatically) received props object to "pull out" to prop values:

name

children

The children prop is a special prop that's automatically provided to every component function. It contains the wrapped content as a value.

So the children prop's value for this code:

<Card>
  <p>Hi there</p>
</Card>
would be <p>Hi there</p>.

The Card component then outputs the received name between <h2> tags (though you can output via any HTML tags of your choice - you don't have to use <h2>!).

The children prop is then output directly below that title. Therefore, any content passed between the <Card> opening and closing tags is output below the <h2> element.
*/
////////////////////////////////////////////////////////////////////////////////



// // Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// // Change them to any values of your choice (except loggedIn => that should be changed to true)
// // You DON'T need to fetch the values entered into the <input /> fields
// // You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
// export const user = {
//   email: '',
//   password: '',
//   loggedIn: false,
// };

// // Please note: The login does not actually work!
// // This exercise is just about practicing event handling
// // You'll learn how to add user authentication to React apps later in the course!
// function App() {
//     function handleLogin(){
//         user.email = 'test@examp.com';
//         user.password = 'test1';
//         user.loggedIn = true;
//     }
//   return (
//     <div id="app">
//       <h1>User Login</h1>
//       <p>
//         <label>Email</label>
//         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
//         <input type="email" />
//       </p>

//       <p>
//         <label>Password</label>
//         {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
//         <input type="password" />
//       </p>

//       <p id="actions">
//         <button onClick={handleLogin}>Login</button>
//       </p>
//     </div>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////
