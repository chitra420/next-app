import Head from "next/head"

import { useEffect, useState } from "react";

import Lottie from "react-lottie-player";



export default function Disqualify() {
    const [lottienotify, setlottienotify] = useState(null);

    useEffect(() => {
        import('../public/lottie/bellnotify.json').then(setlottienotify);


    }, []);



    return (
        <>
            <Head>
                <title>Allow Notification | GyanOK.com</title>
                <meta name="description" content="You need to allow notifiation for using this app" />
                <meta name="keywords" content="Allow Notification" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Allow Notification | GyanOK.com" />
                <meta property="twitter:description" content="You need to allow notifiation for using this app" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Allow Notification | GyanOK.com" />
                <meta property="og:description" content="You need to allow notifiation for using this app" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>

            <section className="relative z-1 py-5 ">
                <div className="container">


                    <div className="w-full text-center bg-white p-5 pt-0 rounded-lg">
                        <Lottie loop animationData={lottienotify} play style={{ width: 160, height: "auto", margin: 'auto' }} />
                        <h4 className=" font-extrabold text-primary">Turn On Notification </h4>
                        <p className="py-3 text-base text-gray-500 mb-3">For continuing this app, you need to allow the notification for better experience.</p>


                        <div className="text-left ">



                            <ol className="space-y-4 text-gray-700 list-decimal list-inside dark:text-gray-400">
                                <li>
                                    From a Home screen, do one of the following:

                                    <ul className="text-gray-600 pl-5 mt-2 space-y-1 list-disc  list-outside text-sm">
                                        <li>Swipe screen then navigate: <strong>Settings{" > "}Apps & notifications{" > "}App info</strong>.</li>
                                        <li>Navigate: <strong>Settings{" > "}Applications{" > "}Application manager</strong>.</li>
                                        <li>Navigate: <strong>Apps{" > "}Settings{" > "}Applications{" > "}Application manager</strong>.</li>
                                        <li>Navigate: <strong>Apps{" > "}Settings{" > "}Application manager</strong>.</li>
                                    </ul>
                                </li>
                                <li>
                                    Tap an app.

                                    <ul className="text-gray-600 pl-5 mt-2 space-y-1 list-disc  list-outside text-sm">
                                        <li>Some devices may require you to tap the app name twice.</li>

                                    </ul>
                                </li>
                                <li>
                                    Tap <strong>'Notifications' or 'App notifications'</strong>.


                                </li>
                                <li>
                                    Do one of the following:
                                    <ul className="text-gray-600 pl-5 mt-2 space-y-1 list-disc  list-outside text-sm">
                                        <li>Tap <strong>Show notifications</strong> to turn on:
                                        </li>
                                        <li>Tap <strong>'On'</strong>.
                                        </li>
                                        <li>Tap <strong>Allow notifications</strong> to turn on.
                                        </li>

                                    </ul>

                                </li>
                            </ol>


                        </div>


                    </div>
                </div>

            </section>

        </>
    )
}