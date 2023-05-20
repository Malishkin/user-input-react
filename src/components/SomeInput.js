import { useState, useRef, useEffect } from "react";
const SomeInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [isEnteredNameValid, setIsEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (isEnteredNameValid) {
      console.log("Name Input is Valid!");
    }
  }, [isEnteredNameValid]);
  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsEnteredNameValid(true);
    }
  };

  const inputLostFocusHandler = (event) => {
    setEnteredNameTouched(true);
   if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setIsEnteredNameValid(false);
      return;
    }

    setIsEnteredNameValid(true);
    console.log(enteredName);
    console.log(nameInputRef.current.value);
    setEnteredName("");
    //  nameInputRef.current.value = ""; // DON'T DO THIS - REACT WON'T LIKE IT
  };

  const isNameInputInvalid = !isEnteredNameValid && enteredNameTouched;
  const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input ref={nameInputRef} onBlur={inputLostFocusHandler} onChange={nameInputChangedHandler} type="text" id="name" value={enteredName}/>
        {isNameInputInvalid && <p className="error-text">Имя не может быть пустым</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
