import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { BsArrowRight } from "react-icons/bs";
import NoData from "../components/NoData";
import { useState } from "react";


export default function CurrentAffairsQuiz() {

    const [showMore, setShowMore] = useState(false);
    const text = "Current Affairs play a very important role in preparing for competitive exams. Many examinations are organized by the government in every year. We are providing General Knowledge Questions and Answers of Hindi, Daily Current Affairs 2023, Today Current Affairs for the preparation of all these exams which include Railway, Banking, Police, Army, etc. Current affairs questions and answers are given in the article, which is updated every day.";

    const monthpicker = () => {

    }
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <Head>
                <title>Daily Current Affairs Quiz 2023 | GK Questions PDF By Gyanok</title>
                <meta name="description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta name="keywords" content="Daily Current Affairs Quiz, Current Affairs MCQ Today, Monthly Current Affairs Quiz, Current Affairs Question and Answer, Current Affairs MCQ, Daily Objective Current Affairs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Daily Current Affairs Quiz 2023 | Prepare For GK Daily | GyanOK.com" />
                <meta property="twitter:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Daily Current Affairs Quiz 2023 | Prepare For GK Daily | GyanOK.com" />
                <meta property="og:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area current-quiz">
                    <div className="container">

                        <div className="section-title mb-12 text-center ">
                            <h2 className="text-white w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px] ">
                                Current Affairs Quiz
                            </h2>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className=" text-gray-300 leading-8 text-sm lg:text-base"> {showMore ? text : `${text.substring(0, 75)}`}
                                <button className="text-white  font-semibold " onClick={() => setShowMore(!showMore)}>{showMore ? " Show Less" : "... More"}
                                </button>
                            </p>



                        </div>
                        <div>
                            <div className="form-group flex space-x-1 items-center mb-5">
                                <label htmlFor="datepicker" className="block  font-medium text-yellow-300 text-lg ">Select Month</label>
                                <input type="month" id="datepicker" placeholder="Enter Date" min="2022-08" max="2023-02" onChange={monthpicker} className="w-full text-black-color bg-[#F0EFFF] h-[50px]  leading-[50px]  rounded-sm placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent " />
                            </div>

                            <NoData />
                            {/* skeleton start */}

                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mb-3">

                                <div className="border border-gray-200 rounded-sm ">
                                    <div role="status" className=" animate-pulse">
                                        <div className="py-5 px-3 flex justify-between items-center">
                                            <div className="flex items-center space-x-1">
                                                <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                                <div className=" space-y-2">
                                                    <div className="w-32 h-2 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-24 h-2 bg-gray-200 rounded-sm"></div>
                                                </div>
                                            </div>

                                            <div className="h-8 bg-gray-300 rounded-sm w-16"></div>

                                        </div>

                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-sm ">
                                    <div role="status" className=" animate-pulse">
                                        <div className="py-5 px-3 flex justify-between items-center">
                                            <div className="flex items-center space-x-1">
                                                <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                                <div className=" space-y-2">
                                                    <div className="w-32 h-2 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-24 h-2 bg-gray-200 rounded-sm"></div>
                                                </div>
                                            </div>

                                            <div className="h-8 bg-gray-300 rounded-sm w-16"></div>

                                        </div>

                                    </div>
                                </div>
                                <div className="border border-gray-200 rounded-sm ">
                                    <div role="status" className=" animate-pulse">
                                        <div className="py-5 px-3 flex justify-between items-center">
                                            <div className="flex items-center space-x-1">

                                                <svg className="text-gray-200 w-16 h-16 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"></path></svg>
                                                <div className=" space-y-2">
                                                    <div className="w-32 h-2 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-40 h-3 bg-gray-200 rounded-sm"></div>
                                                    <div className="w-24 h-2 bg-gray-200 rounded-sm"></div>
                                                </div>
                                            </div>

                                            <div className="h-8 bg-gray-300 rounded-sm w-16"></div>

                                        </div>

                                    </div>
                                </div>
                            </div>



                            {/* skeleton end */}

                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>

                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/play-current-affairs" className="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Start<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/current-affairs-quiz-result" className="inline-flex items-center text-black bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-slate-300  shadow-sm shadow-slate-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Result<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>


                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>

                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/play-current-affairs" className="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Start<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>


                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>

                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/play-current-affairs" className="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Start<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>


                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>

                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/play-current-affairs" className="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Start<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 space-y-1 rounded-sm  border transition-all duration-300  hover:bg-black/50">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex-shrink-0">
                                            <div className="bg-white/20 rounded-full shadow-md w-[56px] h-[56px]  mx-auto flex items-center justify-center" >
                                                <span className="text-[26px] text-yellow-300">27</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-sm text-gray-300">Current Affairs Quiz</span>
                                            <h4 className="text-lg text-yellow-300">December 2022 </h4>
                                            <p className=" text-sm text-gray-300">240 User Playing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href="/play-current-affairs" className="inline-flex items-center text-black bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-300  shadow-sm shadow-yellow-300/50  rounded-sm text-sm px-3 py-2 text-center  ">Start<BsArrowRight className="ml-1  w-4 h-4" /></Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>


        </>
    )
}