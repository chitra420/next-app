import Layout from "../components/Layout"
import Head from "next/head"
import React from "react";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";




export default function MyAccount() {
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
    return (
        <>

            <Head>
                <title>My Account | GyanOK</title>
                <meta name="description" content="My Account Page" />

            </Head>
            <Layout>
                <section className="section-area relative">
                    <div className="container">

                        <div className="gap-5">
                            <div className="w-full ">
                                <div className=" p-5 mb-3 bg-white rounded-sm shadow-sm space-x-3   flex items-center ">
                                    <Image width={80} height={80} loader={myLoader} className="w-20 h-20  rounded-full object-cover shadow-sm" src="/images/user-profile.jpg" alt="user image" />
                                    <div className=" text-left">
                                        <div className="">
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 ">Emma watson</h5>

                                            <span className="text-gray-500">9874563210</span>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full ">
                                <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-3 lg:p-5 ">
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 ">
                                            <li className="hover:bg-cyan-50">
                                            <Link  href="/account-profile"  className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/user.png" width={48} height={48} quality={100} alt="profile" ></Image>
                                                      
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            My Profile
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Edit Your account information
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li>

                                            
                                            <li className="hover:bg-cyan-50">
                                            <Link  href="/account-upi" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/shield.png" width={48} height={48} quality={100} alt="profile" ></Image>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            Change UPI
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Change Current UPI
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="hover:bg-cyan-50">
                                            <Link  href="my-referrals" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/share.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            Refer And Earn
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                           Get Your Referral Code
                                                        </p>
                                                    </div>
                                                    <div  className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link> 
                                            </li>


                                            <li className="hover:bg-cyan-50">
                                            <Link href="/account-kyc" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/checkmark.png" width={48} height={48} quality={100} alt="profile" ></Image>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            KYC
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Fill your KYC Details
                                                        </p>
                                                    </div>
                                                    <div  className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li>
                                            
                                            <li className="hover:bg-cyan-50">
                                            <Link href="/account-setting" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/setting.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            Setting
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            Change Your GyanOK Settings
                                                        </p>
                                                    </div>
                                                    <div  className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li>


                                            <li className="hover:bg-cyan-50">
                                            <Link href="/account-faq" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/question.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            FAQ
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                           Frequently Asked Questions
                                                        </p>
                                                    </div>
                                                    <div  className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li>


                                            <li className="hover:bg-cyan-50">
                                            <Link href="contact-us" className=" py-3 sm:py-4 flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/support.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            Help Center
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                           Get In Touch With Us
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </Link>
                                            </li> 

                                            
                                            <li className="hover:bg-cyan-50">
                                            <button type="button" className="py-3 sm:py-4 w-full flex items-center space-x-2">
                                                    <div className="flex-shrink-0">
                                                    <Image src="/images/delete.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                                    </div>
                                                    <div className="flex-1 text-left w-full">
                                                        <p className=" font-bold text-gray-900 truncate ">
                                                            Delete Account
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                          It will be no longer available to you
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex flex-flex-shrink-0 items-center text-base font-semibold text-gray-900 ">
                                                        <MdOutlineArrowForwardIos />
                                                    </div>
                                                </button>
                                            </li>                                


                                        </ul>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </section>

            </Layout>
        </>
    )
}