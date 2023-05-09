import Head from "next/head"
import Image from "next/image"
import Link from "next/link";
import { FaCheckCircle, FaShareSquare, FaTimesCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { FiChevronLeft } from "react-icons/fi";



export default function TournamentBattleResult() {
    const [lottieresult, setlottieresult] = useState(null);

    useEffect(() => {
        import('../public/lottie/waiting.json').then(setlottieresult);

    }, []);

    return (
        <>

            <Head>
                <title>Tournaments Battle Result - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Tournaments Battle Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tournaments Battle Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>


            <section className="play-tour-area py-5">
                <div className="container">
                <Link href="/quiz-tournaments" className="text-white font-medium text-center relative mb-2 z-10"><FiChevronLeft className="mr-1" />Back</Link>

                    <div className="result-timer">
                        <div className="p-3 lg:p-5 text-center rounded-sm bg-[#010a3a] drop-shadow">

                            <Lottie loop animationData={lottieresult} play className="pt-3" style={{ width: 80, height: 'auto', margin: 'auto' }} />
                            <h4 className="text-yellow-300 text-lg mt-5">Waiting for friend  </h4>
                            <p className="text-gray-300 mb-5">result will appear after your friend played the challenge</p>

                            <div className="text-left mb-3 text-gray-300 bg-white/10 p-3">
                                <h6 className="text-white mb-2">Summary (Himanshu Verma) </h6>
                                <hr className="border-gray-400 mb-3" />
                                <div className="flex justify-between mb-1 ">
                                    <span className="w-2/5">Score</span>
                                    <span className="w-1/5 text-center">:</span>
                                    <span className="w-2/5 text-right">3</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <span className="w-2/5">Time</span>
                                    <span className="w-1/5 text-center">:</span>
                                    <span className="w-2/5 text-right">30 s</span>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <span className="w-2/5">Prize</span>
                                    <span className="w-1/5 text-center">:</span>
                                    <span className="w-2/5 text-right">3</span>
                                </div>
                            </div>
                            <p className="text-yellow-300 text-sm">Note: Do not Press back or Close this window</p>
                        </div>
                    </div>

                    <div className="result-card rounded-sm text-center">
                        <Image src="/images/crown.png" width={300} height={200} alt="crown" className="img-fluid result-img mx-auto" />
                        <h2 className="text-[30px] text-white py-3">
                            You Won
                        </h2>
                        <table className="w-full text-sm text-center lg:text-left text-gray-500 border-separate border-spacing-y-2 ">
                            <thead className="text-sm  text-gray-700 ">
                                <tr>
                                    <th scope="col" className=" px-1 ">

                                    </th>
                                    <th scope="col" className=" px-1 ">

                                    </th>
                                    <th scope="col" className=" px-1 text-yellow-300">
                                        Score
                                    </th>
                                    <th scope="col" className=" px-1 text-yellow-300">
                                        Time
                                    </th>
                                    <th scope="col" className=" px-1 text-yellow-300">
                                        Prize
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="tour-rank-row current-player">

                                    <td className="py-2 px-1">
                                        <span className="flex justify-center items-center w-9  h-9 ml-1  font-medium text-black bg-[#24d3fe] rounded-full border-2 border-white ">1st</span>

                                    </td>
                                    <td className="py-2 px-1">Himanshu</td>
                                    <td className="py-2 px-1"><b>3</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                </tr>
                                <tr className="tour-rank-row">

                                    <td className="py-2 px-1">
                                        <span className="flex justify-center items-center w-9  h-9 ml-1  font-medium text-black bg-[#24d3fe] rounded-full border-2 border-white ">2nd</span>

                                    </td>
                                    <td className="py-2 px-1">Himanshu</td>
                                    <td className="py-2 px-1"><b>3</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                </tr>
                                <tr className="tour-rank-row">

                                    <td className="py-2 px-1">
                                        <span className="flex justify-center items-center w-9  h-9 ml-1  font-medium text-black bg-[#24d3fe] rounded-full border-2 border-white ">3rd</span>

                                    </td>
                                    <td className="py-2 px-1">Himanshu</td>
                                    <td className="py-2 px-1"><b>3</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                    <td className="py-2 px-1"><b>2</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-yellow-300"><small>If you have won then winning prize will be added in your wallet within 1 hour.</small></p>
                    <div className="text-center mt-3">

                        <div className="flex justify-center space-x-3">

                            <Link href="" className="gradiant-btn  mb-3 ">Show Answer ₹10</Link>
                            <Link href="" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-sm  px-5 py-3 text-center mr-2 mb-3"><FaShareSquare className="mr-2" />Share</Link>

                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="correct-answer">
                            <div className="mb-4">
                                <h5 className="mb-3">1. Which of these is a purpose of shared organisational values?</h5>
                                <div className="choice-box ">
                                    <span>Build Team Support</span>
                                </div>
                                <div className="choice-box wrong-option">
                                    <span>Influence marketing efforts</span>
                                    <span><FaTimesCircle className="text-xl" /></span>
                                </div>
                                <div className="choice-box ">
                                    <span>Guide managers' decisions</span>
                                </div>
                                <div className="choice-box right-option">
                                    <span>All of the above</span>
                                    <span><FaCheckCircle className="text-xl" /></span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">2. Large kingdoms comprise many Janapadas known as</h5>
                                <div className="choice-box right-option">
                                    <span>Mahajanpadas</span>
                                    <span><FaCheckCircle className="text-xl" /></span>
                                </div>
                                <div className="choice-box ">
                                    <span>Multijanapadas</span>
                                </div>
                                <div className="choice-box wrong-option">
                                    <span>Badajanapadas</span>
                                    <span><FaTimesCircle className="text-xl" /></span>
                                </div>
                                <div className="choice-box ">
                                    <span>Macrojanapadas</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h5 className="mb-3">3. Which of the following is the highest peak of South America</h5>
                                <div className="choice-box wrong-option">
                                    <span>Mt. Cotopaxy</span>
                                    <span><FaTimesCircle className="text-xl" /></span>
                                </div>
                                <div className="choice-box ">
                                    <span>Mt. Etna</span>
                                </div>
                                <div className="choice-box right-option">
                                    <span>Mt. Aconcagua</span>
                                    <span><FaCheckCircle className="text-xl" /></span>
                                </div>
                                <div className="choice-box ">
                                    <span>Mt. Quinto</span>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>



        </>
    )
}