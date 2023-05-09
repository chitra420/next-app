import Head from "next/head"
import Layout from "../components/Layout";

export default function RefundPolicy() {

    return (
        <>
            <Head>
                <title>Refund/Cancellation Policy | GyanOK.com</title>
                <meta name="description" content="Check out the refund and cancellation policy of GyanOK.com." />
                <meta name="keywords" content="Refund/Cancellation" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Refund/Cancellation Policy | GyanOK.com" />
                <meta property="twitter:description" content="Check out the refund and cancellation policy of GyanOK.com." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Refund/Cancellation Policy | GyanOK.com" />
                <meta property="og:description" content="Check out the refund and cancellation policy of GyanOK.com." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1 className="font-black text-25px md:text-35px lg:text-40px text-white mb-3">Refund <span className="text-yellow-300">Policy</span></h1>
                            <p className="text-lg text-gray-300 ">This policy was last updated on  August 1, 2022.</p>
                        </div>



                        <div className="policy-box mb-3 lg:mb-32">

                            <p className="text-xl">Respecting your privacy is critically important to achieving our mission of motivating every student. These are our guiding privacy principles:</p>
                            <ul>
                                    <li>Only in case of a weekly quiz, if you are unable to play due to technical errors, you shall be refunded.</li>
                                    <li>The amount shall be refunded within a duration of 4-7 days</li>
                                    <li>Refund will be directly dispersed in your UPI account.</li>
                                     <li>In case the pre-registered user is unable to play the weekly quiz due to personal reason, GyanOK shall not be held liable to refund the registration fee or utilise it for further weekly quiz.</li>
                                </ul>
                           

                        </div>
                    



                </div>
            </section>
        </Layout>


        </>
    )
}