import Layout from "../components/Layout"
import Head from "next/head"
import { FcPhoneAndroid, FcLock } from "react-icons/fc";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export function OTPLess(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://otpless.com/auth.js";
        document.body.appendChild(script);
        const otplessInit = Reflect.get(window, 'otplessInit');
        otplessInit?.();
      Reflect.set(window, 'otpless', otpless);
      return () =>{
        document.body.removeChild(script);
      }
     }, []);
    const otpless = (otplessUser) => {
        console.log({
            otplessUser
    })
        // your_code_here
    }
    return(<></>)
}
 
export default function Login() {

    const[pwdVisible,setPwdVisible] = useState(false);
    const[showOTPLess,setOTPLess] = useState(false);





    return (
        <>

            <Head>
                <title>Login | GyanOK</title>
                <meta name="description" content="this is for about us description page" />
              
            </Head>
            <Layout>
                
                <section className="bg-white section-area relative">
                  
                {showOTPLess && 
                <OTPLess />}
                    <div className="container">
                    
                    
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="lg:w-1/2  w-full mx-auto">
                                <h1 className="text-25px md:text-35px lg:text-40px mb-1">Login to your <span className="text-primary-color">account</span></h1>
                                <p className="mb-12 text-[18px] ">Don't have an account yet? <Link href="/register" className="text-blue-600">Register</Link></p>
                                <form>
                                    <div className="mb-5 relative">

                                        <input type="text" placeholder="Enter Mobile Number" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1" required />
                                        <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcPhoneAndroid /></span>
                                    </div>
                                    <div className="mb-5 relative">

                                         <input type={pwdVisible ? 'text' : 'password'} placeholder="Password" className=" block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-8  placeholder:text-optional-color outline-1" required/>
                                            <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcLock /></span>
                                             <div className="absolute inset-y-0 right-2 flex items-center pl-3 cursor-pointer" onClick={()=>setPwdVisible(pwdVisible ? false : true)}>
                                            { !pwdVisible ? <AiOutlineEyeInvisible  className="w-5 h-5 text-gray-600 hover:text-blue-800" /> : <AiOutlineEye className="w-5 h-5 text-gray-600 hover:text-blue-800" /> }
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="mb-12 relative text-right">
                                        {/* <div className="flex items-center">
                                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 " required/>
                                            <label htmlFor="default-checkbox" className="ml-2  font-medium text-gray-900 ">Remember Me</label>
                                        </div> */}
                                        <div>
                                            <Link href="/forget-password" className="text-blue-600">Forget Your Password?</Link>
                                        </div>
                                    </div>
                                    <button type="submit" className="gradiant-btn w-full mb-5 ">Login Now</button>
                                    <button type="button" onClick={()=> setOTPLess(true)} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 w-full focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-sm  px-5 py-2.5 text-center">Login with whatsapp</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </section>

            </Layout>
        </>
    )
}