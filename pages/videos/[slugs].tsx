import Head from "next/head"

import { useRouter } from "next/router";
export default function ShowSingleVideos() {
    const router = useRouter();

    const slugs = router.query.slugs

    const allvideosdata = [
        {
            name: "How To Add Cash In GyanOK",
            description: "In this tutorial video, we will show you how to add cash to your GyanOK account with ease. GyanOK is a trusted platform where you can participate in quizzes and win real cash prizes. Adding cash to your account is a simple process that can be completed in just a few steps. Whether you're a new user or an experienced one, this video will guide you through the process of adding cash to your GyanOK account. Watch the video and start adding cash to your account today!",
            url: "https://www.youtube.com/embed/nqcmI3INqKg",
            url_title: "how-to-add-cash-in-gyanok",
        },
        {

            name: "How To Withdraw Cash From GyanOK",
            description: "In this video, we will guide you through the simple steps to withdraw cash from GyanOK.com. GyanOK.com is an online platform where you can earn money by participating in quizzes, surveys, and other activities. If you're wondering how to withdraw your earnings from the site, this video is for you!  We will provide a step-by-step tutorial on how to withdraw your cash, including the necessary requirements and procedures. By the end of this video, you will have a clear understanding of how to withdraw cash from GyanOK.com.",
            url: "https://www.youtube.com/embed/bcMQwTzqHSI",
            url_title: "how-to-withdraw-cash-from-gyanok",
        },
        {

            name: "How To Reset Gyanok Login Password",
            description: "Agar ap apna password bhul gaye hai to apna naya password kese set kare, es video mai jaane. Apko login screen mai jake forget password mai click karna hoga and then apna mobile number dalna hoga and new password dena hoga, and submit pe click kare. uske baad apke mobile pe OTP ayega, vo submit kare and apka naya password create hogayega.",
            url: "https://www.youtube.com/embed/nqcmI3INqKg",
            url_title: "how-to-reset-gyanok-login-password",
        },
        {

            name: "How To Login At GyanOK",
            description: "Step 1 - Open gyanok login page. Enter you mobile number and password. Click on login 'Login Now' button. Correct details will log you in successfully. ",
            url: "https://www.youtube.com/embed/Rre-casUDyA",
            url_title: "how-to-login-at-gyanok",
        },
        {

            name: "How To Register At GyanOK",
            description: "In this video we have given demo on How To Register At GyanOK.com || Gyanok App Mai Register Kese Kare.",
            url: "https://www.youtube.com/embed/2sjSvU0FvT4",
            url_title: "how-to-register-at-gyanok",
        }

    ];


    return (
        <>
            <Head>
                <title>All Videos | By Gyanok</title>
                <meta name="description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta name="keywords" content="Daily Current Affairs Quiz, Current Affairs MCQ Today, Monthly Current Affairs Quiz, Current Affairs Question and Answer, Current Affairs MCQ, Daily Objective Current Affairs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="All Videos | BY GyanOK.com" />
                <meta property="twitter:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="All Videos | By GyanOK.com" />
                <meta property="og:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="py-5">
                <div className="container">


                    {
                        allvideosdata.map((item) => {
                            return item.url_title == slugs ? <>
                                <div className="flex items-center space-x-3 mb-5">

                                    <button type="button" onClick={() => router.back()} className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-1 text-center inline-flex items-center ">
                                        <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                        </svg>
                                    </button>
                                    <h4 className="text-white text-lg">{item.name}</h4>
                                </div>

                                <div className="border p-1 rounded-sm border-gray-600 mb-3">
                                    <iframe src={item.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className=" w-full lg:h-[500px] h-[220px] "></iframe>
                                </div>
                                <p className="text-gray-300 mb-3">{item.description}</p>


                            </> : '';
                        })}




                </div>
            </section>

        </>
    )
}