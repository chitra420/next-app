import Head from "next/head"
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { FaCalendarAlt, FaUser } from "react-icons/fa";


export default function CurrentAffairsNewsDetail() {

    const monthpicker = () => {

    }
    return (
        <>
            <Head>
                <title>Daily Current Affairs Quiz 2022 | GK Questions PDF By Gyanok</title>
                <meta name="description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta name="keywords" content="Daily Current Affairs Quiz, Current Affairs MCQ Today, Monthly Current Affairs Quiz, Current Affairs Question and Answer, Current Affairs MCQ, Daily Objective Current Affairs" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Daily Current Affairs Quiz 2022 | Prepare For GK Daily | GyanOK.com" />
                <meta property="twitter:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Daily Current Affairs Quiz 2022 | Prepare For GK Daily | GyanOK.com" />
                <meta property="og:description" content="Gyanok offers free daily current affairs quizzes for competitive exam preparation. Attempt daily current affairs questions (MCQs) in English & Hindi today" />

                <meta property="og:image" content="/images/logo.png" />

            </Head>
            <Layout>
                <section className="section-area current-quiz">
                    <div className="container">
                        <div className="mb-5">
                            <ul className="space-x-3 text-sm text-yellow-300 mb-1">
                                <li className="relative inline-flex items-center ">
                                    <FaCalendarAlt />
                                    <span className="ml-1">12th November 2022</span>
                                </li>
                                <li className="relative inline-flex items-center ">
                                    <FaUser />
                                    <span className="ml-1">By GyanOk</span>
                                </li>

                            </ul>
                            <h1 className="text-2xl text-white font-medium capitalize mb-2"> Daily Current Affairs Notes for 27 December 2022</h1>
                            {/* <Image className="w-auto h-auto" src="/images/news-image.jpg" height={400} width={400} alt="current affairs news" /> */}
                        </div>
                        <div className="news-content-box">
                            <div className="mb-3 bg-white overflow-hidden rounded-sm">
                                <div className="p-3 bg-blue-100 text-primary">
                                    <h4 className="text-xl">The React Framework for Production</h4>
                                </div>
                                <div className="description no-tailwindcss-base p-3">
                                   

                                    <p>These scripts refer to the different stages of developing an application:</p>

                                    <p>dev - Runs next dev to start Next.js in development mode build - Runs next build to build the application for production usage start - Runs next start to start a Next.js production server lint - Runs next lint to set up Next.js' built-in ESLint configuration Create two directories pages and public at the root of your application:</p>

                                    <p>pages - Associated with a route based on their file name. For example pages/about.js is mapped to /about public - Stores static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/). Next.js is built around the concept of pages. A page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. You can even add dynamic route parameters with the filename.</p>

                                    <p>Inside the pages directory add the index.js file to get started. This is the page that is rendered when the user visits the root of your application.</p>

                                    <p>Populate pages/index.js with the following contents:</p>

                                    <p>function HomePage() </p>

                                    <p>export default HomePage After the set up is complete:</p>

                                    <p>Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000 Visit http://localhost:3000 to view your application Edit pages/index.js and see the updated result in your browser So far, we get:</p>

                                    <p>Automatic compilation and bundling React Fast Refresh Static generation and server-side rendering of pages/ Static file serving through public/ which is mapped to the base URL (/) In addition, any Next.js application is ready for production from the start. Read more in our Deployment documentation.</p>
                                </div>
                            </div>
                            <div className="mb-3 bg-white overflow-hidden rounded-sm">
                                <div className="p-3 bg-blue-100 text-primary">
                                    <h4 className="text-xl">The React Framework for Production</h4>
                                </div>
                                <div className="description unset p-3">
                                    <p>Next.js 13 was recently released, learn more and see the upgrade guide. Version 13 also introduces beta features like the app directory that works alongside the pages directory (stable) for incremental adoption. You can continue using pages in Next.js 13, but if you want to try the new app features, see the new beta docs.</p>

                                    <p>Getting Started Welcome to the Next.js documentation!</p>

                                    <p>If you're new to Next.js, we recommend starting with the learn course. The interactive course with quizzes will guide you through everything you need to know to use Next.js.</p>

                                    <p>If you have questions about anything related to Next.js, you're always welcome to ask our community on GitHub Discussions.</p>

                                    <p>System Requirements Node.js 14.6.0 or newer MacOS, Windows (including WSL), and Linux are supported Automatic Setup We recommend creating a new Next.js app using create-next-app, which sets up everything automatically for you. (You don't need to create an empty directory. create-next-app will make one for you.) To create a project, run:</p>

                                    <p>npx create-next-app@latest # or yarn create next-app # or pnpm create next-app If you want to start with a TypeScript project you can use the --typescript flag:</p>

                                    <p>npx create-next-app@latest --typescript # or yarn create next-app --typescript # or pnpm create next-app --typescript After the installation is complete:</p>

                                    <p>Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000 Visit http://localhost:3000 to view your application Edit pages/index.js and see the updated result in your browser For more information on how to use create-next-app, you can review the create-next-app documentation.</p>

                                    <p>Manual Setup Install next, react and react-dom in your project:</p>

                                    <p>npm install next react react-dom # or yarn add next react react-dom # or pnpm add next react react-dom Open package.json and add the following scripts:</p>

                                    <p>These scripts refer to the different stages of developing an application:</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>


        </>
    )
}