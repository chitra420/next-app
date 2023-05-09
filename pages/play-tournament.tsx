import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"

import { RiTimerFlashLine } from "react-icons/ri";
import Link from "next/link";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";



export default function PlayTournaments() {
    const [act, setActive] = useState(0);

    var i = 0;
    var txt = "Make a Multiple Choice Test Template Using Excel"
    var speed = 100;
   
    function typeWriter() {
        var option = document.querySelector(".option-box-area")
        if (i < txt.length) {
          document.getElementById("qhead").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
        if (i == txt.length -1) {
            option.classList.add("opacity-100");    
            option.classList.remove("opacity-0"); 
          }
                  
      }
    useEffect(() => { 
        typeWriter();    
    },[])
   
    return (
        <>

            <Head>
                <title>Play Tournaments - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Tournaments, Quiz Tournaments, GK Tournaments, Online Quiz Tournaments" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Quiz Tournaments - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing tournaments quiz with other players and win upto ₹10,000. Participate in free or paid quiz tournament and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>


            <section className="play-tour-area pb-5">
                <div className="container relative">
               
                    <button className="absolute right-0 top-2">
                        <BsFillVolumeDownFill className="text-white text-[36px]" />
                        <BsFillVolumeMuteFill className="text-yellow-300 text-[36px]" />
                    </button>

                    {/* <audio controls style={{"width": "100%"}} autoPlay loop muted={false} >
                        <source src={"/images/kbc.mp3"} type="audio/mpeg"/>
                    </audio> */}
                  

                    <div className="question-timer">
                        <div className="timer-icon">
                            <RiTimerFlashLine className="text-white text-[40px]" />
                        </div>
                        <span className="timer-countdown">40</span>
                    </div>

                    <div className="flex flex-row justify-between">

                        <div className="flex items-center  space-x-1">
                            <Image src="/images/user.png"
                                alt="player" title="player"
                                width={36}
                                height={36} className="w-[36px] h-[36px] p-0.5  rounded-full" />
                            <div className="font-medium pr-1 ">
                                <span className=" text-sm  block text-white truncate w-[64px] lg:w-auto">Himanshu Verma</span>
                                <span className="text-sm block text-yellow-300">XXXX789</span>
                            </div>
                            <div className="w-8 h-8 leading-8 text-center rounded-full ring-2 ring-gray-300">
                                <span className="text-lg  text-white">1</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1">
                            <Image src="/images/user.png"
                                alt="player" title="player"
                                width={36}
                                height={36} className="w-[36px] h-[36px] p-0.5  rounded-full " />
                            <div className="font-medium pr-1 ">
                                <span className=" text-sm  block text-white truncate w-[64px] lg:w-auto">Sunil Singh Rawat</span>
                                <span className="text-sm block text-yellow-300">XXXX789</span>
                            </div>
                            <div className="w-8 h-8 leading-8 text-center rounded-full ring-2 ring-gray-300">
                                <span className="text-lg  text-white">1</span>
                            </div>

                        </div>

                    </div>
                    <div className="question-box">

                        <div className="steps-inner " id="step-1">

                            <div className="step-bar p-3 lg:p-5">
                                <div className="flex justify-between">
                                    <span className="step-counter">
                                        
                                        Question 1 / 4
                                    </span>
                                    <span className="step-counter">
                                        20%
                                    </span>
                                </div>
                                <div className="step-bar-inner">
                                    <div className="step-bar-move step-move m25"></div>
                                </div>
                            </div>
                            <div className="p-3 ">
                              
                                {/* <h4 className="ques-heading" >
                                    Make a Multiple Choice Test Template Using Excel
                                </h4> */}
                                <h4 className="ques-heading" id="qhead">                                
                                </h4>



                                <div className="form-inner option-box-area opacity-0 transition delay-500 duration-300">
                                    <label className={`form-input ${act == 1 ? 'active-input' : ''}`} htmlFor="play1">
                                        <input type="radio" name="play" id="play1" onClick={() => setActive(1)} />
                                        Varanasi
                                    </label>
                                    <label className={`form-input ${act == 2 ? 'active-input' : ''}`} htmlFor="play2">
                                        <input type="radio" name="play" id="play2" onClick={() => setActive(2)} />
                                        Shravasti
                                    </label>
                                    <label className={`form-input ${act == 3 ? 'active-input' : ''}`} htmlFor="play3">
                                        <input type="radio" name="play" id="play3" onClick={() => setActive(3)} />
                                        Kushavati
                                    </label>
                                    <label className={`form-input ${act == 4 ? 'active-input' : ''}`} htmlFor="play4">
                                        <input type="radio" name="play" id="play4" onClick={() => setActive(4)} />
                                        Vaishali
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons p-3 lg:p-5">
                                <Link href="/tournament-result" className="gradiant-btn  next w-full lg:w-auto " >Next Question</Link>
                                {/* <button type="button" className="gradiant-btn  next w-full lg:w-auto " onClick={handleStart} >Next Question</button> */}


                            </div>


                        </div>
                        <div className="steps-inner" id="step-2">
                            <div className="step-bar p-3 lg:p-5">
                                <div className="flex justify-between">
                                    <span className="step-counter">
                                        Question 2 / 4
                                    </span>
                                    <span className="step-counter">
                                        40%
                                    </span>
                                </div>
                                <div className="step-bar-inner">
                                    <div className="step-bar-move step-move m50"></div>
                                </div>
                            </div>
                            <div className="p-3 ">
                                <h4 className="ques-heading">
                                    Make a Multiple Choice Test Template Using Excel
                                </h4>
                                <div className="form-inner">
                                    
                                    <label className={`form-input ${act == 1 ? 'active-input' : ''}`} htmlFor="work1">
                                        <input type="radio" name="work" id="work1" onClick={() => setActive(1)} />
                                        Activate Developer Tab
                                    </label>
                                    <label className={`form-input ${act == 2 ? 'active-input' : ''}`} htmlFor="work2">
                                        <input type="radio" name="work" id="work2" onClick={() => setActive(2)} />
                                        Providing a Lecturer
                                    </label>
                                    <label className={`form-input ${act == 3 ? 'active-input' : ''}`} htmlFor="work3">
                                        <input type="radio" name="work" id="work3" onClick={() => setActive(3)} />
                                        Personally Quizzes
                                    </label>
                                    <label className={`form-input ${act == 4 ? 'active-input' : ''}`} htmlFor="work4">
                                        <input type="radio" name="work" id="work4" onClick={() => setActive(4)} />
                                        Massive Batches
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons p-3 lg:p-5">
                                <Link href="/tournament-result" className="gradiant-btn  next w-full lg:w-auto " >Next Question</Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">

                        <div className="flex items-center  space-x-1">
                            <Image src="/images/user.png"
                                alt="player" title="player"
                                width={36}
                                height={36} className="w-[36px] h-[36px] p-0.5  rounded-full " />
                            <div className="font-medium pr-1 ">
                                <span className=" text-sm  block text-white truncate w-[64px] lg:w-auto">Chota Don</span>
                                <span className="text-sm block text-yellow-300">XXXX789</span>
                            </div>
                            <div className="w-8 h-8 leading-8 text-center rounded-full ring-2 ring-gray-300">
                                <span className="text-lg  text-white">1</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1">
                            <Image src="/images/user.png"
                                alt="player" title="player"
                                width={36}
                                height={36} className="w-[36px] h-[36px] p-0.5  rounded-full " />
                            <div className="font-medium pr-1 ">
                                <span className=" text-sm  block text-white truncate w-[64px] lg:w-auto">Umesh Singh Rawat</span>
                                <span className="text-sm block text-yellow-300">XXXX789</span>
                            </div>
                            <div className="w-8 h-8 leading-8 text-center rounded-full ring-2 ring-gray-300">
                                <span className="text-lg  text-white">1</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}