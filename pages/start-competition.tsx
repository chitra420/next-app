import Head from "next/head"

import { useEffect, useRef } from "react";

export default function StartCompetition() {

    
    const effectRan = useRef(false);
    useEffect(() => {


        function cntDown() {
            let sec = 20;
            const el: any = document.querySelector(".timer") as HTMLElement;
            const timer = setInterval(() => {
                el.innerHTML = sec--;
                if (sec < 0) clearInterval(timer);
            }, 1000);
        }

        cntDown();
    
    },[])
   
    return (
        <>

            <Head>
                <title>Quiz Competition - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
           
            <section className=" py-3">
                <div className="container">
                    <div className="bg-[#010a3a] shadow-lg p-5 w-full rounded-sm text-center mb-5">
                        <h1 className="text-white text-[24px] mb-3">Starting a Competition <br /> Be Ready</h1>
                    
                        <div id="countdown-timer" className="mx-auto mb-3">
                            <p className="timer text-[64px] text-white"></p>
                        </div>
                        <h5 className="text-yellow-300">Do not Press back or Close this window</h5>
                    </div>
                </div>
            </section>
                
        </>
    )
}