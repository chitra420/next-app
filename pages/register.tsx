import Layout from "../components/Layout"
import Head from "next/head"
import { FcBusinessman, FcPhoneAndroid, FcLock } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function Register() {
    const[pwdVisible,setPwdVisible] = useState(false);
    const[cnfPwdVisible,setCnfPwdVisible] = useState(false);
 
    return (
        <>
            <Head>
                <title>Register | GyanOK</title>
                <meta name="description" content="this is for about us description page" />
            </Head>
            <Layout>

                <section className="bg-white section-area">
                    
                   
                    <div className="container">
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="lg:w-1/2  w-full mx-auto">
                                <h1 className="text-25px md:text-35px lg:text-40px mb-1">Create A New <span className="text-primary-color">Account</span></h1>
                                <p className="mb-12 text-[18px] ">Already have an account? <Link href="/login" className="text-blue-600">Login</Link></p>

                                <form>
                             
                                    <div className="mb-5 relative">

                                        <input type="text" placeholder="Full Name" className="block w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1 " />
                                        <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcBusinessman /></span>
                                    </div>
                                    <div className="mb-5 relative">

                                        <input type="text" placeholder="Mobile Number" className="block w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1 " />
                                        <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcPhoneAndroid /></span>
                                    </div>
                                    <div className="mb-5 relative">

                                    <input type={pwdVisible ? 'text' : 'password'} placeholder="Password" className=" block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-8  placeholder:text-optional-color outline-1" required/>
                                        <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcLock /></span>
                                        <div className="absolute top-[16px] right-2 flex items-center pl-3 cursor-pointer" onClick={()=>setPwdVisible(pwdVisible ? false : true)}>
                                            { !pwdVisible ? <AiOutlineEyeInvisible  className="w-5 h-5 text-gray-600 hover:text-blue-800" /> : <AiOutlineEye className="w-5 h-5 text-gray-600 hover:text-blue-800" /> }
                                            
                                        </div>
                                    </div>
                                    <div className="mb-5 relative">

                                    <input type={cnfPwdVisible ? 'text' : 'password'} placeholder="Password" className=" block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-8  placeholder:text-optional-color outline-1" required/>
                                        <span className="text-[26px] absolute top-[25px] translate-y-[-50%] left-1"><FcLock /></span>
                                        <div className="absolute top-[16px] right-2 flex items-center pl-3 cursor-pointer" onClick={()=>setCnfPwdVisible(cnfPwdVisible ? false : true)}>
                                            { !cnfPwdVisible  ? <AiOutlineEyeInvisible  className="w-5 h-5 text-gray-600 hover:text-blue-800" /> : <AiOutlineEye className="w-5 h-5 text-gray-600 hover:text-blue-800" /> }
                                            
                                            
                                        </div>
                                    </div>

                                    <div className="mb-5 relative grid grid-cols-2  gap-2">
                                        <div className="col-span-2"><h4 className="font-bold text-lg">Language</h4></div>
                                        <div className="flex items-center pl-4 rounded border border-gray-200">
                                            <input id="lang_radio-1" type="radio" value="" name="lang_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                            <label htmlFor="lang_radio-1" className="py-3 ml-2 w-full  font-medium text-gray-900 ">Hindi</label>
                                        </div>
                                        <div className="flex items-center pl-4 rounded border border-gray-200">
                                            <input  id="lang_radio-2" type="radio" value="" name="lang_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                            <label htmlFor="lang_radio-2" className="py-3 ml-2 w-full  font-medium text-gray-900 ">English</label>
                                        </div>
                                    </div>

                                    <div className="mt-12 mb-3">
                                        <button type="submit" className="gradiant-btn w-full">Create Account</button>
                                    </div>

                                    <p>By continuing you agree to our <Link href="#" className="text-blue-600">Terms and Conditions</Link> </p>


                                </form>
                            </div>

                        </div>
                    </div>

                </section>



            </Layout>
        </>
    )
}