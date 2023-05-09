import Layout from "../components/Layout"
import Head from "next/head"
import Image from 'next/image'
import AddCashModal from "../components/AddCashModal"
import { Accordion } from "flowbite-react"
import { useState } from "react"
import Link from "next/link"

export default function Wallet() {

    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }

    const [withdrawshow, withdrawsetShow] = useState(false);

    return (
        <>
            <Head>
                <title>Wallet | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta name="keywords" content="GyanOk,earn money online, play quiz and earn money" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Wallet | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Wallet | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing quiz daily and Weekly. And withdraw money from your GyanOK wallet. Platform where you can learn & earn daily/weekly by playing quiz." />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <Layout>
                <section className="section-area wallet_area ">
                    <div className="container">
                        <div className="section-title mb-3 md:mb-5 lg:mb-5 text-center">
                            <h1 className=" text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px]  text-white">Wallet</h1>
                        </div>
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-8">
                            <div className="group text-center p-5 bg-secondary-gradient-color relative rounded-md ">
                                <div className="icon text-center">
                                    <Image src="/images/wallet-win.png" className="m-auto" alt="Picture of the author" width={96} height={96}></Image>
                                </div>
                                <h3 className="text-[30px] md:text-[30px] lg:text-[36px] mb-0 text-white">₹2508</h3>
                                <p className="block text-white mb-1">Lifetime Earnings</p>
                            </div>
                            <div className="relative self-center">
                                <div className="right-side">
                                    <div className="winner-chart">
                                        <div className="single-item ">
                                            <div className="left-area flex items-center">
                                                <img src="images/w-withdraw.png" className="pos img-fluid" alt="image" />
                                                <div className="name-area block">
                                                    <h6 className="mb-1 text-sm lg:text-base">Total Balance </h6>
                                                    <h2 className="text-[26px] text-yellow-400">₹16</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={showModal} type="button" className="text-yellow-900 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-yellow-100  shadow-sm shadow-yellow-200/50  rounded-sm text-sm px-3 py-2 text-center">Add Cash</button>
                                            </div>
                                        </div>
                                        <div className="single-item ">
                                            <div className="left-area flex items-center">
                                                <img src="images/w-withdraw.png" className="pos img-fluid" alt="image" />
                                                <div className="name-area block">
                                                    <h6 className="mb-1">Winning</h6>
                                                    <h2 className="text-[26px] text-yellow-400">₹16</h2>
                                                </div>
                                            </div>
                                            <div>
                                                <button type="button"  className="text-white bg-gradient-to-r from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300  shadow-sm shadow-red-500/50  rounded-sm text-sm px-3 py-2 text-center" onClick={() => withdrawsetShow(true)}>Withdraw</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-title mb-3 md:mb-5 lg:mb-5 text-center">
                            <h1 className=" text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px]  text-white">Transaction </h1>
                        </div>

                        <Accordion alwaysOpen className="custom-accordian mb-5" >
                            <Accordion.Panel >
                            <div className="mb-3" style={{border : "0px"}}>
                                    <Accordion.Title className="accordian-header" >
                                        <div className="flex items-center">
                                            <img src="images/wallet-list.png" alt="wallet image" width={30} height={30} />
                                            <h6 className="pl-3">Win, Topup, Refund</h6>
                                        </div>
                                    </Accordion.Title>
                                    <Accordion.Content className="accordian-body">
                                        <div className="overflow-x-auto relative ">
                                            <table className="w-full  text-left text-gray-500 ">
                                                <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-100   ">
                                                    <tr>
                                                        <th scope="col" className="p-3"> # </th>
                                                        <th scope="col" className="p-3"> Date </th>
                                                        <th scope="col" className="p-3"> Amount </th>
                                                        <th scope="col" className="p-3"> Type </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Content>
                                </div>

                            </Accordion.Panel>
                            
                            <Accordion.Panel >
                            <div className="mb-3" style={{border : "0px"}}>
                                    <Accordion.Title className="accordian-header" >
                                        <div className="flex items-center">
                                            <img src="images/wallet-list.png" alt="wallet image" width={30} height={30} />
                                            <h6 className="pl-3">Withdraw Money</h6>
                                        </div>
                                    </Accordion.Title>
                                    <Accordion.Content className="accordian-body">
                                        <div className="overflow-x-auto relative ">
                                            <table className="w-full  text-left text-gray-500 ">
                                                <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-100   ">
                                                    <tr>
                                                        <th scope="col" className="p-3"> # </th>
                                                        <th scope="col" className="p-3"> Date </th>
                                                        <th scope="col" className="p-3"> Amount </th>
                                                        <th scope="col" className="p-3"> Type </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Content>
                                </div>


                            </Accordion.Panel>
                            <Accordion.Panel>
                                <div className="mb-3" style={{border : "0px"}}>
                                    <Accordion.Title className="accordian-header" >
                                        <div className="flex items-center">
                                            <img src="images/wallet-list.png" alt="wallet image" width={30} height={30} />
                                            <h6 className="pl-3">Quiz Participate</h6>
                                        </div>
                                    </Accordion.Title>
                                    <Accordion.Content className="accordian-body">
                                        <div className="overflow-x-auto relative ">
                                            <table className="w-full  text-left text-gray-500 ">
                                                <thead className=" text-gray-700 border-b-2 border-gray-600	 bg-gray-100   ">
                                                    <tr>
                                                        <th scope="col" className="p-3"> # </th>
                                                        <th scope="col" className="p-3"> Date </th>
                                                        <th scope="col" className="p-3"> Amount </th>
                                                        <th scope="col" className="p-3"> Type </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                    <tr className="bg-white border-b   hover:bg-gray-100 text-sm lg:text-base ">
                                                        <th scope="row" className="p-3 font-medium text-gray-900 whitespace-nowrap "> 1 </th>
                                                        <td className="p-3"> 12 December 2022 </td>
                                                        <td className="p-3"> ₹ 156 </td>
                                                        <td className="p-3"> Daily Quiz </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Accordion.Content>
                                </div>

                            </Accordion.Panel>
                        </Accordion>
                  

                    </div>
                </section>

                {/* add cash modal */}
                    {show ? (
                        <AddCashModal show={show} setShow={(bool) => setShow(bool)}/>
                    ) : null}
                {/* start withdraw Modal */}


                {withdrawshow ? (
                        <>
                            <div id="withdrawModal"  tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                                <div className="relative p-4 w-full max-w-2xl h-auto">
                                    <div className="relative bg-white rounded-lg shadow ">
                                        <div className="flex justify-between items-start p-4 rounded-t border-b ">
                                            <h3 className="text-gray-900"> Withdraw </h3>
                                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  " onClick={() => withdrawsetShow(false)}>
                                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <div className="p-3 lg:p-5">
                                            <h5>Balance: <big className="text-green-500">₹452</big>
                                            </h5>
                                            <blockquote className="italic p-2 my-3 bg-gray-50 border-l-4 border-gray-300">
                                                <p>Enter the amount for UPI withdrawl</p>
                                                <p>Amount will be credited within 24 hours</p>
                                            </blockquote>
                                            <Link href="#" className="mt-3 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-sm">Add UPI Now</Link>
                                            <div className="form-group mb-5">
                                                <label htmlFor="amount" className="block mb-2  font-medium text-gray-900 ">Withdraw Amount</label>
                                                <input type="text" id="amount" placeholder="Enter amount" className="block w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />
                                            </div>
                                        </div>
                                        <div className="p-5 text-right space-x-2 rounded-b border-t border-gray-200 ">
                                            <button onClick={() => withdrawsetShow(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Decline</button>
                                            <button onClick={() => withdrawsetShow(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm  px-5 py-2.5 text-center dark:bg-blue-600 ">Submit</button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                     <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div> 
                        </>
                ) : null}

                
            </Layout>
        </>
    )
}