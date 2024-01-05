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

// In order to react to <button> clicks, the onClick prop should be added to the <button> element:

// export default function App() {
//     return (
//         <div>
//             <p data-testid="price">$100</p>
//             <button onClick={}>Apply Discount</button>
//         </div>
//     );
// }


// Create a handleClick function (the name is up to you, though) and pass it to the onClick prop as a value:

// export default function App() {
//     function handleClick() {
//       // executed upon <button> clicks!
//     }
 
//     return (
//         <div>
//             <p data-testid="price">$100</p>
//             <button onClick={handleClick}>Apply Discount</button>
//         </div>
//     );
// }


// In order to change values & re-render the UI upon such changes, you must use "state" - a core React concept. In functional components, state can be registered via the useState() Hook. This Hook returns an array with exactly (!) two elements:

// The current state value

// A function that should be called to update the state value

// Update the App component function like this to register + output a new price state value (the name of the state variable is up to you):

// import React from 'react';
 
// export default function App() {
//     const [price, setPrice] = React.useState(100); // 100 is the default price state
 
//     function handleClick() {
//       // executed upon <button> clicks!
//     }
 
//     return (
//         <div>
//             <p data-testid="price">${price}</p>
//             <button onClick={handleClick}>Apply Discount</button>
//         </div>
//     );
// }
// Please note that the default state value for price is set to 100.



// As a last step, call the state updating function inside of handleClick() and set the price to 75 when the button is clicked:

// import React from 'react';
 
// export default function App() {
//     const [price, setPrice] = React.useState(100);
    
//     function handleClick() {
//         setPrice(75);
//     }
    
//     return (
//         <div>
//             <p data-testid="price">${price}</p>
//             <button onClick={handleClick}>Apply Discount</button>
//         </div>
//     );
// }

