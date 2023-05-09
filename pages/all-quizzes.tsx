import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function AllQuizzes() {

    const allquizdata = [
        { title: 'Tournament', description: 'Play quiz in real time with others', url: '/quiz-tournaments', image: '/images/q-tour.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Competition', description: 'Compete with others to get on top', url: '/competition', image: '/images/q-comp.png', cornerimage: '/images/qlist4.png' },
        { title: 'Trivia', description: 'Fun and entertaining quiz', url: '/trivia-quizzes', image: '/images/q-trivia.webp', cornerimage: '/images/qlist1.png' },
        { title: 'Polls', description: 'Check what other thinks', url: '/polls', image: '/images/q-polls.webp', cornerimage: '/images/qlist2.png' },
        { title: 'Current Affairs Quiz', description: 'Play Quiz Daily & Increase Your GK', url: '/current-affairs-quiz', image: '/images/q-current.png', cornerimage: '/images/qlist3.png' },
      ];
    
    return (
        <>
            <Head>
                <title>GyanOK Quiz - FUN | LEARN | EARN</title>
                <meta name="description" content="Play fun quizzes online and get chance to win cash rewards. Exercise your brain from anywhere, anytime." />
                <meta name="keywords" content="Quiz" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="GyanOK Quiz - FUN | LEARN | EARN" />
                <meta property="twitter:description" content="Play fun quizzes online and get chance to win cash rewards. Exercise your brain from anywhere, anytime." />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="GyanOK Quiz - FUN | LEARN | EARN" />
                <meta property="og:description" content="Play fun quizzes online and get chance to win cash rewards. Exercise your brain from anywhere, anytime." />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>

                <section className="bg-[url('/images/allquiz.png')] all-quizzes section-area">

                    <div className="container">
                        <div className="section-title mb-12 text-center ">

                            <h2 className="w-fit mx-auto relative text-22px md:text-30px lg:text-35px xl:text-40px mb-5 ">Choose Your Quiz
                                <span className="animate-pulse absolute -bottom-5 left-0">
                                    <svg width="80%" height="12" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 208.01 8.3'><path fill='#ffc107' d='M64.42,2.42Q42.78,1.46,21.19,0c-2.8-.19-4.09.89-3.87,2L3.92,1.87c-5.13-.05-5.28,3.87-.12,3.92l60.49.55c46.63,2.08,93.34,2.51,139.81,1.27,5-.13,5.39-3.87.13-3.92Z' /></svg></span>
                            </h2>
                            <p className="text-lg lg:max-w-2xl lg:mx-auto leading-7 md:leading-8 text-gray-600 ">You said I’d feel better if I just worked hard without lifting me up</p>
                        </div>

                        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2"> {allquizdata.map((quizdata) => {
                            return (
                                <div className="quiz-list relative rounded-sm p-5 lg:p-8 bg-white hover:bg-cyan-50 shadow-md transition-all duration-300 " key={quizdata.title}>
                                    <div className="flex justify-between ">


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
                        })} </div>

                    </div>
                </section>

            </Layout>


        </>
    )
}