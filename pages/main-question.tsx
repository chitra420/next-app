import Head from "next/head"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import Lottie from "react-lottie-player";



export default function MainQuestion() {
    const router = useRouter()
    const [lottietick, setlottietick] = useState(null);
    const [lottieparty, setlottieparty] = useState(null);
    const [showresult, setshowresult] = useState(false)


    const handleresult = () => {
        setshowresult(true);
        var ele = document.querySelector('.first-part');

        ele.classList.add("hidden")
    }

    
    useEffect(() => {
        import('../public/lottie/catick.json').then(setlottietick);
        import('../public/lottie/party-popper.json').then(setlottieparty);

    }, []);

    return (
        <>
            <Head>
                <title>Main Question | GyanOK</title>
                <meta name="description" content="Send us a message below and we’ll respond as soon as possible." />
                <meta name="keywords" content="Main Question" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Main Question | GyanOK" />
                <meta property="twitter:description" content="Send us a message below and we’ll respond as soon as possible." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Main Question | GyanOK" />
                <meta property="og:description" content="Send us a message below and we’ll respond as soon as possible." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            {/* https://thumbs.gfycat.com/BriefIgnorantBlackbuck-size_restricted.gif */}

            

            <section className="bg-[url(https://thumbs.gfycat.com/BriefIgnorantBlackbuck-size_restricted.gif)] py-5 min-h-screen flex items-center justify-center ">
        
                <div className="container" style={{ padding: "0px" }}>

                    <div className="w-full max-w-2xl mx-auto p-5 rounded-lg  bg-gray-900/60">

                        <div className="first-part">
                            <div className="flex flex-col items-center text-center mb-5">

                                <h3 className=" font-medium text-yellow-300 ">GyanOK</h3>
                                <Image className="-mt-5" src="/images/quiz.png" alt="logo" width={160} height={160} />
                                <p className=" text-gray-100 text-2xl font-bold  animate-gradient-text ">ANSWER 2 QUESTION & WIN ₹1 FREE</p>


                            </div>

                            <div className="question-box">
                                <div className="steps-inner " id="step-1">
                                    <div className="bg-[#f0f8ff] w-full p-4 ">
                                        <h4 className="ques-heading ">
                                            1. Make a Multiple Choice Test Template Using Excel
                                        </h4>
                                    </div>
                                    <div className="px-3 pb-3 ">
                                        <div className="form-inner">
                                            <label className="form-input" htmlFor="play1" onClick={handleresult}>
                                                <input type="radio" name="ca1" id="play1" />
                                                Activate Developer Tab
                                            </label>
                                            <label className="form-input" htmlFor="play2" onClick={handleresult}>
                                                <input type="radio" name="ca1" id="play2" />
                                                Providing a Lecturer
                                            </label>
                                            <label className="form-input" htmlFor="play3" onClick={handleresult}>
                                                <input type="radio" name="ca1" id="play3" />
                                                Personally Quizzes
                                            </label>
                                            <label className="form-input" htmlFor="play4" onClick={handleresult}>
                                                <input type="radio" name="ca1" id="play4" />
                                                Massive Batches
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* result box */}

                        {showresult ? (
                            <div className="result-box rounded-sm text-center mb-5 overflow-hidden">

                                <Lottie loop={false} animationData={lottietick}play style={{ width: 160, height: 'auto', margin: 'auto' }} />

                                <div className="relative flex justify-center items-center mt-5 ">
                                <Lottie loop animationData={lottieparty}  className="scale-x-[-1] lg:relative -mt-8 "  play style={{ width: 100, height: 'auto', margin: 'auto' }} /> 
                                <div>
                                <h3 className=" text-white whitespace-nowrap ">You have won</h3>
                                </div>
                                    
                                    <Lottie loop animationData={lottieparty} play  className="lg:relative -mt-8" style={{ width: 100, height: 'auto', margin: 'auto' }} />
                                </div>
                            
                                <div className="flex justify-center space-x-3 mb-5 relative">
                         
                               
                                   
                                    <div className="flex text-yellow-300 space-x-3 text-left items-center ">
                                        <h2 className=" text-[56px]">50 </h2>
                                        <h4 className=" text-[24px]">Free <br />    Credits</h4>
                                    </div>
                                    
                                    <div className="flex text-yellow-300 space-x-3 text-left items-center ">
                                    <h4 className=" text-[56px]">+ </h4>
                                        <h2 className=" text-[56px]">₹1 </h2>
                                       
                                    </div>
                                    
                               
                               
                                </div>
                             

                                {/* <p className="text-gray-400 mb-5">Play more quiz and win more prizes</p> */}

                                <div className="button-container">
                                    <button type="button" onClick={() => router.push('/')} className="flex items-center justify-center startbutton">LETS START  <FaHandPointRight className="ml-3" /></button>
                                </div>

                            </div>
                        ) : null}

                        <div className="mt-3 text-center mb-16">
                            <p className="text-slate-300">Already a user  <Link href="#" className="text-yellow-300 ">Login <AiOutlineLogin /></Link> </p>

                        </div>

                        <div className="relative group">
                            <div className="flex items-center space-x-1  mb-3 cursor-pointer">
                                <MdOutlineStickyNote2 className="w-6 h-6 text-white" />
                                <h5 className="text-gray-300 text-xl">Terms & Condition</h5>
                            </div>
                            <ul className="  text-gray-400 ">
                                <li className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Winnings is applicable to only new users. 
                                </li>
                                <li className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    10 Free Credits will be given each day till 50 Credits are used. 
                                </li>
                                <li className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Compete with thousands of players online.
                                </li>
                                <li className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 mr-1.5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Withdraw winnings easily through UPI like PhonePe, Paytm, Google Pay, Amazon Pay etc.
                                </li>
                             
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <style jsx>
                {
                    `
                    
                        .button-container {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;
                        }
                        
                        .startbutton {
                            width: 250px;
                            text-decoration: none;
                            text-align: center;
                            background: #f2305a;
                            padding: 15px 0;
                            border-radius: 50px;
                            color: #fff;
                            transition: all ease 0.2s;
                            -webkit-box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.17);
                            -moz-box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.17);
                            box-shadow: 2px 3px 2px 0px rgba(0, 0, 0, 0.17);
                            transition: all ease 0.2s;
                            position: relative;
                            overflow: hidden;
                            font-weight: 500;
                            border: none;
                            font-size:18px;
                            letter-spacing:2px;
                        }
                        
                        
                        .button-container .startbutton::after {
                            content: "";
                            width: 30px;
                            height: 200px;
                            position: absolute;
                            left: -20px;
                            top: 0;
                            margin-top: -20px;
                            background: #fff;
                            opacity: 0.6;
                            filter: blur(10px);
                            animation: login-blur 2s infinite;
                            animation-delay: 0s;
                            transform-origin: top;
                        }
                        
                        @keyframes login-blur {
                            from {
                            transform: translate(0) rotate(45deg);
                            }
                            to {
                            transform: translateX(370px) rotate(45deg);
                            }
                        }

                        .animate-gradient-text {
                            max-width: 100%;
                            color: rgba(255,0,0,0.1);
                            background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);
                            -webkit-background-clip: text;
                            animation: background-text-animation 15s linear infinite;
                            }
                            @keyframes background-text-animation {
                                    0%{
                                        background-position: left 0px top 50%;
                                    }
                                    50%{
                                        background-position: left 1500px top 50%;
                                    }
                                    100%{
                                        background-position: left 0px top 50%;
                                    }
                            }
                        `
                }
            </style>

        </>
    )
}