import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function AboutUs() {


    return (
        <>
            <Head>
                <title>About us | GyanOK.com</title>
                <meta name="description" content="An innovative platform to learn and earn daily/weekly by playing a simple quiz. GyanOK aims to bring out your knowledge and gives a chance to earn money online." />
                <meta name="keywords" content="About Us" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="About us | GyanOK.com" />
                <meta property="twitter:description" content="An innovative platform to learn and earn daily/weekly by playing a simple quiz. GyanOK aims to bring out your knowledge and gives a chance to earn money online." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="About us | GyanOK.com" />
                <meta property="og:description" content="An innovative platform to learn and earn daily/weekly by playing a simple quiz. GyanOK aims to bring out your knowledge and gives a chance to earn money online." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>

                <section className="relative  bg-white 	 section-area">
                    <div className="container">
                        <div className="text-center xl:ml-auto xl:mr-auto xl:max-w-[1115px]">
                            <h1 className="font-black text-[30px] lg:text-[42px] text-black-color mb-5">About <span className="text-primary">GyanOK</span></h1>
                            <p className="text-gray-600 lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 ">An innovative platform to learn and earn daily/weekly by playing a simple quiz. GyanOK aims to bring out your knowledge and gives a chance to earn money online.</p>
                        </div>
                        <div className="grid gap-3 grid-cols-3 my-5">
                            <div className="text-center md:text-left">
                                <Image src="/images/about1.png" className="inline" width={300} height={300} alt="GyanOk About" />
                            </div>
                            <div className="text-center lg:mt-70">
                                <Image src="/images/about2.png" className="inline" width={300} height={300} alt="GyanOk About" />
                            </div>
                            <div className="text-center md:text-right">
                                <Image src="/images/about3.png" className="inline" width={300} height={300} alt="GyanOk About" />
                            </div>
                        </div>
                    </div>

                </section>

                <section className=" bg-[url('/images/about-bg.png')] section-area bg-no-repeat bg-cover relative">
                    <div className="container py-5">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            <div className="image text-center relative self-center lg:order-1 order-2" >
                                <img src="/images/about-win.png" className="rounded-md" alt="about-image" />

                            </div>
                            <div className="content lg:pl-5 self-center lg:order-2 order-1">
                                <h2 className="font-semibold text-[24px] lg:text-[36px] mb-5 text-black-color">With our quiz you can learn and earn.</h2>
                                <p className=" leading-8 text-justify">
                                    We particularly love to play random Quiz games, as they are fun games with a ton of significant value. While playing Quiz, you have a good time while we learn, grow your overall knowledge, and become more brilliant. Our quiz cover subjects like General Knowledge, Geography, History, Human body, Science, Animals, Food, Movies, Tv, Sports, Languages, Celebrities, and substantially more. </p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-1  xl:inline left-[9%] bottom-5"><img src="/images/shape11.png" className="animate-custom-movebounce" alt="shape" /></div>
                    <div className="container py-5">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            <div className="content lg:pl-5 self-center ">
                                <h2 className="font-semibold text-[24px] lg:text-[36px] mb-5 text-black-color">Train Your Brain With IQ Test and Brain Games</h2>
                                <p className=" leading-8 text-justify">
                                    We likewise can assist you with preparing your brain with superb and free IQ tests with results, mind games, and math games that are enjoyable. You can track down your result on our site, accessible for you whenever, anyplace. Get your free IQ test now! </p>

                            </div>

                            <div className="image text-center relative self-center " >
                                <img src="/images/about-earn.png" className="rounded-md" alt="about-image" />

                            </div>

                        </div>
                    </div>
                    <div className="absolute z-1  xl:inline right-[9%] top-8"><img src="/images/shape11.png" className="animate-custom-movebounce" alt="shape" /></div>
                </section>


                <section className="bg-[url('/images/zigzag.jpg')] section-area relative ">
          <div className="container">
            <div className="section-title mb-10 text-center ">

              <h2 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px] mb-3 ">Still have any question
                  
              </h2>
              <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">We are always there for you! 😀</p>
            </div>

            <div className="text-center">
              <Link href="#" className="block w-[60%] mx-auto text-lg  rounded-sm text-white py-2.5 px-5 bg-gradient-color ">Contact Us</Link>
            </div>

            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-1 my-8 bg-gray-400 border-0 " />
              <span className="absolute text-2xl px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 ">OR</span>
            </div>
              <div className="text-center">
                <h2 className=" text-xl font-semibold mb-5"> Connect Us On</h2>
                <div className="flex items-center justify-center space-x-3">
                <Link href="https://wa.me/+919997526894?text=Hi%2C%0ACan%20you%20help%20me%20%3F" className=" p-1 bg-white border-2 border-transparent hover:border-[#2aa71d]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/whatsapp.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                <Link href="https://www.facebook.com/gyanokofficial" className="p-1 bg-white border-2 border-transparent hover:border-[#324d8a]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/facebook.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                <Link href="https://www.youtube.com/@gyanokquiz" className=" p-1 bg-white border-2 border-transparent hover:border-[#f10000]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/youtube.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                <Link href="https://www.instagram.com/gyanokofficial/" className=" p-1 bg-white border-2 border-transparent hover:border-[#c2246e]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/instagram.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                <Link href="https://twitter.com/Gyanokofficial" className=" p-1 bg-white border-2 border-transparent hover:border-[#00a6dd]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/twitter.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                <Link href="https://www.linkedin.com/company/gyanok/" className=" p-1 bg-white border-2 border-transparent hover:border-[#0c6ac7]  relative text-center rounded-full" target="_blank">
                  <Image src="/images/linkedin.png" width={64} height={64} className="m-auto" alt="facebook" />
                </Link>
                  
                 
                </div>
              </div>


          </div>
          <div className="left-[4%] top-[30%] 2xl:left-[10%] absolute z-1 hidden xl:inline"><Image src="/images/shape17.png" width={80} height={80} className="animate-custom-moveleftbounce" alt="shape" /></div>
          <div className="right-[1%] top-[20%] 2xl:right-[10%] absolute  hidden xl:inline"><Image src="/images/shape7.png" width={60} height={40} className="animate-custom-movebounce" alt="shape" /></div>
        </section>
            </Layout>


        </>
    )
}