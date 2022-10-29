import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({

  regNo: yup.string().required('Reg Number is required'),
  firstname: yup.string().required('firstname is required'),
  gender: yup.string().required('Gender is required')
  

}).required();

function FormC() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

    return (
      <div className="">
  
  <h3> Student Registration Form using Yup library</h3>

<form onSubmit={handleSubmit ( (data) => {
console.log(data);
alert(JSON.stringify(data, null, 2));
} ) }> 

      <label>Reg Number :
        <input {...register(`regNo`)} type="text" />
        {errors?.regNo && <span  className="errors"> {errors.regNo.message}</span>} <br/>
      </label>

      <label>Full Name   :
        <input {...register(`firstname`)} type="text" /> 
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
  