import React from 'react';
import { useFormik,  } from 'formik';
import * as Yup from 'yup';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { AiOutlineGoogle, AiOutlineCloseCircle } from 'react-icons/ai'


const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',

    },
    validationSchema: Yup.object({
      name:  Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#19045b] to-[#280e59]">
      <div className="bg-[#4e526d] rounded-lg shadow-lg p-7 max-w-md w-full min-h-[620px] min-w-[230px]">
        <div className='flex justify-between text-white'>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <button className='text-3xl mb-[10px] hover:text-[#d4d0d0]'><AiOutlineCloseCircle /></button>
        </div>
        
        
        <form onSubmit={formik.handleSubmit}>
        <button
            type="submit"
            className="w-full p-2 flex justify-center border rounded-md focus:outline-none focus:ring-2 bg-[#4e526d] hover:bg-[#43475e] text-white rounded-sm py-2 px-4 mb-4"
          >
           <div className='mt-[1px] mr-3 text-2xl'><AiOutlineGoogle /></div>
            Sign up with Google
          </button>
          <hr className='mb-4'></hr>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter Your Full Name'
              className={`bg-[#4e526d] hover:bg-[#43475e] w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-white ${
                formik.touched.name && formik.errors.name
                  ? 'ring-red-500'
                  : 'focus:ring-purple-400'
              }`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Your Email Address'
              className={`bg-[#4e526d] hover:bg-[#43475e] w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-white ${
                formik.touched.email && formik.errors.email
                  ? 'ring-red-500'
                  : 'focus:ring-purple-400'
              }`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='At Least 8 characters'
              className={`bg-[#4e526d] hover:bg-[#43475e] w-full p-2 border rounded-md focus:outline-none focus:ring-2 text-white ${
                formik.touched.password && formik.errors.password
                  ? 'ring-red-500'
                  : 'focus:ring-purple-400'
              }`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          

          <div>
            <div>
            <FormGroup className='text-white'>
              <FormControlLabel control={<Checkbox defaultNotChecked />} label="I agree with Terms and Privacy" />
            </FormGroup>
          </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 border md:rounded-lg focus:outline-none focus:ring-2 bg-[#c3c618] hover:bg-[#a7a916] text-white rounded-sm py-2 px-4"
          >
            Sign Up
          </button>
          <hr className='mt-5'></hr>
          <p className='mt-3 text-white flex justify-center'>Already have an Account? </p>
          <p className='text-[#ecef55] hover:text-[#d3d544] cursor-pointer flex justify-center text-xl mt-2'>Log In</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
