import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { MdExitToApp } from "react-icons/md";

export default function StartLiveShow() {
    const [lottiehost, setlottiehost] = useState(null);

    useEffect(() => {
        import('../public/lottie/host.json').then(setlottiehost);
    }, []);

    return (
        <>
            <Head>
                <title>Start Live Show | By Gyanok</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Start Live Show | By Gyanok" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Start Live Show | By Gyanok" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="pb-5">
                
                <div className="bg-gray-800 mb-3 py-3 sticky top-0 z-10">
                    <div className="container">
                        <div className="flex justify-between items-center">
                            <h5 className="font-semi-bold text-white">Live Show</h5>
                            <Link href="/live-show" className="px-3 py-1 text-sm font-medium text-center text-black bg-gray-100 rounded-sm hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300  "><MdExitToApp className="mr-1" />Exit</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    
                    <iframe className="border-2 border-yellow-300 mb-3 rounded-sm w-full h-[250px] lg:h-[400px]" src="https://www.youtube.com/embed/L_HnnrtgZcM" title="How to play Gyan OK quiz / how to install Gyan OK App" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    <div className="rounded-sm p-3 lg:p-5 bg-[#010a3a] ">


                        <div className=" text-center">
                        {/* <Lottie loop animationData={lottiehost} play style={{ width: 150, height: "auto"}} className="m-auto" /> */}

                            <h1 className="mb-4 lg:text-4xl text-2xl  text-white ">Waiting for Host to start the quiz </h1>
                            <p className="mb-5  font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Play our daily quiz show  and win special prize for you</p>

                        </div>

                        <div className=" mb-3 text-left bg-white/20 border border-gray-600 p-3 rounded-sm">
                            <p className="text-sm text-yellow-300 mb-1"> Did You Know?</p>
                            <p className="text-gray-300 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae aut repudiandae voluptas nostrum sequi</p>
                        </div>


                    </div>



                </div>
            </section>
        </>
    )
}