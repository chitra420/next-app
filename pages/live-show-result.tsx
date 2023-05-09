import Head from "next/head"
import Link from "next/link";
import { FaCheckCircle, FaPercent, FaShareSquare, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdAccessTime, MdAccountBalanceWallet, MdCreditScore, MdExitToApp, MdFormatListNumberedRtl, MdLeaderboard, MdOpenInNew, MdOutlineLocalActivity, MdOutlineSpeed, MdRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill, BsGraphUp, BsInfoCircle } from "react-icons/bs";
import Lottie from "react-lottie-player";
import { FiChevronLeft } from "react-icons/fi";
import { IoMedalOutline } from "react-icons/io5";


export default function LiveShowResult() {

    const [openTab, setOpenTab] = useState(1);

    const [showStatsCard, setshowStatsCard] = useState(false);
    const [lottiehappy, setlottiehappy] = useState(null);

    useEffect(() => {
        import('../public/lottie/crown.json').then(setlottiehappy);


    }, []);


    return (
        <>

            <Head>
                <title>Live Show Result - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Live Show Result , Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Live Show Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Live Show Result  - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className="pb-5">
                
                <div className="bg-gray-800 mb-3 py-3 sticky top-0 z-10">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <h5 className="font-semi-bold text-white">Live Show</h5>
                            <Link href="/live-show" className="px-3 py-1 text-sm font-medium text-center text-black bg-gray-100 rounded-sm hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300  "><MdExitToApp className="mr-1" />Exit</Link>
                        </div>
                    </div>
                </div>

                <div className="container">







                    <div className=" text-center rounded-sm  bg-[#010a3a] border-gray-600  border drop-shadow mb-5 lg:p-5 p-3">
                        
                        <div className="mb-3">
                            <Lottie loop animationData={lottiehappy} play style={{ width: 180, height: 'auto', margin: 'auto' }} />

                            <h3 className=" text-white ">Congrats! You Won</h3>
                            <p className="text-yellow-300 text-lg mb-3">You have earned <span className=" text-2xl">10</span> rupees </p>

                        </div>

                        
                    </div>
                    {/* <div className="flex justify-between p-3 bg-white border-b border-gray-800">

                            <h4 className="text-gray-100 flex items-center"><IoMedalOutline className="w-6 h-6 mr-2" /> My Rank</h4>
                            <h4 className="text-gray-100 ">1</h4>
                        </div> */}


                   
                    {/* after the quiz end */}


                    {/* when the user lost the quiz */}
                    {/* <div className="result-box rounded-sm text-center mb-8">
                    <Lottie loop animationData={lottiehappy} play style={{ width: 120, height: 'auto', margin: 'auto' }} />
                    <h3 className=" text-white py-3">Oh No ! You lost the quiz</h3>
                    <p className="text-yellow-300">Play Quiz Again</p>
                </div> */}
                <div className="text-center">
                <div className="flex justify-center space-x-3">
                            <button type="button" onClick={() => setshowStatsCard(true)} className="gradiant-btn  mb-3 ">Show Statistics</button>
                            <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-sm  px-5 py-3 text-cente mb-3"><FaShareSquare className="mr-2" />Share</button>
                        </div>
                        <p className="text-yellow-100 mb-3"><small>If you have won then winning prize will be added in your wallet within 1 hour.</small></p>
                </div>


                    {showStatsCard ? (
                        <>
                            <div className="stats-card">

                                <h5 className="mb-2 text-slate-300"> Statistics</h5>
                                <div className="grid grid-cols-2 gap-2 md:grid-cols-3  lg:grid-cols-4 mb-3">
                                <div className="group bg-[#010a3a] border border-gray-600 p-3 flex space-x-2 rounded-sm shadow items-center">
                                        <div className="flex-shrink-0">

                                            <Image src="/images/c3.png" className="bg-white p-1 rounded-full w-10 h-10 " width={48} height={48} alt="price" />
                                        </div>
                                        <div>
                                            <h4 className=" text-yellow-300">20/25
                                            </h4>
                                            <p className="text-white">Score</p>
                                        </div>


                                    </div>
                                    <div className="group bg-[#010a3a] border border-gray-600 p-3 flex space-x-2 rounded-sm shadow items-center">
                                        <div className="flex-shrink-0">

                                            <Image src="/images/c3.png" className="bg-white p-1 rounded-full w-10 h-10 " width={48} height={48} alt="price" />
                                        </div>
                                        <div>
                                            <h4 className=" text-yellow-300">15
                                            </h4>
                                            <p className="text-white">Attempts</p>
                                        </div>


                                    </div>
                                    <div className="group bg-[#010a3a] border border-gray-600 p-3 flex space-x-2 rounded-sm shadow items-center">
                                        <div className="flex-shrink-0">

                                            <Image src="/images/c3.png" className="bg-white p-1 rounded-full w-10 h-10 " width={48} height={48} alt="price" />
                                        </div>
                                        <div>
                                            <h4 className=" text-yellow-300">50s
                                            </h4>
                                            <p className="text-white">Speed</p>
                                        </div>


                                    </div>
                                    <div className="group bg-[#010a3a] border border-gray-600 p-3 flex space-x-2 rounded-sm shadow items-center">
                                        <div className="flex-shrink-0">

                                            <Image src="/images/c3.png" className="bg-white p-1 rounded-full w-10 h-10 " width={48} height={48} alt="price" />
                                        </div>
                                        <div>
                                            <h4 className=" text-yellow-300">60%
                                            </h4>
                                            <p className="text-white">Accuracy</p>
                                        </div>


                                    </div>



                                </div>

                                <div className="bg-white p-3 rounded-sm mb-3">
                                    <div className="flex justify-between">
                                        <h6 className="text-green-600"><BsFillCheckCircleFill /> Correct : 3</h6>
                                        <h6 className="text-red-600"><FaTimesCircle /> Incorrect : 2</h6>
                                    </div>
                                </div>



                                <div className=" live-result-box">
                                    <div className="w-full">
                                        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3" role="tablist">
                                            <li className="last:mr-0  text-center">
                                                <Link className={"py-2 block " + (openTab === 1 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#activity_tab" role="tablist" > Leaderboard </Link>
                                            </li>
                                            <li className="last:mr-0  text-center">
                                                <Link className={"py-2 block " + (openTab === 2 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#activity_tab" role="tablist" >Review Questions </Link>
                                            </li>
                                        </ul>
                                        <div className="tab-space">

                                            <div className={openTab === 1 ? "block" : "hidden"} id="leaderboard_tab">


                                                <table className="w-full">
                                                    <thead>
                                                        <tr className="focus:outline-none  border border-gray-100 bg-gray-100 text-left ">
                                                            <th className="p-2 text-sm">Rank</th>
                                                            <th className="p-2 text-sm">User</th>
                                                            <th className="p-2 text-sm">Score</th>
                                                            <th className="p-2 text-sm">Time(sec)</th>
                                                        </tr>
                                                        <tr className="h-2"></tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="focus:outline-none  border border-gray-100 bg-gradient-to-tr from-slate-50 to-slate-100 ">
                                                            <td className="p-2">
                                                                <span>1</span>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <p className="text-sm lg:text-base font-medium  text-gray-700">Himanshu Verma</p>

                                                                </div>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdCreditScore className="text-lg" />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">04/07</p>
                                                                </div>
                                                            </td>
                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdAccessTime />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">23</p>
                                                                </div>
                                                            </td>



                                                        </tr>
                                                        <tr className="h-2"></tr>
                                                        <tr className="focus:outline-none  border border-gray-100 bg-gradient-to-tr from-slate-50 to-slate-100 ">
                                                            <td className="p-2">
                                                                <span>2</span>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <p className="text-sm lg:text-base font-medium  text-gray-700">Himanshu Verma</p>

                                                                </div>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdCreditScore className="text-lg" />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">04/07</p>
                                                                </div>
                                                            </td>
                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdAccessTime />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">23</p>
                                                                </div>
                                                            </td>



                                                        </tr>
                                                        <tr className="h-2"></tr>
                                                        <tr className="focus:outline-none  border border-gray-100 bg-gradient-to-tr from-slate-50 to-slate-100 ">
                                                            <td className="p-2">
                                                                <span>3</span>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <p className="text-sm lg:text-base font-medium  text-gray-700">Himanshu Verma</p>

                                                                </div>
                                                            </td>

                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdCreditScore className="text-lg" />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">04/07</p>
                                                                </div>
                                                            </td>
                                                            <td className="p-2">
                                                                <div className="flex items-center">
                                                                    <MdAccessTime />
                                                                    <p className="text-sm  text-gray-600 dark:text-gray-200  ml-1">23</p>
                                                                </div>
                                                            </td>



                                                        </tr>
                                                        <tr className="h-2"></tr>


                                                    </tbody>
                                                </table>

                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="question_tab">

                                                <div className="correct-answer">
                                                    <div className="mb-4">
                                                        <h5 className="mb-3">1. Which of these is a purpose of shared organisational values?</h5>
                                                        <div className="choice-box ">
                                                            <span>Build Team Support</span>
                                                        </div>
                                                        <div className="choice-box wrong-option">
                                                            <span>Influence marketing efforts</span>
                                                            <span>
                                                                <FaTimesCircle className="text-xl" />
                                                            </span>
                                                        </div>
                                                        <div className="choice-box ">
                                                            <span>Guide managers' decisions</span>
                                                        </div>
                                                        <div className="choice-box right-option">
                                                            <span>All of the above</span>
                                                            <span>
                                                                <FaCheckCircle className="text-xl" />
                                                            </span>
                                                        </div>


                                                    </div>
                                                    <div className="mb-4">
                                                        <h5 className="mb-3">2. Large kingdoms comprise many Janapadas known as</h5>
                                                        <div className="choice-box right-option">
                                                            <span>Mahajanpadas</span>
                                                            <span>
                                                                <FaCheckCircle className="text-xl" />
                                                            </span>
                                                        </div>
                                                        <div className="choice-box ">
                                                            <span>Multijanapadas</span>
                                                        </div>
                                                        <div className="choice-box wrong-option">
                                                            <span>Badajanapadas</span>
                                                            <span>
                                                                <FaTimesCircle className="text-xl" />
                                                            </span>
                                                        </div>
                                                        <div className="choice-box ">
                                                            <span>Macrojanapadas</span>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <h5 className="mb-3">3. Which of the following is the highest peak of South America</h5>
                                                        <div className="choice-box wrong-option">
                                                            <span>Mt. Cotopaxy</span>
                                                            <span>
                                                                <FaTimesCircle className="text-xl" />
                                                            </span>
                                                        </div>
                                                        <div className="choice-box ">
                                                            <span>Mt. Etna</span>
                                                        </div>
                                                        <div className="choice-box right-option">
                                                            <span>Mt. Aconcagua</span>
                                                            <span>
                                                                <FaCheckCircle className="text-xl" />
                                                            </span>
                                                        </div>
                                                        <div className="choice-box ">
                                                            <span>Mt. Quinto</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>

                    ) : null}



                </div>
            </section>


        </>
    )
}