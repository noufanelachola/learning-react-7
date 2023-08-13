import React, {useState} from "react";

function App() {
  const [formData ,setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: "",
    employment : "",
    favColor : ""
  });
  console.log(formData.favColor);
 
  function handleChange(event){
    const {value,name,type,checked} = event.target;
    setFormData(prevFormData => {
      return (
        {
          ...prevFormData,
          [name] : type === "checkbox" ? checked : value
        }
      );
      
    }
    );
  }
 
  return (
    <form>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <textarea name="comment" placeholder="Comment your feedback" value={formData.comment} onChange={handleChange}/>
      <div>
        <input 
          id="isFriendly" 
          type="checkbox" 
          name="isFriendly"  
          checked={formData.isFriendly}
          onChange={handleChange} 
          
        />
          <label htmlFor="isFriendly">Are you friendly</label>
      </div>
      <fieldset>
        <legend>Employment Status</legend>
        <input name="employment" type="radio" id="employed" value="employed" onChange={handleChange} checked={formData.employment === "employed"}/>
        <label htmlFor="employed">Employed</label>
        <input name="employment" type="radio" id="self-employed" value="self-employed" onChange={handleChange} checked={formData.employment === "self-employed"}/>
        <label htmlFor="self-employed">Self-employed</label>
        <input name="employment" type="radio" id="unemployed" value="unemployed" onChange={handleChange} checked={formData.employment === "unemployed"}/>
        <label htmlFor="unemployed">Unemployed</label>
      </fieldset>

      <div>
        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor">
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>    
      </div>  
    </form>
  );
}

export default App;
