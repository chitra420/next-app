import Head from "next/head"
import Link from "next/link";
import Layout from "../components/Layout";
import { FaCalendarAlt, FaUser } from "react-icons/fa";


export default function PlayCurrentAffairsQuiz() {
    
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
                        <div className="space-y-2 mb-8">
                            <ul className="space-x-3 text-sm text-yellow-300">
                                <li className="relative inline-flex items-center ">
                                    <FaCalendarAlt />
                                    <span className="ml-1">12th November 2022</span>
                                </li>
                                <li className="relative inline-flex items-center ">
                                    <FaUser />
                                    <span className="ml-1">By GyanOk</span>
                                </li>
                               
                            </ul>
                            <h2 className="text-2xl text-white font-medium capitalize mb-2"> Daily Current Affairs Quiz for 27 December 2022 <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-1 text-center ">Language</button> </h2>
                            <h6 className=" text-gray-400"> Current Affairs MCQ question and answers</h6>
                        </div>
                        <div className="question-box">
                            <div className="steps-inner " id="step-1">
                                <div className="bg-[#f0f8ff] w-full p-4 ">
                                    <h4 className="ques-heading">
                                        1. Make a Multiple Choice Test Template Using Excel
                                    </h4>
                                </div>
                                <div className="px-3 pb-3 ">
                                    <div className="form-inner">
                                        <label className="form-input" htmlFor="play1">
                                            <input type="radio" name="ca1" id="play1"  />
                                            Activate Developer Tab
                                        </label>
                                        <label className="form-input" htmlFor="play2">
                                            <input type="radio" name="ca1" id="play2"  />
                                            Providing a Lecturer
                                        </label>
                                        <label className="form-input" htmlFor="play3">
                                            <input type="radio" name="ca1" id="play3"  />
                                            Personally Quizzes
                                        </label>
                                        <label className="form-input" htmlFor="play4">
                                            <input type="radio" name="ca1" id="play4"  />
                                            Massive Batches
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="steps-inner " id="step-1">
                                <div className="bg-[#f0f8ff] w-full p-4 ">
                                    <h4 className="ques-heading">
                                        1. Make a Multiple Choice Test Template Using Excel
                                    </h4>
                                </div>
                                <div className="px-3 pb-3 ">
                                    <div className="form-inner">
                                        <label className="form-input" htmlFor="play11">
                                            <input type="radio" name="ca2" id="play11"  />
                                            Activate Developer Tab
                                        </label>
                                        <label className="form-input" htmlFor="play22">
                                            <input type="radio" name="ca2" id="play22"  />
                                            Providing a Lecturer
                                        </label>
                                        <label className="form-input" htmlFor="play33">
                                            <input type="radio" name="ca2" id="play33"  />
                                            Personally Quizzes
                                        </label>
                                        <label className="form-input" htmlFor="play44">
                                            <input type="radio" name="ca2" id="play44"  />
                                            Massive Batches
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <Link href="/current-affairs-quiz-result" className="gradiant-btn  next w-full " >
                                    Submit Answers</Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>


        </>
    )
}