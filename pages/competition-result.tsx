import Head from "next/head"
import Link from "next/link";
import { FaCheckCircle, FaPercent, FaTimesCircle } from "react-icons/fa";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdAccountBalanceWallet, MdCreditScore, MdFormatListNumberedRtl, MdLeaderboard, MdOpenInNew, MdOutlineLocalActivity, MdOutlineSpeed, MdRefresh } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsFillCheckCircleFill, BsGraphUp, BsInfoCircle } from "react-icons/bs";
import Lottie from "react-lottie-player";
import { FiChevronLeft } from "react-icons/fi";


export default function CompetitionResult() {

    const [openTab, setOpenTab] = useState(1);

    const [informationModal, informationsetShow] = useState(false);
    const [lottiehappy, setlottiehappy] = useState(null);

    useEffect(() => {
        import('../public/lottie/happy.json').then(setlottiehappy);


    }, []);

    const allquizdata = [
        { title: 'Tournament', description: 'Play quiz in real time with others', url: '/quiz-tournaments', image: '/images/q-tour.webp', cornerimage: '/images/qlist2.png' },

        { title: 'Trivia', description: 'Fun and entertaining quiz', url: '/trivia-quizzes', image: '/images/q-trivia.webp', cornerimage: '/images/qlist1.png' },
        { title: 'Polls', description: 'Check what other thinks', url: '/polls', image: '/images/q-polls.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Current Affairs Quiz', description: 'Play Quiz Daily & Increase Your GK', url: '/current-affairs-quiz', image: '/images/q-current.png', cornerimage: '/images/qlist3.png' },
    ];

    return (
        <>

            <Head>
                <title>Competition Result - Play Quiz and Win Real Money | GyanOK.com</title>
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
            <Layout>
                <section className="competition-area section-area">
                    <div className="container">

                        <Link href="/competition" className="text-white font-medium text-center relative z-10"><FiChevronLeft className="mr-1" />Back</Link>


                        {/* after the quiz end */}
                        <div className="result-box rounded-sm text-center mb-8 overflow-hidden">


                            <Lottie loop animationData={lottiehappy} play style={{ width: 120, height: 'auto', margin: 'auto' }} />
                            <h3 className=" text-white py-3 mb-3">Yayyy ! Well Played</h3>
                            <p className="text-yellow-300 animate-bounce text-xl ">Result <br /> 29 September 2011, 11:00 AM</p>
                        </div>
                        {/* IF user win the quiz */}
                        {/* <div className="result-box rounded-sm text-center mb-8">
                    <lottie-player ref={effectRan} autoplay loop mode="normal" src="/lottie/happy.json" style={{ width: '120px', height: 'auto', margin: 'auto' }}></lottie-player>
                    <h3 className=" text-white py-3">Congratulation! You Won The Quiz</h3>
                    <p className="text-yellow-300 text-[36px]">₹10</p>
                </div> */}
                        {/* when the user lost the quiz */}
                        {/* <div className="result-box rounded-sm text-center mb-8">
                    <lottie-player ref={effectRan} autoplay loop mode="normal" src="/lottie/happy.json" style={{ width: '120px', height: 'auto', margin: 'auto' }}></lottie-player>
                    <h3 className=" text-white py-3">Oh No ! You lost the quiz</h3>
                    <p className="text-yellow-300">Play Quiz Again</p>
                </div> */}
                        {/* When Required Slots is not Full */}
                        {/* <div className="result-box rounded-sm text-center mb-8">
                    <lottie-player ref={effectRan} autoplay loop mode="normal" src="/lottie/happy.json" style={{ width: '120px', height: 'auto', margin: 'auto' }}></lottie-player>
                    <h3 className=" text-white py-3">Quiz did not reach minimum required slot</h3>
                    <p className="text-yellow-300">Your amount will be refunded within 1 hours</p>
                </div> */}

                        <h4 className="text-white mb-3">Computer Quiz</h4>
                        <button type="button" className=" mb-3 flex items-center space-x-1 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300  shadow-sm shadow-teal-500/50 rounded-sm text-sm px-2 py-1 text-center">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg><span>Share with friends</span>
                        </button>


                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <div className="rank-card">
                                <div className="rank-body">
                                    <h4 className="ranktitle ">Rank <button onClick={() => informationsetShow(true)} ><BsInfoCircle /></button></h4>
                                    <Image src="/images/medal.png" width={100} height={100} alt="trophy"></Image>

                                    <h2 className="ranknumber ">1</h2>
                                    <p className="mb-3 text-green-600">Final rank will be released <br />  after quiz is over</p>

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

                        <div className="mt-5 comp-result-box">
                            <div className="w-full">
                                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3" role="tablist">
                                    {/* <li className=" last:mr-0  text-center">
                                        <Link className={" px-3 py-2 rounded-sm block " + (openTab === 1 ? "text-black bg-slate-200 border border-slate-200" : "text-slate-200  border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#leaderboard_tab" role="tablist" > Winnings </Link>
                                    </li>
                                    <li className=" last:mr-0  text-center">
                                    <Link className={" px-3 py-2 rounded-sm block " + (openTab === 2 ? "text-black bg-slate-200 border border-slate-200" : "text-slate-200  border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#question_tab" role="tablist" > Leaderboard </Link>
                                    </li>
                                    <li className="last:mr-0  text-center">
                                        <Link className={" px-3 py-2 rounded-sm block " + (openTab === 2 ? "text-black bg-slate-200 border border-slate-200" : "text-slate-200  border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#question_tab" role="tablist" > Question </Link>
                                    </li> */}

                                    <li className="  text-center">
                                        <Link className={"py-2 block " + (openTab === 1 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#statistics_tab" role="tablist" > Prize Distribution </Link>
                                    </li>
                                    <li className="last:mr-0  text-center">
                                        <Link className={"py-2 block " + (openTab === 2 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#activity_tab" role="tablist" > Leaderboard </Link>
                                    </li>
                                    <li className="last:mr-0  text-center">
                                        <Link className={"py-2 block " + (openTab === 3 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#activity_tab" role="tablist" > Question </Link>
                                    </li>
                                </ul>
                                <div className="tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="leaderboard_tab">
                                        <div className="overflow-x-auto relative mb-3 rounded-sm overflow-y-auto max-h-[400px] ">
                                            <table className="table-auto w-full  text-center text-gray-500 ">
                                                <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-200   ">
                                                    <tr>
                                                        <th scope="col" className=" p-2 md:p-3 lg:p-3"> Rank </th>
                                                        <th scope="col" className=" p-2 md:p-3 lg:p-3"> Prize </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>

                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> ₹25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 2 </th>

                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> ₹25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 3 </th>

                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> ₹25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 4 </th>

                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> ₹25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 5 </th>

                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> ₹25 </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="leaderboard_tab">
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
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"><Link href="#" className="text-blue-800 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link> </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 2 </th>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"><Link href="#" className="text-blue-800 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link> </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 3 </th>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"><Link href="#" className="text-blue-800 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link> </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 25 </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 ">
                                                        <th scope="row" className=" p-2 md:p-3 lg:p-3 font-medium text-gray-900 whitespace-nowrap "> 4 </th>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"><Link href="#" className="text-blue-800 whitespace-nowrap">Himanshu Verma <MdOpenInNew /></Link> </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 5 </td>
                                                        <td className="text-[14px] lg:text-[16px] p-2 md:p-3 lg:p-3"> 25 </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="question_tab">
                                        <blockquote className="p-2 mb-3 bg-amber-100 border-l-4 border-amber-500 ">
                                            <p className="font-medium leading-relaxed text-rose-600 ">Note: Answers will be shown after result is released. </p>
                                        </blockquote>
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
                            <div className="">
                                <Link href="#" className="gradiant-btn w-full lg:w-auto">
                                    <MdRefresh className="mr-1" />Play Again  </Link>
                                {/* <Link href="#" className="text-white bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200  font-medium rounded-sm  px-5 py-2.5 text-center  mb-2">
                                    <MdAccountBalanceWallet className="mr-1" />Wallet </Link> */}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Choose Quiz */}

                <section className="bg-[url('/images/allquiz.png')] all-quizzes section-area">
                    <div className="container ">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2"> {allquizdata.map((quizdata) => {
                            return (
                                <div className="quiz-list relative rounded-sm p-5 lg:p-8 bg-white hover:bg-cyan-50 shadow-md transition-all duration-300 " key={quizdata.title}>
                                    <div className="flex justify-between items-center ">
                                        <div className="">
                                            <h5 className="text-primary text-[18px] lg:text-[24px]">{quizdata.title}</h5>
                                            <p className="leading-8 text-gray-600 mb-2">
                                                {quizdata.description}
                                            </p>
                                            <Link href={quizdata.url} type="button" className=" underline  decoration-2 underline-offset-4 text-gray-500 italic  inline-flex items-center">
                                                Play Quiz
                                                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                        <div className='mb-3 flex-shrink-0 z-1'>
                                            <Image className="object-cover" src={quizdata.image} width={100} height={100} alt="quiz image" />
                                        </div>
                                    </div>
                                    <Image className="absolute top-0 right-0 z-0" src={quizdata.cornerimage} width={130} height={130} alt="back icon" />
                                </div>
                            )
                        })} </div>



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