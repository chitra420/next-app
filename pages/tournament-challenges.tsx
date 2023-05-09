import Head from "next/head"
import Image from "next/image";
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaPlusCircle, FaRupeeSign, FaTrophy, FaUserFriends } from "react-icons/fa";
import { useState } from "react";
import { BsArrowDownLeft } from "react-icons/bs";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";

export default function TournamentChallenges() {
    const [openTab, setOpenTab] = useState(1);

    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }

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
                <div className="container">
                    <div className="flex justify-between mb-5">
                        <div className="flex items-center space-x-2 ">
                            <Link href="/quiz-tournaments" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1.5 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="text-white">Challenges</h4>

                        </div>
                        <div className="">
                            <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                        </div>
                    </div>

                    


                    <div className="flex   justify-between space-x-3 mb-5">

                     

                        <Link className={"py-2 block font-bold " + (openTab === 1 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#ongoing_tab" role="tablist" > Ongoing </Link>

                        <Link className={"py-2 block font-bold " + (openTab === 2 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#completed_tab" role="tablist" > Completed </Link>

                        <Link className={"py-2 block font-bold " + (openTab === 3 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#expired_tab" role="tablist" > Expired </Link>

                    </div>


                    <div className={openTab === 1 ? "block" : "hidden"} id="ongoing_tab">
                        
                        <div className="relative rounded-sm bg-[#ffffff1f]  border-gray-500 mb-3 ">
                            <div className="p-3 border-b border-gray-500 flex space-x-3">
                                <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                    <FiArrowUpRight className="text-3xl" />
                                </div>
                                <div className="overflow-hidden flex-grow">
                                    <p className="text-white truncate " >Himanshu Verma, Pankaj Sir, Sunil Rawat</p>
                                    <p className="text-gray-300 text-sm" >3 Player 1 Winner</p>
                                    <p className="text-yellow-300 text-sm " >Expires in 23 hr 4 min</p>
                                </div>


                            </div>
                            <div className="p-3 text-white">
                                <div className="grid grid-cols-3 gap-2 divide-x">
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Prize Pool</small>
                                        <p>₹40</p>
                                    </div>
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Questions</small>
                                        <p>10</p>
                                    </div>
                                    <div className="py-2 px-1 text-center">
                                        <small className="block">Enty Fee</small>
                                        <p>₹40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 p-3 border-t border-gray-500  ">
                                <Link href="/start-tournament-battle" className="gradiant-btn w-full text-sm ">Awaiting</Link>
                               
                            </div>
                        </div>

                        <div className="relative rounded-sm bg-[#ffffff1f]  border-gray-500 mb-3 ">
                            <div className="p-3 border-b border-gray-500 flex space-x-3">
                                <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                    <FiArrowDownLeft className="text-3xl" />
                                </div>
                                <div>
                                    <p className="text-white truncate " >Himanshu Verma</p>
                                    <p className="text-gray-300 text-sm" >2 Player 1 Winner</p>
                                    <p className="text-yellow-300 text-sm " >Expires in 23 hr 4 min</p>
                                </div>




                            </div>
                            <div className="p-3 text-white">
                                <div className="grid grid-cols-3 gap-2 divide-x">
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Prize Pool</small>
                                        <p>₹40</p>
                                    </div>
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Questions</small>
                                        <p>10</p>
                                    </div>
                                    <div className="py-2 px-1 text-center">
                                        <small className="block">Enty Fee</small>
                                        <p>₹40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border-t border-gray-500 flex space-x-2  ">
                                <Link href="/start-tournament-battle" className="text-black  w-1/2 bg-gray-200  focus:ring-2 focus:outline-none focus:ring-gray-300    font-medium rounded-sm  px-5 py-2.5 text-center text-sm ">Cancel</Link>
                                <Link href="/start-tournament-battle" className="gradiant-btn w-1/2 text-sm ">Accept</Link>


                            </div>
                        </div>


                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"} id="completed_tab">
                    <div className="relative rounded-sm bg-[#ffffff1f]  border-gray-500 mb-3 ">
                            <div className="p-3 border-b border-gray-500 flex space-x-3">
                                <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                    <FiArrowUpRight className="text-3xl" />
                                </div>
                                <div className="overflow-hidden flex-grow">
                                    <p className="text-white truncate " >Himanshu Verma, Pankaj Sir, Sunil Rawat</p>
                                    <p className="text-gray-300 text-sm" >3 Player 1 Winner</p>
                                    <p className="text-yellow-300 text-sm " >24 feb 2023</p>
                                </div>


                            </div>

                            

                            <div className="p-3 text-white">
                                <div className="grid grid-cols-3 gap-2 divide-x">
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Prize Pool</small>
                                        <p>₹40</p>
                                    </div>
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Questions</small>
                                        <p>10</p>
                                    </div>
                                    <div className="py-2 px-1 text-center">
                                        <small className="block">Enty Fee</small>
                                        <p>₹40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 p-3 border-t border-gray-500  ">
                                <Link href="/tournament-battle-result" className="text-white bg-gradient-to-r w-full from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300    font-medium rounded-sm  px-5 py-2.5 text-center text-sm ">Won</Link>
                               
                            </div>
                        </div>

                        <div className="relative rounded-sm bg-[#ffffff1f]  border-gray-500 mb-3 ">
                            <div className="p-3 border-b border-gray-500 flex space-x-3">
                                <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                    <FiArrowUpRight className="text-3xl" />
                                </div>
                                <div className="overflow-hidden flex-grow">
                                    <p className="text-white truncate " >Himanshu Verma, Pankaj Sir, Sunil Rawat</p>
                                    <p className="text-gray-300 text-sm" >3 Player 1 Winner</p>
                                    <p className="text-yellow-300 text-sm " >24 feb 2023</p>
                                </div>


                            </div>
                            <div className="p-3 text-white">
                                <div className="grid grid-cols-3 gap-2 divide-x">
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Prize Pool</small>
                                        <p>₹40</p>
                                    </div>
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Questions</small>
                                        <p>10</p>
                                    </div>
                                    <div className="py-2 px-1 text-center">
                                        <small className="block">Enty Fee</small>
                                        <p>₹40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 p-3 border-t border-gray-500  ">
                                <Link href="/tournament-battle-result" className="text-white bg-gradient-to-r w-full from-rose-500 via-rose-600 to-rose-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-rose-300 font-medium rounded-sm  px-5 py-2.5 text-center text-sm ">Lost</Link>
                               
                            </div>
                        </div>

                    </div>
                    
                    <div className={openTab === 3 ? "block" : "hidden"} id="expired_tab">
                    <div className="relative rounded-sm bg-[#ffffff1f]  border-gray-500 mb-3 ">
                            <div className="p-3 border-b border-gray-500 flex space-x-3">
                                <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                    <FiArrowUpRight className="text-3xl" />
                                </div>
                                <div className="overflow-hidden flex-grow">
                                    <p className="text-white truncate " >Himanshu Verma, Pankaj Sir, Sunil Rawat</p>
                                    <p className="text-gray-300 text-sm" >3 Player 1 Winner</p>
                                    <p className="text-yellow-300 text-sm " >24 feb 2023</p>
                                </div>


                            </div>
                            <div className="p-3 text-white">
                                <div className="grid grid-cols-3 gap-2 divide-x">
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Prize Pool</small>
                                        <p>₹40</p>
                                    </div>
                                    <div className=" py-2 px-1 text-center">
                                        <small className="block">Questions</small>
                                        <p>10</p>
                                    </div>
                                    <div className="py-2 px-1 text-center">
                                        <small className="block">Enty Fee</small>
                                        <p>₹40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-1 p-3 border-t border-gray-500  ">
                                <div className="text-blue-900 w-full bg-blue-100 rounded-sm  px-5 py-2.5 text-center text-sm ">Expired</div>
                            </div>
                        </div>
                    </div>
                    {/* skeleton */}
                    <div className="border rounded-sm mb-3 bg-white/20 border-gray-400">
                            <div role="status" className=" animate-pulse">
                               
                                <div className="p-5 space-y-3">
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                    <div className="h-8 bg-gray-300 rounded-sm  w-full"></div>
                                </div>
                            </div>
                        </div>

                 {/* skeleton */}



                </div>
            </section>
            {/* add cash modal */}
            {show ? (
                <AddCashModal show={show} setShow={(bool: any) => setShow(bool)} />
            ) : null}
            {/* start withdraw Modal */}




        </>
    )
}