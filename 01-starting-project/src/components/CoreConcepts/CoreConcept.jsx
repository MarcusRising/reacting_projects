import "./CoreConcepts.css";

export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// Version 2?  using props
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// } //This is one way of doing it the other way is above
