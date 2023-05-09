import Head from "next/head"
import Image from "next/image"
import Link from "next/link";
import { FaCheckCircle, FaShareSquare, FaTimesCircle } from "react-icons/fa";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import ResultWaitBox from "../components/ResultTimer";
import ScratchCard from 'react-scratchcard';
import { FiChevronLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'


export default function TournamentResult() {

    const [showReward, setShowReward] = useState(false);

    const settings = {
        width: 320,
        height: 320,
        image: './images/scratch-me.png',
        finishPercent: 50,
        onComplete: () => console.log('finished'),
    };

    const allquizdata = [

        { title: 'Competition', description: 'Compete with others to get on top', url: '/competition', image: '/images/q-comp.png', cornerimage: '/images/qlist4.png' },
        { title: 'Trivia', description: 'Fun and entertaining quiz', url: '/trivia-quizzes', image: '/images/q-trivia.webp', cornerimage: '/images/qlist1.png' },
        { title: 'Polls', description: 'Check what other thinks', url: '/polls', image: '/images/q-polls.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Current Affairs Quiz', description: 'Play Quiz Daily & Increase Your GK', url: '/current-affairs-quiz', image: '/images/q-current.png', cornerimage: '/images/qlist3.png' },
    ];

    useEffect(() => {
        document.querySelector('body').classList.add('overflow-hidden')
        setShowReward(true)
    },[])

    const hideModal = () =>{
        setShowReward(false)
        document.querySelector('body').classList.remove('overflow-hidden')

    }

    return (
        <>

            <Head>
                <title>Tournaments Result - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Tournaments Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tournaments Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>


            <section className="play-tour-area section-area">
                <div className="container">
                    {/* <ResultWaitBox/> */}
                    {!showReward && 
                         <Confetti recycle={false} numberOfPieces={1000} className="fixed top-0 left-0 w-full h-full  z-50" />
                    }
                   
                  
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
                            <Link href="" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-teal-300 font-medium rounded-sm  px-5 py-3 text-center mr-2 mb-3"><FaShareSquare className="mr-2" />Share</Link>

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

                    {/* start */}
                    {showReward ? <>
                        <div tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                            <div className="relative  md:h-auto">
                                <div className="relative bg-yellow-50 bg-cover rounded-sm shadow ">
                              
                                    <div className="border-1 rounded-sm text-center overflow-hidden scratch-box">
                                        <ScratchCard {...settings} >
                                            {/* won amout */}
                                            {/* <div className="p-3">
                                                <Image src="/images/scratch-trophy.png" alt="scratch" className="mx-auto mb-5" width={100} height={100} />
                                                <h5 className="mb-1 text-red-600">You Won</h5>
                                                <h2  className="mb-5 text-red-600">₹50</h2>
                                                <button type="button" onClick={hideModal} className="gradiant-btn w-full  ">Redeem Now</button>
                                            </div> */}

                                            {/* better luck */}
                                            <div className="p-3">
                                                <Image src="/images/sad.png" alt="scratch" className="mx-auto mb-5" width={100} height={100} />
                                                <h4  className="mb-5 text-red-600">Better luck next time</h4>
                                              
                                                <button type="button" onClick={hideModal} className="gradiant-btn w-full  ">Close</button>
                                            </div>

                                            {/* credit */}
                                            {/* <div className="p-3">
                                                <Image src="/images/scratch-trophy.png" alt="scratch" className="mx-auto mb-5" width={100} height={100} />
                                                <h5 className="mb-1 text-red-600">You have earn free</h5>
                                                <h2  className="mb-5 text-red-600">10 credits</h2>
                                                <button type="button" onClick={hideModal} className="gradiant-btn w-full  ">Redeem Now</button>
                                            </div>  */}
                                        </ScratchCard>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div></> : ''}
                    {/* end */}
                </div>
            </section>
            <section className="bg-[url('/images/allquiz.png')] all-quizzes section-area">

                <div className="container ">

                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2"> {allquizdata.map((quizdata) => {
                        return (
                            <div className="quiz-list relative rounded-sm p-5 lg:p-8 bg-white hover:bg-cyan-50 shadow-md transition-all duration-300 " key={quizdata.title}>
                                <div className="flex justify-between items-center ">
                                    <div className="">
                                        <h5 className="text-primary text-[18px] lg:text-[24px]">{quizdata.title}</h5>
                                        <p className="leading-8 text-gray-600 mb-2">
                                            {quizdata.description}
                                        </p>
                                        <Link href={quizdata.url} type="button" className=" underline  decoration-2 underline-offset-4 text-gray-500 italic  inline-flex items-center">
                                            Play Quiz
                                            <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </Link>
                                    </div>
                                    <div className='mb-3 flex-shrink-0 z-1'>
                                        <Image className="object-cover" src={quizdata.image} width={100} height={100} alt="quiz image" />
                                    </div>
                                </div>
                                <Image className="absolute top-0 right-0 z-0" src={quizdata.cornerimage} width={130} height={130} alt="back icon" />
                            </div>
                        )
                    })} </div>



                </div>
            </section>


        </>
    )
}