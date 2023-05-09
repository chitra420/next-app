import Link from "next/link";
import { useState } from "react";

export default function FriendRulesChallenges() {
    const [openTab, setOpenTab] = useState(1);


    return (
        <>
            <title>Challenges Rules | GyanOK.com</title>
            <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
            <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="" />
            <meta property="twitter:title" content="Challenges Rules | GyanOK.com" />
            <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
            <meta property="twitter:image" content="/images/logo.png" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Challenges Rules | GyanOK.com" />
            <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
            <meta property="og:image" content="/images/logo.png" />


            <section className=" py-5 battles-area">
                <div className="container">
                    <div className="flex items-center space-x-3 mb-3">
                        <Link href="/quiz-tournaments" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1.5 text-center inline-flex items-center ">
                            <svg className="w-4 h-4   font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                            </svg>
                        </Link>
                        <h4 className="text-white">Rules</h4>
                    </div>

                    <ul className="flex space-x-3 mb-0 list-none flex-wrap pb-4 flex-row gap-3" role="tablist">


                        <li className="  text-center">
                            <Link className={"py-1 block " + (openTab === 1 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#friend_tab" role="tablist" > Friend  </Link>
                        </li>
                        <li className="  text-center">
                            <Link className={"py-1 block " + (openTab === 2 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#random_tab" role="tablist" > Random </Link>
                        </li>
                        <li className="  text-center">
                            <Link className={"py-1 block " + (openTab === 3 ? "text-yellow-300  border-b border-yellow-300" : "text-slate-300  ")} onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#solo_tab" role="tablist" > Solo </Link>
                        </li>
                    </ul>

                    <div className="tab-space">
                        <div className={openTab === 1 ? "block" : "hidden"} id="friend_tab">
                            <div className="bg-white/20 rounded-sm shadow-sm p-3 lg:p-5 ">
                            <p className="text-white mb-3">Friend Tournamnet</p>
                                <ul className="space-y-2  text-gray-300 ">
                                <li className="flex space-x-1">
                                        <svg className="w-6 h-6 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Result will be announced only after your friend play the challenge tournament.
                                    </li>

                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Rank will be decided on the highest score.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        In case of tie rank will be decided on minimum time taken to complete the quiz.
                                    </li>

                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Each challenge is valid for 24 hours. If your friend do not accept the challenge within 24 hours, refund will be initaied. 
                                    </li>
                                 
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not refresh the page or exit while playing the quiz.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not switch or minimize window.
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="random_tab">
                            <div className="bg-white/20 rounded-sm shadow-sm p-3 lg:p-5 ">
                            <p className="text-white mb-3">Random Tournamnet</p>

                                <ul className="space-y-2  text-gray-300 ">
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Rank will be decided on the highest score.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        In case of tie rank will be decided on minimum time taken to complete the quiz.
                                    </li>
                                   
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not refresh the page or exit while playing the quiz.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not switch or minimize window.
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="solo_tab">

                            <div className="bg-white/20 rounded-sm shadow-sm p-3 lg:p-5 ">
                            <p className="text-white mb-3">Solo Tournamnet</p>

                                <ul className="space-y-2  text-gray-300 ">
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        You are the only player in solo tournament.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                       Each solo torunament has specific questions to be answered correct in order to win.
                                    </li>
                                   
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not refresh the page or exit while playing the quiz.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-6 h-6  mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not switch or minimize window.
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>

            </section>

        </>

    )
}