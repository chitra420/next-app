import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout";

export default function ReferNow() {


    return (
        <>

            <Head>
                <title>Referrals | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Referrals | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Referrals | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <Layout>
                <section className="section-area">
                    <div className="container">

                        <div className="support-area relative bg-white rounded-sm mb-5 z-2 p-5 mt-3">

                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 content-center">
                                <div className="support-content xl:col-span-2">
                                    <span className="block text-primary font-semibold text-lg">Refer & Earn</span>
                                    <h2 className="text-[24px] lg:text-[30px] mb-3">Get Upto <big className="text-yellow-300">₹10*</big> For every new user you refer </h2>
                                    <p className=" mb-5 ">
                                        Share Your referral Link with friends and get chance to win ₹10</p>
                                    <button className="gradiant-btn   ">Share Now</button>
                                </div>
                                <div className="support-btn self-center text-right">
                                    <Image src="/images/refer.png" width={300} height={200} alt="refer" className="ml-auto rounded-sm object-contain"></Image>
                                </div>
                            </div>


                        </div>
                        <div className="grid gap-3 grid-cols-1 ">
                            <div className="bg-green-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                <div className="space-y-1">
                                    <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                    <p className="text-sm leading-1 text-gray-100 ">Get ₹3 bonus money when your friend register.</p>
                                </div>
                            </div>
                            <div className="bg-secondary-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                <div className="space-y-1">
                                    <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                    <p className="text-sm leading-1 text-gray-100 ">Get ₹3 bonus money when your friend deposit money in GyanOK wallet.</p>
                                </div>
                            </div>

                            <div className="bg-primary-gradient-color flex space-x-2 relative rounded-sm p-3 lg:p-5">
                                <img className="w-12 h-12 object-contain rounded-full p-1 ring-2 ring-yellow-300  block" src="/images/rupee.png" alt="" />
                                <div className="space-y-1">
                                    <h3 className=" text-lg font-semibold text-white">Earn On Friend Play</h3>
                                    <p className="text-sm leading-1 text-gray-100 ">Get ₹4 bonus money when Your friend play 10 Tournaments, 1 Trivia and give 10 Polls answers.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Layout>

        </>
    )
}