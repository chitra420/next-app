import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Script from "next/script";

export default function HowToPlay() {
    const[videoUrl,setVideoUrl] = useState('')
    return (

        <>
            <Head>
                <title>How To Play | GyanOK.com</title>
                <meta name="description" content="The question appears and the participants need to answer before the countdown ends" />
                <meta name="keywords" content="How to play, instructions, rules and regulations" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="How to Play | GyanOK.com" />
                <meta property="twitter:description" content="The question appears and the participants need to answer before the countdown ends" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="How to Play | GyanOK.com" />
                <meta property="og:description" content="The question appears and the participants need to answer before the countdown ends" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5">
                <div className="container">
                  
                    <div className="flex items-center space-x-3 mb-5">
                        <Link href="/quiz-tournaments" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1.5 text-center inline-flex items-center ">
                            <svg className="w-4 h-4 font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                            </svg>
                        </Link>
                        <h4 className="text-white">Back</h4>
                    </div>
                    <h5 className="text-white mb-3">How to play GyanOK Tournaments</h5>
                    <div className="border p-1 rounded-sm border-gray-600 mb-3">
                    <iframe  src="https://www.youtube.com/embed/bcMQwTzqHSI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className=" w-full lg:h-[500px] h-[220px] "></iframe>
                    </div>
                    <p className="text-gray-300 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat harum velit facilis architecto corrupti cumque eligendi explicabo ut sapiente consectetur. Atque necessitatibus aut libero ipsam minima repudiandae itaque alias nobis.</p>
                    <p className="text-gray-300 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat harum velit facilis architecto corrupti cumque eligendi explicabo ut sapiente consectetur. Atque necessitatibus aut libero ipsam minima repudiandae itaque alias nobis.</p>
                    <p className="text-gray-300 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat harum velit facilis architecto corrupti cumque eligendi explicabo ut sapiente consectetur. Atque necessitatibus aut libero ipsam minima repudiandae itaque alias nobis.</p>
                    

                    
                </div>
            </section>        



            {videoUrl ? <> <div tabIndex={-1}  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
             <div className="relative p-4 w-full max-w-2xl h-auto">
             <div className="relative rounded-sm shadow ">

                <div className="flex justify-end  border-b ">
                    
                    <button type="button" onClick={() => setVideoUrl('')} className="text-gray-300 bg-transparent pb-3 " >
                        <svg  className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        
                    </button>
                </div>

                <iframe width="auto" height="100%" src="https://www.youtube.com/embed/bcMQwTzqHSI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>


               
             </div>
         </div>
       <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div></>: ''}



            <style jsx>
                
               {
                `.button.is-play {
                    background-image: linear-gradient(90deg,#ff0080,#ff8c00);
                    border-radius: 50%;
                    width: 64px;
                    height: 64px;
                    position:relative;
                    display:inline-block;
                  }
                  .button.is-play .button-outer-circle {
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    width: 100%;
                  }
                  .button.is-play .button-icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 30px;
                    height: 30px;
                    transform: translate(-50%, -50%);
                  }
                  .button.is-play .button-icon .triangle {
                    -webkit-animation: fadeIn 7s ease;
                            animation: fadeIn 7s ease;
                  }
                  .button.is-play .button-icon .path {
                    stroke-dasharray: 90;
                    stroke-dashoffset: 0;
                    -webkit-animation: triangleStroke 3s;
                            animation: triangleStroke 3s;
                    -webkit-animation-timing-function: ease;
                            animation-timing-function: ease;
                  }
                  .has-scale-animation {
                    -webkit-animation: smallScale 3s infinite;
                            animation: smallScale 3s infinite;
                  }
                  .has-delay-short {
                    -webkit-animation-delay: 0.5s;
                            animation-delay: 0.5s;
                  }
                  @-webkit-keyframes fadeIn {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  @keyframes fadeIn {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                  @-webkit-keyframes triangleStroke {
                    from {
                      stroke-dashoffset: 120;
                    }
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  @keyframes triangleStroke {
                    from {
                      stroke-dashoffset: 120;
                    }
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  @-webkit-keyframes smallScale {
                    from {
                      transform: scale(1);
                      opacity: 1;
                    }
                    to {
                      transform: scale(1.8);
                      opacity: 0;
                    }
                  }
                  @keyframes smallScale {
                    from {
                      transform: scale(1);
                      opacity: 1;
                    }
                    to {
                      transform: scale(1.8);
                      opacity: 0;
                    }
                  }
                  `
               }

            </style>

        </>
    )
}