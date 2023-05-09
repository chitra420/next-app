import Head from "next/head"
import Layout from "../components/Layout";
import Link from "next/link";

export default function GPLMatches() {
   

    return (
        <>
            <Head>
                <title>GPL Matches | GyanOK.com</title>
                <meta name="description" content="All my played quizzes." />
                <meta name="keywords" content="GPL Matches" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="GPL Matches | GyanOK.com" />
                <meta property="twitter:description" content="All my played quizzes." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="GPL Matches | GyanOK.com" />
                <meta property="og:description" content="All my played quizzes." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area">
                    <div className="container relative">
                        <div className="mb-3 ">
                            <h1 className="text-[20px]  lg:text-[24px]  text-white mb-3">GyanOK Prediction League</h1>
                            <div>
                                <Link href="/competition" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2 ">LIVE</Link>
                                <Link href="/my-quizzes" className="focus:outline-none text-black border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5  mr-2">MY QUIZZES</Link>
                                <Link href="/gpl-matches" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-2  ">GPL</Link>
                            </div>
                        </div>
                        <div>
                            {/* win area */}
                            <div className="flex   bg-white border-2 border-teal-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-20 lg:w-24 bg-teal-500 text-white text-center">
                                    {/* <BsFillEmojiSmileFill className="w-5 h-5 " /> */}
                                    <h4>W</h4>
                                    <p className="text-xs">Win</p>
                                </div>

                                <div className="flex justify-between items-center flex-wrap w-full p-3">
                                    <div className="">
                                        <p className="text-base lg:text-lg  text-teal-600 mb-0">RCB Vs MI</p>
                                        <p className=" text-sm lg:text-base text-gray-500">12 August 2021</p>
                                    </div>

                                    <div className="my-2  ">
                                        <Link href="" className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="flex   bg-white border-2 border-rose-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-20 lg:w-24 bg-rose-500 text-white text-center">

                                     <h4>L</h4> 
                                    <p className="text-xs">Loss</p>
                                </div>

                                <div className="flex justify-between items-center  w-full p-3">
                                    <div className="">
                                        <p className="text-base lg:text-lg  text-rose-600 mb-0">RCB Vs MI</p>
                                        <p className=" text-sm lg:text-base text-gray-500">12 August 2021</p>
                                    </div>

                                    <div className="my-2  ">
                                        <Link href="" className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            <div className="flex   bg-white border-2 border-blue-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-20 lg:w-24 bg-blue-500 text-white text-center">
                                    <h4>P</h4>
                                    <p className="text-xs">Pending</p>
                                </div>

                                <div className="flex justify-between items-center flex-wrap w-full p-3">
                                    <div className="">
                                        <p className="text-base lg:text-lg  text-blue-600 mb-0">RCB Vs MI</p>
                                        <p className=" text-sm lg:text-base text-gray-500">12 August 2021</p>
                                    </div>

                                    <div className="my-2  ">
                                        <Link href="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="flex   bg-white border-2 border-blue-500 rounded-sm overflow-hidden mb-3">
                                <div className=" flex-shrink-0 p-3 w-20 lg:w-24 bg-blue-500 text-white text-center">
                                    <h4>C</h4>
                                    <p className="text-xs">Cancel</p>
                                </div>

                                <div className="flex justify-between items-center flex-wrap w-full p-3">
                                    <div className="">
                                        <p className="text-base lg:text-lg  text-blue-600 mb-0">RCB Vs MI</p>
                                        <p className=" text-sm lg:text-base text-gray-500">12 August 2021</p>
                                    </div>

                                    <div className="my-2  ">
                                        <Link href="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center ">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                </div>

                            </div>


                            {/* win area */}



                        </div>
                    </div>
                </section>



            </Layout>


        </>
    )
}