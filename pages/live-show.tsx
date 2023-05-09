import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";



export default function LiveShow() {

    const [lottiestar, setlottiestar] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);
    const deadline = new Date('2023-05-20T00:00:00Z').getTime();
    useEffect(() => {
        import('../public/lottie/star.json').then(setlottiestar);
        const intervalId = setInterval(() => {
            const timeRemaining = deadline - Date.now();
            setRemainingTime(timeRemaining > 0 ? timeRemaining : null);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [deadline]);

    if (!remainingTime) {
        return console.log('Coutdown Complete');
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);



    return (
        <>
            <Head>
                <title>Live Show | By Gyanok</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Live Show | By Gyanok" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Live Show | By Gyanok" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area">
                    <div className="container">
                        
                       <div className="live-show-block text-center mb-5  p-1 rounded-sm bg-[url('/images/yellow-striped.png')] background-animate  max-w-md mx-auto ">
                            <div className="rounded-sm  bg-[#010a3a]">
                                <img src="https://img.freepik.com/premium-vector/tv-quiz-show-illustration-with-participant-who-answer-question-will-get-point-from-studio_2175-4485.jpg" alt="" className="w-full mx-auto" />
                                <div className=" flex justify-around py-3 ">
                                    <Lottie loop animationData={lottiestar} play className="lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] m-auto" />
                                    <div>
                                        <h1 className="text-white drop-shadow-sm mb-2"> Live Show</h1>
                                        <h3 className="text-yellow-300">Prize Pool: ₹1000</h3>
                                    </div>
                                    <Lottie loop animationData={lottiestar} play className="lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] m-auto" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center flex-wrap gap-1 ">
                                <div className="mb-3 lg:w-auto w-full lg:text-left text-center">
                                    <h5 className="text-gray-100">Independence Day Special</h5>
                                    <p className="text-gray-400 text-sm">Don't loose a chance to win amazing prize</p>
                                </div>
                                <div className="text-center lg:w-auto w-full mb-3">

                                    <Link href="/start-live-show" className="btn gradiant-btn px-3 lg:w-auto w-full ">Register Now</Link>
                                    <p className="text-yellow-300">Entry Fee: ₹10</p>
                                </div>

                            </div>
                            <div className="mb-5">
                                <dl className="grid  grid-cols-4 lg:gap-5 gap-1 text-white">
                                    <div className="bg-white/10 flex flex-col items-center justify-center border border-gray-500 p-3">
                                        <dt className="mb-1 lg:text-3xl text-xl ">{days}</dt>
                                        <dd className="text-gray-400 text-sm ">Days</dd>
                                    </div>
                                    <div className="bg-white/10 flex flex-col items-center justify-center border border-gray-500 p-3">
                                        <dt className="mb-1 lg:text-3xl text-xl ">{hours}</dt>
                                        <dd className="text-gray-400 text-sm ">Hours</dd>
                                    </div>
                                    <div className="bg-white/10 flex flex-col items-center justify-center border border-gray-500 p-3">
                                        <dt className="mb-1 lg:text-3xl text-xl ">{minutes}</dt>
                                        <dd className="text-gray-400 text-sm ">Minutes</dd>
                                    </div>
                                    <div className="bg-white/10 flex flex-col items-center justify-center border border-gray-500 p-3">
                                        <dt className="mb-1 lg:text-3xl text-xl ">{seconds}</dt>
                                        <dd className="text-gray-400 text-sm ">Seconds</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-[#010a3a] shadow-lg p-3 border-t rounded-sm ">
                            <div className="group relative ">
                                <div className="flex items-center space-x-2  mb-3 ">
                                    <div >
                                        <Image src="/images/star.png" width={32} height={32} alt="prize"></Image>
                                    </div>
                                    <h5 className="text-white text-lg">Prize Distribution</h5>
                                </div>
                                <ul className="text-gray-300 text-sm ">
                                    <li className="mb-3 space-x-2 flex justify-between">
                                        <span className="">Rank 1 :</span>
                                        ₹100
                                    </li>
                                    <li className="mb-3 space-x-2 flex justify-between">
                                        <span className="">Rank 2 :</span>
                                        80
                                    </li>
                                    <li className="mb-3 space-x-2 flex justify-between">
                                        <span className="">Rank 2-6 :</span>
                                        50
                                    </li>
                                    <li className="mb-3 space-x-2 flex justify-between">
                                        <span className="">Rank 2-6 :</span>
                                        50
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-3 h-px bg-gray-600 border-0" />

                            <div className="relative group">
                                <div className="flex items-center space-x-2  mb-3 ">
                                    <div >
                                        <Image src="/images/content.png" width={32} height={32} alt="terms"></Image>
                                    </div>
                                    <h5 className="text-white text-lg">Instructions</h5>
                                </div>
                                <ul className="space-y-1 text-sm  text-gray-300">
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Rank will be decided on the highest score.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        In case of tie rank will be decided on minimum time taken to complete the quiz.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        In case total participants does not reach minimum required slot at the end of quiz, entry fee will be refunded in GyanOK Wallet.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not refresh the page or exit while playing the quiz.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        Do not switch or minimize window.
                                    </li>
                                    <li className="flex space-x-1">
                                        <svg className="w-4 h-4 mr-1.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        You can easily withdraw cash prize from your GyanOK wallet.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}