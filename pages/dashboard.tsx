import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckCircleFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FaRegCalendarAlt, FaUserShield } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { MdVerifiedUser } from "react-icons/md";
import Layout from "../components/Layout";

export default function Dashboard() {
    const [initWidth, setInitWidth] = useState(1024)

    useEffect(() => {
        setInitWidth(window.innerWidth);
    }, [])

    return (
        <>
            <Head>
                <title>Dashboard | GyanOK.com</title>
                <meta name="description" content="User Dashboard" />
                <meta name="keywords" content="Dashboard" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Dashboard | GyanOK.com" />
                <meta property="twitter:description" content="User Dashboard" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Dashboard | GyanOK.com" />
                <meta property="og:description" content="User Dashboard" />
                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <Layout>

                <section className="py-8">
                    <div className="container">


                        <div className="flex lg:space-x-5  shadow-sm space-x-4 lg:p-5 p-1  mb-5">
                            <div className="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full w-fit h-fit  relative flex-shrink-0" >
                                <Image src="/images/user-profile.jpg" width={130} height={130} alt="user" className="lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] object-cover rounded-full border-2 border-white" />
                                <Image src="/images/level1.png" width={80} height={80} alt="user" className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] absolute lg:-bottom-6 lg:-right-2 -bottom-1 -right-1   rounded-full" />
                            </div>
                            <div className="text-left flex-grow">
                                <h2 className="lg:font-semibold lg:text-2xl text-white text-xl ">Anandi Merlyn</h2>
                                <p className="text-gray-300 lg:text-base text-sm"> Mothrowala, Dehradun</p>
                                <div className="flex justify-between lg:mt-3 mt-2 text-gray-300">
                                    <div className="text-left w-1/3">
                                        <Link href="/all-user-search-list">
                                            <span className="lg:text-2xl text-lg text-white">120k </span>
                                            <p className="lg:text-base text-xs">Followers</p>
                                        </Link>
                                    </div>
                                    <div className="text-left w-1/3">
                                        <Link href="/all-user-search-list">
                                            <span className="lg:text-2xl text-lg text-white">120k </span>
                                            <p className="lg:text-base text-xs">Following</p>
                                        </Link>
                                    </div>
                                    <div className="text-left w-1/3">
                                        <Link href="/all-user-search-list">
                                            <span className="lg:text-2xl text-lg text-white">120k </span>
                                            <p className="lg:text-base text-xs">Mate</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 
                        <div className=" bg-white  p-3  rounded-sm mb-5 relative overflow-hidden">
                            <div className=" z-1 relative drop-shadow-sm">
                                <h5 className=" text-primary mb-1 flex items-center whitespace-nowrap "><MdVerifiedUser />Complete Profile (86%)</h5>
                                <p className="text-gray-600 mb-3">Enter the profile details eg: KYC, PAN CARD</p>

                                <button type="button" className="text-white w-full lg:w-auto justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-2 text-center inline-flex items-center mb-3">
                                    Complete Profile
                                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div>
                                <Image src="/images/check-profile.png" width={130} height={130} className="mx-auto absolute bottom-0 right-0 z-0 opacity-40" alt="user" />
                            </div>
                        </div> */}



                        {/* <div className="videoarea mb-5 border-2 border-gray-500 rounded-sm overflow-hidden">

                            <iframe src="https://www.youtube.com/embed/bcMQwTzqHSI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className=" w-full lg:h-[500px] h-[220px] "></iframe>
                        </div> */}

                        <div className="quick-links-card">
                            <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 transition-all duration-300   mb-5">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-shrink-0">
                                    <Image src="/images/q-comp.png" alt="competition" width={64} height={64} />

                                    </div>
                                    <div>

                                        <h4 className="text-lg text-black font-semibold">Competition Quiz </h4>
                                        <p className=" text-sm text-gray-900">Compete with others to get on top</p>
                                    </div>
                                </div>
                                <div>
                                    <Link href="/competition" className="inline-flex justify-center items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50 w-10 h-10 rounded-full text-sm  text-center  ">
                                        <AiOutlineArrowRight className="ml-1  w-4 h-4" />
                                    </Link>

                                </div>
                            </div>
                            <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 transition-all duration-300   mb-5">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-shrink-0">
                                        <Image src="/images/q-tour.webp" alt="competition" width={64} height={64} />
                                    </div>
                                    <div>

                                        <h4 className="text-lg text-black font-semibold">Tournament Quiz </h4>
                                        <p className=" text-sm text-gray-900">Play quiz in real time with others</p>
                                    </div>
                                </div>
                                <div>
                                    <Link href="/competition" className="inline-flex justify-center items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50 w-10 h-10 rounded-full text-sm  text-center  ">
                                        <AiOutlineArrowRight className="ml-1  w-4 h-4" />
                                    </Link>

                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <div className="grid gap-5 grid-cols-2">
                            <Link href="" className="group lg:p-3 p-1 text-left bg-[#ffffff1f] flex lg:space-x-3  items-center rounded-sm">
                                    <div className="icon my-2">
                                        <Image src="/images/g_rank.png" className=" mx-auto " width={60} height={60} alt="callback" />
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h3 className="text-white">1453</h3>
                                        <p className="block text-gray-400 text-xs lg:text-base">Rank</p>
                                    </div>

                                </Link>

                                <Link href="" className="group lg:p-3 p-1 text-left bg-[#ffffff1f] flex lg:space-x-3  items-center rounded-sm">

                                    <div className="icon my-2">
                                        <Image src="/images/g_winnings.png" className=" mx-auto " width={60} height={60} alt="callback" />
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h3 className="text-white">1453</h3>
                                        <p className="block text-gray-400 text-xs lg:text-base">Winnings</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="p-2 bg-[#ffffff1f] rounded-sm shadow lg:p-5 mb-5">
                            <div className="flex w-full items-center mb-2">

                                <Image src="/images/level1.png" width={80} height={80} className="flex-shrink-0" alt="user" />
                                <div className="w-full">
                                    <h3 className="text-yellow-300 mb-2">Newbie<Link href="/rank-list" className="ml-3"><BsFillInfoCircleFill /></Link></h3>
                                    <div className="w-full text-center bg-gray-200 rounded-lg overflow-hidden outline outline-offset-2 outline-1 outline-white	 mb-2">
                                        <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400" style={{ width: "45%" }}><span className="text-sm"> 100 / 1000</span></div>
                                    </div>
                                </div>



                            </div>

                            {/* <p className="text-center text-yellow-300 text-sm">Top 500 players in the ranked leaderboard</p> */}
                        </div>

                        {/* <div className="challenges-area p-3 bg-[#ffffff1f] rounded-sm shadow lg:p-5 mb-8">
                            <div className="flex justify-between  mb-1">
                                <h5 className="text-white text-xl ">Challenges</h5>

                                <Link href="/tournament-challenges" className="text-yellow-300 text-sm">View All</Link>
                            </div>

                            <p className="text-sm font-normal text-gray-300 mb-3 ">Accept challenge to beat your friend</p>

                            <AliceCarousel
                                mouseTracking
                                disableDotsControls={true}
                                disableButtonsControls={false}
                                innerWidth={initWidth}
                                autoPlay={true}
                                autoPlayInterval={3000}
                                animationDuration={800}
                                infinite={false}
                                controlsStrategy="responsive"
                                renderPrevButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center "><AiOutlineArrowLeft /></button>
                                }}
                                renderNextButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center"><AiOutlineArrowRight /></button>
                                }}
                                responsive={{
                                    0: { items: 1 },
                                    568: { items: 1 },
                                    1024: { items: 1 },
                                }}>


                                <div className="relative rounded-sm  border border-gray-500 mb-3 ">
                                    <div className="p-3 border-b border-gray-500 flex space-x-3">
                                        <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                            <FiArrowUpRight className="text-3xl" />
                                        </div>
                                        <div>
                                            <p className="text-white truncate " >Himanshu Verma</p>
                                            <p className="text-gray-300 text-sm" >2 Player 1 Winner</p>
                                            <p className="text-yellow-300 text-xs " >Expires in 18 hr 4 min</p>
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
                                        <Link href="/tournament-challenges" className="text-black  w-1/2 bg-gray-200  focus:ring-2 focus:outline-none focus:ring-gray-300    font-medium rounded-sm  px-5 py-2.5 text-center text-sm ">Cancel</Link>
                                        <Link href="/tournament-challenges" className="gradiant-btn w-1/2 text-sm ">Accept</Link>


                                    </div>
                                </div>

                                <div className="relative rounded-sm  border border-gray-500 mb-3 ">
                                    <div className="p-3 border-b border-gray-500 flex space-x-3">
                                        <div className="relative inline-flex shrink-0 items-center justify-center w-[45px] h-[45px]  bg-gray-100 rounded-full ">
                                            <FiArrowUpRight className="text-3xl" />
                                        </div>
                                        <div>
                                            <p className="text-white truncate " >Sunil Singh Rawat</p>
                                            <p className="text-gray-300 text-sm" >2 Player 1 Winner</p>
                                            <p className="text-yellow-300 text-xs " >Expires in 18 hr 4 min</p>
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
                                        <Link href="/tournament-challenges" className="text-black  w-1/2 bg-gray-200  focus:ring-2 focus:outline-none focus:ring-gray-300    font-medium rounded-sm  px-5 py-2.5 text-center text-sm ">Cancel</Link>
                                        <Link href="/tournament-challenges" className="gradiant-btn w-1/2 text-sm ">Accept</Link>


                                    </div>
                                </div>



                            </AliceCarousel>
                        </div> */}


                        {/* <div className="daily-task mb-8">
                            <div className="w-full p-3 bg-[#ffffff1f] rounded-sm shadow lg:p-5 ">
                                <div className="flex justify-between  mb-1">
                                    <h5 className="text-white text-xl ">Daily Task</h5>

                                    <p className="text-yellow-300 text-sm">4 Task Pending</p>
                                </div>

                                <p className="text-sm font-normal text-gray-300 ">Compelete all task to get bonus rewards</p>
                                <ul className="my-4 space-y-3">
                                    <li>
                                        <Link href="" className="flex items-center p-3 text-base  text-gray-900 rounded-sm bg-white group border border-green-500">
                                            <Image src="/images/q-current.png" width={32} height={32} alt="quiz" />
                                            <div className="ml-2 flex-1">
                                                <span className="text-lg whitespace-nowrap">Tournament Quiz</span>
                                                <p className="text-xs text-gray-500">0/3 Completed</p>
                                                <p className="text-xs text-yellow-500 font-bold mt-1">Win Upto ₹10,000 per day</p>
                                            </div>

                                            <span className="inline-flex items-center justify-center  ml-3 text-2xl font-medium text-green-600 "><BsCheckCircleFill /></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="flex items-center p-3 text-base  text-gray-900 rounded-sm bg-white group border border-green-500">
                                            <Image src="/images/q-comp.png" width={32} height={32} alt="quiz" />
                                            <div className="ml-2 flex-1">
                                                <span className="text-lg whitespace-nowrap">Competition Quiz</span>
                                                <p className="text-xs text-gray-500">0/3 Completed</p>
                                                <p className="text-xs text-yellow-500 font-bold mt-1">Win Upto ₹1,000 per day</p>
                                            </div>
                                            <span className="inline-flex items-center justify-center  ml-3 text-2xl font-medium text-green-600 "><BsCheckCircleFill /></span>

                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="" className="flex items-center p-3 text-base  text-gray-900 rounded-sm bg-white group">
                                            <Image src="/images/q-polls.webp" width={32} height={32} alt="quiz" />
                                            <div className="ml-2 flex-1">
                                                <span className="text-lg whitespace-nowrap">Polls</span>
                                                <p className="text-xs text-gray-500">0/1 Completed </p>
                                            </div>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className="flex items-center p-3 text-base  text-gray-900 rounded-sm bg-white group">
                                            <Image src="/images/q-polls.webp" width={32} height={32} alt="quiz" />
                                            <div className="ml-2 flex-1">
                                                <span className=" text-lg whitespace-nowrap">Current Affairs</span>
                                                <p className="text-xs text-gray-500">0/1 Completed</p>
                                            </div>
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </div> */}

                        {/* <div className="current-affairs-news p-3 bg-[#ffffff1f] rounded-sm shadow lg:p-5 mb-8">
                            <div className="flex justify-between  mb-3">
                                <div>
                                    <h5 className="text-white text-xl ">Current Affairs</h5>

                                    <span className="text-sm text-gray-300">12 November 2022</span>
                                </div>
                                <Link href="/current-affair-news" className="text-yellow-300 text-sm">View All</Link>
                            </div>

                            <AliceCarousel
                                mouseTracking
                                disableDotsControls={true}
                                disableButtonsControls={false}
                                innerWidth={initWidth}
                                autoPlay={true}
                                autoPlayInterval={3000}
                                animationDuration={800}
                                infinite={false}
                                controlsStrategy="responsive"
                                renderPrevButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center "><AiOutlineArrowLeft /></button>
                                }}
                                renderNextButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center"><AiOutlineArrowRight /></button>
                                }}
                                responsive={{
                                    0: { items: 1 },
                                    568: { items: 2 },
                                    1024: { items: 3 },
                                }}>
                                <div className="p-1">
                                    <div className="w-full p-3 lg:p-5 bg-white   rounded-sm shadow ">
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-100 rounded-full mb-3 ">
                                            <span className="font-medium text-blue-900 text-xl ">1</span>
                                        </div>

                                        <p className="mb-3 text-lg">Powering innovation & trust at 200,000+ companies worldwide
                                        </p>
                                        <Link href="current-affair-news" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-600 mb-3">
                                            Learn more
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="w-full p-3 lg:p-5 bg-white   rounded-sm shadow ">
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-100 rounded-full mb-3 ">
                                            <span className="font-medium text-blue-900 text-xl ">2</span>
                                        </div>

                                        <p className="mb-3 text-lg">Powering innovation & trust at 200,000+ companies worldwide
                                        </p>
                                        <Link href="current-affair-news" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-600 mb-3">
                                            Learn more
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="w-full p-3 lg:p-5 bg-white   rounded-sm shadow ">
                                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-100 rounded-full mb-3 ">
                                            <span className="font-medium text-blue-900 text-xl ">3</span>
                                        </div>

                                        <p className="mb-3 text-lg">Powering innovation & trust at 200,000+ companies worldwide
                                        </p>
                                        <Link href="current-affair-news" className="inline-flex items-center text-sm text-blue-400 hover:text-blue-600 mb-3">
                                            Learn more
                                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </AliceCarousel>
                        </div> */}

                        <div className="leaderboard rounded-sm  bg-[#ffffff1f] mb-5 lg:p-5 p-3" >
                            <div className=" mb-3 flex justify-between pb-3 " >
                                <div>
                                    <h5 className="text-white text-xl ">Leaderboard</h5>
                                    <span className="text-sm text-gray-300">Top 3 performers of the GyanOK</span>
                                </div>
                                <Link href="/quiz-leaderboard" className="text-yellow-300 text-sm">View All</Link>
                            </div>


                            <div className="grid grid-cols-3 gap-1 lg:gap-3">
                                <div className="relative z-[1] text-center p-2 rounded before:w-full before:h-[calc(100%-40px)] before:absolute before:left-0 before:top-[40px] before:rounded before:z-[-1]  before:bg-gradient-to-r from-[#ffffff] to-[#cacaca]">
                                    <div className="h-[60px] w-[60px] rounded-full mx-auto mb-3 relative ring-1 ring-white">
                                        <img src="/images/user-profile.jpg" alt="" className="w-full h-full rounded-full" />
                                        <span className="h-[27px] w-[27px] absolute right-0 -bottom-1 rounded-full bg-yellow-400 border-2 border-white flex flex-col items-center justify-center text-white text-xs font-medium">2</span></div>
                                    <h4 className="text-xs lg:text-base text-gray-800 mb-1">Nicole Kidman</h4>
                                    <div className="text-center p1-2 px-3  inline-block bg-gray-100 rounded-lg"><h6 className="text-xs lg:text-sm text-gray-600">₹11125.25</h6></div>
                                </div>
                                <div className="relative z-[1] text-center p-2 rounded before:w-full before:h-[calc(100%-40px)] before:absolute before:left-0 before:top-[40px] before:rounded before:z-[-1]  before:bg-gradient-to-r from-[#ffffff] to-[#ffeda3]">
                                    <div className="h-[64px] w-[64px] rounded-full mx-auto mb-3 relative ring-2 ring-[#FFC155]"><span className="crown absolute -top-[20px] left-1/2 -translate-x-1/2"><img src="/images/crown.svg" alt="" /></span><img src="/images/user-profile.jpg" alt="" className="w-full h-full rounded-full" /><span className="h-[27px] w-[27px] absolute right-0 -bottom-1 rounded-full bg-yellow-400 border-2 border-white flex flex-col items-center justify-center text-white text-xs font-medium">1</span></div>
                                    <h4 className="text-xs lg:text-base text-yellow-600 mb-1">Monica Bellucci</h4>
                                    <div className="text-center py-1 px-3  inline-block bg-yellow-100 rounded-lg"><h6 className="text-xs lg:text-sm text-yellow-600">₹11125.25</h6></div>
                                </div>
                                <div className="relative z-[1] text-center p-2 rounded before:w-full before:h-[calc(100%-40px)] before:absolute before:left-0 before:top-[40px] before:rounded before:z-[-1]  before:bg-gradient-to-r from-[#ffffff] to-[#f29697]">
                                    <div className="h-[60px] w-[60px] rounded-full mx-auto mb-3 relative ring-1 ring-white"><img src="/images/user-profile.jpg" alt="" className="w-full h-full rounded-full" /><span className="h-[27px] w-[27px] absolute right-0 -bottom-1 rounded-full bg-yellow-400 border-2 border-white flex flex-col items-center justify-center text-white text-xs font-medium">3</span></div>
                                    <h4 className="text-xs lg:text-base text-rose-600 mb-1">Pamela Anderson</h4>
                                    <div className="text-center p1-2 px-3  inline-block bg-rose-100 rounded-lg"><h6 className="text-xs lg:text-sm text-rose-600">₹11125.25</h6></div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p className="text-gray-400">Play more to see your name here</p>
                            </div>

                        </div>

                        <div className="support-area relative bg-[#ffffff1f] rounded-sm mb-5 z-2 p-5 mt-3">

                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center">
                                <div className="support-content xl:col-span-2">
                                    <span className="block text-slate-300  text-lg">Refer & Earn</span>
                                    <h2 className="text-[24px] lg:text-[30px] mb-3 text-white">Get Upto <big className="text-yellow-300">₹10*</big> For every new user you refer </h2>

                                    <button className="gradiant-btn   ">Read More</button>
                                </div>

                            </div>


                        </div>


                        {/* <div className="trivia-area   p-3 bg-[#ffffff1f] rounded-sm shadow lg:p-5 mb-8">
                            <div className="flex justify-between  mb-5">
                                <div>
                                    <h5 className="text-white text-xl ">Trivia Quizzes</h5>
                                    <span className="text-sm text-gray-300">Fun and entertaining quiz</span>
                                </div>
                                <Link href="/trivia-quizzes" className="text-yellow-300 text-sm">View All</Link>
                            </div>

                            <AliceCarousel
                                mouseTracking
                                disableDotsControls={true}
                                disableButtonsControls={false}
                                innerWidth={initWidth}
                                autoPlay={true}
                                autoPlayInterval={3000}
                                animationDuration={800}
                                infinite={false}
                                controlsStrategy="responsive"
                                renderPrevButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center "><AiOutlineArrowLeft /></button>
                                }}
                                renderNextButton={() => {
                                    return <button className=" text-white border focus:bg-white focus:text-black rounded-full w-8 h-8 inline-flex justify-center items-center"><AiOutlineArrowRight /></button>
                                }}
                                responsive={{
                                    0: { items: 1 },
                                    568: { items: 2 },
                                    1024: { items: 4 },
                                }}>
                                <div className="p-1">
                                    <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                        <Link href="/trivia-detail">
                                            <div className=" relative">
                                                <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                                <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                            </div>
                                            <div className=" p-3 lg:p-5 min-h-[120px]">
                                                <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                                    <div className=" flex items-center space-x-2">
                                                        <FaUserShield />
                                                        <span>By GyanOK </span>
                                                    </div>
                                                    <div className=" flex items-center space-x-2">
                                                        <FaRegCalendarAlt />
                                                        <span>Jan 29, 2022</span>
                                                    </div>
                                                </div>
                                                <h4 className=" text-lg  hover:text-primary transition duration-150">
                                                    Professional Mobile Painting and Sculpting
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                        <Link href="/trivia-detail">
                                            <div className=" relative">
                                                <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />
                                                <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                            </div>
                                            <div className=" p-3 lg:p-5 min-h-[120px]">
                                                <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                                    <div className=" flex items-center space-x-2">
                                                        <FaUserShield />
                                                        <span>By GyanOK </span>
                                                    </div>
                                                    <div className=" flex items-center space-x-2">
                                                        <FaRegCalendarAlt />
                                                        <span>Jan 29, 2022</span>
                                                    </div>
                                                </div>
                                                <h4 className=" text-lg  hover:text-primary transition duration-150">
                                                    Professional Mobile Painting and Sculpting
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                        <Link href="/trivia-detail">
                                            <div className=" relative">
                                                <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />
                                                <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                            </div>
                                            <div className=" p-3 lg:p-5 min-h-[120px]">
                                                <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                                    <div className=" flex items-center space-x-2">
                                                        <FaUserShield />
                                                        <span>By GyanOK </span>
                                                    </div>
                                                    <div className=" flex items-center space-x-2">
                                                        <FaRegCalendarAlt />
                                                        <span>Jan 29, 2022</span>
                                                    </div>
                                                </div>
                                                <h4 className="text-lg  hover:text-primary transition duration-150">
                                                    Professional Mobile Painting and Sculpting
                                                </h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </AliceCarousel>
                        </div> */}
                    </div>
                    {/*  all Skeleton */}
                    <div className="container">

                        <div role="status" className="animate-pulse mb-3 ">
                            <div className="lg:flex lg:items-center lg:text-left text-center lg:space-x-2">
                                <svg className="text-gray-200 w-40 h-40 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                <div className="w-full lg:text-left text-center">
                                    <div className="lg:block flex justify-center">
                                        <div>
                                            <div className="w-36 h-4 bg-gray-200 rounded-sm mb-2"></div>
                                            <div className="w-36 h-2 bg-gray-200 rounded-sm  mb-5"></div>
                                        </div>
                                    </div>

                                    <div className="grid gap-3 grid-cols-3 ">
                                        <div>
                                            <div className="w-2/3 h-6 bg-gray-200 rounded-sm  mb-3"></div>
                                            <div className="w-1/2 h-2 bg-gray-200 rounded-sm mb-3"></div>
                                        </div>
                                        <div>
                                            <div className="w-2/3 h-6 bg-gray-200 rounded-sm  mb-3"></div>
                                            <div className="w-1/2 h-2 bg-gray-200 rounded-sm mb-3"></div>
                                        </div>
                                        <div>
                                            <div className="w-2/3 h-6 bg-gray-200 rounded-sm  mb-3"></div>
                                            <div className="w-1/2 h-2 bg-gray-200 rounded-sm mb-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div role="status" className="animate-pulse p-5 bg-white/20 rounded-sm mb-5 text-center">
                            <svg className="w-12 h-12 text-gray-200 mb-3 mx-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                            <div className="h-3 bg-gray-300 rounded-sm w-48 mb-3 mx-auto"></div>
                            <div className="h-2 mx-auto bg-gray-300 rounded-sm mb-1"></div>

                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-3">

                            <div className="border border-gray-200 rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">

                                    <div className="flex items-center space-x-1">

                                        <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">

                                    <div className="flex items-center space-x-1">

                                        <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">

                                    <div className="flex items-center space-x-1">

                                        <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-sm mb-3">
                            <div role="status" className=" animate-pulse">
                                <div className=" p-5 pb-0 flex justify-between">
                                    <div className=" space-y-2">
                                        <div className="h-4 bg-gray-200 rounded-sm  w-36"></div>
                                        <div className="h-4 bg-gray-200 rounded-sm  w-48"></div>
                                    </div>
                                    <div className="h-4 bg-gray-300 rounded-lg w-16"></div>
                                </div>
                                <div className="p-5 space-y-3">
                                    <div className="h-12 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-12 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-12 bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-12 bg-gray-200 rounded-sm  w-full"></div>
                                </div>
                            </div>
                        </div>



                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-3">

                            <div className="bg-white rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">

                                    <div className="text-center">

                                        <svg className="text-gray-200 w-12 h-12 mx-auto " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm mx-auto"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm mx-auto"></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-white rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">
                                    <div className="text-center">

                                        <svg className="text-gray-200 w-12 h-12 mx-auto " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm mx-auto"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm mx-auto"></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-sm p-3 ">
                                <div role="status" className=" animate-pulse">

                                    <div className="text-center">

                                        <svg className="text-gray-200 w-12 h-12 mx-auto " stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-32 h-6 bg-gray-200 rounded-sm mx-auto"></div>
                                            <div className="w-40 h-3 bg-gray-200 rounded-sm mx-auto"></div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                    {/*  all Skeleton */}
                </section>
            </Layout>


        </>
    )
}