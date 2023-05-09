import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";





export default function Footer() {
    const [surveyshow, surveysetshow] = useState(false);
    const [predictionshow, predictionsetshow] = useState(false);

    return (
        <>

            <footer className="py-5 bg-[#101b34] rounded-lg mb-[80px]">
                <div className="container">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link href="/" className=" mb-4 sm:mb-0">
                            <Image src="/images/logo.png" width={64} height={64} className="" alt="Logo" />

                        </Link>
                        <ul className="flex flex-wrap items-center mb-3 text-sm text-gray-300 ">
                            <li>
                                <Link href="/about-us" className="mr-4 hover:underline ">About</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="mr-4 hover:underline">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-and-condition" className="mr-4 hover:underline ">Terms</Link>
                            </li>
                            <li>
                                <Link href="report-error" className="mr-4 hover:underline">Report Error</Link>
                            </li>
                            <li>
                                <Link href="contact-us" className="hover:underline">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-400  ">© 2022 <Link href="/" className="hover:underline">GyanOk™</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <Link href="https://wa.me/+919997526894?text=Hi%2C%0ACan%20you%20help%20me%20%3F" className="text-gray-500 hover:text-gray-100 ">
                                <BsWhatsapp />
                            </Link>

                            <Link href="https://www.facebook.com/gyanokofficial" className="text-gray-500 hover:text-gray-100 ">
                                <FaFacebookF />
                            </Link>
                            <Link href="https://www.instagram.com/gyanokofficial/" className="text-gray-500 hover:text-gray-100 ">
                                <FaInstagram />
                            </Link>
                            <Link href="https://twitter.com/Gyanokofficial" className="text-gray-500 hover:text-gray-100">
                                <FaTwitter />
                            </Link>
                            <Link href="https://www.youtube.com/@gyanokquiz" className="text-gray-500 hover:text-gray-100">
                                <FaYoutube />

                            </Link>
                            <Link href="https://www.linkedin.com/company/gyanok/" className="text-gray-500 hover:text-gray-100">
                                <FaLinkedinIn />

                            </Link>


                        </div>
                    </div>
                </div>

            </footer>

            {/* PRediction Modal */}
            {predictionshow ? (
                <>
                    <div id="predictionshow" tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                        <div className="relative p-3 w-full max-w-xl h-auto">
                            <div className="relative bg-yellow-300 rounded-sm shadow ">
                                
                                    <button type="button" className="absolute text-yellow-300 bg-black top-0 right-0 hover:bg-yellow-100 hover:text-gray-900 text-sm p-1.5 inline-flex items-center  " onClick={() => predictionsetshow(false)}>
                                        <svg  className="w-5 h-5 font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        
                                    </button>
                               
                                <Link href="/prediction-competition/dc-vs-srh" className="p-0.5">
                                    <Image src="/images/gpl-banner.png" width={600} height={600} alt="quiz" className="mx-auto rounded-sm" />
                                </Link>               
                               
                            </div>
                        </div>
                    </div>
                    <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                </>
            ) : null}

            {/* survey form Modal */}

            {surveyshow ? (
                <>
                    <div id="withdrawModal" tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                        <div className="relative p-3 w-full max-w-2xl h-auto">
                            <div className="relative bg-white rounded-sm shadow ">
                                <div className="flex justify-between items-start p-4 rounded-t border-b ">
                                    <h4 className="text-gray-900 text-xl"> Survey Form </h4>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => surveysetshow(false)}>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-3 lg:p-5">
                                    {/* <p className="lg:text-lg font-bold mb-3">What will be the best time fo LIVE QUIZ SHOW</p> */}
                                    <p className="lg:text-lg font-bold mb-3">दोस्तों, Live Quiz Show शुरू कर रहें हैं, कब सही टाइम रहेगा बताएं।</p>

                                    <div className="space-y-3 mb-5">
                                        <div className="flex items-center pl-4 border border-gray-200 rounded ">
                                            <input id="survey-1" type="radio" value="10:00 AM - 12:00 PM" name="quiz_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label htmlFor="survey-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">10:00 AM - 12:00 PM</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded ">
                                            <input checked id="survey-2" type="radio" value="12:00 PM - 03:00 PM" name="quiz_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label htmlFor="survey-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">12:00 PM - 03:00 PM</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded ">
                                            <input checked id="survey-3" type="radio" value="03:00 PM - 06:00 PM" name="quiz_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label htmlFor="survey-3" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">03:00 PM - 06:00 PM</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded ">
                                            <input checked id="survey-4" type="radio" value="06:00 PM - 08:00 PM" name="quiz_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label htmlFor="survey-4" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">06:00 PM - 08:00 PM</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded ">
                                            <input checked id="survey-5" type="radio" value="08:00 PM - 10:00 PM" name="quiz_time" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 " />
                                            <label htmlFor="survey-5" className="w-full py-4 ml-2 text-sm font-medium text-gray-900">08:00 PM - 10:00 PM</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 text-right space-x-2 rounded-b border-t border-gray-200 ">

                                    <button onClick={() => surveysetshow(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm  px-5 py-2.5 text-center  ">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div>
                </>
            ) : null}



        </>
    )
}
