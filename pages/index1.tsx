import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Accordion } from 'flowbite-react';
import { GoQuote } from "react-icons/go";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiTwotoneStar } from 'react-icons/ai';
import { BsArrowRightShort } from "react-icons/bs";

export default function Home1() {
    const [initWidth, setInitWidth] = useState(1024)


    useEffect(() => {

        setInitWidth(window.innerWidth);
        setInterval(() => {
            if (document.getElementById('online_user_cnt')) {
                document.getElementById('online_user_cnt').innerHTML = (Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)).toString();
            }
        }, 3000)


    }, [])

    const allquizdata = [
        { title: 'Tournament', description: 'Play quiz in real time with others', url: '/quiz-tournaments', image: '/images/q-tour.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Competition', description: 'Compete with others to get on top', url: '/competition', image: '/images/q-comp.png', cornerimage: '/images/qlist4.png' },
        { title: 'Trivia', description: 'Fun and entertaining quiz', url: '/trivia-quizzes', image: '/images/q-trivia.webp', cornerimage: '/images/qlist1.png' },
        { title: 'Polls', description: 'Check what other thinks', url: '/polls', image: '/images/q-polls.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Current Affairs Quiz', description: 'Play Quiz Daily & Increase Your GK', url: '/current-affairs-quiz', image: '/images/q-current.png', cornerimage: '/images/qlist3.png' },
    ];

    const alltestimonialsdata = [
        { id: '1', name: 'Nutan Bhatt, Dehradun', review: 'GyanOK is my go-to site for a fun and challenging quiz. And the cash prizes are just the cherry on top! ', userimage: '/images/user-profile.jpg', bgcolor: 'bg-gradient-color' },
        { id: '2', name: 'Abhay Kantawal, Chamba', review: 'I\'ve been hooked on GyanOK ever since I won my first prize. It\'s a great way to earn some extra cash while testing my knowledge', userimage: '/images/boy.png', bgcolor: 'bg-secondary-gradient-color' },
        { id: '3', name: 'Fahad Khan, Indore ', review: 'GyanOK has quickly become one of my favourite pastimes. The quizzes are always so much fun and I love the sense of competition.', userimage: '/images/boy.png', bgcolor: 'bg-green-gradient-color' },
        { id: '4', name: 'Ankit, Patna', review: 'I like this app very much and quiz is also interesting in this. We are learning and earning too.', userimage: '/images/review6.jpg', bgcolor: 'bg-gradient-color' },
        { id: '5', name: 'Dhruv, Dehradun', review: 'This is very interesting application and it gaves us many knowledge and opportunity to earn money.', userimage: '/images/review3.jpg', bgcolor: 'bg-secondary-gradient-color' },
        { id: '6', name: 'Pradeep Negi, Delhi', review: 'I have been using this application in my free time. It really interesting plus you get to learn some facts as well. Just answer few questions, earn money and it can be withdrawn easily via UPI.', userimage: '/images/review4.jpg', bgcolor: 'bg-gradient-color' },
        { id: '7', name: 'Anjali Tamta, Madhya Pradesh', review: 'I highly recommend this game to all of you. If you need some quick cash then Gyanok is made for you. Not only does it offer money but also increases general awareness.', userimage: '/images/review1.jpg', bgcolor: 'bg-secondary-gradient-color' },
        { id: '8', name: 'Neha Arya, Dehradun ', review: 'The application is fun!! You get to earn by answering real-time questions which are not that hard. Better to kill time by gaining some knowledge and of course adding some money to your pocket.', userimage: '/images/review5.jpg', bgcolor: 'bg-green-gradient-color' },

    ];

    return (
        <>
            <Layout>
                <Head>
                    <title>GyanOK.com | Play Quiz and Win Cash Rewards</title>
                    <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                    <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="/" />
                    <meta property="twitter:title" content="GyanOK.com | Play Quiz and Win Cash Rewards" />
                    <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                    <meta property="twitter:image" content="/images/logo.png" />

                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="GyanOK.com | Play Quiz and Win Cash Rewards" />
                    <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />

                    <meta property="og:image" content="/images/logo.png" />
                </Head>




                <section className="banner-area relative  bg-repeat  bg-[url(/images/quiz-banner.jpg)]" >
                    <div className="relative pt-3 pb-8 lg:py-12 overflow-hidden">
                        <div className="container">
                            <p className="text-lg  text-white whitespace-nowrap text-right">
                                <span className="relative inline-flex h-3 w-3 mr-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 "></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>

                                Online User <b id='online_user_cnt' className="text-yellow-300">9000</b></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 content-center">
                                <div className="banner-content place-self-center text-center lg:text-left lg:order-1 order-2 ">
                                    <h3 className="text-white mb-3">Play & Win</h3>
                                    <h1 className="text-white leading-normal text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] mb-6 drop-shadow-lg "><span className="text-yellow-300 "> ₹1 Lakh </span> Cash Prize 🎉
                                    </h1>
                                    <p className="text-gray-300 text-base lg:text-xl  mb-8  ">Join the Best Quiz Site on the Web and Start Earning Today!

                                    </p>
                                    <div className="mb-5 space-x-3 flex lg:justify-start justify-center  ">

                                        <Link href="/main-question" className="hover:scale-110 transition delay-150 duration-300 ease-in-out gradiant-btn w-lg mb-2  text-lg ">Play Quiz</Link>
                                        <Link href="https://play.google.com/store/apps/details?id=com.gyanok.twa" className="mb-2 hover:scale-110 transition delay-150 duration-300 ease-in-out"><Image src="/images/play-store.png" width={180} height={53} alt='play store button' /></Link>

                                    </div>
                                </div>

                                <div className="banner-image text-center  rounded-xl relative  lg:order-2 order-1">
                                    <Image src="/images/quiz.png" width={450} height={450} quality={100} className="inline-block relative lg:w-[450px] lg:h-[450px] w-[250px] h-[250px] animate__animated animate__fadeInUp z-1" alt="banner-image" />

                                    <img src="/images/car-ray.png" className="inline-block    rays-image absolute w-full h-auto z-0  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="banner-image" />

                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="container">
                        <div className="grid grid-cols-3 gap-2 lg:gap-3 mb-3">
                            <div className="group lg:text-left text-center bg-white/20 border border-slate-400 lg:p-5 p-2  rounded-sm shadow items-center lg:flex lg:space-x-3">
                                <div className="flex-shrink-0">

                                    <Image src="/images/c3.png" className="bg-white p-1 rounded-full my-2 mx-auto w-10 h-10 lg:w-16 lg:h-16" width={64} height={64} alt="price" />
                                </div>
                                <div>
                                    <h3 className="font-bold lg:text-[36px]  text-[20px]  text-yellow-300 mb-1">4,55,000+
                                    </h3>
                                    <p className="lg:text-base text-sm text-white mb-3">Rupees Transactions</p>
                                </div>


                            </div>
                            <div className="group lg:text-left text-center bg-white/20 border border-slate-400 lg:p-5 p-2  rounded-sm shadow items-center lg:flex lg:space-x-3">

                                <div className="flex-shrink-0">
                                    <Image src="/images/c1.png" className="bg-white p-1 rounded-full my-2 mx-auto w-10 h-10 lg:w-16 lg:h-16" width={64} height={64} alt="price" /></div>
                                <div><h3 className="font-bold lg:text-[36px]  text-[20px]  text-yellow-300 mb-1">70,000+
                                </h3>
                                    <p className="lg:text-base text-sm text-white mb-3 ">Registered Users</p></div>

                            </div>

                            <div className="group lg:text-left text-center bg-white/20 border border-slate-400 lg:p-5 p-2  rounded-sm shadow items-center lg:flex lg:space-x-3">

                                <div className="flex-shrink-0">
                                    <Image src="/images/c2.png" className="bg-white p-1 rounded-full my-2 mx-auto w-10 h-10 lg:w-16 lg:h-16" width={64} height={64} alt="price" />
                                </div>

                                <div>
                                    <h3 className="font-bold lg:text-[36px]  text-[20px]  text-yellow-300 mb-1">6,56,000+
                                    </h3>
                                    <p className="lg:text-base text-sm text-white mb-3">Quiz Played User</p>
                                </div>

                            </div>

                        </div>
                    </div>


                    <div className=" relative  py-5 bg-black/30">
                        <div className="container">
                            <h5 className="text-white mb-3">Players Won 💸</h5>
                            <AliceCarousel
                                mouseTracking
                                disableDotsControls={true}
                                disableButtonsControls={true}
                                innerWidth={initWidth}
                                autoPlay={true}
                                autoPlayInterval={600}
                                animationDuration={600}
                                infinite={true}
                                controlsStrategy="responsive"

                                responsive={{
                                    0: { items: 2 },
                                    568: { items: 2 },
                                    1024: { items: 6 },
                                }}>
                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Vinay Singh</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹125880</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Azad Sarna</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹91458</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Diti Nagarajan</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹65369</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Vasudha Gole</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹36839</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Abhishek Kumar</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹25919</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Anand Sahay</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹19372</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow p-3 ">

                                        <div className="flex items-center space-x-2">
                                            <div className="relative w-fit  flex-shrink-0">
                                                <Image className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5" src="/images/boy.png" width={48} height={48} alt="user image" />

                                            </div>



                                            <div className="overflow-hidden">
                                                <h5 className=" truncate lg:text-lg text-base font-medium text-gray-900 ">Rakesh Kumar</h5>
                                                <span className="inline-block  py-1 w-full font-medium text-left ">₹11417</span>


                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </AliceCarousel>
                        </div>

                    </div>

                    <div className="absolute z-1 w-[100px] lg:w-[150px] inline right-1 lg:right-[5%] bottom-[-50px] lg:bottom-[-75px]"><Image src="/images/batch.png" width={150} height={150} alt="shape" /></div>

                </section>

                {/* Choose Quiz */}

                <section className="bg-[url('/images/allquiz.png')] all-quizzes py-20">

                    <div className="container ">


                
                        
<div className=" bg-[url('/images/daily-bg.jpg')] rounded-lg overflow-hidden mb-5">
    <div className="px-3  text-center lg:py-16 py-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl ">Competition Quiz</h1>
        <p className="mb-5 text-2xl font-normal text-yellow-300 lg:text-3xl sm:px-16 lg:px-48">Win upto ₹10,000 daily</p>
        <div className="">
        <Link href="/main-question" className="gradiant-btn ">Get Started</Link>
        </div>
    </div>
</div>
<div className="bg-center bg-no-repeat bg-[url('/images/weekly-back.jpg')] rounded-lg overflow-hidden">
<div className="px-3  text-center lg:py-16 py-10">
        <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl ">Tournament Quiz</h1>
        <p className="mb-5 text-2xl font-normal text-yellow-300 lg:text-3xl sm:px-16 lg:px-48">Win upto ₹1,00,000 daily</p>
        <div className="">
        <Link href="/main-question" className="gradiant-btn ">Get Started</Link>
        </div>
    </div>
</div>




                        {/* <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2"> {allquizdata.map((quizdata) => {
                            return (
                                <div className="quiz-list relative rounded-sm p-5 lg:p-8 bg-white hover:bg-cyan-50 shadow-md transition-all duration-300 " key={quizdata.title}>
                                    <div className="flex justify-between items-center ">
                                        <div className="">
                                            <h5 className="text-primary text-[18px] lg:text-[24px]">{quizdata.title}</h5>
                                            <p className="leading-8 text-gray-600 mb-2">
                                                {quizdata.description}
                                            </p>
                                            <Link href={quizdata.url} type="button" className=" underline  decoration-2 underline-offset-4 text-gray-500 italic  inline-flex items-center">
                                                Play Quiz
                                                <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </Link>
                                        </div>
                                        <div className='mb-3 flex-shrink-0 z-1'>
                                            <Image className="object-cover" src={quizdata.image} width={100} height={100} alt="quiz image" />
                                        </div>
                                    </div>
                                    <Image className="absolute top-0 right-0 z-0" src={quizdata.cornerimage} width={130} height={130} alt="back icon" />
                                </div>
                            )
                        })} </div> */}



                    </div>
                </section>

                {/* Payment partners */}



                <section className="py-20 bg-white">
                    <div className="container ">
                        <div className="section-title mb-10 text-center ">

                            <h2 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px]  ">Payment Partners
                            </h2>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">Use any payment options to get started</p>
                        </div>

                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 ">
                            <div className="cursor-pointer  transition-all duration-300 self-center " >
                                <Image src="/images/partner1.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                            <div className="cursor-pointer  transition-all duration-300 self-center" >
                                <Image src="/images/partner2.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                            <div className="cursor-pointer  transition-all duration-300 self-center" >
                                <Image src="/images/partner3.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                            <div className="cursor-pointer  transition-all duration-300 self-center" >
                                <Image src="/images/partner4.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                            <div className="cursor-pointer  transition-all duration-300 self-center " >
                                <Image src="/images/partner5.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                            <div className="cursor-pointer  transition-all duration-300 self-center " >
                                <Image src="/images/partner6.png" width={150} height={60} className="object-contain" alt="partner logo" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* -- Download App Area -- */}
                <section className="section-area relative bg-white">
                    <div className="container ">
                        <div className=" rounded-md bg-yellow-50 border border-yellow-100">
                            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
                                <div className=" relative self-center text-center lg:text-left p-5 z-1 order-2 lg:order-1">
                                    <h2 className="  text-22px md:text-30px lg:text-35px xl:text-34px mb-5  ">Download App</h2>
                                    <p className="text-gray-600 mb-5">Download the GyanOK Quiz app now and put your knowledge to the test 📲 💡</p>
                                    <Link href="https://play.google.com/store/apps/details?id=com.gyanok.twa" className="mb-3 hover:scale-110 transition delay-150 duration-300 ease-in-out"><Image src="/images/play-store.png" width={160} height={50} alt='play store button' /></Link>
                                </div>
                                <div className="mobile-app-image order-1 lg:order-2" >
                                    <img src="/images/mobile-app.png" width={400} height={400} className="inline-block mt-[-64px]" alt="bg-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Download App Area --> */}


                {/* counter area */}



                {/* <section className="section-area relative">

          <Image src="/images/center_aligned_with_image-svg2.svg" width={100} height={100} alt="bg" className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0 animate-custom-movebounce" />
          <Image src="/images/center_aligned_with_image-svg3.svg" width={100} height={100} alt="bg" className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0 animate-custom-movebounce" />
          <div className="container">

           



            <div className="grid grid-cols-1 gap-5 md:grid-cols-3  lg:grid-cols-3">
              <div className="group bg-white/20 border border-gray-400 p-5 flex space-x-5 rounded-sm shadow items-center">
                <div className="flex-shrink-0">

                  <Image src="/images/c3.png" className="bg-white p-1 rounded-full" width={80} height={80} alt="price" />
                </div>
                <div>
                  <h3 className="font-bold lg:text-[52px]  text-[36px]  text-yellow-300">4,55,000+
                  </h3>
                  <p className="text-lg text-white mb-3">Rupees Transactions</p>
                </div>


              </div>
              <div className="group bg-white/20 border border-gray-400 p-5 flex space-x-5 rounded-sm shadow items-center">

                <div className="flex-shrink-0">
                  <Image src="/images/c1.png" className="bg-white p-1 rounded-full" width={80} height={80} alt="price" /></div>
                <div><h3 className="font-bold lg:text-[52px]  text-[36px]  text-yellow-300">70,000+
                </h3>
                  <p className="text-lg text-white mb-3">Registered Users</p></div>

              </div>

              <div className="group bg-white/20 border border-gray-400 p-5 flex space-x-5 rounded-sm shadow items-center">

                <div className="flex-shrink-0">
                  <Image src="/images/c2.png" className="bg-white p-1 rounded-full" width={80} height={80} alt="price" />
                </div>

                <div>
                  <h3 className="font-bold lg:text-[52px]  text-[36px]  text-yellow-300">6,56,000+
                  </h3>
                  <p className="text-lg text-white mb-3">Quiz Played</p>
                </div>

              </div>

            </div>


          </div>
        </section> */}

                {/* Testimonials */}

                <section className="py-20 bg-white bg-cover bg-no-repeat bg-center">

                    <div className="container">
                        <div className="section-title mb-12 text-center ">


                            <h2 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px] mt-1 ">Our users love us! ❤️

                            </h2>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">Here's what they have to say</p>
                        </div>
                        <AliceCarousel
                            mouseTracking
                            innerWidth={initWidth}
                            disableDotsControls={false}
                            disableButtonsControls={true}
                            autoPlay={true}
                            autoPlayInterval={3000}
                            animationDuration={800}
                            infinite={true}
                            controlsStrategy="responsive"
                            responsive={{
                                0: { items: 1 },
                                568: { items: 1 },
                                1024: { items: 2 },
                            }}

                        >
                            {alltestimonialsdata.map((testimonial) => {
                                return (

                                    <div className={`relative rounded-lg mx-1  border p-5 lg:p-8   ${testimonial.bgcolor}`} key={testimonial.id}>
                                        <div className="text-[45px] text-yellow-300 -mt-5"><GoQuote /></div>
                                        <div className="text-left my-3 min-h-[120px] inline-flex items-center">
                                            <p className="text-white lg:text-lg leading-normal first-letter:text-[30px]">{testimonial.review}</p>
                                        </div>

                                        <div className="flex items-center space-x-3 mt-3">
                                            <div className="inline-flex justify-center items-center rounded-full  relative ">
                                                <Image src={testimonial.userimage} alt="user" width={60} height={60} className="rounded-full bg-white p-0.5" />

                                            </div>
                                            <div className=" self-center text-left ">
                                                <h5 className="text-white text-base mb-1">{testimonial.name}</h5>
                                                <div className="flex items-center">
                                                    <AiTwotoneStar className="w-5 h-5 text-yellow-300" />
                                                    <AiTwotoneStar className="w-5 h-5 text-yellow-300" />
                                                    <AiTwotoneStar className="w-5 h-5 text-yellow-300" />
                                                    <AiTwotoneStar className="w-5 h-5 text-yellow-300" />
                                                    <AiTwotoneStar className="w-5 h-5 text-yellow-300" />


                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })}</AliceCarousel>



                    </div>
                </section>
                {/* refer area */}
                <section className="refer-area relative bg-white pb-0 ">
                    <div className="container">
                        <div className=" rounded-md bg-[#fdf6f6] overflow-hidden" >
                            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">

                                <div className="relative  self-center lg:text-center xl:text-left p-8">
                                    <h2 className=" text-22px md:text-30px lg:text-35px xl:text-34px "> Refer and Earn</h2>
                                    <h2 className="text-xl mb-5 "> Get Rs 10*</h2>
                                    <p className="leading-7 md:leading-8 mb-5 "> Invite your friends to Gyanok quiz &
                                        earn 10* rupees for each referral!</p>
                                    <Link href="/refer-now" className="gradiant-btn text-center w-full ">Share Now</Link>

                                </div>

                                <div className=" animated relative" >
                                    <Image src="/images/refer-box.png" width={600} height={400} className="ml-auto" alt="bg-image" />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* marquee */}


                <section className="py-20 bg-white overflow-hidden">
                    <div className="blue-box  text-white   rotate-1 ">
                        <div className="marquee whitespace-nowrap">
                            <div className="d-ltr w-[200%] bg-blue-600 absolute flex text-[40px] p-3 flex-nowrap">
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                            </div>
                        </div>
                    </div>
                    <div className="yellow-box bg-yellow-300 text-black -rotate-1 ">
                        <div className="marquee whitespace-nowrap">
                            <div className="d-rtl w-[200%] bg-yellow-300 absolute flex text-[40px]  p-3 flex-nowrap">
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                                <span className="d-block w-full lg:w-1/2 px-3">GyanOk Quiz</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* marquee */}

                <section className="pb-16 pt-8 bg-white">
                    <div className="container">
                        <div className="section-title mb-8 text-center ">

                            <Image src="/images/cate.png" width={80} height={80} className="mx-auto rounded-sm" alt="bg-image" />

                            <h2 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px] mt-1 ">Frequently Asked Question
                            </h2>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">Read below the most asked questions by our users</p>
                        </div>
                        <div className="bg-gray-50 p-3 lg:p-5 rounded-sm">
                            <Accordion alwaysOpen flush className="faq-accordian">
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        1.	How does GyanOK work?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            GyanOK is a quiz website where users can test their knowledge and earn rewards for their efforts. Simply sign up, choose a quiz, and start answering questions! The more questions you get right, the higher your score and the more rewards you can earn.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        2.	What kind of quizzes are available on GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            GyanOK has a wide selection of quizzes on a variety of topics, including history, pop culture, science, and more. Whether you're a trivia buff or just looking to learn something new, GyanOK has something for everyone.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        3.	How do I earn rewards on GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            To earn rewards on GyanOK, simply participate in quizzes and achieve high scores. The more questions you get right, the more rewards you can earn. Rewards may include cash, prizes, or other incentives.
                                        </p>



                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        4.	Is GyanOK safe and secure?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Absolutely! GyanOK takes user security and privacy seriously and has measures in place to protect your personal information. We use encrypted data transmission and adhere to strict privacy policies to keep your information safe.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        5.	Is GyanOK available on mobile?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Yes, the application is supported in all devices like smartphones, iPhones, and Laptop in any OS (Android or iOS)
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        6.	Can I compete with my friends on GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Yes, GyanOK has a social component that allows users to challenge their friends to quizzes and compare scores. You can also compete with other users from around the world.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>


                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        7.	Is there a limit to how many quizzes I can take on GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            No, there is no limit to the number of quizzes you can take on GyanOK. You are free to take as many quizzes as you like and earn rewards for your efforts.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>


                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        8.	Is there a cost to joining GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            No, GyanOK is free to join and use. You can earn rewards for participating in quizzes without any upfront costs.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        9.	Can I cash out my rewards on GyanOK?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Yes, GyanOK allows users to cash out their rewards once they have reached a certain threshold. Users can withdraw through UPI. Please see our terms of service for more information on cashing out rewards.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        10.	In how many countries is GyanOK available?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Right now, GyanOK is available in only India. But in the coming months, we are planning to make it globally accessible.
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        11.	What is Quiz?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            A quiz is a game or competition in which players are asked to answer questions or solve problems. A quiz is a skill game that challenges players to answer questions with limited options and time. Whether played solo or in competition, users must give the correct answer to win. With a wide range of subjects to choose from, quizzes offer a fun and engaging way to test your knowledge and potentially earn a reward. With Gyanok.com, you can unlock your knowledge and put it to the test with a Quiz! Whether it's trivia, general knowledge, or specialized fields of study, quizzes offer a fun and engaging way to challenge yourself and learn something new. From challenging and difficult to relaxed and casual, quizzes offer something for everyone - so why not try one out today and see what you know? It’s free,<Link href="/register" className="text-primary">Register now.</Link>
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        12.	How can quizzes help you?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            A quiz is a fun and engaging activity that tests a person's knowledge or skills on a particular subject. Quizzes can be used in a variety of settings, from educational classrooms to entertainment television shows. They often involve a series of questions or tasks, with each correct answer earning points or progressing the participant to the next level. Quizzes can be a great way to learn new information, challenge oneself, or simply have a good time. They can also be a useful tool for businesses or organizations, allowing them to collect data or gauge the knowledge or skills of their customers or employees. So, what are you waiting for? Take a quiz today and see how much you know!
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        13.	How can online quizzes be beneficial to users?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">
                                        <p className="mb-2 text-gray-500 ">
                                            Online quizzes can be beneficial to users in many different ways. Some of the potential benefits of taking an online quiz include:


                                        </p>

                                        <ul className="list-disc pl-5 text-gray-500 ">
                                            <li>

                                                Learning new information: Online quizzes can be a great way to learn new facts or information on a wide range of topics. By answering questions and receiving feedback on their answers, users can expand their knowledge and understanding of the subject matter.

                                            </li>
                                            <li>

                                                Testing and improving skills: Quizzes can also be useful tools for testing and improving skills, such as problem-solving, critical thinking, or vocabulary. By answering challenging questions and receiving feedback on their performance, users can identify areas for improvement and work to develop their skills.

                                            </li>

                                            <li>

                                                Engaging and entertaining: Online quizzes can also be a fun and engaging form of entertainment. They can provide a sense of challenge and accomplishment, and can be a great way to pass the time or compete with others for the top score.

                                            </li>

                                            <li>
                                                Personalized recommendations: Many online quizzes also offer personalized recommendations or insights based on the user's answers. For example, a quiz about personality types might provide users with a detailed description of their personality traits, or a quiz about career interests might suggest potential careers based on the user's interests and skills.
                                            </li>


                                        </ul>

                                        <p className="mb-2 text-gray-500 ">
                                            Overall, online quizzes can be a valuable and enjoyable way for users to learn new information, test and improve skills.</p>

                                    </Accordion.Content>
                                </Accordion.Panel>


                                <Accordion.Panel>
                                    <Accordion.Title className="faq-header">
                                        14.	What are the awesome features of GyanOK ?
                                    </Accordion.Title>
                                    <Accordion.Content className="faq-body">

                                        <ul className="list-disc pl-5 space-y-3 text-gray-500 ">
                                            <li>
                                                <strong>Wide selection of quizzes: </strong>
                                                With a diverse range of quizzes on a variety of topics, GyanOK has something for everyone. From history to pop culture to science and beyond, you can test your knowledge and learn new things in a fun and engaging way.
                                            </li>
                                            <li> <strong>Competitive scoring:</strong>	 GyanOK features a scoring system that allows users to compete with each other and see how they stack up against the competition. Whether you're competing with friends or strangers, you can put your knowledge to the test and strive for the top spot.</li>
                                            <li><strong>Earn rewards:</strong>  By participating in quizzes and achieving high scores, you can earn rewards such as cash, prizes, or other incentives. With GyanOK, you can learn and earn at the same time!</li>
                                            <li><strong> Social interaction: </strong>GyanOK social component allows users to connect with each other and share their quiz experiences. You can challenge friends to quizzes, compare scores, and engage in friendly competition.</li>
                                            <li><strong> Mobile-friendly design:</strong> GyanOK is optimized for mobile viewing, so you can take quizzes on the go and learn anytime, anywhere.</li>
                                            <li><strong>Easy to use:</strong>  GyanOK user-friendly interface makes it easy for users of all skill levels to navigate and participate in quizzes.</li>


                                        </ul>

                                        <p className="mt-3 text-gray-500 ">
                                            Don't miss out on the opportunity to learn, earn, and have fun with GyanOK – register now and start quizzing!</p>

                                    </Accordion.Content>
                                </Accordion.Panel>


                            </Accordion>
                        </div>


                    </div>
                </section>

                {/* reason to play */}
                <section className="py-20 relative ">

                    <div className="container">
                        <div className="section-title mb-12 text-center ">

                            <h2 className="text-white w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px]  ">Reason To Play

                            </h2>
                            <Image src="/images/line.svg" width={200} height={30} alt="line" className="mx-auto w-[160px]" />
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8  text-yellow-300 ">Why we are No. 1 choice among quiz players </p>
                        </div>


                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-5">
                            <div className="lg:col-span-2 group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">100% secure 🔒</h4>
                                    <span className="text-slate-300 text-sm  block mt-2">Your personal information is safe with us </span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/rsecure.jpg" className="w-full h-auto lg:h-[300px]" width={600} height={300} alt="secure" />
                                </div>
                            </div>

                            <div className="group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">24/7 customer support 📞</h4>
                                    <span className="text-slate-300 text-sm  block mt-2">We are always there for you</span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/customer-support.png" className="w-full h-auto lg:h-[300px]" width={300} height={300} alt="secure" />
                                </div>
                            </div>

                            <div className="group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">Follow us on social media 📱</h4>
                                    <span className="text-slate-300 text-sm  block mt-2">Get in touch through facebook, Instagram or Twitter</span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/social-media.jpg" className="w-full h-auto lg:h-[300px]" width={300} height={300} alt="secure" />
                                </div>
                            </div>


                            <div className="lg:col-span-2 group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">Trusted by over 50,000 users 💯</h4>
                                    <span className="text-slate-300 text-sm  block mt-2">GyanOK family is growing faster than ever</span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/rtrust.jpg" className="w-full h-auto lg:h-[300px]" width={600} height={300} alt="secure" />
                                </div>
                            </div>



                            <div className="lg:col-span-2 group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">Multiple payment options 💳</h4>
                                    <span className="text-slate-300 text-sm  block mt-2">Pay from any preferred payment method like UPI, Card, etc. </span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/Multiple-payment-options.png" className="w-full h-auto lg:h-[300px]" width={600} height={300} alt="secure" />
                                </div>
                            </div>


                            <div className="group relative p-5 bg-gray-800 rounded-sm shadow hover:shadow-md ease-in-out duration-500  ">
                                <div className="mb-5">
                                    <h4 className=" block text-white text-xl">Encrypted data transmission 🔐
                                    </h4>
                                    <span className="text-slate-300 text-sm  block mt-2">For us user data & security is first</span>
                                </div>
                                <div className="w-full rounded-lg overflow-hidden">
                                    <Image src="/images/rdata.jpg" className="w-full h-auto lg:h-[300px]" width={600} height={300} alt="secure" />
                                </div>
                            </div>



                        </div>


                    </div>
                    <div className="absolute  lg:inline left-3 lg:left-[33%] top-3 lg:top-[6%]"><Image src="/images/stars.png" width={80} height={80} className="animate-custom-rotateme" alt="shape" /></div>

                </section>

                {/* fun fact  */}
                <section className="py-12 bg-white relative z-1">


                    <div className="container">



                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                            <div className="order-2 lg:order-1 pt-5">
                                <Image src="/images/funfact.png" width={500} height={600} className="rounded-md animated m-auto w-full" alt="overview-image" />
                            </div>
                            <div className="order-1 lg:order-2  self-center relative  ">
                                <h2 className=" text-22px md:text-30px lg:text-35px xl:text-34px mb-5 ">But the fun doesn't stop there! With GyanOK, you can also</h2>


                                <ul className="space-y-3">
                                    <li className="flex space-x-2"><BsArrowRightShort className="text-2xl flex-shrink-0" /><span>Compete against quiz enthusiasts from all over the world.</span>  </li>
                                    <li className="flex space-x-2"><BsArrowRightShort className="text-2xl flex-shrink-0" /><span>Win cash prizes in our various quiz categories.</span>  </li>
                                    <li className="flex space-x-2"><BsArrowRightShort className="text-2xl flex-shrink-0" /><span>Track your progress and see how you stack up against the competition.</span>  </li>
                                    <li className="flex space-x-2"><BsArrowRightShort className="text-2xl flex-shrink-0" /><span>Enjoy a seamless and user-friendly interface on any device.</span>  </li>

                                </ul>
                                <p className="mb-3 mt-5">
                                    So why wait? Start quizzing and winning today! 💪🏼 Sign up now to get started 📝
                                </p>
                                <p>
                                    Happy quizzing! 🤓
                                </p>

                                {/* <Link href="/all-quizzes" className="rounded-sm text-white py-3  px-5 bg-gradient-color ">Get Started</Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-[5%] top-[10%] absolute -z-1 hidden lg:inline"><Image src="/images/bell.png" width={150} height={150} className="animate-custom-movebounce" alt="shape" /></div>
                </section>


                {/* Benefits area */}
                <section className="py-20 relative bg-white">

                    <div className="container relative">
                        <div className="left-[15%] top-[-160px] z-1 absolute block"><Image src="/images/zigzag-three.png" width={120} height={120} className="animate-custom-movebounce" alt="shape" /></div>
                        <div className="bg-yellow-50 px-5 pt-12 lg:p-12 relative">
                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
                                <div className="lg:sticky lg:top-1 lg:h-fit">
                                    <div className="section-title mb-5 sm:col-span-3 lg:col-span-1 text-left">
                                        <h2 className=" text-22px md:text-30px lg:text-35px xl:text-34px mb-5 ">We offer unique benefits
                                        </h2>
                                        <p className="lg:text-16px md:text-15px text-13px lg:max-w-2xl  leading-7 md:leading-8 ">Don't miss out on the opportunity to learn, earn, and have fun – sign up for our quiz website today! 🚀</p>
                                    </div>
                                </div>


                                <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                                    <div>

                                        <span className="text-4xl">🤓</span>
                                        <h3 className="mb-2 text-lg font-bold ">Enhance your knowledge and skills  </h3>
                                        <p className="text-gray-500 ">By signing up and taking quizzes on a variety of topics, you can boost your knowledge and improve your existing skills.</p>
                                    </div>

                                    <div>
                                        <span className="text-4xl">💰</span>
                                        <h3 className="mb-2 text-lg font-bold ">	Earn rewards </h3>
                                        <p className="text-gray-500 ">By participating in quizzes and achieving high scores, you can earn rewards such as cash, prizes, or other incentives.</p>
                                    </div>
                                    <div>
                                        <span className="text-4xl">🏆</span>
                                        <h3 className="mb-2 text-lg font-bold ">Compete with friends and others</h3>
                                        <p className="text-gray-500 ">GyanOK allow users to challenge or others in engaging and fun way.</p>
                                    </div>
                                    <div>
                                        <span className="text-4xl">🧠</span>
                                        <h3 className="mb-2 text-lg font-bold ">Sharpen your critical thinking and problem-solving skills </h3>
                                        <p className="text-gray-500 ">Quizzes can help you improve your critical thinking and problem-solving skills by challenging you to think creatively and analytically.</p>
                                    </div>

                                    <div>
                                        <span className="text-4xl">💪</span>

                                        <h3 className="mb-2 text-lg font-bold ">Flex your mental muscles   </h3>
                                        <p className="text-gray-500 ">By regularly participating in quizzes, you can keep your mind sharp and maintain your cognitive abilities.</p>
                                    </div>

                                    <div>
                                        <span className="text-4xl">💼</span>
                                        <h3 className="mb-2 text-lg font-bold ">Enhance your resume and job prospects  </h3>
                                        <p className="text-gray-500 ">By demonstrating your knowledge and skills through your quiz participation, you can enhance your resume and make yourself a more attractive job candidate.</p>
                                    </div>
                                    <div>
                                        <span className="text-4xl">🧠</span>
                                        <h3 className="mb-2 text-lg font-bold ">Improve your memory and concentration </h3>
                                        <p className="text-gray-500 ">Regularly participating in quizzes can help improve your memory and concentration, as you are required to remember and recall information.</p>
                                    </div>
                                    <div>
                                        <span className="text-4xl">🤝</span>
                                        <h3 className="mb-2 text-lg font-bold ">Connect with like-minded individuals </h3>
                                        <p className="text-gray-500 ">GyanOK have a social component, allowing you to connect with other users who share similar interests and knowledge.</p>
                                    </div>


                                </div>

                            </div>
                            <div className=" xl:absolute relative z-1 lg:inline left-[-10px] bottom-[0] "><Image src="/images/rooting.png" width={120} height={150} alt="shape" /></div>
                        </div>


                    </div>
                </section>

                <section className="bg-[url('/images/zigzag.jpg')] section-area relative ">
                    <div className="container">
                        <div className="section-title mb-10 text-center ">

                            <h2 className="w-fit mx-auto relative text-[24px] md:text-[30px] lg:text-[40px] mb-3 ">Still have a question

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
                            <h2 className=" text-xl font-semibold mb-5"> Connect With Us</h2>
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
