import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"

import { RiTimerFlashLine } from "react-icons/ri";
import Link from "next/link";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";



export default function PlaySoloTournament() {
    const [act, setActive] = useState(0);


    return (
        <>

            <Head>
                <title>Play Tournaments - Play Quiz and Win Real Money | GyanOK.com</title>
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


            <section className="play-tour-area pb-5">
                <div className="container relative">

                    <button className="absolute right-0 top-2">
                        <BsFillVolumeDownFill className="text-white text-[36px]" />
                        <BsFillVolumeMuteFill className="text-yellow-300 text-[36px]" />
                    </button>

                  

                    <div className="question-timer">
                        <div className="timer-icon">
                            <RiTimerFlashLine className="text-white text-[40px]" />
                        </div>
                        <span className="timer-countdown">40</span>
                    </div>

                    
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
                                    <div className="step-bar-move step-move w-[20%]"></div>
                                </div>
                            </div>
                            <div className="p-3 ">
                              
                            <h4 className="ques-heading">
                            The terms “push and pull services” in context with the Banking are used in which among the following generally? 
                                </h4>


                                <div className="form-inner">
                                    <label className={`form-input ${act == 1 ? 'active-input' : ''}`} htmlFor="play1">
                                        <input type="radio" name="play" id="play1" onClick={() => setActive(1)} />
                                        Rural Banking
                                    </label>
                                    <label className={`form-input ${act == 2 ? 'active-input' : ''}`} htmlFor="play2">
                                        <input type="radio" name="play" id="play2" onClick={() => setActive(2)} />
                                        Unite Banking
                                    </label>
                                    <label className={`form-input ${act == 3 ? 'active-input' : ''}`} htmlFor="play3">
                                        <input type="radio" name="play" id="play3" onClick={() => setActive(3)} />
                                        Mobile Banking
                                    </label>
                                    <label className={`form-input ${act == 4 ? 'active-input' : ''}`} htmlFor="play4">
                                        <input type="radio" name="play" id="play4" onClick={() => setActive(4)} />
                                        Online Banking
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons p-3 lg:p-5">
                                <Link href="/solo-tournament-result" className="gradiant-btn next w-full lg:w-auto" >Next Question</Link>
                        
                            </div>


                        </div>
                        {/* <div className="steps-inner" id="step-2">
                            <div className="step-bar p-3 lg:p-5">
                                <div className="flex justify-between">
                                    <span className="step-counter">
                                        Question 2 / 4
                                    </span>
                                    <span className="step-counter">
                                        40%
                                    </span>
                                </div>
                                <div className="step-bar-inner">
                                    <div className="step-bar-move step-move m50"></div>
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
                                <Link href="/tournament-result" className="gradiant-btn  next w-full lg:w-auto " >Next Question</Link>
                                
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </section>

        </>
    )
}