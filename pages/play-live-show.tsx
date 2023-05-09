import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import { RiTimerFlashLine } from "react-icons/ri";


export default function PlayLiveShow() {
    const [act, setActive] = useState(0);

    const [showleaderboard, setshowleaderboard] = useState(false);

    const handleclick = () => {
        setshowleaderboard(true);
    }

    return (
        <>
            <Head>
                <title>Play Live Show | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Play Live Show | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Play Live Show | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className="play-liveshow pb-5">
                <div className="container">


                    <div className="question-components ">
                        <div className="question-timer">
                            <div className="timer-icon">
                                <RiTimerFlashLine className="text-white text-[40px]" />
                            </div>
                            <span className="timer-countdown">40</span>
                        </div>
                        <iframe className="border-2 border-yellow-300 mb-3 mx-auto rounded-sm w-full max-w-lg h-[160px] lg:h-[250px] -mt-3" src="https://www.youtube.com/embed/L_HnnrtgZcM" title="How to play Gyan OK quiz / how to install Gyan OK App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <div className="question-box">
                            <div className="steps-inner " id="step-1">

                                <div className="step-bar p-3">
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
                                        Make a Multiple Choice Test Template Using Excel
                                    </h4>
                                    <div className="form-inner">
                                        <label className={`form-input t == 1 ? 'active-input' : ''}`} htmlFor="work1">
                                            <input type="radio" name="work" id="work1" onClick={() => setActive(1)} />
                                            Activate Developer Tab
                                        </label>
                                        <label className={`form-input t == 2 ? 'active-input' : ''}`} htmlFor="work2">
                                            <input type="radio" name="work" id="work2" onClick={() => setActive(2)} />
                                            Providing a Lecturer
                                        </label>
                                        <label className={`form-input t == 3 ? 'active-input' : ''}`} htmlFor="work3">
                                            <input type="radio" name="work" id="work3" onClick={() => setActive(3)} />
                                            Personally Quizzes
                                        </label>
                                        <label className={`form-input t == 4 ? 'active-input' : ''}`} htmlFor="work4">
                                            <input type="radio" name="work" id="work4" onClick={() => setActive(4)} />
                                            Massive Batches
                                        </label>
                                    </div>
                                </div>

                                <div className="form-buttons p-3">
                                    <button type="button" className="gradiant-btn next w-full " onClick={handleclick}>Next Question</button>

                                </div>
                            </div>


                        </div>
                    </div>

                    {showleaderboard ? (
                        <div className="liveshow-leaderboard mt-5 ">
                            <div id="right_answer" className="flex p-3 mb-4 text-teal-800 border-t-4 border-teal-500 bg-teal-50 " role="alert">
                                <div className="flex-shrink-0">
                                    <svg className="h-4 w-4 text-teal-600 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-teal-700 font-semibold ">
                                        Right Answer
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        Waiting for other players to submit their quiz & wait for next question.
                                    </p>
                                </div>
                            </div>

                            <div id="wrong_answer" className="flex p-3 mb-4 text-rose-800 border-t-4 border-rose-500 bg-rose-50 " role="alert">
                                <div className="flex-shrink-0">
                                    <svg className="h-4 w-4 text-rose-600 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-rose-700 font-semibold ">
                                        Wrong Answer
                                    </p>
                                    <p className="text-sm text-gray-700 dark:text-gray-400">
                                        Waiting for other players to submit their quiz & wait for next question.
                                    </p>
                                </div>
                            </div>

                            <iframe className="border-2 border-yellow-300 mb-3 mx-auto rounded-sm w-full max-w-lg h-[160px] lg:h-[250px]" src="https://www.youtube.com/embed/L_HnnrtgZcM" title="How to play Gyan OK quiz / how to install Gyan OK App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


                            <div className="flow-root bg-[#ffffff1f] p-3 rounded-sm border border-gray-600 ">
                                <div className="flex items-center mb-3 space-x-2">
                                  
                                    <Image width={30} height={30}  src="/images/star.png" alt="star" /> 
                                     <h6 className="text-slate-100 "> Quiz Leaderboard </h6>
                                </div>
                               
                                <ul role="list" className="space-y-3">
                                    <li className="bg-white px-3 py-1 outline outline-offset-2 outline-1  outline-gray-100 rounded-sm">
                                        <div className="flex items-center space-x-2">

                                            <div className="flex-shrink-0">
                                                <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="lg:text-base text-sm font-medium text-black truncate ">
                                                    Himanshu Verma
                                                </p>
                                                <p className="text-xs lg:text-sm text-gray-500 truncate dark:text-gray-400">
                                                    xxxxxxxx98
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                                <span className="font-bold text-blue-600 ">1</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="bg-white px-3 py-1 outline outline-offset-2 outline-1  outline-gray-100 rounded-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="lg:text-base text-sm font-medium text-black truncate ">
                                                    Himanshu Verma
                                                </p>
                                                <p className="text-xs lg:text-sm text-gray-500 truncate dark:text-gray-400">
                                                    xxxxxxxx98
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                                <span className="font-bold text-blue-600 ">2</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="bg-white px-3 py-1 outline outline-offset-2 outline-1  outline-gray-100 rounded-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="lg:text-base text-sm font-medium text-black truncate ">
                                                    Himanshu Verma
                                                </p>
                                                <p className="text-xs lg:text-sm text-gray-500 truncate dark:text-gray-400">
                                                    xxxxxxxx98
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                                <span className="font-bold text-blue-600 ">3</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="bg-white px-3 py-1 outline outline-offset-2 outline-1  outline-gray-100 rounded-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="lg:text-base text-sm font-medium text-black truncate ">
                                                    Himanshu Verma
                                                </p>
                                                <p className="text-xs lg:text-sm text-gray-500 truncate dark:text-gray-400">
                                                    xxxxxxxx98
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                                <span className="font-bold text-blue-600 ">4</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="bg-white px-3 py-1 outline outline-offset-2 outline-1  outline-gray-100 rounded-sm">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-shrink-0">
                                                <Image width={40} height={40} className="w-10 h-10 rounded-full" src="/images/user-profile.jpg" alt="user" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="lg:text-base text-sm font-medium text-black truncate ">
                                                    Himanshu Verma
                                                </p>
                                                <p className="text-xs lg:text-sm text-gray-500 truncate dark:text-gray-400">
                                                    xxxxxxxx98
                                                </p>
                                            </div>
                                            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-blue-100 rounded-sm ">
                                                <span className="font-bold text-blue-600 ">5</span>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>


                        </div>
                    ) : null}



                </div>
            </section >


        </>
    )
}