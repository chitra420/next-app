import Head from "next/head"
import Link from "next/link";
import { FaCheckCircle, FaCheckDouble, FaPercent, FaQuestion, FaShareSquare, FaTimes, FaTimesCircle, FaUsers } from "react-icons/fa";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdAccessTime, MdAccountBalanceWallet, MdCreditScore, MdExitToApp, MdFormatListNumberedRtl, MdLeaderboard, MdOpenInNew, MdOutlineLocalActivity, MdOutlineSpeed, MdRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill, BsGraphUp, BsInfoCircle } from "react-icons/bs";
import Lottie from "react-lottie-player";
import { FiChevronLeft } from "react-icons/fi";
import { IoMedalOutline } from "react-icons/io5";


export default function AdminLiveShowResult() {

    const [openTab, setOpenTab] = useState(1);
    const [statsModal, setstatsModal] = useState(false);

    const [lottiehappy, setlottiehappy] = useState(null);

    useEffect(() => {
        import('../public/lottie/tick.json').then(setlottiehappy);


    }, []);


    return (
        <>

            <Head>
                <title>Admin Live Show Result - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Admin Live Show Result , Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Admin Live Show Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Admin Live Show Result  - Play Quiz and Win Real Money | GyanOK.com" />
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

                    <div className="result-box rounded-sm text-center mb-5">
                        <Lottie loop={false} animationData={lottiehappy} play style={{ width: 80, height: 'auto', margin: 'auto' }} />
                        <h4 className=" text-white mb-1 mt-3">We’re getting closer to the finish line! </h4>
                        <p className="text-yellow-300">Assign as practice for deeper understanding.</p>
                    </div>

                    <div className="statistics-card bg-white rounded-sm  p-3">

                        <h5 className="mb-3">Summary</h5>

                        <div className="	">
                            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-2">

                                <li className="p-3 flex items-center justify-between rounded-sm border border-blue-300 bg-blue-100 text-blue-600">
                                    <div>
                                        <span className="text-sm">  User </span>
                                        <h4> 100 </h4>
                                    </div>
                                    <div className=" text-[20px] bg-white w-10 h-10 rounded-lg text-center leading-10">
                                        <FaUsers />
                                    </div>
                                </li>

                                <li className="p-3 flex items-center justify-between rounded-sm border border-yellow-300 bg-yellow-100 text-yellow-600">
                                    <div>
                                        <span className="text-sm">  Questions </span>
                                        <h4> 8 </h4>
                                    </div>
                                    <div className=" text-[20px] bg-white w-10 h-10 rounded-lg text-center leading-10">
                                        <FaQuestion />
                                    </div>
                                </li>
                                <li className="p-3 flex items-center justify-between rounded-sm border border-green-300 bg-green-100 text-green-600">
                                    <div>
                                        <span className="text-sm"> Win </span>
                                        <h4> 16 </h4>
                                    </div>
                                    <div className=" text-[20px] bg-white w-10 h-10 rounded-lg text-center leading-10">
                                        <FaCheckDouble />
                                    </div>
                                </li>
                                <li className="p-3 flex items-center justify-between rounded-sm border border-red-300 bg-red-100 text-red-600">
                                    <div>
                                        <span className="text-sm"> Lost </span>
                                        <h4> 84 </h4>
                                    </div>
                                    <div className=" text-[20px] bg-white w-10 h-10 rounded-lg text-center leading-10">
                                        <FaTimes />
                                    </div>
                                </li>

                            </ul>

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

                                  

                                        <div className="relative overflow-x-auto shadow-md rounded-sm">

                                            <table className="w-full text-sm text-left text-gray-500 ">
                                                <thead className=" text-gray-700 uppercase bg-gray-50 border-b-2 border-gray-600  ">
                                                    <tr>
                                                        <th scope="col" className="px-5 py-3">
                                                            Rank
                                                        </th>
                                                        <th scope="col" className="px-5 py-3">
                                                            Name
                                                        </th>
                                                        <th scope="col" className="px-5 py-3">
                                                            Score
                                                        </th>
                                                        <th scope="col" className="px-5 py-3">
                                                            Time
                                                        </th>
                                                        <th scope="col" className="px-5 py-3">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="px-5 py-3 w-4">
                                                             <span>1</span>
                                                        </td>
                                                        <td scope="row" className="flex items-center px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                                            <Image src="/images/boy.png" width={40} height={40} alt="user" className="rounded-full w-10 h-10 border p-0.5" />
                                                            <div className="pl-2">
                                                                <p className="text-base ">Neil Sims</p>
                                                                <span className="font-normal text-gray-500 text-sm">xxxxxx94</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">
                                                             17/18
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            <div className="flex items-center">
                                                                25s
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">

                                                        <button  type="button" onClick={() => setstatsModal(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show Answer</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="px-5 py-3 w-4">
                                                        <span>2</span>
                                                        </td>
                                                       <td scope="row" className="flex items-center px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                                            <Image src="/images/boy.png" width={40} height={40} alt="user" className="rounded-full w-10 h-10 border p-0.5" />
                                                            <div className="pl-2">
                                                                <p className="text-base ">Neil Sims</p>
                                                                <span className="font-normal text-gray-500 text-sm">xxxxxx94</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            14/18
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            <div className="flex items-center">
                                                                25s
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">

                                                            <button  type="button" onClick={() => setstatsModal(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show Answer</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="px-5 py-3 w-4">
                                                        <span>3</span>
                                                        </td>
                                                       <td scope="row" className="flex items-center px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                                            <Image src="/images/boy.png" width={40} height={40} alt="user" className="rounded-full w-10 h-10 border p-0.5" />
                                                            <div className="pl-2">
                                                                <p className="text-base ">Neil Sims</p>
                                                                <span className="font-normal text-gray-500 text-sm">xxxxxx94</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            12/18
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            <div className="flex items-center">
                                                                25s
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">

                                                        <button  type="button" onClick={() => setstatsModal(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show Answer</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                        <td className="px-5 py-3 w-4">
                                                             <span>4</span>
                                                        </td>
                                                       <td scope="row" className="flex items-center px-5 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                                            <Image src="/images/boy.png" width={40} height={40} alt="user" className="rounded-full w-10 h-10 border p-0.5" />
                                                            <div className="pl-2">
                                                                <p className="text-base ">Neil Sims</p>
                                                                <span className="font-normal text-gray-500 text-sm">xxxxxx94</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">
                                                        5/18
                                                        </td>
                                                        <td className="px-5 py-3">
                                                            <div className="flex items-center">
                                                                25s
                                                            </div>
                                                        </td>
                                                        <td className="px-5 py-3">

                                                        <button  type="button" onClick={() => setstatsModal(true)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Show Answer</button>
                                                        </td>
                                                    </tr>
                                                 
                                                </tbody>    
                                            </table>


                                        </div>

                                  

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="question_tab">

                                    <div className="correct-answer">
                                        <div className="mb-4">
                                            <h5 className="mb-3">1. Which of these is a purpose of shared organisational values?</h5>
                                            <div className="choice-box ">
                                                <span>Build Team Support</span>
                                            </div>
                                            <div className="choice-box ">
                                                <span>Influence marketing efforts</span>

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
                                            <div className="choice-box ">
                                                <span>Badajanapadas</span>

                                            </div>
                                            <div className="choice-box ">
                                                <span>Macrojanapadas</span>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="mb-3">3. Which of the following is the highest peak of South America</h5>
                                            <div className="choice-box ">
                                                <span>Mt. Cotopaxy</span>

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
            </section>

            {statsModal ? (
                        <>
                            <div id="statsanswerModal"  tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                                <div className="relative p-4 w-full max-w-2xl h-auto">
                                    <div className="relative bg-white rounded-sm shadow ">
                                        <div className="flex justify-between items-start p-3 rounded-t border-b ">
                                            <h5 className="text-gray-800">Stats <span className="text-base">(Sunil Singh Rawat)</span> </h5>
                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => setstatsModal(false)}>
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>                                             
                                            </button>
                                        </div>
                                        <div className="p-3">
                                           <div className="flex flex-wrap gap-2">
                                                <div className="p-2 w-14 rounded-sm bg-green-100 text-center">
                                                    <p>Q1</p>
                                                    <FaCheckCircle className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-red-100 text-center">
                                                    <p>Q2</p>
                                                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-green-100 text-center">
                                                    <p>Q3</p>
                                                    <FaCheckCircle className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-red-100 text-center">
                                                    <p>Q4</p>
                                                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-green-100 text-center">
                                                    <p>Q5</p>
                                                    <FaCheckCircle className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-red-100 text-center">
                                                    <p>Q6</p>
                                                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                                                </div>

                                                <div className="p-2 w-14 rounded-sm bg-green-100 text-center">
                                                    <p>Q7</p>
                                                    <FaCheckCircle className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-red-100 text-center">
                                                    <p>Q8</p>
                                                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                                                </div>
                                                 <div className="p-2 w-14 rounded-sm bg-green-100 text-center">
                                                    <p>Q9</p>
                                                    <FaCheckCircle className="text-green-600 w-5 h-5" />
                                                </div>
                                                <div className="p-2 w-14 rounded-sm bg-red-100 text-center">
                                                    <p>Q10</p>
                                                    <FaTimesCircle className="text-red-600 w-5 h-5" />
                                                </div>   
                                           </div>
                                        </div>
                                        <div className="p-3 text-right space-x-2 rounded-b border-t border-gray-200 ">
                                            <button onClick={() => setstatsModal(false)} type="button" className="text-gray-600 bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-sm border border-gray-300 font-medium px-5 py-2 hover:text-gray-900 focus:z-10 ">Close</button>
                                          
                                        </div>
                                    </div>
                                </div>
                    </div>
                     <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div> 
                        </>
                ) : null}


        </>
    )
}