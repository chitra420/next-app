import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { FaCheckCircle, FaRegCalendarAlt, FaShareSquare, FaTimesCircle, FaUserShield } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

import Confetti from 'react-confetti'


export default function TriviaDetail() {


    return (
        <>
            <Head>
                <title>Trivia Quizzes - The World's Best Trivia Quizzes | Gyanok.Com</title>
                <meta name="description" content="Fun way to answer trivia quiz and test your intelligence. With Some general knowledge, entertainment, trending quizzes to play. Click now gyan ok trivia!" />
                <meta name="keywords" content="Trivia quiz, Entertainment Trivia, Trivia for friends, trending Trivia Questions" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Trivia Quizzes - The World's Best Trivia Quizzes | Gyanok.Com" />
                <meta property="twitter:description" content="Fun way to answer trivia quiz and test your intelligence. With Some general knowledge, entertainment, trending quizzes to play. Click now gyan ok trivia!" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Trivia Quizzes - The World's Best Trivia Quizzes | Gyanok.Com" />
                <meta property="og:description" content="Fun way to answer trivia quiz and test your intelligence. With Some general knowledge, entertainment, trending quizzes to play. Click now gyan ok trivia!" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>

                <section className="section-area bg-gray-100">
                  
                    <div className="container" style={{ padding: '0px' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-4  gap-0 lg:gap-5">
                            <div className="col-span-3 ">
                                <div className="p-3">
                                    <span className="bg-blue-600 text-white  text-sm font-medium  px-5 py-1 rounded-sm ">Bollywood</span>
                                    <h3 className="font-bold text-[24px]  xl:text-[30px] mt-1 mb-3">Guess the song by emojis bollywood songs challenges</h3>
                                    <p className="text-gray-600 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus esse perferendis sint temporibus dolorem labore? Dolores ipsam voluptatum dolorum inventore eaque assumenda error aliquam, sint, quis eligendi, temporibus esse!</p>
                                    <ul className="space-x-5 font-semibold text-sm text-primary mb-1">
                                        <li className="relative inline-flex items-center ">
                                            <FaRegCalendarAlt />
                                            <span className="ml-1">12th November 2022</span>
                                        </li>
                                        <li className="relative inline-flex items-center ">
                                            <FaUserShield />
                                            <span className="ml-1">By GyanOK</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="description text-justify  bg-white p-3 lg:p-5 mb-5 rounded-sm leading-7">
                                    <p className=" mb-15 last:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis metus vitae mattis velit ac amet, mattis aenean. Quam eu aliquam quisque commodo feugiat placerat elit. Eget mi, morbi tincidunt dolor. Placerat enim rid iculus id feugiat faucibus non pulvinar tincidunt. Vulputate tincidunt sed interdum interdum porta enim.</p>
                                    <p className=" mb-15 last:mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas facilisis metus vitae mattis velit ac amet, mattis aenean. Quam eu aliquam quisque commodo feugiat placerat elit. Eget mi, morbi tincidunt dolor.</p>
                                </div>
                                <div className="trivia-question">

                                    <div className="ques-img-with-text bg-white  rounded-sm p-3 lg:p-5 mb-5">
                                        <h5 className="font-semibold text-gray-900 text-lg mb-3 "> 5. Which High Court has directed the city government to ensure free food ? </h5>
                                        <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto mb-3 w-full lg:w-auto" alt="shape" />
                                        <div className=" grid grid-cols-2 gap-3">
                                            <div className="option-box wrong-opt">
                                                <input type="radio" name="company" id="free4" value="Infosys" />
                                                <label htmlFor="free4">
                                                    <div className="card-img">
                                                        <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                        <div className="p-1 lg:p-3">
                                                            <p className="text-base lg:text-xl">Infosys</p>
                                                        </div>

                                                    </div>
                                                </label>
                                            </div>
                                            <div className="option-box">
                                                <input type="radio" name="company" id="basic4" value="Rubica IT" />
                                                <label htmlFor="basic4"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Rubica IT</p>
                                                    </div>

                                                </div></label>
                                            </div>
                                            <div className="option-box">
                                                <input type="radio" name="company" id="premium4" value="Evon Tech" />
                                                <label htmlFor="premium4"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Evon Tech</p>
                                                    </div>

                                                </div></label>
                                            </div>
                                            <div className="option-box correct-opt">
                                                <input type="radio" name="company" id="ultra4" value="Applaud web Media" />
                                                <label htmlFor="ultra4">
                                                    <div className="card-img">
                                                        <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                        <div className="p-1 lg:p-3">
                                                            <p className="text-base lg:text-xl">Applaud web Media</p>
                                                        </div>

                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="single-ques bg-white  rounded-sm p-3 lg:p-5 mb-5">
                                        <h5 className="font-semibold text-gray-900 text-lg mb-3 "> 1. Which High Court has directed the city government to ensure free food ? </h5>
                                        <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto mb-3 w-full lg:w-auto" alt="shape" />
                                        <div className=" grid grid-cols-2 gap-3">
                                            <div className="option-box">
                                                <input type="radio" name="wwe" id="free1" value="free1" />
                                                <label htmlFor="free1">John Cena</label>
                                            </div>
                                            <div className="option-box">
                                                <input type="radio" name="wwe" id="basic1" value="basic1" />
                                                <label htmlFor="basic1">Rob Van Dam</label>
                                            </div>
                                            <div className="option-box">
                                                <input type="radio" name="wwe" id="premium1" value="premium1" />
                                                <label htmlFor="premium1">Shawn Michael</label>
                                            </div>
                                            <div className="option-box">
                                                <input type="radio" name="wwe" id="ultra1" value="ultra" />
                                                <label htmlFor="ultra1">Undertaker</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-ques bg-white  rounded-sm p-3 lg:p-5 mb-5">
                                        <h5 className="font-semibold text-gray-900 text-lg mb-3 "> 2. Which High Court has directed the city government to ensure free food ? </h5>
                                        <div className=" grid grid-cols-2 gap-3">
                                            <div className="option-box wrong-opt">
                                                <input type="radio" name="radio1" id="free" value="free" />
                                                <label className="free-label " htmlFor="free">John Cena</label>
                                            </div>
                                            <div className="option-box correct-opt">
                                                <input type="radio" name="radio1" id="basic" value="basic" />
                                                <label className="basic-label " htmlFor="basic">Rob Van Dam</label>
                                            </div>
                                            <div className="option-box wrong-opt">
                                                <input type="radio" name="radio1" id="premium" value="premium" />
                                                <label className="premium-label " htmlFor="premium">Shawn Michael</label>
                                            </div>
                                            <div className="option-box wrong-opt">
                                                <input type="radio" name="radio1" id="ultra" value="ultra" />
                                                <label className="ultra-label " htmlFor="ultra">Undertaker</label>
                                            </div>
                                        </div>
                                        <div className="trivia-single-reult bg-cyan-50 p-5 mt-5 border-2 border-cyan-500 rounded-sm">
                                            <p className="flex items-center text-lg text-green-600 border-b-2 mb-3 pb-1 border-green-300">
                                                <FaCheckCircle className="mr-2" /> Correct
                                            </p>
                                            <p className="flex items-center text-lg text-red-600 border-b-2 mb-3 pb-1 border-red-300">
                                                <FaTimesCircle className="mr-2" /> Incorrect
                                            </p>
                                            <h4 className="mb-1 text-cyan-800">Winner is John Cena</h4>
                                            <p className="mb-3 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem sed ipsum commodi laudantium ullam veniam</p>
                                            <Image src="/images/bg.png" className="mb-1" width={300} height={300} alt="trivia result"></Image>
                                        </div>
                                    </div>

                                    <div className="single-ques checklist-ques bg-white  rounded-sm p-3 lg:p-5 mb-5">
                                        <h5 className="font-semibold text-gray-900 text-lg mb-3 "> 3. What was Goku's name before he came to Earth as a baby? ? </h5>
                                        <div className=" grid grid-cols-2 gap-3">
                                            <div className="option-box ">
                                                <input type="checkbox" name="checkbox2" id="db1" value="Gohan" />
                                                <label className="free-label " htmlFor="db1">Gohan</label>
                                            </div>
                                            <div className="option-box ">
                                                <input type="checkbox" name="checkbox2" id="db2" value="Goku" />
                                                <label className="free-label " htmlFor="db2">Goku</label>
                                            </div>

                                            <div className="option-box ">
                                                <input type="checkbox" name="checkbox2" id="db3" value="Vegeta" />
                                                <label className="premium-label " htmlFor="db3">Vegeta</label>
                                            </div>
                                            <div className="option-box">
                                                <input type="checkbox" name="checkbox2" id="db4" value="Master Roshi" />
                                                <label className="ultra-label " htmlFor="db4">Master Roshi</label>
                                            </div>

                                            <div className="option-box">
                                                <input type="checkbox" name="checkbox2" id="db5" value="Picallo" />
                                                <label className="ultra-label " htmlFor="db5">Picallo</label>
                                            </div>

                                            <div className="option-box">
                                                <input type="checkbox" name="checkbox2" id="db6" value="dande" />
                                                <label className="ultra-label " htmlFor="db6">dande</label>
                                            </div>


                                        </div>

                                    </div>

                                    <div className="single-ques checklist-ques bg-white  rounded-sm p-3 lg:p-5 mb-5">
                                        <h5 className="font-semibold text-gray-900 text-lg mb-3 "> 6. What was Goku's name before he came to Earth as a baby? ? </h5>
                                        <div className=" grid grid-cols-2 gap-3">
                                            <div className="option-box checklist-img ">
                                                <input type="checkbox" name="checkbox3" id="db11" value="Gohan" />
                                                <label className="free-label " htmlFor="db11">
                                                    <div className="card-img">
                                                        <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                        <div className="p-1 lg:p-3">
                                                            <p className="text-base lg:text-xl">Applaud web Media</p>
                                                        </div>

                                                    </div></label>
                                            </div>
                                            <div className="option-box checklist-img">
                                                <input type="checkbox" name="checkbox3" id="db12" value="Goku" />
                                                <label className="free-label " htmlFor="db12"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Applaud web Media</p>
                                                    </div>

                                                </div></label>
                                            </div>

                                            <div className="option-box checklist-img ">
                                                <input type="checkbox" name="checkbox3" id="db13" value="Vegeta" />
                                                <label className="premium-label " htmlFor="db13"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Applaud web Media</p>
                                                    </div>

                                                </div></label>
                                            </div>
                                            <div className="option-box checklist-img ">
                                                <input type="checkbox" name="checkbox3" id="db14" value="Master Roshi" />
                                                <label className="ultra-label " htmlFor="db14"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Applaud web Media</p>
                                                    </div>

                                                </div></label>
                                            </div>

                                            <div className="option-box checklist-img ">
                                                <input type="checkbox" name="checkbox3" id="db15" value="Picallo" />
                                                <label className="ultra-label " htmlFor="db15"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Applaud web Media</p>
                                                    </div>

                                                </div></label>
                                            </div>

                                            <div className="option-box checklist-img ">
                                                <input type="checkbox" name="checkbox3" id="db16" value="dande" />
                                                <label className="ultra-label " htmlFor="db16"><div className="card-img">
                                                    <Image src="/images/trivia1.jpg" width={300} height={300} className="mx-auto w-full " alt="shape" />
                                                    <div className="p-1 lg:p-3">
                                                        <p className="text-base lg:text-xl">Applaud web Media</p>
                                                    </div>

                                                </div></label>
                                            </div>


                                        </div>

                                    </div>


                                </div>

                                <div className="trivia-final-result bg-gradient-color rounded-sm p-3 m-3">
                                    <p className="text-lg text-white mb-3"><strong className="pr-2 text-yellow-100">Quiz :</strong>Guess the song by emojis bollywood songs challenges</p>
                                    <div className="bg-white p-3 lg:p-5 text-center mb-3">
                                        <Image src="/images/trivia-result-icon.jpg" width={120} height={120} className="mx-auto animate-pulse" alt="result" />
                                        <h3 className="text-primary mt-3">Oh! Not Bad </h3>
                                        <p className="text-xl text-gray-600 mb-3">You need to watch more bollywood movies</p>
                                        <ul className="grid gap-1 md:gap-3 lg:gap-3 grid-cols-2 ">
                                            <li className="text-slate-800 rounded-sm border  relative text-center p-2 lg:p-3 bg-slate-100">
                                                <span> Score</span>
                                                <p className="lg:text-2xl text-xl">5/10</p>
                                            </li>
                                            <li className="text-slate-800 rounded-sm border relative text-center p-2 lg:p-3 bg-slate-100">
                                                <span> Attempts</span>
                                                <p className="lg:text-2xl text-xl">5</p>
                                            </li>


                                        </ul>
                                    </div>

                                    <div className="flex space-x-2 justify-between items-center">
                                        <p className="text-white">Retake</p>
                                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-2 text-center inline-flex items-center">
                                            <FaShareSquare className="w-4 h-4 mr-2 " /> Share Now
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className="triviasidebar px-1">
                                <div className="bg-white p-3 lg:p-5 rounded-sm sticky top-2 h-auto">
                                    <h5 className="font-semibold">Categories</h5>
                                    <hr className="my-5" />
                                    <ul className=" list-item space-y-2">
                                        <li className=" block">
                                            <Link href="#" className=" flex items-center justify-between bg-[#F8F8F8] py-3 px-5 rounded hover:bg-blue-100 hover:text-blue-600">
                                                <span>Development (23)</span>
                                                <span className=" text-xl">
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className=" block">
                                            <Link href="#" className=" flex items-center justify-between bg-[#F8F8F8] py-3 px-5 rounded hover:bg-blue-100 hover:text-blue-600">
                                                <span>Art &amp; Design (45)</span>
                                                <span className=" text-xl">
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className=" block">
                                            <Link href="#" className=" flex items-center justify-between bg-[#F8F8F8] py-3 px-5 rounded hover:bg-blue-100 hover:text-blue-600">
                                                <span>Data Science (14)</span>
                                                <span className=" text-xl">
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </Link>
                                        </li>
                                        <li className=" block">
                                            <Link href="#" className=" flex items-center justify-between bg-[#F8F8F8] py-3 px-5 rounded hover:bg-blue-100 hover:text-blue-600">
                                                <span>Data Science (14)</span>
                                                <span className=" text-xl">
                                                    <AiOutlineArrowRight />
                                                </span>
                                            </Link>
                                        </li>


                                        <li>
                                            <div role="status" className="max-w-sm animate-pulse">
                                                <div className="h-12 bg-gray-200 rounded-sm mb-2 "></div>
                                                <div className="h-12 bg-gray-200 rounded-sm mb-2  "></div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>


        </>
    )
}