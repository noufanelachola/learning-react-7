import React, {useState} from "react";

function App() {
  const [name ,setName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event){
    let value = event.target.value;
    let name = event.target.name;
    setName(prevName => {
      return (
        {
          ...prevName,
          [name] : value
        }
      );
    });
  }
  
  return (
    <form>
      <input type="text" name="firstName" placeholder="First Name" value={name.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={name.lastName} onChange={handleChange} />
    </form>
  );
}

export default App;
