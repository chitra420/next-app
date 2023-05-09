import Head from "next/head"
import Link from "next/link";

import Layout from "../components/Layout";


export default function TournamentHitory() {


    return (
        <>
            <Head>
                <title>My Quizzes | GyanOK.com</title>
                <meta name="description" content="All my played quizzes." />
                <meta name="keywords" content="My Quizzes" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="My Quizzes | GyanOK.com" />
                <meta property="twitter:description" content="All my played quizzes." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="My Quizzes | GyanOK.com" />
                <meta property="og:description" content="All my played quizzes." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area">
                    <div className="container ">
                        <div className="mb-3 ">
                            <h1 className="text-[20px]  lg:text-[24px]  text-white">Tournament History</h1>
                        </div>


                        <div>
                            {/* win area */}
                            <div className="flex   bg-white border-2 border-teal-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-16 lg:w-24 bg-teal-500 text-white text-center">
                                    {/* <BsFillEmojiSmileFill className="w-5 h-5 " /> */}
                                    <h4>W</h4>
                                    <p className="text-xs">Win</p>
                                </div>

                                <div className="flex justify-between items-center flex-wrap w-full p-3">
                                    <div className="">
                                        <p className="text-lg lg:text-xl  text-teal-600 mb-0">2 Player 1 Winner</p>
                                        <p className=" text-xs lg:text-base text-gray-500">12 August 2021, 12:45 PM</p>
                                    </div>

                                    <div className="my-2  ">
                                        <button type="button" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="flex   bg-white border-2 border-rose-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-16 lg:w-24 bg-rose-500 text-white text-center">

                                     <h4>L</h4>
                                    <p className="text-xs">Loss</p>
                                </div>

                                <div className="flex justify-between items-center  w-full p-3">
                                    <div className="">
                                        <p className="text-lg lg:text-xl  text-rose-600 mb-0">3 Player 2 Winner</p>
                                        <p className=" text-xs lg:text-base text-gray-500">12 Novermber 2021, 12:45 PM</p>
                                    </div>

                                    <div className="my-2  ">
                                        <button type="button" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-2 focus:outline-none focus:ring-rose-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                          


                            {/* win area */}



                        </div>
                        

{/* 
                        <div className="w-full  bg-white border border-gray-200 rounded-sm shadow  ">
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 ">

                                    <li className="p-3 ">
                                        <div className="flex justify-between items-center space-x-3">

                                            <div className="">
                                                <p className="font-medium text-gray-900  dark:text-white">
                                                    2 Player 1 Winner
                                                </p>
                                                <p className="text-xs text-gray-500  ">
                                                    25 November 2022 at 12:14 PM
                                                </p>
                                            </div>
                                            <div className="inline-block items-center text-center  ">
                                                <p className="">Won</p>

                                                <span className="text-green-800  rounded-lg px-5">₹8</span>
                                            </div>
                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </li>

                                    <li className="p-3 ">
                                        <div className="flex justify-between items-center space-x-4">

                                            <div className="">
                                                <p className="font-medium text-gray-900  dark:text-white">
                                                    2 Player 1 Winner
                                                </p>
                                                <p className="text-xs text-gray-500  ">
                                                    25 March 2022 at 12:14 PM
                                                </p>
                                            </div>
                                            <div className="inline-block items-center text-center  ">
                                                <p className="">Lost</p>

                                                <span className="text-rose-800  rounded-lg px-5">₹5</span>
                                            </div>

                                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>

                                        </div>
                                    </li>


                                </ul>
                            </div>
                        </div> */}




                    </div>
                </section>



            </Layout>


        </>
    )
}