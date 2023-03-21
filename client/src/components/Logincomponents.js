import React from 'react'
import { Link } from 'react-router-dom'
import {SlSocialLinkedin,SlSocialGoogle} from 'react-icons/sl'
import {FiFacebook,FiTwitter} from 'react-icons/fi'

function Logincomponents() {
  return (
    <div>
        {/* SignIn */}

        <div>
            <h4 className='text-3xl font-bold mb-3'>Sign In</h4>
            <span className=''>New User?&nbsp;<Link className='text-blue-500'>Create an account</Link></span>
        </div>
        <div>

            {/* form starting */}

            <form className='my-4' action="">         
                <div className='flex flex-col'>
                    <input type="text" placeholder='Username or email' className='border-2 border-gray-700 px-2 py-1 mt-2 font-semibold' />
                    <input type="password" placeholder='Password' className='border-2 border-gray-700 px-2 py-1 mt-4 font-semibold' />
                </div>
                <div className='my-3 flex items-center'>
                    <input type="checkbox" name="" id="" className='w-5 h-5' />
                    <span className='mx-2'>Keep me signed in</span>
                </div>
                <Link to={'/home'}><button className='w-full my-3 bg-gray-800 text-white h-10'>Sign in</button></Link>
            </form>

            {/* form ending */}

            <div className="flex flex-row items-center justify-center">
                <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div> {/* Left line */}
                <div className="text-center px-4">Or Sign In With</div> {/* Text */}
                <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div> {/* Right line */}
            </div>

            {/* icons */}
                <div className='flex items-center justify-between mt-4 '>
                                        {/* google-icon */}
                    <span className='border-2 border-gray-800 rounded-full p-2'>
                    <SlSocialGoogle/> 
                    </span>
                                        {/* facebook-icon */}

                    <span className='border-2 border-gray-800 rounded-full p-2'>
                    <FiFacebook/>
                    </span>
                                        {/* linkedin-icon */}

                    <span className='border-2 border-gray-800 rounded-full p-2'>
                    <SlSocialLinkedin/>
                    </span>
                                        {/* twitter-icon */}

                    <span className='border-2 border-gray-800 rounded-full p-2'>
                    <FiTwitter/>
                    </span>
            </div>
        </div>
    </div>
  )
}

export default Logincomponents
