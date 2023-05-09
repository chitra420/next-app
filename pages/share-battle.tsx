import Head from "next/head"
import { FiTrash2 } from "react-icons/fi";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/router";
import { IoCopyOutline } from "react-icons/io5";
import { AiOutlineCopy, AiOutlineShareAlt } from "react-icons/ai";

export default function StartTournamentBattle() {
    const router = useRouter()



    return (
        <>
            <Head>
                <title>Share Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com</title>
                <meta name="description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="twitter:description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="og:description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className=" py-3 battles-area">
                <div className="container">

                    <div className="mb-2 flex justify-between ">
                        <button className="text-white" onClick={() => router.back()}><MdArrowBackIosNew className="mr-1" />Back</button>
                        <button type="button" className="text-white text-lg"><FiTrash2 />
                        </button>
                    </div>

                    <div className="bg-[#010a3a] shadow-lg p-3 rounded-sm mb-[100px] lg:mb-[80px]">
                        <div className="mb-5 flex items-center space-x-3">
                            <div className="shrink-0">
                                <Image src="/images/checked.png" width={50} height={50} alt="competition" className="m-auto  rounded-full" />
                            </div>

                           
                                <h5 className="text-white ">Your Challenges invitation sent to friends </h5>
                         



                        </div>

                        <div className="room-code p-3 rounded-sm bg-white mb-5">
                            <div className="relative mb-3 pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-gradient-color before:rounded-lg">
                                <h3 className="text-[26px] text-blue-800"><span className="">57489654</span></h3>
                                <p className=" text-gray-500 font-bold">Room Code</p>
                            </div>

                            <div className="flex space-x-2">

                                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300   shadow-blue-500/50  rounded-sm text-sm px-3 py-2 text-center mb-2 "><AiOutlineCopy /> Copy Code</button>
                                <button type="button" className="text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300   shadow-teal-500/50  rounded-sm text-sm px-3 py-2 text-center mb-2 "><AiOutlineShareAlt /> Share Now</button>

                            </div>
                            <p className="text-gray-500">Share this battle code with  friends and ask them to join</p>
                        </div>

                    
                        <div className="group relative mt-5 ">
                            <div className="flex items-center space-x-2  mb-3 ">
                                <div >
                                    <Image src="/images/checkmark.png" width={36} height={36} alt="checkmark"></Image>
                                </div>

                                <h5 className="text-white text-lg">Room Details</h5>
                            </div>
                            <ul className="text-gray-300 text-sm ">
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Pool Prize :</span>
                                    ₹25
                                </li>

                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Entry Fee :</span>
                                    ₹5
                                </li>
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Questions :</span>
                                    5
                                </li>
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Time :</span>
                                    10s
                                </li>


                            </ul>
                        </div>
                        <hr className="my-3 h-px bg-gray-600 border-0" />



                        <div className="relative group">
                            <div className="flex items-center space-x-2  mb-3 ">
                                <div >
                                    <Image src="/images/content.png" width={36} height={36} alt="terms" />
                                </div>
                                <h5 className="text-white text-lg">Terms & Condition</h5>
                            </div>
                            <ul className="space-y-1 text-sm  text-gray-300">
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Rank will be decided on the highest score.
                                </li>
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    In case of tie rank will be decided on minimum time taken to complete the quiz.
                                </li>
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    In case total participants does not reach minimum required slot at the end of quiz, entry fee will be refunded in GyanOK Wallet.
                                </li>
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Do not refresh the page or exit while playing the quiz.
                                </li>
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Do not switch or minimize window.
                                </li>
                                <li className="flex space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    You can easily withdraw cash prize from your GyanOK wallet.
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="lg:relative fixed bg-[#0f172a] inset-x-0 bottom-0 py-3 w-full text-center">

                        <Link href="start-tournament-battle" className="gradiant-btn w-full">Start Battle Now</Link>

                    </div>

                </div>
            </section>

        </>
    )
}