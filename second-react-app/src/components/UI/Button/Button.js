import styled from "styled-components";

// We wanted a customizable component which is why we made a whole component out of a button
// We will refactor this code to use the styled components package
// import './Button.css';
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
// Tagged template literal format (JS feature)
// button method accepts what is inside the backticks and returns a component
// Copy and paste the CSS file into the backticks and rid the class/id selectors
// This package works by assigning a unique className that no other component (despite similar names) can have

// Media queries also find out what type of device the app is being used on
// For example if we want button to span full screen for small devices we can use the following:

// A final alternative is to use CSS modules supported by create-react-app
// This keeps JS and CSS separate as we have been, but prevents code from being universal by creating unique class names
// Rename the css file to have .module before .css
// Import the module as an object i.e. `import styles from './Button.modules.css'
// Use the classes as a prop of the object i.e. `className={styles.button}` 
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
export default Button;
