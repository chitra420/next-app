import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { BsArrowRight, BsFillCheckCircleFill, BsInfoCircle } from "react-icons/bs";
import Lottie from "react-lottie-player";
import { useEffect, useState } from "react";
import { MdCreditScore, MdFormatListNumberedRtl, MdOutlineSpeed } from "react-icons/md";
import { FaCheckCircle, FaPercent, FaTimesCircle } from "react-icons/fa";

export default function CurrentAffairsQuizResult() {
    const [resultopenTab, setresultOpenTab] = useState(1);

    const [informationModal, informationsetShow] = useState(false);
    const [lottietick, setlottietick] = useState(null);

    useEffect(() => {
        import('../public/lottie/catick.json').then(setlottietick);


    }, []);

    return (
        <>
            <Head>
                <title>Daily Current Affairs Quiz 2022 | GK Questions PDF By Gyanok</title>
                <meta name="description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta name="keywords" content="Daily Current Affairs Quiz, Current Affairs MCQ Today, Monthly Current Affairs Quiz, Current Affairs Question and Answer, Current Affairs MCQ, Daily Objective Current Affairs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Daily Current Affairs Quiz 2022 | Prepare For GK Daily | GyanOK.com" />
                <meta property="twitter:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Daily Current Affairs Quiz 2022 | Prepare For GK Daily | GyanOK.com" />
                <meta property="og:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area current-quiz">
                    <div className="container">


                        <div className="result-box rounded-sm text-center mb-8 overflow-hidden">

                            <Lottie loop={false} animationData={lottietick} play style={{ width: 120, height: 'auto', margin: 'auto' }} />
                            <h3 className=" text-white py-3">Yayyy ! Well Played</h3>
                            <p className="text-yellow-300  ">Check Your Performance</p>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="rank-card">
                                <div className="rank-body">
                                    <h4 className="ranktitle ">Rank <button onClick={() => informationsetShow(true)} ><BsInfoCircle /></button></h4>
                                    <Image src="/images/medal.png" width={100} height={100} alt="trophy" />
                                    <div className="flex items-baseline">
                                        <h2 className="ranknumber ">1</h2>
                                        <h4 className="text-green-600 drop-shadow-lg ml-3">Out of 84</h4>
                                    </div>

                                    <p className="text-green-500 text-sm w-2/3">Keep checking this page for current rank</p>

                                </div>
                            </div>

                            <div className="statistics-card ">
                                <div className="statistics-header">
                                    <h5>Summary</h5>
                                </div>
                                <div className="statistics-body 	">
                                    <ul className="grid grid-cols-2 gap-2">
                                        <li className="color1">
                                            <div>
                                                <span className="text-sm"> Score </span>
                                                <h4> 15/20 </h4>
                                            </div>
                                            <div className="icon">
                                                <MdCreditScore />
                                            </div>
                                        </li>
                                        <li className="color2">
                                            <div>
                                                <span className="text-sm"> Attempts </span>
                                                <h4> 16 </h4>
                                            </div>
                                            <div className="icon">
                                                <MdFormatListNumberedRtl />
                                            </div>
                                        </li>
                                        <li className="color3">
                                            <div>
                                                <span className="text-sm"> Speed </span>
                                                <h4> 45s </h4>
                                            </div>
                                            <div className="icon">
                                                <MdOutlineSpeed />
                                            </div>
                                        </li>
                                        <li className="color4">
                                            <div>
                                                <span className="text-sm"> Accuracy </span>
                                                <h4> 60% </h4>
                                            </div>
                                            <div className="icon">
                                                <FaPercent />
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between mt-2">
                                        <h6 className="text-green-600"><BsFillCheckCircleFill /> Correct : 3</h6>
                                        <h6 className="text-red-600"><FaTimesCircle /> Incorrect : 2</h6>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className="mt-5 current-result-box">

                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3" role="tablist">
                                <li className=" last:mr-0  text-center">
                                    <Link className={" uppercase px-5 py-2 rounded-sm block " + (resultopenTab === 1 ? "text-black bg-slate-200 border border-slate-200" : "text-slate-200  border-slate-200")} onClick={e => { e.preventDefault(); setresultOpenTab(1); }} data-toggle="tab" href="#leaderboard_tab" role="tablist" > Leaderboard </Link>
                                </li>
                                <li className="last:mr-0  text-center">
                                    <Link className={" uppercase px-5 py-2 rounded-sm block " + (resultopenTab === 2 ? "text-black bg-slate-200 border border-slate-200" : "text-slate-200  border-slate-200")} onClick={e => { e.preventDefault(); setresultOpenTab(2); }} data-toggle="tab" href="#question_tab" role="tablist" > Question </Link>
                                </li>
                            </ul>
                            <div className="tab-space">
                                <div className={resultopenTab === 1 ? "block" : "hidden"} id="leaderboard_tab">

                                    <div className="relative shadow-sm ">
                                        <Image src="/images/current-lead-result.png" width={600} height={600} alt="result" className="w-full h-auto block border rounded-sm" />
                                        <div className="border absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center p-3 lg:p-8 shadow-sm rounded-sm bg-white/80">
                                            <h5 className=" mb-3">To View the answer you need to</h5>
                                            <div className="flex justify-center gap-3">

                                                <Link href="/login" className="text-white inline-block bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200  font-medium rounded-sm  px-5 py-2 text-center ">
                                                    Login </Link>
                                                <Link href="/register" className="text-white inline-block bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200  font-medium rounded-sm  px-5 py-2 text-center  ">
                                                    Register </Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="overflow-x-auto relative mb-3 rounded-sm overflow-y-auto max-h-[400px] ">
                                        <table className="table-auto w-full  text-left text-gray-500 ">
                                            <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-200   ">
                                                <tr>
                                                    <th scope="col" className=" p-2 md:p-3 lg:p-3"> Rank </th>
                                                    <th scope="col" className=" p-2 md:p-3 lg:p-3"> User </th>
                                                    <th scope="col" className=" p-2 md:p-3 lg:p-3"> Score </th>
                                                    <th scope="col" className=" p-2 md:p-3 lg:p-3"> Time(sec) </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Himanshu Verma </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 16 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 2 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Sunil Singh Rawat </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 3 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 32 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 3 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Umesh Rawat </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 4 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 20 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 4 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Pankaj Bhatt </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 22 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 5 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Krishna Panwar </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 1 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 30 </td>
                                                </tr>

                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Himanshu Verma </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 16 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 2 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Sunil Singh Rawat </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 3 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 32 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 3 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Umesh Rawat </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 4 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 20 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 4 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Pankaj Bhatt </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 22 </td>
                                                </tr>
                                                <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                    <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 5 </th>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3">Krishna Panwar </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 1 </td>
                                                    <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 30 </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={resultopenTab === 2 ? "block" : "hidden"} id="question_tab">

                                    <div className="relative shadow-sm ">
                                        <Image src="/images/current-quiz-result.png" width={600} height={600} alt="result" className="hidden  lg:block w-full h-auto  border rounded-sm" />
                                        <Image src="/images/mob-current-result.png" width={600} height={600} alt="result" className="block lg:hidden w-full h-auto border rounded-sm" />
                                        <div className="border absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center p-3 lg:p-8 shadow-sm rounded-sm bg-white/80">
                                            <h5 className=" mb-3">To View the answer you need to</h5>
                                            <div className="flex justify-center gap-3">

                                                <Link href="/login" className="text-white inline-block bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200  font-medium rounded-sm  px-5 py-2 text-center ">
                                                    Login </Link>
                                                <Link href="/register" className="text-white inline-block bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200  font-medium rounded-sm  px-5 py-2 text-center  ">
                                                    Register </Link>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="correct-answer overflow-y-auto max-h-[500px]">
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
                                            <div className="answer-area">
                                                <div className="ansbox">
                                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Error excepturi vel sapiente autem odit consectetur in nesciunt quasi voluptates veritatis, ratione deleniti recusandae aliquid ex ullam modi iste. Et, nulla.</p>
                                                </div>
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
                </section>



                {informationModal ? (
                    <>
                        <div id="informationModal" tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                            <div className="relative p-3 w-full max-w-xl h-auto">
                                <div className="relative bg-white rounded-lg shadow ">
                                    <div className="flex justify-between items-start p-3 rounded-t border-b ">
                                        <h4 className="text-gray-900"> Inforamtion </h4>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => informationsetShow(false)}>
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-3 lg:p-5">
                                        <p>The current rank may change as more participants participate, because rank depends on other participants speed accuracy and correct attempts.</p>
                                    </div>
                                    <div className="p-3 text-right space-x-2 rounded-b border-t border-gray-200 ">
                                        <button onClick={() => informationsetShow(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Close</button>
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