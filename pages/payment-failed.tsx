import Head from "next/head"
import { useEffect, useState } from "react";

import Lottie from "react-lottie-player";
import Layout from "../components/Layout";


export default function Disqualify() {
    const [lottieban, setlottieban] = useState(null);

    useEffect(() => {
        import('../public/lottie/failed.json').then(setlottieban);


    }, []);

    return (
        <>
            <Head>
                <title>Payment Failed | GyanOK.com</title>
                <meta name="description" content="Payment Failed" />
                <meta name="keywords" content="Payment Failed " />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Payment Failed  | GyanOK.com" />
                <meta property="twitter:description" content="Payment Failed." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Payment Failed  | GyanOK.com" />
                <meta property="og:description" content="Payment Failed" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="relative z-1  section-area bg-white">
                    <div className="container">


                        <div className="w-full text-center ">
                            <Lottie loop={false} animationData={lottieban} play style={{ width: 200, height: 'auto', margin: 'auto' }} />
                            <h1 className="py-1 text-3xl lg:text-4xl font-extrabold text-primary">Sorry, Payment Failed </h1>
                            <p className="py-3 text-base text-gray-800">If any amount is deducted will be reversed within 72 hours.</p>    
                            <div className="text-gray-500">
                              <p>Make sure you entered the correct payment details.</p>
                               <p>Try again with different payment methods.</p>
                                <p> Try again later or next day</p>
                              
                            </div>

                            <button className="rounded-sm text-white py-3 mt-5 px-5 bg-gradient-color ">Go back to Homepage</button>
                        </div>
                    </div>

                </section>



            </Layout>


        </>
    )
}