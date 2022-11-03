import {useState} from 'react';

function ChildComponent(props) 
{
    const [data,setData] = useState();

    const onChange = (e) =>
    {
        setData(e.target.value); // Store the data
    }

    const HandleSubmit = (e) =>
    {
        e.preventDefault();
        props.onSubmit(data); // Pass the data
    }

    return (
      <div className="">
            <h3> Child Component</h3>
            
            <form onSubmit={HandleSubmit}>
            <label> Send Data From Child:
            <input type="text"  value={data} onChange={onChange}/>  
            <button type='submit' >Submit </button>
            </label>

            </form>
        
      </div>
    );
  }
  
  export default ChildComponent;
  