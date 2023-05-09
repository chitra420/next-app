import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { FaRegCalendarAlt, FaUserShield } from "react-icons/fa";

export default function TriviaQuizzes() {

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
                    <div className="container ">
                        <div className="section-title mb-12 text-center ">
                            <h1 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px]">Trivia Quiz </h1>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">Fun and entertaining quiz</p>
                        </div>
                        {/* skeleton start */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            <div role="status" className="w-full  bg-white rounded animate-pulse p-1">
                                <div className="flex items-center justify-center h-48 bg-gray-300 rounded ">
                                    <svg className="w-12 h-12 text-gray-200 " xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="flex justify-between mb-4">
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-sm  mb-3"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm"></div>
                                </div>
                            </div>
                            <div role="status" className="w-full  bg-white rounded animate-pulse p-1">
                                <div className="flex items-center justify-center h-48 bg-gray-300 rounded ">
                                    <svg className="w-12 h-12 text-gray-200 " xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="flex justify-between mb-4">
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-sm  mb-3"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm"></div>
                                </div>
                            </div>
                            <div role="status" className="w-full  bg-white rounded animate-pulse p-1">
                                <div className="flex items-center justify-center h-48 bg-gray-300 rounded ">
                                    <svg className="w-12 h-12 text-gray-200 " xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="flex justify-between mb-4">
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-sm  mb-3"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm"></div>
                                </div>
                            </div>

                            <div role="status" className="w-full  bg-white rounded animate-pulse p-1">
                                <div className="flex items-center justify-center h-48 bg-gray-300 rounded ">
                                    <svg className="w-12 h-12 text-gray-200 " xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                </div>
                                <div className="py-5 px-3">
                                    <div className="flex justify-between mb-4">
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                        <div className="h-2 bg-gray-200 rounded-sm  w-1/3 "></div>
                                    </div>

                                    <div className="h-3 bg-gray-200 rounded-sm  mb-3"></div>
                                    <div className="h-3 bg-gray-200 rounded-sm"></div>
                                </div>
                            </div>
                        </div>
                        {/* skeleton end */}



                        <div className="mb-5">
                            <p className="font-semibold mb-2">Categories</p>

                            <ul className=" flex gap-2 horizontal-scrollbar">
                                <li className=" block">
                                    <Link href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  border border-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300  font-medium rounded-sm text-sm px-3 py-2  text-center">
                                        All

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>
                                <li className=" block">
                                    <Link href="#" className="text-blue-600 border border-blue-600 bg-white  focus:ring-2 focus:outline-none font-medium rounded-sm text-sm px-3 py-2 text-center">
                                        Development

                                    </Link>
                                </li>


                            </ul>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia2.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia2.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia2.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>

                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia2.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>
                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia1.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>
                            </div>
                            <div className=" bg-white rounded-sm overflow-hidden transition duration-100 hover:shadow">
                                <Link href="/trivia-detail">
                                    <div className=" relative">

                                        <Image className="w-full h-[180px] object-cover " src="/images/trivia2.jpg" width={360} height={180} alt="trivia" />

                                        <span className="bg-blue-600 py-1 px-3 text-[12px]  rounded text-white absolute left-2 top-2">Education</span>
                                    </div>
                                    <div className=" p-3 lg:p-5">
                                        <div className="flex text-gray-500 text-sm  justify-between  space-x-3 mb-2">
                                            <div className=" flex items-center space-x-2">
                                                <FaUserShield />
                                                <span>By GyanOK </span>
                                            </div>
                                            <div className=" flex items-center space-x-2">
                                                <FaRegCalendarAlt />
                                                <span>Jan 29, 2022</span>
                                            </div>
                                        </div>
                                        <h4 className=" text-lg  hover:text-primary transition duration-150">
                                            Professional Mobile Painting and Sculpting
                                        </h4>
                                    </div>
                                </Link>

                            </div>
                        </div>

                    </div>
                </section>



            </Layout>


        </>
    )
}