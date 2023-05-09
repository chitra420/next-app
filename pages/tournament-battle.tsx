import Head from "next/head"
import Layout from "../components/Layout"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import { useState } from "react";
import { FaPlusCircle, FaRupeeSign, FaTrophy, FaUserFriends } from "react-icons/fa";

export default function TournamentBattle() {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }

    const [battleinfo, battleinfosetShow] = useState(false);


    return (
        <>

            <Head>
                <title>Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com</title>
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
            <Layout>
                <section className="section-area battles-area">
                    <div className="container">

                        <div className="mb-3 ">
                            <h1 className="text-[20px] lg:text-[24px] text-white">Quiz Tournaments</h1>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div>
                                <Link href="/quiz-tournaments" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5  mr-2 text-center ">LIVE</Link>
                                <Link href="/tournament-battle" className="focus:outline-none text-black border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 text-center ">BATTLE</Link>

                            </div>
                            <div>
                                <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                            <div className="battle-card rounded-sm p-3 lg:p-5 bg-white shadow-lg ">
                                <div className="flex items-center">
                                    <Image src="/images/battle-friend.png" alt="play battle" width={100} height={100} sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw" className="img-fluid mb-5" />
                                    <h4 className="text-primary text-[22px] md:text-[26px]  lg:text-[32px] mb-5 ml-5">Play Quiz Tournament With Friends</h4>
                                </div>
                                <Link href="create-battle" className="gradiant-btn w-full mb-3 " >Create </Link>
                            </div>

                            <div className="battle-card rounded-sm p-3 lg:p-5 bg-white shadow-lg ">

                                <div className="flex items-center">
                                    <Image src="/images/battle-promo.png" alt="code" width={100} height={100} sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw" className="img-fluid mb-5" />
                                    <h4 className="text-primary text-[22px] md:text-[26px]  lg:text-[32px] mb-5 ml-5">Enter Code Shared By Your Friend</h4>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Enter Code" className=" block w-full bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm  pr-5  placeholder:text-optional-color outline-1" required />
                                    <button className="absolute right-1 top-1 text-white bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-sm  px-3 py-2 text-center" onClick={() => battleinfosetShow(true)}>Join<MdOutlineArrowForwardIos className="ml-1 text-lg" /></button>
                                </div>

                            </div>

                        </div>


                    </div>
                </section>
                {/* add cash modal */}
                {show ? (
                    <AddCashModal show={show} setShow={(bool: any) => setShow(bool)} />
                ) : null}
                {/* start withdraw Modal */}


                {battleinfo ? (
                    <>
                        <div id="battleinfo" tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                            <div className="relative p-4 w-full max-w-2xl h-auto">
                                <div className="relative bg-white rounded-lg shadow ">
                                    <div className="flex justify-between items-start p-4 rounded-t border-b ">
                                        <h4 className="text-gray-900">Friend Challenged You </h4>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => battleinfosetShow(false)}>
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-3 lg:p-5">
                                        <ul className="grid gap-1 md:gap-3 lg:gap-3 grid-cols-3 ">
                                            <li className="text-[#126a2a]  rounded-md shadow-sm relative text-center p-2 lg:p-3  bg-[#c8ffd4]">
                                                <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-3">
                                                    <FaUserFriends className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                                </div>
                                                <span> Players</span>
                                                <h3 >5</h3>

                                            </li>
                                            <li className="text-[#e91e63]  rounded-md shadow-sm relative text-center p-2 lg:p-3   bg-[#ffe6e6]">
                                                <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-3">
                                                    <FaRupeeSign className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                                </div>
                                                <span>Entry Fee</span>
                                                <h3 >5</h3>
                                            </li>
                                            <li className="text-[#ff5722]  rounded-md shadow-sm relative text-center p-2 lg:p-3   bg-[#fff6bb]">
                                                <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-3">

                                                    <FaTrophy className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                                </div>
                                                <span>Pool Prize</span>
                                                <h3 >5</h3>

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-5 text-right space-x-2 rounded-b border-t border-gray-200 ">


                                        <button onClick={() => battleinfosetShow(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Decline</button>
                                        <Link href="#" className="gradiant-btn" >Accept </Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                    </>
                ) : null}

            </Layout>
        </>
    )
}