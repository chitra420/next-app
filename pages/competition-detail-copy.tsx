import Head from "next/head"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsFillStarFill, BsTrophy } from "react-icons/bs";
import { MdArrowBackIosNew, MdNotes } from "react-icons/md";
import router from "next/router";
import { FaPlusCircle } from "react-icons/fa";

export default function CompetitionDetail() {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }
    return (
        <>

            <Head>
                <title>Quiz Competition - Play Quiz and Win Real Money | GyanOK.com</title>
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
            <section className="pt-3 competition-area">
                <div className="container relative">
                    <div className="mb-2 flex justify-between ">
                        <button className="text-white" onClick={() => router.back()}><MdArrowBackIosNew className="mr-1" />Back</button>
                        <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                    </div>
                    <div className="bg-[#010a3a] shadow-lg p-5 rounded-sm mb-[100px] lg:mb-[80px]">
                        <div className="flex items-center space-x-3 mb-5">
                            <div className="">
                                <Image src="/images/comp.jpg" width={60} height={60} alt="competition" className="m-auto  rounded-full" />
                            </div>
                            <div className="">
                                <h4 className="text-white">Computer Quizesz</h4>
                                <span className="text-gray-300 text-sm">Hurry Up and win the prize</span>
                            </div>
                        </div>
                        <div className="grid gap-5 grid-cols-2  mb-5">
                            <div className="relative pl-3 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-gradient-color before:rounded-lg">
                                <h3 className="text-[26px] text-yellow-300"><span className="">₹1000</span></h3>
                                <p className=" text-white font-medium">Pool Prize</p>
                            </div>



                        </div>
                        <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                            <div className="bg-yellow-300 text-xs font-bold text-black text-center p-0.5 leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                        </div>
                        <div className="flex text-gray-300 text-xs justify-between">
                            <span className="pe-3">13 PARTICIPANTS</span>
                            <span>150 SLOTS</span>
                        </div>

                        <div className="group relative mt-5 ">
                            <div className="flex items-center space-x-2  mb-3 ">
                                <div >
                                    <Image src="/images/checkmark.png" width={36} height={36} alt="checkmark"></Image>
                                </div>

                                <h5 className="text-white text-lg">Competition Details</h5>
                            </div>
                            <ul className="text-gray-300 text-sm ">
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Entry Fee :</span>
                                    ₹5
                                </li>
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Questions :</span>
                                    5
                                </li>
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Time :</span>
                                    10s
                                </li>
                                <li className="mb-3 space-x-2 flex justify-between">
                                    <span className="">Required Slots :</span>
                                    55
                                </li>

                            </ul>
                        </div>
                        <hr className="my-3 h-px bg-gray-600 border-0" />

                        <div className="group relative ">
                            <div className="flex items-center space-x-2  mb-3 ">
                                <div >
                                    <Image src="/images/star.png" width={36} height={36} alt="prize"></Image>
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
                                    <Image src="/images/content.png" width={36} height={36} alt="terms"></Image>
                                </div>
                                <h5 className="text-white text-lg">Terms & Condition</h5>
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

                    <div className="fixed bg-[#010a3a] inset-x-0 bottom-0 p-2 w-full text-center shadow-[0px_-1px_9px_3px_#ffffff4a] rounded-sm">
                        <div className="container">
                            <div className="block lg:flex justify-between items-center">
                                <Link href="start-competition" className="gradiant-btn w-full lg:w-auto order-first md:order-last">PLAY NOW </Link>

                                <p className="mt-1 text-white order-last md:order-first">Quiz Ends In <span className="text-yellow-300">46m 30s</span></p>
                            </div>
                        </div>




                    </div>

                </div>
            </section>

            {/* add cash modal */}
            {show ? (
                <AddCashModal show={show} setShow={(bool) => setShow(bool)} />
            ) : null}
            {/* start withdraw Modal */}
        </>
    )
}