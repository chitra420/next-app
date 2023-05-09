import Head from "next/head"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {  MdArrowBackIosNew, MdKeyboardArrowDown, MdKeyboardArrowUp, MdLeaderboard, MdOpenInNew, MdOutlineStickyNote2 } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { AiFillTrophy, AiOutlineTrophy } from "react-icons/ai";
import { useRouter } from "next/router";

export default function CompetitionDetail() {
    const [show, setShow] = useState(false);
    const [openTab, setOpenTab] = useState(1);

    const [showtoggle, setshowtoggle] = useState(true);
    const router = useRouter()


    const showModal = () => {
        setShow(true);
    }

    function goBackLast() {
        if (localStorage.getItem('last_page')=='') {
            router.push('/');
            return false;
        } else {
           router.push(localStorage.getItem('last_page'));
        }
     }

    return (
        <>

            <Head>
                <title>Quiz Competition - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <section className="py-3 competition-area">
                <div className="container relative ">


                    <div className="mb-2 flex items-center justify-between ">
                        <div className="space-x-2">
                            <button onClick={goBackLast} className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                            <MdArrowBackIosNew className="w-4 h-4" />
                            </button>
                            <h4 className="inline-flex text-lg text-white">Back</h4>
                        </div>
                        {/* <button className="text-white" onClick={() => router.back()}><MdArrowBackIosNew className="mr-1" />Back</button> */}
                        <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                    </div>



                    <div className="bg-[#ffffff1f] border shadow-lg  rounded-sm mb-3 overflow-hidden flex flex-wrap">
                        <Image src="/images/holi.png" width={1200} height={650} alt="competition" className="w-full lg:w-2/5" />
                        <div className="w-full lg:w-3/5 flex flex-col justify-between">

                            <div className="p-3 lg:p-5 ">
                                <h4 className="text-white text-xl ">Do You Know India Quiz</h4>
                                {/* <p className="text-gray-400 text-sm mb-1">Hurry Up and win the prize</p> */}
                                <button className="mb-5 text-white"><span className=" bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded  border border-green-400">Share</span></button>

                                <div className=" mb-5 grid grid-cols-2">
                                    <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-gradient-color before:rounded-lg">
                                        <h3 className="text-[30px] text-yellow-300"><span className="">₹1000</span></h3>
                                        <p className="text-gray-300 font-medium ">Pool Prize</p>
                                    </div>
                                    <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-cyan-500 before:rounded-lg">
                                        <h3 className="text-[30px] text-yellow-300"><span className="">₹10</span></h3>
                                        <p className="text-gray-300 font-medium ">Entry Fee</p>
                                    </div>
                                </div>

                                <div className="w-full bg-gray-300 rounded-lg mt-5 mb-1">
                                    <div className="bg-yellow-300 text-xs font-bold text-black text-center p-0 leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                </div>
                                <div className="flex text-gray-300 text-xs justify-between">
                                    <span className="pe-3">13 PARTICIPANTS</span>
                                    <span>150 SLOTS</span>
                                </div>
                            </div>
                            <div className=" text-sm px-3 py-1 bg-white/10 border-t  text-blue-100">
                                <ul className="text-gray-300 text-center  text-sm flex columns-3 justify-between divide-x ">

                                    <li className="px-1 w-1/3">
                                        <span className="pr-1">Questions</span>
                                        5
                                    </li>
                                    <li className="px-1 w-1/3 ">
                                        <span className="pr-1">Time</span>
                                        10s
                                    </li>
                                    <li className="px-1 w-1/3 ">
                                        <span className="pr-1">Req. Slots</span>
                                        55
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="block w-full  text-center mb-8">
                        <Link href="start-competition" className="gradiant-btn w-full ">PLAY NOW </Link>

                        <p className="mt-1 text-white">Ends <span className="text-yellow-300">46m 30s</span></p>
                    </div>

                    <div className="tab-panel  overflow-hidden mb-5">
                        <ul className=" flex list-none flex-wrap  flex-row gap-3  " role="tablist">

                            <li className="text-center  mr-3">
                                <Link className={"py-1.5 flex items-center gap-1  " + (openTab === 1 ? "text-yellow-300  border-b-2 border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#comp_details" role="tablist" ><AiFillTrophy /> Winnings  </Link>
                            </li>
                            <li className="last:mr-0  text-center">
                                <Link className={"py-1.5 flex items-center gap-1 " + (openTab === 2 ? "text-yellow-300  border-b-2 border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#leaderboard_tab" role="tablist" ><MdLeaderboard /> Leaderboard </Link>
                            </li>
                        </ul>

                        <div className={openTab === 1 ? "block" : "hidden"} id="comp_details">

                            <div className="group relative bg-[#ffffff1f]  mt-3 rounded-sm overflow-y-auto max-h-[400px] ">
                                <table className="table-fixed w-full text-sm text-left text-slate-300 ">
                                    <thead className="border-b text-white border-gray-400  bg-white/10 ">
                                        <tr>
                                            <th scope="col" className="text-left font-light p-2 md:p-3 lg:p-3"> Rank </th>
                                            <th scope="col" className="text-right font-light p-2 md:p-3 lg:p-3"> Winnings </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="text-left font-medium p-2 md:p-3 lg:p-3"> 1 </th>

                                            <td className="text-right p-2 md:p-3 lg:p-3">₹10 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="text-left font-medium p-2 md:p-3 lg:p-3"> 2 </th>

                                            <td className="text-right p-2 md:p-3 lg:p-3">₹10 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="text-left  font-medium p-2 md:p-3 lg:p-3"> 3 </th>

                                            <td className="text-right p-2 md:p-3 lg:p-3">₹10 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="text-left font-medium p-2 md:p-3 lg:p-3"> 4 </th>

                                            <td className="text-right p-2 md:p-3 lg:p-3">₹10 </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="leaderboard_tab">
                            {/* <div className=" p-5 rounded-sm text-center text-blue-800 border-b-4 border-blue-500 bg-white/90 mb-3" role="alert">
                                <svg className="flex-shrink-0 w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                <p className="font-medium">
                                    Leaderboard will be shown after competition started
                                </p>
                            </div> */}

                            <div className="group relative bg-[#ffffff1f]  mt-3 rounded-sm overflow-y-auto max-h-[400px] ">
                                <table className="table-auto w-full text-sm text-left text-slate-300 ">
                                    <thead className="border-b text-white border-gray-400  bg-white/10 ">
                                        <tr>
                                            <th scope="col" className=" font-light p-2 md:p-3 lg:p-3"> Rank </th>
                                            <th scope="col" className=" font-light p-2 md:p-3 lg:p-3"> User </th>
                                            <th scope="col" className=" font-light p-2 md:p-3 lg:p-3"> Score </th>
                                            <th scope="col" className=" font-light p-2 md:p-3 lg:p-3"> Time(sec) </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="p-2 md:p-3 lg:p-3 font-medium  whitespace-nowrap  "> 1 </th>
                                            <td className=" p-2 md:p-3 lg:p-3"><Link href="#" className="text-slate-50 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link>  </td>
                                            <td className=" p-2 md:p-3 lg:p-3">10 </td>
                                            <td className=" p-2 md:p-3 lg:p-3">25.01 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="p-2 md:p-3 lg:p-3 font-medium  whitespace-nowrap  "> 2 </th>
                                            <td className=" p-2 md:p-3 lg:p-3"><Link href="#" className="text-slate-50 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link>  </td>
                                            <td className=" p-2 md:p-3 lg:p-3">10 </td>
                                            <td className=" p-2 md:p-3 lg:p-3">25.01 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="p-2 md:p-3 lg:p-3 font-medium  whitespace-nowrap  "> 3 </th>
                                            <td className=" p-2 md:p-3 lg:p-3"><Link href="#" className="text-slate-50 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link>  </td>
                                            <td className=" p-2 md:p-3 lg:p-3">10 </td>
                                            <td className=" p-2 md:p-3 lg:p-3">25.01 </td>

                                        </tr>
                                        <tr className=" border-b hover:bg-gray-700 border-gray-500 ">
                                            <th scope="row" className="p-2 md:p-3 lg:p-3 font-medium  whitespace-nowrap  "> 4 </th>
                                            <td className=" p-2 md:p-3 lg:p-3"><Link href="#" className="text-slate-50 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link>  </td>
                                            <td className=" p-2 md:p-3 lg:p-3">10 </td>
                                            <td className=" p-2 md:p-3 lg:p-3">25.01 </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    <div className="relative group">
                        <div className="flex items-center space-x-1  mb-3 cursor-pointer" onClick={() => setshowtoggle(!showtoggle)}>
                            
                               
                                <MdOutlineStickyNote2 className="w-6 h-6 text-white"/>
                          
                            <h5 className="text-gray-300 text-lg">Terms & Condition</h5>
                            {showtoggle ? <MdKeyboardArrowUp className="w-8 h-8 text-white ml-auto" /> : <MdKeyboardArrowDown className="w-8 h-8 text-white ml-auto" />}

                        </div>
                        {showtoggle && <ul className="space-y-1 text-sm  text-gray-300 ">
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
                        </ul>}
                    </div>

{/* sekelton */}
                    <div className="bg-[#ffffff1f] rounded-sm my-3">
                        <div role="status" className="animate-pulse p-3">
                            <div className="flex items-center space-x-1 mb-5">
                                <svg className="text-gray-200 w-16 h-16 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                <div className=" space-y-2">
                                    <div className="h-4 bg-gray-300 rounded-sm  w-40"></div>
                                    <div className="h-4 bg-gray-300 rounded-sm  w-32"></div>
                                </div>
                            </div>
                            <div className="h-12 bg-gray-300 rounded-sm w-1/3 mb-5"></div>
                            <div className="h-10 bg-gray-300 rounded-sm mb-3 w-full"></div>
                            <div className="h-12 bg-gray-300 rounded-sm mb-3 w-full"></div>
                            <div className="h-10 bg-gray-300 rounded-sm mb-3 w-full"></div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="h-8 bg-gray-300 rounded-sm mb-3 w-full"></div>
                                <div className="h-8 bg-gray-300 rounded-sm mb-3 w-full"></div>
                                <div className="h-8 bg-gray-300 rounded-sm mb-3 w-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="h-8 bg-gray-300 rounded-sm mb-3 mr-3 w-32 inline-block animate-pulse "></div>
                    <div className="h-8 bg-gray-300 rounded-sm mb-3  w-32 inline-block animate-pulse "></div>

                    <div className="bg-[#ffffff1f] rounded-sm p-3 mb-3">
                        <div role="status" className="animate-pulse ">
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                            <div className="h-8 bg-gray-300 rounded-sm mb-3  w-full"></div>
                        </div>
                    </div>


                </div>
            </section>

            {/* add cash modal */}
            {show ? (
                <AddCashModal show={show} setShow={(bool) => setShow(bool)} />
            ) : null}
            {/* start withdraw Modal */}


        </>
    )
}