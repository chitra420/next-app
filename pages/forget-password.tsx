import Layout from "../components/Layout"
import Head from "next/head"
import { FcPhoneAndroid, FcLock, FcNeutralTrading } from "react-icons/fc";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineCheckSquare } from "react-icons/ai";

export default function ForgetPassword() {

    return (
        <>

            <Head>
                <title>Forget Password | GyanOK</title>
                <meta name="description" content="Forget Passowrd" />

            </Head>
            <Layout>
                <section className="bg-white section-area relative">
                    <div className="container">
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="lg:w-1/2  w-full mx-auto">
                                <h1 className="text-25px md:text-35px lg:text-40px mb-1">Forget <span className="text-primary-color">Passowrd</span>
                                </h1>
                                <p className="mb-12 text-[18px] text-gray-500 ">Don't worry! Reseting your password is easy. Just type in the mobile number you registered in the <span className="text-blue-600">GyanOK</span>
                                </p>
                                <form>
                                    <div className="mb-5 relative">
                                        <input type="text" placeholder="Enter Mobile Number" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1" required />
                                        <span className="text-[26px] absolute top-[22px] translate-y-[-50%] left-1">
                                            <FcPhoneAndroid />
                                        </span>
                                    </div>
                                    <div className="mb-5 relative">
                                        <input type="password" placeholder="Password" className=" block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1" required />
                                        <span className="text-[26px] absolute top-[22px] translate-y-[-50%] left-1">
                                            <FcLock />
                                        </span>
                                    </div>
                                    <div className="mb-12 relative text-center">
                                        <button type="submit" className="gradiant-btn w-full mb-3 mt-5 flex items-center justify-center ">Continue
                                            <BsArrowRightCircleFill className="ml-2" />
                                        </button>
                                        <p className="text-gray-500">Did you remembered your password?
                                            <Link href="/Login" className="text-blue-600">Try Logging in</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-col w-full items-center justify-center">
                            <div className="lg:w-1/2  w-full mx-auto">
                                <h1 className="text-25px md:text-35px lg:text-40px mb-1">Verify <span className="text-primary-color">Number</span>
                                </h1>
                                <p className="mb-12 text-[18px] text-gray-500 ">We have sent a OTP on your number (+91-7894561230)
                                    <Link href="#" className="text-blue-600">Change</Link>
                                </p>
                                <form>
                                    <div className="mb-5 relative">
                                        <input type="text" name="otp" placeholder="Enter OTP" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm pl-10 pr-5  placeholder:text-optional-color outline-1" required />
                                        <span className="text-[26px] absolute top-[22px] translate-y-[-50%] left-1">
                                            <FcPhoneAndroid />
                                        </span>
                                    </div>
                                    <div className="mb-5 relative">
                                        <p className="text-gray-500">OTP auto resend in <span className="text-blue-600 pl-1">60 sec</span>
                                        </p>
                                        <p className="text-gray-500">Didn't receive OTP?
                                            <Link href="/Login" className="text-blue-600 pl-1">Resend it</Link>
                                        </p>
                                    </div>
                                    <div className="mb-12 relative text-center">
                                        <button type="submit" className="gradiant-btn w-full mb-3 mt-5 flex items-center justify-center "><AiOutlineCheckSquare className="mr-2" />Submit
                                           
                                        </button>
                                        <p className="text-gray-500">Did you remembered your password?
                                            <Link href="/Login" className="text-blue-600">Try Logging in</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}