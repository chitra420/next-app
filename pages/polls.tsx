import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdPoll } from "react-icons/md";
import { AiFillLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { InputHTMLAttributes, useEffect, useState } from "react";
import Lottie from "react-lottie-player";



export default function Polls() {

    const [lottiecomment, setlottiecomment] = useState(null);
    useEffect(() => {
        import('../public/lottie/no-comment.json').then(setlottiecomment);

    }, []);

    const [commentModalshow, commentModalsetshow] = useState(false);


    const handlepolls = () => {

    }




    return (
        <>
            <Head>
                <title>General Knowledge MCQ Polls | Gyanok.Com </title>
                <meta name="description" content="Give Your opinions, views, reactions and comments on the General Knowledge Polls in India and around. Increase of GK with interactive learning." />
                <meta name="keywords" content="MCQ Polls, Multiple Choice Polls, GK Polls, General knowledge Polls" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="General Knowledge MCQ Polls | Gyanok.Com " />
                <meta property="twitter:description" content="Give Your opinions, views, reactions and comments on the General Knowledge Polls in India and around. Increase of GK with interactive learning." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="General Knowledge MCQ Polls | Gyanok.Com " />
                <meta property="og:description" content="Give Your opinions, views, reactions and comments on the General Knowledge Polls in India and around. Increase of GK with interactive learning." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="polls-area section-area">
                    <div className="container ">
                    
                         {/* skeleton start */}
                         <div className="bg-white rounded-sm mb-3">
                            <div role="status" className=" animate-pulse">
                                <div className="p-3 flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                        <svg className="text-gray-200 w-14 h-14 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                        <div className=" space-y-2">
                                            <div className="w-36 h-3 bg-gray-200 rounded-sm"></div>
                                            <div className="w-28 h-2 bg-gray-200 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-gray-300 rounded-lg w-12"></div>
                                </div>
                                <div className="h-2.5 mx-3 mb-3 bg-gray-200 rounded-sm  w-3/4"></div>
                                <div className="p-3 space-y-2">
                                    <div className="h-20 border bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-20 border bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-20 border bg-gray-200 rounded-sm  w-full"></div>
                                    <div className="h-20 border bg-gray-200 rounded-sm  w-full"></div>
                                </div>
                                <div className="flex justify-between items-center p-3">
                                    <div className="h-6 border bg-gray-200 rounded-sm  px-8"></div>
                                    <div className="h-2 border bg-gray-200 rounded-sm  px-12"></div>
                                    <div className="h-6 border bg-gray-200 rounded-sm  px-8"></div>
                                   
                                </div>
                            </div>
                        </div>
                        


                        {/* skeleton end */}

                        <div className="react-polls-box bg-white p-3 rounded-sm  mb-3">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="flex-shrink-0">
                                    <Image className="rounded-full border border-gray-300 bg-gray-100 object-contain p-1" src="/images/g-logo.png" width={56} height={56} alt="logo" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h6 className="font-semibold text-black ">
                                        GyanOk
                                    </h6>
                                    <p className="text-sm text-gray-600">
                                        21 October 2022
                                    </p>
                                </div>
                                <div className="inline-flex items-center  text-blue-800 ">
                                    <MdPoll /> <span>187 Votes</span>
                                </div>
                            </div>

                            <div className="polls-body">
                                <h5 className="text-[18px] text-gray-600 mb-5">The latitudinal differences in pressure delineate a number of major pressure zones, which correspond</h5>

                                <label className="polls w-full block relative" htmlFor="option1">
                                    <input  type="radio" name="pollname" className="absolute opacity-0" value={1} id="option1" data-percent="0%" onChange={handlepolls} />
                                    <div className="polls-content cursor-pointer">
                                        <div className="relative flex-shrink-0 text-[14px] prnt_dv">
                                            <span style={{fontSize: '75%'}}  className=" fittext block bg-[#20124d] text-yellow-200 w-full text-center  whitespace-nowrap absolute left-0 top-0 p-0.5 " >GTA 5</span>
                                            <Image src="/images/comp.jpg" alt="polls" width={90} height={90} className=" h-[90px] w-[90px]" />
                                        </div>

                                        <div className="polls-details w-full flex h-[90px] align-middle items-center relative pl-3">
                                            <span className="block text-sm lg:text-[14px] text-gray-700">GTA 5</span>
                                            <div className="percentage-box" style={{ }}></div>
                                        </div>

                                        <span className="poll-count">0%</span>
                                    </div>
                                </label>
                                <label className="polls w-full block relative " htmlFor="option2">
                                    <input type="radio" id="option2" className="absolute opacity-0" name="pollname" value={2} data-percent="80%" onChange={handlepolls} />
                                    <div className="polls-content cursor-pointer">
                                        <div className="relative flex-shrink-0 text-[14px] prnt_dv">
                                            <span style={{fontSize: '69%'}}  className="fittext block truncate bg-[#20124d] text-yellow-200 w-full text-center  whitespace-nowrap absolute left-0 bottom-0 p-0.5" >Shri Ravishankar prasad</span>
                                            <Image src="/images/comp.jpg" alt="polls" width={90} height={90} className=" h-[90px] w-[90px]" />
                                        </div>
                                        <div className="polls-details w-full flex h-[90px] align-middle items-center relative pl-3">
                                            <span className="block text-sm lg:text-[14px] text-gray-700">Shri Ravishankar prasad</span>
                                            <div className="percentage-box" style={{ width: '80%' }}></div>
                                        </div>

                                        <span className="poll-count">80%</span>
                                    </div>
                                </label>

                                <label className="polls w-full block relative " htmlFor="option3">
                                    <input type="radio" name="pollname" className="absolute opacity-0"  value={3}  id="option3" data-percent="20%" onChange={handlepolls} />
                                    <div className="polls-content cursor-pointer">
                                        <div className="relative flex-shrink-0 text-[14px] prnt_dv">
                                            <span style={{fontSize: '67%'}}   className=" fittext block bg-[#20124d] text-yellow-200 w-full text-center  whitespace-nowrap absolute left-0 top-1/2 -translate-y-1/2  p-0.5" >Dead Or Alive</span>
                                            <Image src="/images/comp.jpg" alt="polls" width={90} height={90} className=" h-[90px] w-[90px]" />
                                        </div>
                                        <div className="polls-details w-full flex h-[90px] align-middle items-center relative pl-3">
                                            <span className="block text-sm lg:text-[14px] text-gray-700">Dead Or Alive</span>
                                            <div className="percentage-box" style={{ width: '20%' }}></div>
                                        </div>

                                        <span className="poll-count">20%</span>
                                    </div>
                                </label>
                                <label className="polls w-full block relative" htmlFor="option4">
                                    <input type="radio" id="option4" className="absolute opacity-0" name="pollname" value={4} data-percent="30%" onChange={handlepolls} />
                                    <div className="polls-content cursor-pointer">
                                        <div className="relative flex-shrink-0 text-[14px] prnt_dv">
                                            <span  style={{fontSize: '64%'}}  className=" fittext block bg-[#20124d] text-yellow-200 w-full text-center  whitespace-nowrap absolute left-0 top-0  p-0.5" >Need for Speed 5</span>
                                            <Image src="/images/comp.jpg" alt="polls" width={90} height={90} className=" h-[90px] w-[90px]" />
                                        </div>
                                        <div className="polls-details w-full flex h-[90px] align-middle items-center relative pl-3">
                                            <span className="block text-sm lg:text-[14px] text-gray-700">Need for Speed 5</span>
                                            <div className="percentage-box correct-answer-bg" style={{ width: '30%' }}></div>
                                        </div>
                                        <span className="poll-count">30%</span>
                                    </div>
                                </label>

                            </div>

                            <div className="polls-footer flex justify-between items-center pt-3">
                                <button className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 shadow-sm shadow-blue-500/50 font-medium  rounded-sm text-[12px] lg:text-sm px-1 lg:px-3  py-2 text-center  "><AiFillLike className="mr-1  w-4 h-4" />43 Likes</button>
                                <button className="inline-flex items-center text-gray-600  hover:underline text-center text-[12px] lg:text-sm px-1  " onClick={() => commentModalsetshow(true)}><AiOutlineComment className="mr-1  w-4 h-4" />278 Comments</button>
                                <button className="inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300  shadow-sm shadow-green-500/50  font-medium  rounded-sm text-[12px] lg:text-sm px-1 lg:px-3 py-2 text-center  "><AiOutlineShareAlt className="mr-1  w-4 h-4" />Share</button>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Quiz participate modal */}
                {commentModalshow ? (
                    <>
                        <div id="commentModal" tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1111] outline-none focus:outline-none">
                            <div className="relative p-4 w-full max-w-7xl md:h-auto">
                                <div className="relative bg-white rounded-sm shadow ">
                                    <div className="flex justify-between items-center p-3 lg:p-5 border-b ">
                                       
                                        <Image width={26} height={26} src="/images/battle-promo.png" alt="comment" />
                                        
                                        <h5 className="text-gray-900 pl-1">Comment Box </h5>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => commentModalsetshow(false)}>
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="modal-body ">
                                        {/* <div className="no-comments text-center">
                                             <Lottie loop animationData={lottiecomment}  play style={{ width: 150, height: 'auto', margin: 'auto' }} />
                                             <p className="text-xl text-red-600">No Comments</p>
                                        </div> */}
                                        <div className="comment-box max-h-[45vh] overflow-y-auto bg-gray-50 p-3 lg:p-5">
                                            <ul role="list" className="divide-y divide-gray-200  ">
                                                <li className="py-3 ">
                                                    <div className="flex space-x-2">
                                                        <div className="flex-shrink-0">
                                                            <Image className=" rounded-full p-0.5 border border-blue-600 w-[40px] h-[40px] object-contain" width={40} height={40} src="/images/user-profile.jpg" alt="user profile" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className=" font-medium text-primary ">
                                                                Himanshu Verma
                                                            </p>
                                                            <span className="text-[12px] block mb-2">12 November 2022</span>
                                                            <p className="text-sm text-gray-500">
                                                            Best place for work
                                                            </p>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="py-3 ">
                                                    <div className="flex space-x-2">
                                                        <div className="flex-shrink-0">
                                                        <Image className=" rounded-full p-0.5 border border-blue-600 w-[40px] h-[40px] object-contain" width={40} height={40} src="/images/user-profile.jpg" alt="user profile" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className=" font-medium text-primary ">
                                                               Sunil Singh Rawat
                                                            </p>
                                                            <span className="text-[12px] block mb-2">12 November 2022</span>
                                                            <p className="text-sm text-gray-500">
                                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error repudiandae sit molestias saepe
                                                            </p>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="py-3 ">
                                                    <div className="flex space-x-2">
                                                        <div className="flex-shrink-0">
                                                        <Image className=" rounded-full p-0.5 border border-blue-600 w-[40px] h-[40px] object-contain" width={40} height={40} src="/images/user-profile.jpg" alt="user profile" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className=" font-medium text-primary ">
                                                                Himanshu Verma
                                                            </p>
                                                            <span className="text-[12px] block mb-2">12 November 2022</span>
                                                            <p className="text-sm text-gray-500">
                                                            Best place for work
                                                            </p>
                                                        </div>

                                                    </div>
                                                </li>
                                                <li className="py-3 ">
                                                    <div className="flex space-x-2">
                                                        <div className="flex-shrink-0">
                                                        <Image className=" rounded-full p-0.5 border border-blue-600 w-[40px] h-[40px] object-contain" width={40} height={40} src="/images/user-profile.jpg" alt="user profile" />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className=" font-medium text-primary ">
                                                               Sunil Singh Rawat
                                                            </p>
                                                            <span className="text-[12px] block mb-2">12 November 2022</span>
                                                            <p className="text-sm text-gray-500">
                                                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error repudiandae sit molestias saepe
                                                            </p>
                                                        </div>

                                                    </div>
                                                </li>

                                            </ul>
                                        </div>

                                        <div className="form-group p-3 lg:p-5">
                                            <label htmlFor="commentbox" className="mb-2  font-medium text-gray-900 flex items-center "><AiOutlineComment className="mr-1"/>Comments (236) </label>
                                            <textarea id="commentbox" placeholder="Write a Comments ..." className="block w-full text-black-color bg-[#F0EFFF] h-[100px]  rounded-sm p-3 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-sm" />
                                        </div>
                                    </div>
                                    <div className="p-3 lg:p-5 text-right space-x-2 rounded-b border-t border-gray-200 ">

                                        <button onClick={() => commentModalsetshow(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm  px-5 py-2.5 text-center  ">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                    </>
                ) : null}
                {/* Quiz participate modal */}

            </Layout>


        </>
    )
}