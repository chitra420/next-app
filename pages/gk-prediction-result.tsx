import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShareSquare } from "react-icons/fa";
import { MdExitToApp, MdOutlineArrowBackIosNew, MdOutlineStickyNote2 } from "react-icons/md";
import Lottie from "react-lottie-player";
import Layout from "../components/Layout";

export default function GKPredictionLeague() {

    const [lottiehappy, setlottiehappy] = useState(null);

    useEffect(() => {
        import('../public/lottie/happy.json').then(setlottiehappy);


    }, []);
    return (
        <>
            <Head>
                <title>GPL - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, GPL, GPL Result, GK GPL, Online Quiz GPL" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content=" GPL - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="GPL - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
        
                <section className="pb-5">
                    <div className="bg-gray-800 mb-3 py-3 sticky top-0 z-10">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <Link href="/competition" className=" text-white"><MdOutlineArrowBackIosNew /> Back</Link>
                            <button  className="px-3 py-1 text-sm font-medium text-center text-black bg-gray-100 rounded-sm hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300  "><FaShareSquare className="mr-1" />Share</button>
                        </div>
                    </div>
                </div>
                    <div className="container">



                        <div className="result-box rounded-sm text-center mb-3 overflow-hidden">


                            <Lottie loop animationData={lottiehappy} play style={{ width: 120, height: 'auto', margin: 'auto' }} />
                            <h3 className=" text-yellow-300 mt-3 mb-1">Thank You for Playing !</h3>
                            <p className="text-gray-300">Result will declare at 12:45 PM</p>

                        </div>


                        <div className="bg-white/20 text-center lg:w-[400px] w-[300px] h-[120px] flex items-center m-auto justify-center" style={{ clipPath: "polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%)" }}>
                            <div className="p-3">
                              
                                <h4 className="text-[32px] mt-1 tracking-wider whitespace-nowrap text-white" style={{ textShadow: "0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6)" }}>CSK VS KKR</h4>
                                <p className="mt-2 text-slate-100 md:text-base text-sm">Lucknow Super Giants & Royal Challengers Bangalore</p>
                              
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-sm border-t-2 p-3  text-center ">
                            {/* <p className="text-gray-300">🥇 24800 out of 256300 Players won the GyanOk Prediction League 🥇 </p> */}
                            <p className="text-gray-300">🥇 9985 People have already played the GyanOk Prediction League🥇 </p>
                        </div>

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 bg-gray-400 border-0 " />
                            <span className="absolute text-gray-300 px-3 font-medium  -translate-x-1/2 bg-[#0f172a]  text-lg left-1/2 "><MdOutlineStickyNote2 /> PREDICTIONS</span>
                        </div>

                        <div className="prediction-card space-y-3 mb-8">
                            <div className="bg-white rounded-sm p-3">
                                <div className="flex space-x-2 text-black mb-3">
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full flex-shrink-0">
                                        <span className="font-medium text-blue-800 ">1</span>
                                    </div>
                                    <h5 className="text-primary text-[18px]">Who Will Win Toss in Today’s IPL Match?</h5>
                                </div>

                                <div className="grid grid-cols-2 gap-1 lg:gap-3">
                                    <div className="p-3 bg-gray-100 text-gray-800 ">
                                        <span className="text-sm mb-1">Your Prediction</span>
                                        <p className="text-lg font-semibold">12-30</p>
                                    </div>
                                    <div className="p-3 bg-gray-100 text-gray-800 ">
                                        <span className="text-sm mb-1">Correct Answer</span>
                                        <p className="text-lg font-semibold">--</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-sm p-3">
                                <div className="flex space-x-2 text-black mb-3">
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full flex-shrink-0">
                                        <span className="font-medium text-blue-800 ">2</span>
                                    </div>
                                    <h5 className="text-primary text-[18px]">Who Will Win Toss in Today’s IPL Match?</h5>
                                </div>


                                <div className="grid grid-cols-2 gap-1 lg:gap-3">
                                    <div className="p-3 bg-red-100 text-red-800 ">
                                        <span className="text-sm mb-1">Your Prediction</span>
                                        <p className="text-lg font-semibold">12-30</p>
                                    </div>
                                    <div className="p-3 bg-red-100 text-red-800 ">
                                        <span className="text-sm mb-1">Correct Answer</span>
                                        <p className="text-lg font-semibold">30-40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-sm p-3">
                                <div className="flex space-x-2 text-black mb-3">
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full flex-shrink-0">
                                        <span className="font-medium text-blue-800 ">3</span>
                                    </div>
                                    <h5 className="text-primary text-[18px]">Who Will Win Toss in Today’s IPL Match?</h5>
                                </div>


                                <div className="grid grid-cols-2 gap-1 lg:gap-3">
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Your Prediction</span>
                                        <p className="text-lg font-semibold">12-30</p>
                                    </div>
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Correct Answer</span>
                                        <p className="text-lg font-semibold">30-40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-sm p-3">
                                <div className="flex space-x-2 text-black mb-3">
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full flex-shrink-0">
                                        <span className="font-medium text-blue-800 ">4</span>
                                    </div>
                                    <h5 className="text-primary text-[18px]">Who Will Win Toss in Today’s IPL Match?</h5>
                                </div>

                                <div className="grid grid-cols-2 gap-1 lg:gap-3">
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Your Prediction</span>
                                        <p className="text-lg font-semibold">12-30</p>
                                    </div>
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Correct Answer</span>
                                        <p className="text-lg font-semibold">30-40</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-sm p-3">
                                <div className="flex space-x-2 text-black mb-3">
                                    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-full flex-shrink-0">
                                        <span className="font-medium text-blue-800 ">5</span>
                                    </div>
                                    <h5 className="text-primary text-[18px]">Who Will Win Toss in Today’s IPL Match?</h5>
                                </div>

                                <div className="grid grid-cols-2 gap-1 lg:gap-3">
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Your Prediction</span>
                                        <p className="text-lg font-semibold">12-30</p>
                                    </div>
                                    <div className="p-3 bg-green-100 text-green-800 ">
                                        <span className="text-sm mb-1">Correct Answer</span>
                                        <p className="text-lg font-semibold">30-40</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*start Special card competition */}

                        <div className="bg-[url('/images/bg.png')] special-comp border border-yellow-300 relative flex flex-wrap items-center  p-3 lg:p-5 rounded-sm transition duration-500  mb-3">

                            <span className="flex items-center justify-center absolute top-0 right-0 animate-ping bg-slate-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                <em className="relative inline-flex rounded-full h-3 w-3 bg-slate-500"></em>
                            </span>
                            <div className="flex-shrink-0 relative w-2/6 lg:w-1/4  lg:inline">
                                <Image className="  rounded-sm object-cover mb-4 sm:mb-0 h-[100px] w-[100px] lg:w-[160px] lg:h-[160px]" src="/images/rupay.png" alt="title" width={160} height={160} />

                            </div>
                            <div className=" text-center self-center w-4/6 lg:w-1/2 lg:inline">
                                <div className="mb-3">
                                    <h4 className="font-display text-[22px] lg:text-[32px] text-white drop-shadow-lg font-bold">Competition Quiz</h4>
                                </div>

                                <div className="px-3 py-1 flex items-center  text-left justify-center">

                                    <div>
                                        <h2 className="text-yellow-50 text-[18px] lg:text-[22px] ">Prize Upto</h2>
                                        <h2 className="text-yellow-300 font-bold text-[40px] lg:text-[64px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mt-[-5px]">₹5000</h2>
                                    </div>
                                </div>

                            </div>

                            <div className="text-center w-full lg:w-1/4 block lg:inline">

                                <Link href="/competition" className="gradiant-btn mt-3 w-full">Play Now</Link>

                            </div>

                        </div>

                        {/*end Special card competition */}



                    </div>
                </section>

           

        </>
    )
}