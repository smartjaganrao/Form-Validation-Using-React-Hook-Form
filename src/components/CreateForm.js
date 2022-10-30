import { useState } from "react";
import FormA from "./FormA";
import FormB from "./FormB";
import FormC from "./FormC";


function CreateForm() {

  const [select,SetSelect] = useState('');

  const handleChange = (e) =>
  {
    SetSelect(e.target.value);
  }

    return (
      <div className="Homemain">
  
      <form>
        <select className="DropDown" value={select} onChange={handleChange}> 
        <option value=""> Select Form</option> 
          <option value="FormA">FormA</option> 
          <option value="FormB">FormB</option> 
          <option value="FormC">FormC</option> 
         </select>
      </form>
            
      <div className="RightContent">

      {(select === "FormA") ? <FormA /> : "" }
      {(select === "FormB") ? <FormB /> : "" }
      {(select === "FormC") ? <FormC /> : "" }

      </div>
      
      </div>
    );
  }
  
  export default CreateForm;
  