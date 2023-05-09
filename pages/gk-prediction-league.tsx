import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaShareSquare } from "react-icons/fa";
import { MdExitToApp, MdOutlineArrowBackIosNew, MdOutlineStickyNote2 } from "react-icons/md";
import { TiArrowForwardOutline } from "react-icons/ti";


export default function GKPredictionLeague() {
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
                            <button className="px-3 py-1 text-sm font-medium text-center text-black bg-gray-100 rounded-sm hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300  "><FaShareSquare className="mr-1" />Share</button>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="mb-5 text-center">
                        <div className="relative mb-5">
                            <Image src="/images/cricket2.png" width={180} height={180} className="mx-auto " alt="" />
                        </div>
                        {/* <h3 className=" text-yellow-300 mb-3">GPL</h3> */}



                        <h4 className="mb-3  font-bold text-white uppercase drop-shadow" >GyanOK Prediction League</h4>
                        <p className="mb-3 text-lg font-medium text-gray-300">
                            Prediction Ends At <span className="text-yellow-300">7:30 PM</span>
                        </p>

                        <div className="bg-white/20 text-center lg:w-[400px] w-[300px] h-[120px] flex items-center m-auto justify-center" style={{ clipPath: "polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%)" }}>
                            <div className="p-3">
                              
                                <h4 className="text-[32px] mt-1 tracking-wider whitespace-nowrap text-white" style={{ textShadow: "0px 1px 0px #c0c0c0, 0px 2px 0px #b0b0b0, 0px 3px 0px #a0a0a0, 0px 4px 0px #909090, 0px 5px 10px rgba(0, 0, 0, 0.6)" }}>CSK VS KKR</h4>
                                <p className="mt-2 text-slate-100 md:text-base text-sm">Lucknow Super Giants & Royal Challengers Bangalore</p>
                              
                            </div>
                        </div>

                        <div className="bg-black p-3 border border-yellow-100 outline outline-1 outline-gray-100 outline-offset-2">
                            <div>
                                <h4 className="text-white">Prize Pool Upto </h4>
                                <big className="text-yellow-300 text-4xl"> <Image className="inline-block " src="/images/rupay.png" alt="title" width={42} height={42} />    ₹1000</big>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-rose-100 to-teal-100 rounded-sm p-3 mb-5 mt-12">
                        <div className="flex mb-2 -space-x-4 -mt-10">
                            <Image className="w-[300px] h-auto mx-auto" src="/images/set-user.png" width={300} height={40} alt="" />

                        </div>
                        <div className="text-center mb-3">
                            <h4 className="italic">13450 people have already played</h4>
                        </div>

                    </div>


                    <div className="w-full bg-[#ffffff1f] border border-gray-600 rounded-sm shadow">

                        <div className="flex items-center space-x-3 p-3 border-b border-gray-600 ">
                            <div className="flex-shrink-0">
                                <Image className="w-12 h-12 rounded-full border-2 border-gray-100" src="/images/user-profile.jpg" width={48} height={48} alt="user image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h5 className="text-lg font-medium text-gray-50 ">
                                    Himanshu Verma
                                </h5>
                            </div>
                        </div>



                        <div className="grid  grid-cols-3 gap-2   text-gray-900 p-2">
                            <Link href="/gpl-matches" className="flex flex-col items-center justify-center p-2 bg-white/10 text-center">
                                <span className=" text-xl text-white ">78 <TiArrowForwardOutline /></span>
                                <p className="text-gray-400 lg:text-sm text-xs whitespace-nowrap">Games Played</p>
                            </Link>
                            <div className="flex flex-col items-center justify-center p-2 bg-white/10 text-center">
                                <span className=" text-xl text-white ">452 </span>
                                <p className="text-gray-400 lg:text-sm text-xs whitespace-nowrap">Games Won</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2 bg-white/10 text-center">
                                <span className=" text-xl text-white ">456 </span>
                                <p className="text-gray-400 lg:text-sm text-xs whitespace-nowrap">Amount Won</p>
                            </div>

                        </div>


                    </div>



                    <div className="terms-area mb-20">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
                            <span className="absolute text-gray-300 px-3 font-medium  -translate-x-1/2 bg-[#0f172a]  text-lg left-1/2 "><MdOutlineStickyNote2 /> GPL Rules</span>
                        </div>


                        <div className="relative group bg-[#fff] p-3 rounded-sm">

                            <ul className="space-y-1 lg:text-base text-sm  text-gray-800 ">
                                <li className="flex items-center space-x-3">
                                    <Image src="/images/rule3.png" width={32} height={32} alt="" className="flex-shrink-0" />
                                    <span>Predict answers of  all questions in 30 seconds. </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Image src="/images/rule2.png" width={32} height={32} alt="" className="flex-shrink-0" />
                                    <span> Prize Pool is divided equally between players who get all predictions right. </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Image src="/images/rule1.png" width={32} height={32} alt="" className="flex-shrink-0" />

                                    <span>Result will be released after an event is over. </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Image src="/images/rule4.png" width={32} height={32} alt="" className="flex-shrink-0" />

                                    <span> Do not refresh the page or exit while playing the quiz.</span>
                                </li>


                            </ul>
                        </div>
                    </div>




                    <div className="fixed bg-[#fff] inset-x-0 bottom-0 w-full text-center  rounded-tl-sm rounded-tr-sm">

                        <div className="container  p-3">
                            <Link href="start-competition" className="gradiant-btn w-full ">Predict Now </Link>


                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}