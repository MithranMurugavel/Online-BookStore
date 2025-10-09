import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
const Register = () => {

  const [message,setMessaege] = useState(" ");
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
      const onSubmit = (data) => console.log(data) 

      const handleGoogleSignIn = () => {

      }
  return (
     <div className="min-h-[calc(100vh-130px)] flex justify-center items-center ">
          <div className='w-100 max-w-sm mx-auto bg-white shadow-[0px_10px_15px_rgba(0,0,0,0.3)] rounded-[18px] px-8 pt-6 pb-8 mb-4 '>
            <h2 className='text-xl font-semibold mb-2'>Register Here</h2>
    
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label className="flex text-gray-500 text-md font-bold mb-2" htmlFor="email">Email:</label>
                <input 
                {...register("email", { required: true })}
                type='email' name='email' id='email' placeholder='abc123@gmail.com' className=' shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
              </div>
              <div className='mb-4'>
                <label className="block text-gray-500 text-md font-bold mb-2" htmlFor="email">Password:</label>
                <input {...register("password", { required: true })}
                type='password' name='password' id='password' placeholder='Enter Password' className=' shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
              </div>
              <div className='mb-4'>
                <label className="block text-gray-500 text-md font-bold mb-2" htmlFor="email">Confirm Password:</label>
                <input {...register("password", { required: true })}
                type='password' name='re-password' id='re-password' placeholder='Enter Password' className=' shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
              </div>
              {
                  message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
              }
              <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-[10px] focus:outline-none hover:px-6  thover:py-8 transition-all duration-200'>Login</button>
              </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Have an account <Link to='/Login' className='text-blue-500 hover:text-blue-700' title="Register here">Click here to Login</Link></p>
            <div className='mt-3'>
              <button onClick={handleGoogleSignIn()}
              className='w-full flex flext-wrap gap-1 items-center justify-center bg-primary hover:bg-blue-700 rounded-[9px] text-black font-bold py-2 px-4 focus:outline-none'><FcGoogle className='mr-2 w-8 h-8'/>Sign in With Google</button>
            </div>
          </div>
        </div>
  )
}

export default Register