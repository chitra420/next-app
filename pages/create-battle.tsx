import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { AiFillCheckCircle, AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import Lottie from 'react-lottie-player'
import { MdOutlineExitToApp } from "react-icons/md";
import { FaRegHandPointRight, FaTimesCircle } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { BsArrowRight, BsInfoCircle } from "react-icons/bs";


export default function CreateBattle() {
    const [participateshow, participatesetShow] = useState(false);
    const [lottiewait, setLottiewait] = useState(null);

    useEffect(() => {
        import('../public/lottie/radar.json').then(setLottiewait);


    }, []);



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

            <section className=" py-3 battles-area">
                <div className="container lg:mb-3 mb-[64px]">
                    <div className="flex items-center space-x-3 mb-3">
                        <Link href="/quiz-tournaments" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1.5 text-center inline-flex items-center ">
                            <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                            </svg>
                        </Link>
                        <h4 className="text-white">Create A Room</h4>
                    </div>
                    <div className="bg-[#010a3a] rounded-sm shadow-sm ">
                        <div className="p-3 lg:p-5 border-b border-gray-400">
                            <h5 className="text-white ">2 Player 1 Winner</h5>
                            <span className="text-sm text-gray-400 mr-5"><FiTarget /> Entry Fee: ₹50</span>
                        </div>
                        <div className="p-3 lg:p-5">
                            <div className="flex items-center justify-between mb-3">
                                <h5 className="text-lg text-gray-100 ">1. Choose Category</h5>
                                <p className="text-sm font-medium text-gray-400 hover:underline">
                                    235 </p>
                            </div>
                            <div className="relative">
                                <div className="form-group mb-3">
                                    <select id="category" className="bg-gray-50 border border-gray-400 text-gray-900  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option selected disabled>Select Category</option>
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

                            <div className="  mb-3 rounded-sm shadow-sm">
                                <div className="flex items-center justify-between   py-3">
                                    <h5 className="text-lg   text-gray-100 ">2. Invite Friends</h5>
                                    <span className="text-sm font-medium text-gray-400 hover:underline">
                                        235 </span>
                                </div>

                                <div className="flex gap-1 flex-wrap">
                                    <span className="inline-flex items-center px-2 py-0.5 text-xs mb-1 font-medium text-blue-800 bg-blue-100 rounded  ">
                                        Pankaj Sir
                                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-600 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 " aria-label="Remove">
                                            X
                                        </button>
                                    </span>
                                    <span className="inline-flex items-center px-2 py-0.5 text-xs mb-1 font-medium text-blue-800 bg-blue-100 rounded  ">
                                        Pankaj Sir
                                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-600 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 " aria-label="Remove">
                                            X
                                        </button>
                                    </span>
                                    <span className="inline-flex items-center px-2 py-0.5 text-xs mb-1 font-medium text-blue-800 bg-blue-100 rounded  ">
                                        Pankaj Sir
                                        <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-600 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 " aria-label="Remove">

                                            X
                                        </button>
                                    </span>

                                </div>


                                <div className="relative w-full mb-3">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full pl-8 p-2.5" placeholder="Search Friend" required />
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-3 overflow-y-auto max-h-[450px] lg:max-h-[300px]">
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            {/* <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" /> */}
                                            <AiFillCheckCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-green-400" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Sunil singh rawat</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>

                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillCheckCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-green-400" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>


                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillCheckCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-green-400" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                    <div className="text-center border rounded-sm p-2 lg:p-3 border-gray-600 bg-[#ffffff1f]">
                                        <div className="relative w-fit mx-auto mb-1">
                                            <Image src="/images/boy.png" width={50} height={50} alt="user" className="rounded-full w-[50px] h-[50px] border-2 p-0.5 border-blue-500" />
                                            <AiFillPlusCircle className="text-xl absolute bottom-0 bg-white rounded-full right-0 text-blue-600" />
                                        </div>
                                        <p className="text-[12px] lg:text-base text-white">Himanshu Verma</p>
                                        <p className="text-xs text-yellow-300">Level 1 </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>




                </div>
                <div className="lg:relative fixed bg-[#0f172a] inset-x-0 bottom-0 py-3 w-full text-center">
                    <div className="container">
                        <button type="button" onClick={() => participatesetShow(true)} className="gradiant-btn w-full">Create Room </button>
                    </div>
                </div>
            </section>

            {/* Quiz participate modal */}
            {participateshow ? (
                <>
                    <div id="participateModal" data-modal-placement="fullscreen" tabIndex={-1} className="overscroll-contain  overflow-x-hidden overflow-y-auto fixed inset-x-0 top-0 h-full z-[1111] outline-none focus:outline-none" >
                        <div className="relative w-full h-full ">
                            <div className="relative bg-[#010a3a]   w-full h-full lg:justify-center lg:items-center lg:flex">

                                <div className=" text-center py-5 px-3">
                                    <div className="mb-5">
                                        <Lottie loop animationData={lottiewait} play className="m-auto w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]" />
                                    </div>
                                    <h4 className="mb-0  font-normal text-white text-xl ">Waiting For friend</h4>
                                    {/* <p className="mb-5 text-gray-400">Stay on this window, once the timer hits 0 so you can go with 'Go First' option </p> */}
                                    {/* <h6 className="text-yellow-300 mb-3">Group created</h6> */}
                                    <div className="px-3 py-2 mb-3 text-yellow-300">
                                        <span className="text-[36px]">00 : 60</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                     
                                       
                                         
                                        <Link href="/start-tournament-battle" className="text-white  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300   font-medium rounded-sm  px-5 py-3 text-center mb-2 ">Go First</Link>

                                        <button type="button" onClick={() => participatesetShow(false)} className="text-white w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300  font-medium rounded-sm  px-5 py-3 text-center mb-2">Exit</button>


                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                     
                                       
                                         
                                     <Link href="/start-tournament-battle" className="text-black bg-gray-300 opacity-50 pointer-events-none	 font-medium rounded-sm  px-5 py-3 text-center mb-2 ">Go First</Link>

                                     <button type="button" className="text-black bg-gray-300 opacity-50 pointer-events-none	 font-medium rounded-sm  px-5 py-3 text-center mb-2">Exit</button>


                                 </div>

                                    <div className="mt-5 mb-3 text-left bg-white/20 border border-gray-600 p-3 rounded-sm">
                                        <p className="text-sm text-yellow-300 mb-3"> Did You Know?</p>
                                        <p className="text-gray-300 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aut repudiandae voluptas nostrum sequi</p>
                                    </div>




                                    {/* <p className="text-yellow-300">Amount will be refunded in your wallet within 24 hr</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                </>
            ) : null}
            {/* Quiz participate modal */}




        </>
    )
}