import Head from "next/head"
import Link from "next/link";
import Image from "next/image";

import NoData from "../components/NoData";

export default function SearchUser() {


    return (
        <>

            <Head>
                <title>Search User | GyanOK.com</title>
                <meta name="description" content="Search User " />
                <meta name="keywords" content="Search User " />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Search User  | GyanOK.com" />
                <meta property="twitter:description" content="Search User " />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Search User  | GyanOK.com" />
                <meta property="og:description" content="Search User " />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5 relative">
                <div className="container">
                    <div className="flex justify-between items-center mb-3">
                    <div className="space-x-3">
                            <Link href="/dashboard" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4   font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-white">Search User</h4>
                        </div>
                    </div>
                    <div className="relative w-full mb-3">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-400 text-black text-sm rounded-sm focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-2.5" placeholder="Enter your friend name" required />
                        </div>

    
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mb-3">
                   
                        <div className="bg-white flex items-center space-x-2 rounded-sm  p-2 lg:p-3 hover:bg-blue-50">
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0 " alt="" />
                            </div>
                            <Link href="/user-profile" className="flex-1">
                                <h6 className="text-base text-gray-900 hover:text-blue-800 ">The Rock Jhonson</h6>
                                <span className="text-sm text-gray-500 inline-flex items-center mr-2">Level 1</span>
                               
                            </Link>
                            <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 lg:px-5 text-center"> Follow </button>
                        </div>
                     
                        <div className="bg-white flex items-center space-x-2 rounded-sm  p-2 lg:p-3 hover:bg-blue-50">
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                            </div>
                            <Link href="/user-profile" className="flex-1">
                                <h6 className="text-base text-gray-900 hover:text-blue-800 ">The Rock Jhonson</h6>
                                <span className="text-sm text-gray-500 inline-flex items-center mr-2">Level 1</span>
                               
                            </Link>
                            <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 lg:px-5 text-center"> Follow </button>
                        </div>
                        <div className="bg-white flex items-center space-x-2 rounded-sm  p-2 lg:p-3 hover:bg-blue-50">
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                            </div>
                            <Link href="/user-profile" className="flex-1">
                                <h6 className="text-base text-gray-900 hover:text-blue-800 ">The Rock Jhonson</h6>
                                <span className="text-sm text-gray-500 inline-flex items-center mr-2">Level 1</span>
                               
                            </Link>
                            <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 lg:px-5 text-center"> Unfollow </button>
                        </div>
                        <div className="bg-white flex items-center space-x-2 rounded-sm  p-2 lg:p-3 hover:bg-blue-50">
                            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-600 relative">
                                <Image src="/images/user-profile.jpg" width={30} height={30} className="absolute w-full h-full inset-0" alt="" />
                            </div>
                            <Link href="/user-profile" className="flex-1">
                                <h6 className="text-base text-gray-900 hover:text-blue-800 ">The Rock Jhonson</h6>
                                <span className="text-sm text-gray-500 inline-flex items-center mr-2">Level 1</span>
                               
                            </Link>
                            <button className="text-blue-600 hover:text-white border border-blue-600 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-2 py-1 lg:px-5 text-center"> Follow </button>
                        </div>
                    </div>

                    <NoData />
                </div>
            </section>
        </>
    )
}