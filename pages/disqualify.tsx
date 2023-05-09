import Head from "next/head"
import { useEffect, useState } from "react";

import Lottie from "react-lottie-player";
import Layout from "../components/Layout";


export default function Disqualify() {
    const [lottieban, setlottieban] = useState(null);

    useEffect(() => {
        import('../public/lottie/ban.json').then(setlottieban);


      }, []);

    return (
        <>
            <Head>
                <title>Disqualify | GyanOK.com</title>
                <meta name="description" content="Your are disqualified." />
                <meta name="keywords" content="Disqualify" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Disqualify | GyanOK.com" />
                <meta property="twitter:description" content="Your are disqualified." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Disqualify | GyanOK.com" />
                <meta property="og:description" content="Your are disqualified." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="relative z-1  section-area bg-white">
                    <div className="container">

                       
                        <div className="w-full text-center ">
                        <Lottie loop animationData={lottieban}  play style={{ width: 300, height: 'auto', margin: 'auto' }} />
                            <h1 className="py-1 text-3xl lg:text-4xl font-extrabold text-primary">You are disqualified</h1>
                            <p className="py-3 text-base text-gray-600">As per terms and condition, you are not allow to switch or minimize window.</p>
                            <button className="rounded-sm text-white py-3 mt-5 px-5 bg-gradient-color ">Go back to Homepage</button>
                        </div>
                    </div>

                </section>



            </Layout>


        </>
    )
}