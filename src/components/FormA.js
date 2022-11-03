import {useForm} from 'react-hook-form';
import {useState, useEffect} from 'react';
import {useNavigate, useLocation } from 'react-router-dom';

let renderCount = 0;

function FormA() 
{

let navigate = useNavigate();
const [empdata, setEmpData] = useState();
const [submitstatus, setSubmitStatus] = useState(false);

const locationnew = useLocation();

const {register, handleSubmit,setValue, formState : {errors}} = useForm(
);

const firstNameFun = (e) =>
{
  console.log(e.target.value);
}

useEffect(() => 
{

if (submitstatus) 
{ 
    navigate('/FormA', { state: empdata });
}

if(locationnew.state == null)
{
}
else
{
  setValue("firstName", locationnew.state.firstName)
  setValue("lastName", locationnew.state.lastName)
  setValue("empNumber", locationnew.state.empNumber)
  setValue("Age", locationnew.state.Age)
  setValue("mobileNumber", locationnew.state.mobileNumber)
}

}, [submitstatus,empdata,locationnew.state,navigate,setValue]);


  console.log(errors);
  renderCount++;

  return (
    <div className="">
    Render Count: {renderCount}
   <h3> Form Validation using React Hook Form Library </h3>
   <h4> Employee Registration Form: </h4>

    <form onSubmit={handleSubmit((data) => 
    {
      setEmpData(data);
      setSubmitStatus(true);      
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    })}>

      <label>First Name:
        <input {...register(`firstName`, {required : 'FirstName is Required'})} type="text" placeholder="First Name" onChange={firstNameFun} /> <br/>    
        {errors?.firstName && <span  className="errors"> {errors.firstName.message}</span>} <br/>
      </label>

      <label>Last Name:
        <input {...register(`lastName`, {required : 'LastName is Required'})} type="text" placeholder="Last Name"  /> <br/>
        {errors?.lastName && <span  className="errors"> {errors.lastName.message}</span>} <br/>
      </label>

      <label>Emp Number:
        <input {...register(`empNumber`, {required : 'Employee Number is Required'})} type="number" placeholder="Emp Number"/> <br/>
        {errors?.empNumber && <span  className="errors"> {errors.empNumber.message}</span>} <br/>
      </label>

      <label>Age:
        <input {...register(`Age`, {required : 'Age is Required'})} type="number" placeholder="Age"/> <br/>
        {errors?.Age && <span  className="errors"> {errors.Age.message}</span>} <br/>
      </label>

      <label>Mobile:
        <input {...register(`mobileNumber`, {required : 'Mobile No is Required', maxLength: { value : 10, message: 'Mobile No Should not more than 10 Digit'}, minLength: { value : 10, message: 'Mobile No Should be in 10 Digit'} }, )} type="tel" placeholder="Mobile Number"/><br/>
        {errors?.mobileNumber && <span  className="errors"> {errors.mobileNumber.message}</span>} 
      </label>

      <br/>
      <input type="submit" id="submit" value="submit" />
     </form>

     </div>
    );
  }
  
  export default FormA;
  