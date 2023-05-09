import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import React from "react";
import { Button, Modal } from "flowbite-react";

export default function ContactUs() {
    const [lottiecontact, setlottiecontact] = useState(null);


    useEffect(() => {
        import('../public/lottie/contact.json').then(setlottiecontact);




    }, []);
    return (
        <>
            <Head>
                <title>Contact Us | GyanOK.com</title>
                <meta name="description" content="Send us a message below and we’ll respond as soon as possible." />
                <meta name="keywords" content="Contact Us" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Contact Us | GyanOK.com" />
                <meta property="twitter:description" content="Send us a message below and we’ll respond as soon as possible." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Us | GyanOK.com" />
                <meta property="og:description" content="Send us a message below and we’ll respond as soon as possible." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>

                <div className="relative z-1  section-area">
                    <div className="container">
                        <div className="text-center mb-8">
                            <h1 className="font-black text-25px md:text-35px lg:text-40px text-white mb-3">Contact <span className="text-yellow-300">Us</span>
                            </h1>
                            <p className="text-lg text-gray-300 ">Our support team is always ready to help you. </p>
                        </div>

                        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                            <div className="bg-white rounded-sm text-center p-5">
                                <h4 className="font-bold  text-[20px] mb-3">Chat with our support team</h4>
                                <Lottie loop animationData={lottiecontact} play style={{ width: 300, height: 'auto', margin: 'auto' }} />

                                <Link href="https://m.me/770271813369250" className="block text-center mx-auto  mt-3  rounded-sm text-white py-2 px-5 bg-gradient-color ">Chat Now</Link>
                                <div className="flex justify-center mt-3 space-x-1 items-center">
                                    <Link href="https://wa.me/+919997526894?text=Hi%2C%0ACan%20you%20help%20me%20%3F" className=" p-0.5 bg-white border border-transparent hover:border-[#2aa71d]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/whatsapp.png" width={32} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                    <Link href="https://www.facebook.com/gyanokofficial" className="p-0.5 bg-white border border-transparent hover:border-[#324d8a]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/facebook.png" width={32} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                    <Link href="https://www.youtube.com/@gyanokquiz" className=" p-0.5 bg-white border border-transparent hover:border-[#f10000]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/youtube.png" width={36} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                    <Link href="https://www.instagram.com/gyanokofficial/" className=" p-0.5 bg-white border border-transparent hover:border-[#c2246e]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/instagram.png" width={32} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                    <Link href="https://twitter.com/Gyanokofficial" className=" p-0.5 bg-white border border-transparent hover:border-[#00a6dd]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/twitter.png" width={32} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/gyanok/" className=" p-0.5 bg-white border border-transparent hover:border-[#0c6ac7]  relative text-center rounded-full" target="_blank">
                                        <Image src="/images/linkedin.png" width={32} height={32} className="m-auto" alt="facebook" />
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white rounded-sm  p-5">
                                <div className="flex items-center pb-3 mb-3 border-b gap-3">
                                    <Image className=" object-cover" src="/images/app.png" width={64} height={64} alt="icon" />
                                    <div>
                                        <h4 className="font-bold  text-[20px]   mb-1">Call Us: </h4>
                                        <p className="text-excerpt text-lg">
                                            <Link href="tel:+91-9997526894">+91-9997526894</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center pb-3 mb-3 border-b gap-3">
                                    <Image className=" object-cover" src="/images/mail.png" width={64} height={64} alt="icon" />
                                    <div>
                                        <h4 className="font-bold  text-[20px]   mb-1">Mail Us: </h4>
                                        <p className="text-excerpt text-lg">
                                            <Link href="mailto:samparkgyanok@gmail.com">samparkgyanok@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center pb-3 mb-3 border-b gap-3">
                                    <Image className=" object-cover" src="/images/map.png" width={64} height={64} alt="icon" />
                                    <div>
                                        <h4 className="font-bold  text-[20px]   mb-1">Address </h4>
                                        <p className="text-excerpt">V.K Tower, Haridwar Bypass Rd, Kunjapuri Vihar, Road, Dehradun, Uttarakhand 248001</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </Layout>


        </>
    )
}