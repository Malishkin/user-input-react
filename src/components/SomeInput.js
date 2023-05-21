import { useState } from "react";

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== "";
  const isEnteredEmailValid = enteredEmail.includes("@");
  const isNameInputInvalid = !isEnteredNameValid && enteredNameTouched;
  const isEmailInputInvalid = !isEnteredEmailValid && enteredEmailTouched;
  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangedHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const inputLostFocusHandler = (field) => {
    if (field === "name") {
      setEnteredNameTouched(true);
    } else if (field === "email") {
      setEnteredEmailTouched(true);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!isEnteredNameValid || !isEnteredEmailValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = isEmailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          onBlur={() => inputLostFocusHandler("name")}
          onChange={nameInputChangedHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {isNameInputInvalid && (
          <p className="error-text">Имя не может быть пустым</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите Email</label>
        <input
          onBlur={() => inputLostFocusHandler("email")}
          onChange={emailInputChangedHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {isEmailInputInvalid && (
          <p className="error-text">Email должен содержать символ @</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
