// Components
import CountryCard from "./components/CountryCard/CountryCard";
import SearchBox from "./components/SearchBox/SearchBox";

// Hooks
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);

  const userInputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className='App'>
      <SearchBox
        onChange={userInputChangeHandler}
        value={userInput}
        placeholder='Search Country Name...'
      />

      <CountryCard userInput={userInput} />
    </div>
  );
}

export default App;
