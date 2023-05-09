import Head from "next/head"
import Image from "next/image";
import { FcApproval, FcExpand } from "react-icons/fc"
import { FaPlusCircle, FaRegUser } from "react-icons/fa";
import Layout from "../components/Layout"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos, MdOutlineExitToApp, MdOutlineOpenInNew } from "react-icons/md";
import LoginAlert from "../components/LoginAlert";
import QuizLimitModal from "../components/QuizLimitModal";
import Lottie from 'react-lottie-player'
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";



export default function Tournaments() {


    const [show, setShow] = useState(false);

    const [loginshow, loginsetShow] = useState(false);

    const [participateshow, participatesetShow] = useState(false);

    const [soloModalshow, soloModalsetshow] = useState(false);

    const [optionModalshow, setOptionModalShow] = useState(false);


    const [quizlimitshow, quizlimitsetShow] = useState(false);

    const [lottiewait, setLottiewait] = useState(null);


    const handleBattleMenu = () => {

        var elebattle = document.querySelector(".speed-dial");
        var elebattlebg = document.querySelector(".speed-dial-bg");
        var elebutton = document.querySelector('.dialbutton');

        elebattle.classList.toggle("hidden");
        elebattlebg.classList.toggle("hidden");
        elebutton.classList.toggle("rotate-45");

    }

    const showloginModal = () => {
        loginsetShow(true);
    }

    const showModal = () => {
        setShow(true);
    }
    function showtourfooter() {
        var arrow = document.querySelector(".pool-arrow");
        var element = document.querySelector(".tour-footer");
        element.classList.toggle("hidden");
        arrow.classList.toggle("rotate-180");
    }


    useEffect(() => {
        import('../public/lottie/radar.json').then(setLottiewait);


    }, []);

    const handleModelShow = () => {
        document.querySelector('body').classList.add('overflow-hidden');
        participatesetShow(true)
    }

    const hideModel = () => {
        document.querySelector('body').classList.remove('overflow-hidden');
        participatesetShow(false)
    }


    return (
        <>

            <Head>
                <title>Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <Layout>
                <section className="section-area quizes-tour">
                    <div className="container">
                        <div className="bg-[#010a3a] text-white border-2 border-yellow-300 mb-3">
                            <div className="p-3 lg:p-5">
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 content-center">
                                    <div className="flex items-center">
                                        <div>
                                            <h4 className="text-[24px]">Play Quiz & Win </h4>
                                            <h3 className="text-[24px] mb-3"><span className="text-yellow-300 ">Rs 1000</span> Cash Prize</h3>
                                            <p className="mb-0">Boost your knowledge and get a chance to win cash prizes.</p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <img src="images/quiz.png" alt="" width={200} height={200} className="m-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className=" text-center px-3 py-1 bg-yellow-300">
                                <h5 className="mb-1 text-black">Play First Quiz For Free </h5>
                                <button type="button" onClick={() => quizlimitsetShow(true) } className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm px-3 py-2  ">Register Now</button>
                            </div>
                        </div>


                        <div className="mb-3 ">
                            <h1 className="text-[20px]  lg:text-[24px]  text-white">Quiz Tournaments</h1>
                        </div>
                        <div className="flex justify-between items-center mb-5">
                            <div>
                                {/* <h1 className="text-[20px]  lg:text-[24px]  text-white">Quiz Tournaments</h1> */}
                                <Link href="/quiz-tournaments" className="focus:outline-none text-black border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 ">LIVE</Link>
                                <Link href="/tournament-challenges" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center  ">CHALLENGES</Link>
                            </div>
                            <div>
                                <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>

                            </div>
                        </div>
                        {/* skeleton start */}
                        <div className="bg-white rounded-sm mb-3">
                            <div role="status" className=" animate-pulse">
                                <div className="border-b border-gray-200 p-3 flex justify-between items-center">
                                    <div className=" space-y-2">
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-48"></div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-48"></div>
                                    </div>
                                    <div className="h-8 bg-gray-300 rounded-lg w-20"></div>
                                </div>
                                <div className="p-3 space-y-3">
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-sm mb-3">
                            <div role="status" className=" animate-pulse">
                                <div className="border-b border-gray-200 p-3 flex justify-between items-center">
                                    <div className=" space-y-2">
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-48"></div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-48"></div>
                                    </div>
                                    <div className="h-8 bg-gray-300 rounded-lg w-20"></div>
                                </div>
                                <div className="p-3 space-y-3">
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm  w-full"></div>
                                </div>
                            </div>
                        </div>


                        {/* skeleton end */}


                        <div className="tournament-card">
                            <div className="tour-header ">
                                <h4 className="mb-0">2 Player 1 Winner</h4>
                                <span className="text-green-600 flex items-center"><FaRegUser />1+</span>
                                <Link href="/play-tournament" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center" >Join</Link>
                            </div>
                            <div className="tour-body" onClick={showtourfooter}>
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full" >₹15
                                                <FcExpand className="pool-arrow" /></button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block text-white">Time</span>
                                            <span className="timespan">2:30</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className="entry-btn btn_green_random" >Free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right text-sm py-1 px-3 bg-slate-100">
                                <p className="text-black">Free Credits Balance - 1000</p>
                            </div>
                            <div className="tour-footer hidden">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <div className="text-left">
                                    <p className="mb-2 text-sm ">
                                        <FcApproval className="mr-1" />Atleast one answer should be correct to qualify for prize.</p>
                                    <p className="mb-2 text-sm ">
                                        <FcApproval className="mr-1" />Do not refresh the page or exit while playing the quiz.</p>
                                    <p className="mb-2 text-sm ">
                                        <FcApproval className="mr-1" />Rank will be decided on minimum time taken to complete the quiz. </p>
                                    <p className="mb-2 text-sm ">
                                        <FcApproval className="mr-1" />Maintain a good internet connection. </p>
                                    <p className="mb-2 text-sm ">
                                        <FcApproval className="mr-1" />An unstable connection can lead to disqualification. </p>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <h6 className="text-blue-600 text-center">TERMS & CONDITIONS</h6>
                            </div>
                        </div>
                        <div className="tournament-card">
                            <div className="tour-header ">
                                <h4 className="mb-0">2 Player 1 Winner</h4>

                                <span className="text-green-600 flex items-center"><FaRegUser />1+</span>
                                <Link href="/start-tournament" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Join</Link>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className="btn pool-btn w-full" onClick={showtourfooter}>₹15
                                                <FcExpand className="pool-arrow" /></button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 block text-white">Time</span>
                                            <span className="timespan">2:30</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span>ENTRY FEE</span>
                                            <span className="btn entry-btn" >₹5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-footer hidden">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <div>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Atleast one answer should be correct to qualify for prize.</p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Do not refresh the page or exit while playing the quiz.</p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Rank will be decided on minimum time taken to complete the quiz. </p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Maintain a good internet connection. </p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />An unstable connection can lead to disqualification. </p>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <h6 className="text-blue-600 text-center">TERMS & CONDITIONS</h6>
                            </div>
                        </div>


                        <div className="tournament-card">
                            <div className="tour-header ">
                                <h4 className="mb-0">New Tournament</h4>

                                <span className="text-green-600 flex items-center"><FaRegUser />1+</span>
                                <button onClick={() => setOptionModalShow(true)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Join</button>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className="btn pool-btn w-full" onClick={showtourfooter}>₹15
                                                <FcExpand className="pool-arrow" /></button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 block text-white">Time</span>
                                            <span className="timespan">2:30</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span>ENTRY FEE</span>
                                            <span className="btn entry-btn" >₹5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tour-footer hidden">
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                    <div>
                                        <span>Rank 1: ₹02</span>
                                    </div>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <div>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Atleast one answer should be correct to qualify for prize.</p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Do not refresh the page or exit while playing the quiz.</p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Rank will be decided on minimum time taken to complete the quiz. </p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />Maintain a good internet connection. </p>
                                    <p className="mb-2 text-sm flex items-center">
                                        <FcApproval className="mr-1" />An unstable connection can lead to disqualification. </p>
                                </div>
                                <hr className="my-3 h-px bg-gray-200 border-0 " />
                                <h6 className="text-blue-600 text-center">TERMS & CONDITIONS</h6>
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

                {/* add cash modal */}
                {show ? (
                    <AddCashModal show={show} setShow={(bool) => setShow(bool)} />
                ) : null}
                {/* start withdraw Modal */}

                {loginshow ? (
                    <LoginAlert show={loginshow} setShow={(bool) => loginsetShow(bool)} />
                ) : null}

                {quizlimitshow ? (
                    <QuizLimitModal showLimit={quizlimitshow} quizLimitSec={10} setShowLimit={(bool) => quizlimitsetShow(bool)} />
                ) : null}


                {/* Quiz tournament Option modal */}
                {optionModalshow ? (
                    <>
                        <div id="optionModal" tabIndex={-1} className="flex p-3 justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none" >
                            <div className="relative bg-white rounded-md shadow w-full  max-w-2xl md:h-auto">
                                <div className="flex items-center justify-between p-3 border-b rounded-t ">
                                    <div>
                                        <h3 className="text-xl text-gray-900 ">
                                            Select Mode
                                        </h3>
                                        <Link href="/friend-challenge-rules" className="text-primary hover:text-red-600 hover:underline">Read rules here <MdOutlineOpenInNew /> </Link>
                                    </div>

                                    <button type="button" onClick={() => setOptionModalShow(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center " >

                                        <AiOutlineClose className="w-5 h-5" />
                                    </button>
                                </div>
                                <ul role="list" className="divide-y divide-gray-200 p-3">
                                    <li className="hover:bg-cyan-50">
                                        <Link href="/create-battle" className=" py-3 sm:py-4 flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image src="/images/battle-friend.png" width={48} height={48} quality={100} alt="profile" ></Image>
                                            </div>
                                            <div className="flex-1">
                                                <p className=" font-bold text-gray-900 truncate ">
                                                    Friends
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    Invite & Play With Friends
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                <MdOutlineArrowForwardIos />
                                            </div>
                                        </Link>
                                    </li>

                                    <li className="hover:bg-cyan-50">
                                        <button onClick={() => participatesetShow(true)} className="w-full py-3 sm:py-4 flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image src="/images/eyes.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                            </div>
                                            <div className="flex-1  text-left ">
                                                <p className=" font-bold text-gray-900 truncate ">
                                                    Random
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    Play With Random Players          </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                <MdOutlineArrowForwardIos />
                                            </div>
                                        </button>
                                    </li>
                                    <li className="hover:bg-cyan-50">
                                        <Link href="/solo-tournament" className=" py-3 sm:py-4 flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image src="/images/t_heart.png" width={48} height={48} quality={100} alt="profile" ></Image>

                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className=" font-bold text-gray-900 truncate ">
                                                    Solo
                                                </p>
                                                <p className="text-sm text-gray-500 truncate">
                                                    Practise and test your skills
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                                <MdOutlineArrowForwardIos />
                                            </div>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                    </>
                ) : null}
                {/* Quiz tournament Option modal */}

                {/* Quiz participate modal */}
                {participateshow ? (
                    <>
                        <div id="participateModal" data-modal-placement="fullscreen" tabIndex={-1} className="overscroll-contain  overflow-x-hidden overflow-y-auto fixed inset-x-0 top-0 h-full z-[1111] outline-none focus:outline-none" >
                            <div className="relative w-full h-full ">
                                <div className="relative bg-[#010a3a]   w-full h-full lg:justify-center lg:items-center lg:flex">

                                    <div className=" text-center py-5 px-3 container">
                                        <div className="mb-5">
                                            <Lottie loop animationData={lottiewait} play className="m-auto w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]" />
                                        </div>
                                        <h4 className="mb-0  font-normal text-white text-xl ">Please wait, looking for opponent</h4>
                                        {/* <p className="mb-5 text-gray-400">Stay on this window, once the timer hits 0 so you can go with 'Go First' option </p> */}
                                        {/* <h6 className="text-yellow-300 mb-3">Group created</h6> */}
                                        <div className="px-3 py-2 mb-3 text-yellow-300">
                                            <span className="text-[36px]">00 : 60</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">



                                            <button onClick={() => soloModalsetshow(true)} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300   font-medium rounded-sm  px-5 py-3 text-center mb-2 ">Go Solo</button>

                                            <button type="button" onClick={() => participatesetShow(false)} className="text-white w-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300  font-medium rounded-sm  px-5 py-3 text-center mb-2">Exit</button>


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

                {/* Quiz Solo Catetgory modal */}
                {soloModalshow ? (
                    <>
                        <div className=" overflow-hidden  fixed inset-x-0 top-0 h-full z-[1111] outline-none focus:outline-none" >
                            <div className="relative w-full h-full ">
                                <div className="relative bg-[#010a3a]   w-full h-full ">
                                    <div className="container p-5">
                                        <div className=" mb-3">
                                            <h4 className="text-white mb-2">Solo Tournament</h4>
                                            <div className="relative flex items-baseline space-x-2 pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-gradient-color before:rounded-lg">
                                                <h3 className=" text-yellow-300"><span className="">₹1000</span></h3>
                                                <p className="text-gray-300 font-medium"> Prize</p>
                                            </div>
                                        </div>
                                        <div className="mb-3">

                                            <div className="flex items-center justify-between mb-3">
                                                <h5 className="text-lg text-gray-100 ">Choose Category</h5>
                                                <p className="text-sm font-medium text-gray-400 hover:underline">
                                                    235 </p>
                                            </div>
                                            <div className="relative">
                                                <div className="form-group mb-3">
                                                    <select id="category" className="bg-gray-50 border border-gray-400 text-gray-900  rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                                        <option selected disabled>Select</option>
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
                                        </div>
                                        <div className="  mb-3">
                                            <h5 className="text-lg  text-gray-100 ">Rules</h5>
                                            <p className="text-gray-300">🎯 Total questions asked = 10</p>
                                            <p className="text-gray-300 mb-3">✅ Correct answer to win = 8</p>
                                            <p className="text-yellow-300 text-sm">You must answer at least <big>8</big> questions correctly to be a winner</p>
                                        </div>

                                        <div className="text-center">
                                            <Link href="/play-solo-tournament" className="gradiant-btn w-full mb-3">Start Tournament </Link>
                                            <button onClick={() => soloModalsetshow(false)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm w-full text-sm px-5 py-2.5">Cancel </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                    </>
                ) : null}
                {/* Quiz Solo Catetgory modal */}


                {/* fixed plus button for challenge */}
                <div className="opacity-80 fixed inset-0 z-[100] bg-black hidden overflow-hidden speed-dial-bg"></div>
                <div className="fixed right-2 bottom-20 group z-[101]">
                    <div className="relative speed-dial mb-2 hidden space-y-1 z-[111]">
                        <Link href="/tournament-challenges" className="relative min-w-[150px] p-2 flex items-center  space-x-1  text-gray-900 bg-white rounded-sm border border-gray-200 hover:text-blue-900  shadow-sm hover:border-blue-900  focus:ring-1 focus:ring-blue-400 focus:outline-none">
                            <Image src="/images/battle-friend.png" alt="play battle" width={28} height={28} />
                            <span className="font-medium text-lg">Challenges</span>
                        </Link>
                        <Link href="/tournament-history" className="relative min-w-[150px] p-2 flex items-center  space-x-1  text-gray-900 bg-white rounded-sm border border-gray-200 hover:text-blue-900  shadow-sm hover:border-blue-900  focus:ring-1 focus:ring-blue-400 focus:outline-none">
                            <Image src="/images/battle-friend.png" alt="play battle" width={28} height={28} />
                            <span className="font-medium text-lg">History</span>
                        </Link>
                        <Link href="videos/how-to-register-at-gyanok" className="relative min-w-[150px] p-2 flex items-center  space-x-1  text-gray-900 bg-white rounded-sm border border-gray-200 hover:text-blue-900  shadow-sm hover:border-blue-900  focus:ring-1 focus:ring-blue-400 focus:outline-none">
                            <Image src="/images/battle-promo.png" alt="play battle" width={28} height={28} />
                            <span className=" font-medium text-lg">How To Play</span>
                        </Link>
                    </div>

                    <button type="button" onClick={handleBattleMenu} className="dialbutton ml-auto transition-transform flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:outline-none ">
                        <svg className="w-10 h-10 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    </button>

                </div>
                {/* fixed plus button for challenge */}
            </Layout>


            <style global jsx>{`
        body {
           overscroll-behavior: contain !important;
        }
      `}</style>

        </>
    )
}