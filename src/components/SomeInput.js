import { useState, useRef } from "react";
const SomeInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
    }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    console.log(nameInputRef.current.value);
    setEnteredName("");
    //  nameInputRef.current.value = ""; // DON'T DO THIS - REACT WON'T LIKE IT
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Введите Имя</label>
        <input ref={nameInputRef} onChange={nameInputChangedHandler} type="text" id="name" value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
