import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';
import SuccessPage from './SuccessPage';

function App() {
  const [isSubmitted,setIsSubmitted]=useState(false);
 

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
       },
      validationSchema: Yup.object({
       
        email: Yup.string().email('Invalid email address.').required('Email is required.'),
        password: Yup.string()
          .required('Password is required.')
          .min(8, 'Password must be at least 8 characters.'),
      
      }),
      onSubmit: (values) => {
        setTimeout(() => {
         setIsSubmitted(true) ;
        }, 1000);
      console.log(values)
      },
    });


  return(
   
    <div className="App">
    
      <form className='form' onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor='email'>Email: </label>
      <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
        </div>
      <div>
      <label htmlFor='password'>Password: </label>
      <input type="password"  name="password" value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      
      <button type="submit" className='btn'>Submit</button>
      </form> 

      {isSubmitted && <SuccessPage onClose={() => setIsSubmitted(false)} />}   
    </div>
   
  );
}
 

export default App;
