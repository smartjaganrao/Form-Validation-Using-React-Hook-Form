import ChildComponent from "./ChildComponent";
import {useState} from 'react';
import '../App.css'

function ChildToParrent() {

    const [data,setData] = useState();

    const getDataFromChild = (datafromchild) =>
        {
            setData(datafromchild);
        }

    return (
      <div className="Parrent">
            <h3> Parrent Components</h3>
            <h4> Data Coming From Child: {data}</h4>            
            <ChildComponent onSubmit={getDataFromChild}/>
      </div>
    );
  }

  export default ChildToParrent;
  