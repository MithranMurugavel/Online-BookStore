import React from 'react'

const Login = () => {
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center ">
      <div className='w-100 max-w-sm mx-auto bg-white shadow-xl rounded-[18px] px-8 pt-6 pb-8 mb-4 '>
        <h2 className='text-xl font-semibold'>Please Login</h2>

        <form>
          <div className='mb-4'>
            <label className="flex text-gray-500 text-md font-bold mb-2" htmlfor="email">Email:</label>
            <input type='email' name='email' id='email' placeholder='abc123@gmail.com' className=' shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
          </div>
          <div className='mb-4'>
            <label className="block text-gray-500 text-md font-bold mb-2" htmlfor="email">Password:</label>
            <input type='password' name='password' id='password' placeholder='Enter Password' className=' shadow border w-full rounded py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
          </div>
          <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-[10px] focus:outline-none hover:px-6  thover:py-8 transition-all duration-200'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login