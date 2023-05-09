import Head from "next/head"
import Image from "next/image"
import Link from "next/link";
import { FaCheckCircle, FaShareSquare, FaTimesCircle } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import ResultWaitBox from "../components/ResultTimer";
import { FiChevronLeft } from "react-icons/fi";

export default function TournamentResult() {
    const allquizdata = [
       
        { title: 'Competition', description: 'Compete with others to get on top', url: '/competition', image: '/images/q-comp.png', cornerimage: '/images/qlist4.png' },
        { title: 'Trivia', description: 'Fun and entertaining quiz', url: '/trivia-quizzes', image: '/images/q-trivia.webp', cornerimage: '/images/qlist1.png' },
        { title: 'Polls', description: 'Check what other thinks', url: '/polls', image: '/images/q-polls.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Current Affairs Quiz', description: 'Play Quiz Daily & Increase Your GK', url: '/current-affairs-quiz', image: '/images/q-current.png', cornerimage: '/images/qlist3.png' },
      ];

    return (
        <>
        
            <Head>
                <title>Solo Tournaments Result - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Solo Tournaments Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Solo Tournaments Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

          
            <section className="play-tour-area py-5">
               <div className="container">
                   
               <Link href="/quiz-tournaments" className="text-white font-medium text-center relative mb-2 z-10"><FiChevronLeft className="mr-1" />Back</Link>

                    <div className="result-card rounded-sm text-center">
                        <Image  src="/images/heart.png" width={300} height={200} alt="crown" className="img-fluid result-img mx-auto"/>
                        {/* <Image  src="/images/crown.png" width={300} height={200} alt="crown" className="img-fluid result-img mx-auto"/> */}
                        {/* <div className="py-3">
                            <h2 className="text-[30px] text-yellow-300 mb-2">Hurray! I Won</h2>
                            <p className="text-gray-300">Congratulations on your well-deserved success </p>
                        </div> */}
                        <div className="py-3">
                            <h2 className="text-[30px] text-yellow-300 mb-2">Oh no you've lost!</h2>
                            <p className="text-gray-300">Better luck next time </p>
                        </div>
                        
                       


                        <table className="w-full text-sm text-center  text-gray-500 border-separate border-spacing-y-2 ">
                                
                                <tbody>
                                   
                                    <tr className="tour-rank-row">
                                       
                                    <td className="py-2 px-5">Score</td>
                                    <td className="py-2 px-5">:</td>
                                    <td className="py-2 px-5"><b>4</b></td>
                                   </tr>
                                   <tr className="tour-rank-row">
                                       
                                       <td className="py-2 px-5">Time</td>
                                       <td className="py-2 px-5">:</td>
                                           <td className="py-2 px-5"><b>25s</b></td>
                                      </tr>
                                   <tr className="tour-rank-row">
                                       
                                   <td className="py-2 px-5">Prize</td>
                                   <td className="py-2 px-5">:</td>
                                        <td className="py-2 px-5"><b>₹34</b></td>
                                   </tr>
                                </tbody>
                            </table>
                    </div>

                  
                    <div className="text-center mt-3">
                   
                        <div className="flex justify-center space-x-3">
                            
                            <Link href=""  className="gradiant-btn  mb-3 ">Show Answer ₹10</Link>
                            <Link href="" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-sm  px-5 py-3 text-center mr-2 mb-3"><FaShareSquare className="mr-2"/>Share</Link>
                           
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
                                        <span><FaTimesCircle className="text-xl"/></span>
                                    </div>
                                    <div className="choice-box ">
                                        <span>Guide managers' decisions</span>
                                    </div>
                                    <div className="choice-box right-option">
                                        <span>All of the above</span>
                                        <span><FaCheckCircle  className="text-xl"/></span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="mb-3">2. Large kingdoms comprise many Janapadas known as</h5>
                                    <div className="choice-box right-option">
                                        <span>Mahajanpadas</span>
                                        <span><FaCheckCircle  className="text-xl"/></span>
                                    </div>
                                    <div className="choice-box ">
                                        <span>Multijanapadas</span>
                                    </div>
                                    <div className="choice-box wrong-option">
                                        <span>Badajanapadas</span>
                                        <span><FaTimesCircle  className="text-xl"/></span>
                                    </div>
                                    <div className="choice-box ">
                                        <span>Macrojanapadas</span>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h5 className="mb-3">3. Which of the following is the highest peak of South America</h5>
                                    <div className="choice-box wrong-option">
                                        <span>Mt. Cotopaxy</span>
                                        <span><FaTimesCircle  className="text-xl"/></span>
                                    </div>
                                    <div className="choice-box ">
                                        <span>Mt. Etna</span>
                                    </div>
                                    <div className="choice-box right-option">
                                        <span>Mt. Aconcagua</span>
                                        <span><FaCheckCircle  className="text-xl"/></span>
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