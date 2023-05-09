import Head from "next/head"
import { useEffect, useRef, useState } from "react";

import { FaRupeeSign, FaTrophy, FaUserFriends } from "react-icons/fa";
import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import Lottie from "react-lottie-player";


export default function JoinBattleRoom() {
    const router = useRouter()

    const [resultwait, setresultwait] = useState(null);

    useEffect(() => {
        import('../public/lottie/battle-join.json').then(setresultwait);


      }, []);
  
    return (
        <>

            <Head>
                <title>Join Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com</title>
                <meta name="description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="twitter:description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Battle - Play Quiz with Friend and Win Real Money | GyanOK.com" />
                <meta property="og:description"
                    content="Earn Cash by playing quiz battle with friends and win real cash prize. Participate in free or paid quiz battle and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <section className=" py-3 battles-area">
                <div className="container">

                    <div className="mb-2">
                    <button className="text-white" onClick={() => router.back()}><MdArrowBackIosNew className="mr-1" />Back</button>

                    </div>

                    <div className="w-full p-4 text-center bg-white border rounded-sm shadow-md  ">
                        <h3 className=" text-primary mb-3"> Join the room</h3>

                        <Lottie loop animationData={resultwait}  play style={{ width: 'auto', height: '180px', margin: 'auto' }} />

                        <div className="room-code p-3 rounded-lg bg-sky-100 mb-5">
                            <div className=" flex items-center justify-center mb-5">
                                <h5>Battle Code</h5>
                                <div className="whitespace-nowrap border-2 border-rose-500 border-dashed bg-yellow-200  py-2 px-5 ml-3 text-lg	">
                                    547851
                                </div>
                            </div>
                            <div>
                                <p className="mb-3">Start battle to play quiz tournament <br /> with your friends</p>

                            </div>
                        </div>

                        <div className=" text-left mb-3">
                            <h4 className="text-primary mb-3">2 Player 1 Winner</h4>
                            <ul className="grid gap-1 md:gap-3 lg:gap-3 grid-cols-3 ">
                                <li className="text-[#126a2a]  rounded-md shadow-sm relative text-center p-2 lg:p-3  bg-[#c8ffd4]">
                                    <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-1">
                                        <FaUserFriends className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                    </div>
                                    <span className="text-sm"> Players</span>
                                    <h3 >5</h3>

                                </li>
                                <li className="text-[#e91e63]  rounded-md shadow-sm relative text-center p-2 lg:p-3   bg-[#ffe6e6]">
                                    <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-1">
                                        <FaRupeeSign className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                    </div>
                                    <span className="text-sm">Entry Fee</span>
                                    <h3 >5</h3>
                                </li>
                                <li className="text-[#ff5722]  rounded-md shadow-sm relative text-center p-2 lg:p-3   bg-[#fff6bb]">
                                    <div className="icon relative  rounded-full h-10 w-10 mx-auto bg-white mb-1">

                                        <FaTrophy className=" text-xl absolute left-0 right-0 top-1/2 m-auto -translate-y-2/4" />
                                    </div>
                                    <span className="text-sm">Pool Prize</span>
                                    <h3 >5</h3>

                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="fixed bg-[#010a3a] inset-x-0 bottom-0 p-3 w-full text-center">
                        <Link href="start-tournament-battle" className="gradiant-btn w-full lg:w-auto  ">JOIN BATTLE NOW </Link>
                    </div>

                </div>
            </section>

        </>
    )
}