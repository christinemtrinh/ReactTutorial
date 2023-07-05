import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// We are creating a second component in the same file
// Though one component per file is good practice it is ok to do multiple
// if one of them is only being used by the other in the same file
// import styled from "styled-components";
// const FormControl = styled.div`
//     margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')}; 
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Do not add empty items..
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  //Inline styling always takes top precendence
  /*
  <div style={{color: <ternaryExp>, bgColor: ...}} className=""> </div>
  */
  //It can get styling from the CSS file as well... (Check CourseInput.css at the bottom!)
  //This uses dynamic classing instead of dynamic inline styling

  /*
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
  */
  // Changing the above return statement using styled components
  // Lastly we need to indicate if invalid class applies
  // Styled components automatically add className through props
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // Doing the same thing using CSS modules.. Notice that we set the className to the **converted** classNames
  // We are specifying the value (style properties) of the styles object at the given key/className i.e. form-control
  
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
