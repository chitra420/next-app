import Head from "next/head"
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Tabs } from "flowbite-react";
import { FaUserFriends } from "react-icons/fa";
export default function AccountSetting() {
    return (
        <>

            <Head>
                <title>My Referrals | GyanOK</title>
                <meta name="description" content="My Account Page" />
            </Head>
            <section className="py-5 relative">
                <div className="container">

                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                            <Link href="/my-account" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-white">Refer & Earn</h4>
                        </div>
                    </div>


                    <div className="refer-tabs-area">
                        <Tabs.Group
                            aria-label="Default tabs"
                            style="default" id="refer_tab">
                            <Tabs.Item
                                active={true}
                                title="How its works">
                                <div className="support-area relative bg-white rounded-sm mb-5 z-2 p-5 mt-3">

                                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center">
                                        <div className="support-content xl:col-span-2">
                                            <span className="block text-primary font-semibold text-lg">Refer & Earn</span>
                                            <h2 className="text-[24px] lg:text-[30px] mb-3">Get Upto <big className="text-yellow-300">₹10*</big> For every new user you refer </h2>
                                            <p className=" mb-5 ">
                                                Share Your referral Link with friends and get chance to win ₹10</p>
                                            <button className="gradiant-btn   ">Share Now</button>
                                        </div>
                                        <div className="support-btn self-center text-right">
                                            <Image src="/images/refer.png" width={300} height={200} alt="refer" className="ml-auto rounded-sm object-contain"></Image>
                                        </div>
                                    </div>


                                </div>
                                <div className="grid gap-3 grid-cols-1 ">
                                    <div className="bg-green-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                        <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                        <div className="space-y-1">
                                            <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                            <p className="text-sm leading-1 text-gray-100 ">Get ₹3 bonus money when your friend register.</p>
                                        </div>
                                    </div>
                                    <div className="bg-secondary-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                        <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                        <div className="space-y-1">
                                            <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                            <p className="text-sm leading-1 text-gray-100 ">Get ₹3 bonus money when your friend deposit money in GyanOK wallet.</p>
                                        </div>
                                    </div>

                                    <div className="bg-primary-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                        <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                        <div className="space-y-1">
                                            <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                            <p className="text-sm leading-1 text-gray-100 ">Get ₹4 bonus money when Your friend play 10 Tournaments, 1 Trivia and give 10 Polls answers.</p>
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Item>

                            <Tabs.Item title="My referrals">

                                <div className="w-full p-5 bg-secondary-gradient-color  rounded-sm shadow-md mt-3 mb-3">

                                    <div className="text-center">

                                        <h2 className="mb-1 text-[45px] font-medium text-yellow-300">₹50</h2>
                                        <span className="text-white ">Money Earned Through Referral</span>

                                    </div>
                                </div>
                                <p className="text-white"><FaUserFriends className="text-lg" /> No. of Referrals: <big className="text-yellow-300 text-nowrap">20</big></p>
                                <div className="overflow-x-auto relative mt-3 rounded-sm ">
                                    <table className="table-auto w-full  text-left text-gray-500 ">
                                        <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-200   ">
                                            <tr>
                                                <th scope="col" className=" p-2 md:p-3 lg:p-3"> # </th>
                                                <th scope="col" className=" p-2 md:p-3 lg:p-3"> Name </th>
                                                <th scope="col" className=" p-2 md:p-3 lg:p-3"> Mobile  </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Himanshu Verma </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>
                                            <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> Sunil Singh Rawat </td>
                                                <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">xxxxxxx9870 </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </Tabs.Item>


                        </Tabs.Group>
                    </div>





                </div>
            </section>
        </>
    )
}