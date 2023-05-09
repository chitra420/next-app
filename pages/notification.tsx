import Head from "next/head"

import Layout from "../components/Layout";
export default function Notification() {
    return (
        <>
            <Head>
                <title>Notification | GyanOK.com</title>
                <meta name="description" content="All notification of GyanOk." />
                <meta name="keywords" content="Notification" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Notification | GyanOK.com" />
                <meta property="twitter:description" content="All notification of GyanOk." />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Notification | GyanOK.com" />
                <meta property="og:description" content="All notification of GyanOk." />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <Layout>
                <div className="relative z-1  section-area">
                    <div className="container">
                        <div className="mb-5  flex justify-between items-center">
                            <h2 className="text-[22px] lg:text-30px  text-white">Notifications</h2>
                            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50  font-medium rounded-sm text-sm px-5 py-2.5 text-center ">Mark All Read</button>
                        </div>
                        <div className="bg-white rounded-sm  p-3 lg:p-5">
                            <ul className=" space-y-3">
                                <li className="block border-b border-[#ECECEC] mb-3 pb-3 last:border-0 last:pb-0">
                                    <div className="flex space-x-3">
                                        <div className="flex-none inline-flex overflow-hidden relative justify-center items-center w-8 h-8 lg:w-12 lg:h-12 bg-blue-50 rounded-full ">
                                            <span className="font-medium text-lg text-blue-800 ">J</span>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-wrap justify-between mb-1">
                                                <div>
                                                    <span className="  font-semibold text-black block">Ferira Watson </span>
                                                    <small className="block">Oct 09, 2021</small>
                                                </div>
                                                <div>
                                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2 text-center ">Read</button>
                                                </div>
                                            </div>
                                            <p className="text-sm"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="block border-b border-[#ECECEC] mb-3 pb-3 last:border-0 last:pb-0">
                                    <div className="flex space-x-3">
                                        <div className="flex-none inline-flex overflow-hidden relative justify-center items-center w-8 h-8 lg:w-12 lg:h-12 bg-blue-50 rounded-full ">
                                            <span className="font-medium text-lg text-blue-800 ">J</span>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex flex-wrap justify-between mb-1">
                                                <div>
                                                    <span className="  font-semibold text-black block">Ferira Watson </span>
                                                    <small className="block">Oct 09, 2021</small>
                                                </div>
                                                <div>
                                                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2 text-center ">Read</button>
                                                </div>
                                            </div>
                                            <p className="text-sm"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Layout>


        </>
    )
}