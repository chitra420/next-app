import Head from "next/head"
import Layout from "../components/Layout"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";


export default function Competition() {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }


    return (
        <>

            <Head>
                <title>Quiz Competition - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Quiz Competition - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Competition - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <Layout>
                <section className="section-area competition-area">
                    <div className="container">

                        <div className="mb-3 ">
                            <h1 className="text-[20px]  lg:text-[24px]  text-white">Quiz Competition</h1>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div>
                                <Link href="/competition" className="focus:outline-none text-black border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 ">LIVE</Link>
                                <Link href="/my-quizzes" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center  ">MY QUIZZES</Link>
                            </div>
                            <div>
                                <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                            </div>
                        </div>
                        {/* skeleton start */}
                        <div className="bg-white rounded-sm mb-3">
                            <div role="status" className=" animate-pulse">
                                <div className="border-b border-gray-200 p-3 flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <svg className="text-gray-200 w-14 h-14 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="h-2.5 bg-gray-200 rounded-sm  w-32"></div>
                                            <div className="h-2.5 bg-gray-200 rounded-sm  w-32"></div>
                                        </div>
                                    </div>
                                    <div className="h-8 bg-gray-300 rounded-lg w-16"></div>

                                </div>
                                <div className="p-5 space-y-3">
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* skeleton end */}

                        {/* start GPL card */}

                        <div className="group relative mb-5 overflow-hidden bg-white dark:bg-slate-900 shadow hover:shadow-md  rounded-md transition-all duration-500 h-fit">
                            <div className="p-3 text-white bg-gradient-to-br from-pink-600 to-orange-500 relative  ">
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <Image src={"/images/cricket.png"} alt={"trophy"} width={64} height={64} className="w-12 h-12" ></Image>
                                    </div>
                                   
                                    <div className="">
                                    <h5 className=" text-white">GyanOK Prediction League</h5>
                                    <p className="text-sm text-gray-100">Predict Answer and win prizes</p>
                                    </div>
                                   
                                </div>
                            </div>

                            <div className="p-3   ">

                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="text-center my-2 ">
                                        <span className="mb-1 block lg:text-base text-sm">PRIZE POOL </span>
                                        <p className=" bg-[#e8ebff] w-full lg:p-3 p-2 text-lg rounded-xl">₹15
                                        </p>
                                    </div>
                                    <div className="text-center my-2 ">
                                        <span className="mb-1 block lg:text-base text-sm">ENDS IN</span>
                                        <span className="bg-[#e8ebff] text-rose-600 px-5 py-1 rounded-xl text-sm whitespace-nowrap">2m 30s</span>
                                    </div>
                                    <div className="text-center my-2 ">
                                        <span className="mb-1 block lg:text-base text-sm">ENTRY FEE</span>
                                        <p className="bg-[#ffeb3b] w-full lg:p-3 p-2 text-lg rounded-xl" >₹5</p>
                                    </div>
                                </div>

                            </div>

                            <div className="pb-3 px-3  ">
                                <Link href="/gk-prediction-league" className="gradiant-btn w-full">Predict Now</Link>
                                <p className="text-sm mt-1 text-center">145 User Played</p>
                            </div>

                        </div>
                        {/* end GPL card */}



                        <div className="tournament-card">
                            <div className="tour-header ">
                                <div className="flex space-x-2 items-center">
                                    <Image src="/images/comp.jpg" width={45} height={45} alt="competition" className="m-auto  rounded-full" />
                                    <h4 className="mb-0">Computer Quiz</h4>
                                </div>
                                <Link href="/competition-detail" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Play</Link>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full">₹15
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block">ENDS IN</span>
                                            <span className="timespan">2m 30s</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className=" entry-btn" >₹5</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center  leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                </div>
                                <div className="flex text-sm text-blue-800 font-bold justify-between">
                                    <span className="pe-3">13 PARTICIPANTS</span>
                                    <span>150 SLOTS</span>
                                </div>


                            </div>
                        </div>

                        <div className="tournament-card">
                            <div className="tour-header ">
                                <div className="flex space-x-2 items-center">
                                    <Image src="/images/comp.jpg" width={45} height={45} alt="competition" className="m-auto  rounded-full" />
                                    <h4 className="mb-0">Computer Quiz</h4>
                                </div>
                                <Link href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Play</Link>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full">₹15
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block">ENDS IN</span>
                                            <span className="timespan">2m 30s</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className=" entry-btn" >₹5</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center  leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                </div>
                                <div className="flex text-sm text-blue-800 font-bold justify-between">
                                    <span className="pe-3">13 PARTICIPANTS</span>
                                    <span>150 SLOTS</span>
                                </div>


                            </div>
                        </div>



                        {/*start Special card competition */}

                        <div className="bg-[url('/images/bg.png')] special-comp border border-yellow-300 relative flex flex-wrap items-center  p-3 lg:p-5 rounded-sm transition duration-500  mb-3">

                            <span className="flex items-center justify-center absolute top-0 right-0 animate-ping bg-slate-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                <em className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></em>
                            </span>
                            <div className="flex-shrink-0 relative w-2/6 lg:w-1/4  lg:inline">
                                <Image className="border border-yellow-300 rounded-sm object-cover mb-4 sm:mb-0 h-[100px] w-[100px] lg:w-[160px] lg:h-[160px]" src="/images/comp.jpg" alt="title" width={160} height={160} />

                            </div>
                            <div className=" text-center self-center w-4/6 lg:w-1/2 lg:inline">
                                <div className="mb-3">
                                    <h4 className="font-display text-[22px] lg:text-[30px] text-white drop-shadow-lg font-bold">Quiz Mahamukabla</h4>
                                </div>

                                <div className="px-3 py-1 flex items-center space-x-3 text-left justify-center">
                                    <img src="/images/rupay.png" className="h-[60px] w-[60px] lg:w-[100px] lg:h-[100px]" width={100} height={100} alt="rupee" />
                                    <div>
                                        <h2 className="text-yellow-50 text-[18px] lg:text-[22px] ">Prize Pool</h2>
                                        <h2 className="text-yellow-300 font-bold text-[40px] lg:text-[64px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mt-[-5px]">5000</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="text-center w-full lg:w-1/4 block lg:inline">

                                <Link href="/competition-detail" className="gradiant-btn mt-3 w-full">Play Now (Fee 20)</Link>
                                <div className="text-sm mt-1 text-yellow-300">ENDS IN: <span className="timespan">2m 30s</span></div>


                            </div>
                            <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                <div className="bg-yellow-400 text-xs font-medium text-blue-100 text-center  leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                            </div>
                            <div className="w-full flex text-xs text-white font-bold justify-between">
                                <span className="pe-3">13 PARTICIPANTS</span>
                                <span>150 SLOTS</span>
                            </div>


                        </div>

                        {/*end Special card competition */}


                        {/* start upcoming card */}


                        <div className="tournament-card upcoming-card relative ">
                            <div className=" bg-yellow-200 text-[12px] text-yellow-900  absolute right-[28px] top-[-16px] mt-9 w-72 text-center" style={{ "transform": "translateX(50%) rotate(45deg)" }} >
                                <span className="">Upcoming</span>

                            </div>

                            <div className="tour-header clear-both ">
                                <div className="flex space-x-2 items-center">
                                    <Image src="/images/comp.jpg" width={45} height={45} alt="competition" className="m-auto  rounded-full" />
                                    <h4 className="mb-0">WWE Quiz</h4>
                                </div>

                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full">₹15
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block">STARTS IN</span>
                                            <span className="timespan">2m 30s</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className=" entry-btn" >₹5</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="text-center ">

                                    <Link href="/competition-detail" className="gradiant-btn mt-3 w-full">Register Now</Link>

                                    <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                        <div className="bg-yellow-300 text-sm font-medium text-black text-center leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                    </div>
                                    <div className="flex text-xs text-rose-600 font-bold justify-between">
                                        <span className="pe-3">13 PARTICIPANTS</span>
                                        <span>150 SLOTS</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end upcoming card */}


                    </div>
                </section>
                {/* add cash modal */}
                {show ? (
                    <AddCashModal show={show} setShow={(bool) => setShow(bool)} />
                ) : null}
                {/* start withdraw Modal */}

                <style jsx>{
                    `.special-comp .timespan{

                    }`
                }
                </style>
            </Layout>
        </>
    )
}