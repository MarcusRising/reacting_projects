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
/*////////////////////////////////////////////////////////////////////////*/




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
/*////////////////////////////////////////////////////////////////////////*/


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

/*////////////////////////////////////////////////////////////////////////*/

/*
For this task, you need some state that controls whether the warning box is visible or not. Hence, the first step is to register such an isDeleting state that's either true (the box will be shown) or false (it will not be shown). Of course, you could use any other state name of your choice:

const [isDeleting, setIsDeleting] = React.useState(false);


This state should be set to true (to later show the warning dialog) whenever the "Delete" <button> is clicked. To achieve this, the onClick prop is added and set to a function that updates the isDeleting state accordingly:

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    return (
      <div>
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button>Proceed</button>
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}


The "Proceed" <button> should do the opposite:

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
 
    function proceedHandler() {
        setIsDeleting(false);
    }
    
    return (
      <div>
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}


Now, you're ready to show the <div id="alert">...</div> conditionally, based on the value of isDeleting. For example, via a ternary expression:

return (
  <div>
    {isDeleting ? <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div> : ''}
    <button onClick={deleteHandler}>Delete</button>
  </div>    
);


Alternatively, you could use the && "trick":

return (
  <div>
    {isDeleting && <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedHandler}>Proceed</button>
    </div>}
    <button onClick={deleteHandler}>Delete</button>
  </div>    
);


Or use an extra variable to keep the logic out of your JSX code:

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    function deleteHandler() {
        setIsDeleting(true);
    }
    
    function proceedHandler() {
        setIsDeleting(false);
    }
    
    let warning;
    
    if (isDeleting) {
        warning = (
            <div data-testid="alert" id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={proceedHandler}>Proceed</button>
            </div>
        );
    }
    
    return (
      <div>
        {warning}
        <button onClick={deleteHandler}>Delete</button>
      </div>    
    );
}

*/


/*////////////////////////////////////////////////////////////////////////*/


/*
For this task, you need some state that changes whenever the button is clicked - this state can then be used to apply the active CSS class dynamically.

Therefore, as a first step, add some state like this (to the App component function):

const [highlighted, setHighlighted] = React.useState(false);


This highlighted state should be changed whenever the <button> is clicked - hence the onClick prop and a fitting function (e.g., named handleClick) is required:

export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
Important: Here, the setHighlighted() state updating function uses a function to set the new state - this is done to follow the common best practice of using such a function if the new state is based on the previous state. Here, the new state is the opposite of the old state (!isHighlighted sets true to false and vice versa).



Finally, it's time to apply the CSS class active on the <p> element dynamically:

import React from 'react';
 
// don't change the Component name "App"
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);
    
    function handleClick() {
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}

*/

/*//////////////////////////////////////////////////////////*/
/*
//jsx verison
<div id="content">
  <p>Hello World!</p>
</div>

//Javascript
React.createElement(
  'div',
  {id: 'content'},
  React.createElement(
    'p',
    null,
    'Hello World'
  )
);

*/
/*//////////////////////////////////////////////////////////*/
/*

import React from 'react';
 
function App() {
  const [choice, setChoice] = React.useState(null);
 
  let textColor = 'white';
 
  if (choice === 'yes') {
    textColor = 'green';
  } else if (choice === 'no') {
    textColor = 'red';
  }
 
  return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice('yes')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice('no')}>No</button>
        </li>
      </menu>
    </div>
  );
}
export default App;

*/
/*//////////////////////////////////////////////////////////*/
