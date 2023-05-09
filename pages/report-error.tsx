import Head from "next/head"

import Layout from "../components/Layout";

export default function ReportError() {


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
                            <h1 className="font-black text-25px md:text-35px lg:text-40px text-white mb-3">Report Error
                            </h1>
                            <p className="text-base lg:text-lg text-gray-300 ">If you are facing any problem in GyanOk, then fill the form and tell your problem, note that only problems will be resolved here, Suggestions related to changes will not be considered.</p>
                        </div>

                      
                            <form action="" className="bg-white rounded-sm  p-5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                                <div className="form-group">
                                    <label htmlFor="name" className="block mb-2  font-medium text-gray-600 ">Name <span className="text-red-600">*</span></label>
                                    <input type="text" id="name" placeholder="Enter Full Name" className="w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="mob_number" className="block mb-2  font-medium text-gray-600 ">Phone Number <span className="text-red-600">*</span></label>
                                    <input type="text" id="mob_number" placeholder="Enter 10 Digit Number" className="w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="error_date" className="block mb-2  font-medium text-gray-600 ">Error Date <span className="text-red-600">*</span></label>
                                    <input type="date" id="error_date" placeholder="Enter date" className="w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />

                                </div>

                                <div className="form-group">
                                    <label htmlFor="error_time" className="block mb-2  font-medium text-gray-600 ">Error time <span className="text-red-600">*</span></label>
                                    <input type="time" id="error_time" placeholder="Enter amount" className="w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />

                                </div>
                                <div className="form-group  lg:col-span-2">
                                    <label htmlFor="message" className="block mb-2  font-medium text-gray-600 ">Message (max. 250 characters) <span className="text-red-600">*</span></label>
                                    <textarea id="message" rows={4} placeholder="Error Message " className="w-full text-black-color bg-[#F0EFFF]   leading-normal  rounded-sm p-3 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />
                                 

                                </div>
                            </div>
                            <div className="text-right">
                            <button  className=" text-center mt-3  rounded-sm text-white py-3 px-8 bg-gradient-color ">Submit Report</button>
                            </div>
                          
                            </form>
                           
                        </div>


                 
                </div>


            </Layout>


        </>
    )
}