import Head from "next/head"
import Link from "next/link";
import { useState } from "react"


import { RiTimerFlashLine } from "react-icons/ri";
import Layout from "../components/Layout";


export default function PlayCompetition() {
    const [act, setActive] = useState(0);


    return (
        <>


            <Head>
                <title>Play Competition - Play Quiz and Win Real Money | GyanOK.com</title>
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
            <section className="play-tour-area pb-5">
                <div className="container">

                    {/* <div className="question-timer">
                        <div className="timer-icon">
                            <RiTimerFlashLine className="text-white text-[40px]" />
                        </div>
                        <span className="timer-countdown">40</span>
                    </div> */}

                    <div className="question-box">
                        <div className="steps-inner " id="step-1">

                            <div className="step-bar p-3 lg:p-5">
                                <div className="flex justify-between">
                                    <span className="step-counter">
                                        Question 1 / 4
                                    </span>
                                    <span className="step-counter">
                                        20%
                                    </span>
                                </div>
                                <div className="step-bar-inner">
                                    <div className="step-bar-move step-move m25"></div>
                                </div>
                            </div>
                            <div className="p-3 ">
                                <h4 className="ques-heading">
                                    भारत की राजधानी क्या है?
                                </h4>
                                <div className="form-inner">
                                    <label className={`form-input ${act == 1 ? 'active-input' : ''}`} htmlFor="work1">
                                        <input type="radio" name="work" id="work1" onClick={() => setActive(1)} />
                                         राजस्थान  
   

                                    </label>
                                    <label className={`form-input ${act == 2 ? 'active-input' : ''}`} htmlFor="work2">
                                        <input type="radio" name="work" id="work2" onClick={() => setActive(2)} />
                                        दिल्ली
                                    </label>
                                    <label className={`form-input ${act == 3 ? 'active-input' : ''}`} htmlFor="work3">
                                        <input type="radio" name="work" id="work3" onClick={() => setActive(3)} />
                                        कानपुर
                                    </label>
                                    <label className={`form-input ${act == 4 ? 'active-input' : ''}`} htmlFor="work4">
                                        <input type="radio" name="work" id="work4" onClick={() => setActive(4)} />
                                        उत्तराखंड
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons p-3 lg:p-5">
                                <button type="button" className="gradiant-btn next ">Next Question</button>

                            </div>
                        </div>

                        {/* <div className="steps-inner " id="step-2">

                            <div className="step-bar p-3 lg:p-5">
                                <div className="flex justify-between">
                                    <span className="step-counter">
                                        Question 2 / 4
                                    </span>
                                    <span className="step-counter">
                                        20%
                                    </span>
                                </div>
                                <div className="step-bar-inner">
                                    <div className="step-bar-move step-move m25"></div>
                                </div>
                            </div>
                            <div className="p-3 ">
                                <h4 className="ques-heading">
                                    Make a Multiple Choice Test Template Using Excel
                                </h4>
                                <div className="form-inner">
                                    <label className={`form-input ${act == 1 ? 'active-input' : ''}`} htmlFor="work1">
                                        <input type="radio" name="work" id="work1" onClick={() => setActive(1)} />
                                        Activate Developer Tab
                                    </label>
                                    <label className={`form-input ${act == 2 ? 'active-input' : ''}`} htmlFor="work2">
                                        <input type="radio" name="work" id="work2" onClick={() => setActive(2)} />
                                        Providing a Lecturer
                                    </label>
                                    <label className={`form-input ${act == 3 ? 'active-input' : ''}`} htmlFor="work3">
                                        <input type="radio" name="work" id="work3" onClick={() => setActive(3)} />
                                        Personally Quizzes
                                    </label>
                                    <label className={`form-input ${act == 4 ? 'active-input' : ''}`} htmlFor="work4">
                                        <input type="radio" name="work" id="work4" onClick={() => setActive(4)} />
                                        Massive Batches
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons p-3 lg:p-5">
                                <Link href="/competition-result" className="gradiant-btn  next ">Next Question</Link>
                               
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>

            </Layout>
        </>
    )
}