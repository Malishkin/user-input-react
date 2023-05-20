import { useState, useEffect } from "react";
const SomeInput = (props) => {
  
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isNameInputInvalid = !isEnteredNameValid && enteredNameTouched;
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    if (isEnteredNameValid) {
      setIsFormValid(true);
    }
  }, [isFormValid]);

  
  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
    
  };

  const inputLostFocusHandler = (event) => {
    setEnteredNameTouched(true);
  
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true); 
    if (!isEnteredNameValid) {
      return;
    }
    console.log(enteredName);   
    setEnteredName("");
    setEnteredNameTouched(false);
   
  };
 
  const nameInputClasses = isNameInputInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input onBlur={inputLostFocusHandler} onChange={nameInputChangedHandler} type="text" id="name" value={enteredName}/>
        {isNameInputInvalid && <p className="error-text">Имя не может быть пустым</p>}
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
