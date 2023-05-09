import Head from "next/head"
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";

import { FiTarget } from "react-icons/fi";


export default function SoloTournament() {




    return (
        <>

            <Head>
                <title>Solo Tournament - Play Quiz with Friend and Win Real Money | GyanOK.com</title>
                <meta name="description"
                    content="Earn Cash by playing Solo Tournament with friends and win real cash prize. Participate in free or paid Solo Tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Solo Tournament - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="twitter:description"
                    content="Earn Cash by playing Solo Tournament with friends and win real cash prize. Participate in free or paid Solo Tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Solo Tournament - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="og:description"
                    content="Earn Cash by playing Solo Tournament with friends and win real cash prize. Participate in free or paid Solo Tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className=" py-3 battles-area">
                <div className="container">
                    <div className="mb-2 flex justify-between ">
                        <div className="space-x-3">
                            <Link href="/competition" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-lg text-white">Back</h4>
                        </div>

                        <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" >₹100<FaPlusCircle className="ml-2" /></button>
                    </div>
                    <div className="bg-[#010a3a] rounded-sm shadow-sm mb-3">
                        <div className="p-3 lg:p-5 border-b border-gray-500  mb-3">
                            <h4 className="text-white mb-3">Solo Tournament</h4>


                            <div className="relative flex items-baseline space-x-2 pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-gradient-color before:rounded-lg">
                                <h3 className=" text-yellow-300"><span className="">₹1000</span></h3>
                                <p className="text-gray-300 font-medium"> Prize</p>
                            </div>

                        </div>
                        <div className="p-3 lg:p-5 border-b border-gray-500 mb-3">

                            <div className="flex items-center justify-between mb-3">
                                <h5 className="text-lg text-gray-100 ">Choose Category</h5>
                                <p className="text-sm font-medium text-gray-400 hover:underline">
                                    235 </p>
                            </div>
                            <div className="relative">
                                <div className="form-group mb-3">
                                    <select id="category" className="bg-gray-50 border border-gray-400 text-gray-900  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option selected disabled>Select</option>
                                        <option value="01">Category 01</option>
                                        <option value="02">Category 02</option>
                                        <option value="03">Category 03</option>
                                        <option value="04">Category 04</option>
                                        <option value="05">Category 05</option>
                                        <option value="06">Category 06</option>
                                        <option value="07">Category 07</option>
                                        <option value="08">Category 08</option>
                                        <option value="09">Category 09</option>
                                        <option value="10">Category 10</option>
                                        <option value="11">Category 11</option>
                                        <option value="12">Category 12</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="p-3 lg:p-5 ">

                            <div className="  mb-3 rounded-sm shadow-sm">


                                <h5 className="text-lg  text-gray-100 ">Rules</h5>

                                <p className="text-gray-300">🎯 Total questions asked = 10</p>
                                <p className="text-gray-300 mb-3">✅ Correct answer to win = 8</p>

                                <p className="text-yellow-300 text-sm">You must answer at least <big>8</big> questions correctly to be a winner</p>





                            </div>
                        </div>

                    </div>
                    <Link href="/play-solo-tournament" className="gradiant-btn w-full mb-5">Start &nbsp;&nbsp;&nbsp;₹10 </Link>



                    {/* start sekeleton */}
                    <div className="bg-[#ffffff1f] rounded-sm p-3 mb-3">
                        <div role="status" className="animate-pulse ">
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-44"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-24"></div>

                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-1/2"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-2/3"></div>

                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                        </div>
                    </div>
                    {/*end sekeleton */}


                </div>

            </section>


        </>
    )
}