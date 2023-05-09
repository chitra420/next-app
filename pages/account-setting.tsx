import Head from "next/head"
import Link from "next/link";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

export default function AccountSetting() {


    return (
        <>

            <Head>
                <title>My Account | GyanOK</title>
                <meta name="description" content="My Account Page" />

            </Head>

            <section className="py-5 relative">
                <div className="container">


                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                            <Link href="/my-account" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                            </Link>
                            <h4 className="inline-flex text-white">Settings</h4>

                        </div>
                        <div>
                            <button type="button" className="text-white bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 shadow-sm  font-medium rounded-sm  px-5 py-2.5 text-center text-sm mb-2 ">Save</button>


                        </div>

                    </div>
                    <div className=" p-5 mb-3 bg-white rounded-sm shadow-sm">

                        <form action="#">


                            <div className="gap-3 md:gap-5 grid md:grid-cols-1">

                                <div className="relative">
                                    <label htmlFor="create_password" className="block text-sm mb-1 font-bold text-gray-900 ">Create New Passord</label>
                                    <input type="password" id="create_password" name="create password" placeholder="New Password" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1" required />
                                </div>

                                <div className="relative">
                                    <label htmlFor="confirm_password" className="block text-sm mb-1 font-bold text-gray-900 ">Confirm  Passord</label>
                                    <input type="password" id="confirm_password" name="confirm_password" placeholder="Re-enter Password" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1" required />
                                </div>

                                <div className="relative grid grid-cols-2  gap-2">
                                    <div className="col-span-2"><span className="block text-sm mb-1 font-bold text-gray-900">App Language</span></div>
                                    <div className="flex items-center pl-4 rounded border border-gray-200">
                                        <input id="lang_radio-1" type="radio" value="" name="lang_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                        <label htmlFor="lang_radio-1" className="py-3 ml-2 w-full  font-medium text-gray-900 ">Hindi</label>
                                    </div>
                                    <div className="flex items-center pl-4 rounded border border-gray-200">
                                        <input id="lang_radio-2" type="radio" value="" name="lang_radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
                                        <label htmlFor="lang_radio-2" className="py-3 ml-2 w-full  font-medium text-gray-900 ">English</label>
                                    </div>
                                </div>
                            </div>

                            <br />
                        </form>


                    </div>
                    <Link href="#" className="text-white text-lg hover:underline hover:underline-offset-8 mt-5">Logout From Account<FaSignOutAlt className="ml-2" /></Link>





                </div>

            </section>


        </>
    )
}