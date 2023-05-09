import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";



export default function StartTournaments() {

    const [lottieboxing, setlottieboxing] = useState(null);

    const effectRan = useRef(false);
    useEffect(() => {

        import('../public/lottie/boxing.json').then(setlottieboxing);

        function cntDown() {
            let sec = 20;
            const el: any = document.querySelector(".timer") as HTMLElement;
            const timer = setInterval(() => {
                el.innerHTML = sec--;
                if (sec < 0) clearInterval(timer);
            }, 1000);
        }

        cntDown();
        return () => {
            effectRan.current = true;
        }
    },[])

    

    return (
        <>

            <Head>
                <title>Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="{{ url('/') }}" />
                <meta property="twitter:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className=" py-3">
                <div className="container">
                    <div className="bg-[#010a3a] shadow-lg p-5 rounded-sm text-center mb-5">
                        <h1 className="text-white text-[26px] mb-3">Starting a Quiz</h1>
                        <div id="countdown-timer" className="mx-auto mb-3">
                            <p className="timer text-[64px] text-white"></p>
                        </div>
                    </div>
                    <h2 className="text-yellow-300 text-[22px] mb-3">Tournaments Player</h2>
                    <div className="p-3 border overflow-hidden">
                        <div className="flex flex-column items-center gap-3">
                            <div className="w-3/5 lg:w-3/4">
                                <div className="flex items-center mb-3">
                                    <Image src='/images/user-small.png' alt='user' width={36} height={36} className="w-[36px] h-[36px] p-0.5  rounded-full"></Image>
                                    <div>
                                    <h5 className="text-white pl-1 text-sm md:text-md lg:text-lg">Sunil Singh rawat</h5>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 ml-1  border border-yellow-300">Newbie</span>
                                    </div>
                                  

                                    
                                </div>
                                <div className="flex items-center mb-3">
                                    <Image src='/images/user-small.png' alt='user' width={36} height={36} className="w-[36px] h-[36px] p-0.5  rounded-full"></Image>
                                    <div>
                                         <h5 className="text-white pl-1 text-sm md:text-md lg:text-lg">Himanshu Verma</h5>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 ml-1  border border-yellow-300">Newbie</span>
                                    </div>
                                   

                                </div>
                                <div className="flex items-center mb-3">
                                    <Image src='/images/user-small.png' alt='user' width={36} height={36} className="w-[36px] h-[36px] p-0.5  rounded-full"></Image>
                                    <div>
                                         <h5 className="text-white pl-1 text-sm md:text-md lg:text-lg">Pankaj Bhatt</h5>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 ml-1  border border-yellow-300">Newbie</span>
                                    </div>
                                   

                                </div>
                                <div className="flex items-center mb-3">
                                    <Image src='/images/user-small.png' alt='user' width={36} height={36} className="w-[36px] h-[36px] p-0.5  rounded-full"></Image>
                                    <div>
                                    <h5 className="text-white pl-1 text-sm md:text-md lg:text-lg">Rohit Dhobriyal</h5>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-gray-700 ml-1  border border-yellow-300">Newbie</span>
                                    </div>
                                 

                                </div>
                            </div>

                            <div className="w-2/5 lg:w-1/4">
                                <div className="scale-x-[-1] relative right-[-40px]">
                              <Lottie loop animationData={lottieboxing}  play style={{ width: 180, height: 'auto', margin: 'auto' }} />
                                </div>
                               
                            </div>
                        </div>

                    </div>

                    <div className="fixed bg-[#010a3a] inset-x-0 bottom-0 p-3 w-full text-center">
                        <p className="text-yellow-300">Do not Press back or Close this window</p>
                    </div>

                </div>
            </section>

        </>
    )
}