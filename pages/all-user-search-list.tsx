import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function AllUserSearchList() {

    const [openTab, setOpenTab] = useState(1);

    return (
        <>

            <Head>
                <title>All User | GyanOK.com</title>
                <meta name="description" content="All User " />
                <meta name="keywords" content="All User " />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="All User  | GyanOK.com" />
                <meta property="twitter:description" content="All User " />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="All User  | GyanOK.com" />
                <meta property="og:description" content="All User " />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5 relative">
                <div className="container">
                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                            <Link href="/dashboard" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-xl text-white">Himanshu Verma</h4>
                        </div>
                    </div>
                    <div className="w-full mb-3">
                        <ul className="flex space-x-3 mb-0 list-none flex-wrap pb-4 flex-row gap-1 lg:gap-5" role="tablist">
                            <li className="  text-center">
                                <Link className={"py-2 block " + (openTab === 1 ? " text-white border-b " : " text-slate-300 border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#followers_tab" role="tablist" >239 Followers</Link>
                            </li>
                            <li className="last:mr-0  text-center">
                                <Link className={"py-2 block " + (openTab === 2 ? " text-white border-b " : " text-slate-300 border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#following_tab" role="tablist" >140 Following</Link>
                            </li>
                            <li className="last:mr-0  text-center">
                                <Link className={"py-2 block " + (openTab === 3 ? " text-white border-b " : " text-slate-300 border-slate-200")} onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#mate_tab" role="tablist" >10 Mate</Link>
                            </li>
                        </ul>
                        <div className="tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="followers_tab">
                                <div className="p-3 bg-white rounded-sm divide-y">
                                    <div className="relative w-full mb-3 flex items-center">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full pl-8 p-2.5" placeholder="Search Friends" required />
                                        <button type="submit" className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 ml-1 ">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </button>
                                    </div>

                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="following_tab">
                                <div className="p-3 bg-white rounded-sm divide-y">
                                    <div className="relative w-full mb-3">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5" placeholder="Search Friends" required />
                                    </div>

                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0 " alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Following </button>
                                    </div>

                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>

                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="mate_tab">
                                <div className="p-3 bg-white rounded-sm divide-y">
                                    <div className="relative w-full mb-3">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5" placeholder="Search Friends" required />
                                    </div>
                                    <div role="status" className="text-center px-5 py-12">
                                        <svg className="block w-16 h-16 mb-5 mx-auto text-gray-200 animate-spin  fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <p className="text-lg" >Searching...</p>
                                    </div>

                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0 " alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>
                                    <div className="flex items-center space-x-2 rounded-sm  p-2 hover:bg-blue-50">
                                        <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                            <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                                        </div>
                                        <Link href="/user-profile" className="flex-1">
                                            <p className="text-base"> Sunil Singh Rawat </p>
                                            <div className="text-sm text-gray-500 mt-0.5">Level 1</div>
                                        </Link>
                                        <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 py-1 text-center"> Follow </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* skeleton start */}
                    <div role="status" className="animate-pulse mb-3">

                        <div className="flex space-x-3 ">

                            <div className="w-24 h-3 bg-gray-200 rounded-sm"></div>
                            <div className="w-24 h-3 bg-gray-200 rounded-sm"></div>
                            <div className="w-24 h-3 bg-gray-200 rounded-sm"></div>

                        </div>
                    </div>

                    <div className="bg-white lg:p-5 p-3 rounded-sm">

                        <div role="status" className="divide-y animate-pulse">
                            <div className="h-8 bg-gray-200 rounded-sm  w-full mb-3"></div>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex items-center space-x-1">
                                    <svg className="text-gray-200 w-14 h-14 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-36 mb-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-sm "></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-sm w-16 "></div>


                            </div>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex items-center space-x-1">
                                    <svg className="text-gray-200 w-14 h-14 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-36 mb-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-sm "></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-sm w-16 "></div>


                            </div>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex items-center space-x-1">
                                    <svg className="text-gray-200 w-14 h-14 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-36 mb-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-sm "></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-sm w-16 "></div>


                            </div>
                            <div className="flex items-center justify-between py-1">
                                <div className="flex items-center space-x-1">
                                    <svg className="text-gray-200 w-14 h-14 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                    <div>
                                        <div className="h-2.5 bg-gray-200 rounded-sm  w-36 mb-2"></div>
                                        <div className="w-24 h-2 bg-gray-200 rounded-sm "></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded-sm w-16 "></div>
                            </div>
                        </div>
                    </div>
                    {/* skeleton end */}

                </div>
            </section>
        </>
    )
}