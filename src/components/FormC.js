import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useState, useEffect} from 'react';
import * as yup from "yup";

import {useNavigate, useParams, useLocation, useHistory } from 'react-router-dom';

const schema = yup.object({
  regNo: yup.string().required('Reg Number is required'),
  firstName: yup.string().required('FirstName is required'),
  lastName: yup.string().required('LastName is required'),
  gender: yup.string().required('Gender is required')
}).required();

function FormC() {

let navigate = useNavigate();
const [studentdata, setStudentData] = useState();
const [submitstatus, setSubmitStatus] = useState(false);
const locationnew = useLocation();

  const { register, handleSubmit,setValue, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => 
{

if (submitstatus) 
{ 
    navigate('/FormC', { state: studentdata });
}

if(locationnew.state == null)
{
}
else
{
  setValue("regNo", locationnew.state.regNo)
  setValue("firstName", locationnew.state.firstName)
  setValue("lastName", locationnew.state.lastName)
  setValue("gender", locationnew.state.gender)
}

}, [submitstatus]);


    return (
      <div className="">
  
  <h3> Student Registration Form using Yup library</h3>

<form onSubmit={handleSubmit ( (data) => {
setStudentData(data);
setSubmitStatus(true);
alert(JSON.stringify(data, null, 2));
} ) }> 

      <label>Reg Number :
        <input {...register(`regNo`)} type="text" />
        {errors?.regNo && <span  className="errors"> {errors.regNo.message}</span>} <br/>
      </label>

      <label>First Name   :
        <input {...register(`firstName`)} type="text" /> 
        {errors?.firstname && <span  className="errors"> {errors.firstname.message}</span>} <br/>
      </label>

      <label>Last Name   :
        <input {...register(`lastName`)} type="text" /> 
        {errors?.firstname && <span  className="errors"> {errors.firstname.message}</span>} <br/>
      </label>

      <label>Gender :
        <select {...register(`gender`)}>
          <option></option>
          <option value="male"> Male</option>
          <option vale="female"> Female</option>
        </select>
      </label> 
      {errors?.gender && <span  className="errors"> {errors.gender.message}</span>} <br/>
      
      <input type="submit" value="submit" />

      </form>
      </div>
    );
  }
  
  export default FormC;
  