import React from 'react';
import ReactDOM from "react-dom";
import "./style.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';
 
 const SignupForm = () => {
   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       intro: '',
     },
     validationSchema: Yup.object({
       firstName: Yup.string()
         .max(15, 'Must be 15 characters or less')
         .required('Required'),
       lastName: Yup.string()
         .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string().email('Invalid email address').required('Required'),
       intro: Yup.string()
         .min(20, 'Must be 20 characters or more')
         .required('Required'),
     }),
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form noValidate="true" onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         type="text"
         placeholder ="Joe"
         {...formik.getFieldProps('firstName')}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input id="lastName" type="text" placeholder ="Doe" {...formik.getFieldProps('lastName')} />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
 
       <label htmlFor="email">Email Address</label>
       <input id="email" type="email" placeholder ="joedoe@whatever.com" {...formik.getFieldProps('email')} />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 
      <label htmlFor="intro">Self Intro</label>
       <textarea id="intro" type="text" rows="3" placeholder ="write..." {...formik.getFieldProps('intro')} />
       {formik.touched.intro && formik.errors.intro ? (
         <div>{formik.errors.intro}</div>
       ) : null}
       <button type="submit">Submit</button>
     </form>
   );
 };

 function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);