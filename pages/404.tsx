import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title>Error | GyanOK.com</title>
                <meta name="description" content="Oops! That page can't be found" />
                <meta name="keywords" content="Error" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="/" />
                <meta property="twitter:title" content="Error | GyanOK.com" />
                <meta property="twitter:description" content="Oops! That page can't be found" />
                <meta property="twitter:image" content="/images/logo.png" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Error | GyanOK.com" />
                <meta property="og:description" content="Oops! That page can't be found" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>

            <Layout>
                <section className="section-area bg-white">
                    <div className="container">
                        <div className="text-center">
                            <Image src="/images/404.png" className="inline-block mb-10" width={400} height={400} alt="error-image" />
                            <h3 className="font-bold mb-8 text-primary">Oops! That page can't be found</h3>
                            <p className="md:max-w-[510px] mx-auto mb-5">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                            <Link href="/" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50  font-medium rounded-sm px-5 py-3 text-center ">Back To Home</Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}