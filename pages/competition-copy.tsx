import Head from "next/head"
import Layout from "../components/Layout"
import AddCashModal from "../components/AddCashModal";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Lottie from "react-lottie-player";
import { GiAirZigzag } from "react-icons/gi";
import { BsFillTrophyFill } from "react-icons/bs";

export default function CompetitionCopy() {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    }


    const [lottietrophy, setlottietrophy] = useState(null);

    useEffect(() => {
        import('../public/lottie/trohy-demo.json').then(setlottietrophy);

    }, []);

    return (
        <>

            <Head>
                <title>Quiz Competition - Play Quiz and Win Real Money | GyanOK.com</title>
                <meta name="description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here! " />
                <meta name="keywords" content="Play Quiz, Competition, Competition Result, GK Competition, Online Quiz Competition" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="" />
                <meta property="twitter:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="twitter:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="twitter:image" content="/images/logo.png" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Competition Result - Play Quiz and Win Real Money | GyanOK.com" />
                <meta property="og:description" content="Earn Cash by playing competition quiz with other players and win upto ₹10,000. Participate in free or paid quiz competition and get chance to win money online. Click here!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <Layout>
                <section className="section-area competition-area">
                    <div className="container">
                        <div className="mb-3 ">
                            <h1 className="text-[20px]  lg:text-[24px]  text-white">Quiz Competition</h1>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div>
                                <Link href="/competition" className="focus:outline-none text-black border border-yellow-300 bg-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 ">LIVE</Link>
                                <Link href="/competition" className="text-yellow-300 hover:text-black border border-yellow-300 hover:bg-yellow-400 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center  ">MY QUIZZES</Link>
                            </div>
                            <div>
                                <button type="button" className="text-white hover:text-black border border-white hover:bg-white focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-sm text-sm px-3 py-2 text-center" onClick={showModal}>₹100 <FaPlusCircle className="ml-2" /></button>
                            </div>
                        </div>
                        <div className="tournament-card">
                            <div className="tour-header ">
                                <div className="flex space-x-2 items-center">
                                    <Image src="/images/comp.jpg" width={45} height={45} alt="competition" className="m-auto  rounded-full" />
                                    <h4 className="mb-0">Computer Quiz</h4>
                                </div>
                                <Link href="/competition-detail" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Play</Link>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full">₹15
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block">ENDS IN</span>
                                            <span className="timespan">2m 30s</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className=" entry-btn" data-bs-toggle="modal" data-bs-target="#participateModal">₹5</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                </div>
                                <div className="flex text-sm text-blue-800 font-bold justify-between">
                                    <span className="pe-3">13 PARTICIPANTS</span>
                                    <span>150 SLOTS</span>
                                </div>


                            </div>
                        </div>

                        <div className="tournament-card">
                            <div className="tour-header ">
                                <div className="flex space-x-2 items-center">
                                    <Image src="/images/comp.jpg" width={45} height={45} alt="competition" className="m-auto  rounded-full" />
                                    <h4 className="mb-0">Computer Quiz</h4>
                                </div>
                                <Link href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-lg px-5 py-2 lg:px-10 lg:py-2.5 text-center">Play</Link>
                            </div>
                            <div className="tour-body">
                                <div className="grid grid-cols-3 gap-2 items-center">
                                    <div className="">
                                        <div className="tour-prize my-2">
                                            <span className="mb-1 block">PRIZE POOL </span>
                                            <button className=" pool-btn w-full">₹15
                                            </button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-timer my-2">
                                            <span className="mb-1 w-full block">ENDS IN</span>
                                            <span className="timespan">2m 30s</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="tour-entry my-2">
                                            <span className="mb-1 w-full block">ENTRY FEE</span>
                                            <span className=" entry-btn" data-bs-toggle="modal" data-bs-target="#participateModal">₹5</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="w-full bg-gray-200 rounded-lg mt-2 mb-1">
                                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-lg" style={{ 'width': '45%' }}>45%</div>
                                </div>
                                <div className="flex text-sm text-blue-800 font-bold justify-between">
                                    <span className="pe-3">13 PARTICIPANTS</span>
                                    <span>150 SLOTS</span>
                                </div>


                            </div>
                        </div>

                        {/*start tamplate for competition */}

                        <div className="relative bg-gradient-to-r from-[#000046] to-[#1CB5E0]  flex justify-between p-4 rounded-sm transition duration-500 hover:shadow-lg mb-3 ">
                            <span className="flex items-center justify-center absolute top-[-4px] right-[-4px] animate-ping bg-green-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                <em className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></em>
                            </span>
                            <div className="flex">
                                <div className="flex-shrink-0 relative">
                                    <Image className="border-4 border-yellow-300 rounded-full object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={160} height={160} />

                                </div>
                                <div className="pl-6 self-center">
                                    <div className="mb-2">
                                        <h4 className="font-display text-[30px] text-white drop-shadow-lg font-bold">Quiz of the Day</h4>
                                    </div>
                                    <p className=" text-sm text-gray-100 mb-2">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-yellow-300 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">₹ 5000</h2>
                                <Lottie loop animationData={lottietrophy} play style={{ width: "auto", height: 100, margin: 'auto' }} />
                                <p className="text-gray-100">Prize Pool</p>
                            </div>
                        </div>

                        {/*end tamplate for competition */}
                        {/*start tamplate for competition */}

                        <div className="bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] flex justify-between p-5 rounded-sm transition duration-500 hover:shadow-lg mb-3">
                            <div className="flex">
                                <div className="flex-shrink-0 relative">
                                    <Image className="border-4 border-yellow-300 rounded-full object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={160} height={160} />
                                    <span className="flex items-center justify-center absolute top-4 right-4 animate-ping bg-green-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                        <em className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></em>
                                    </span>
                                </div>
                                <div className="pl-6 self-center">
                                    <div className="mb-2">
                                        <h4 className="font-display text-[30px] text-white drop-shadow-lg font-bold">Quiz of the Day</h4>
                                    </div>
                                    <p className=" text-sm text-gray-100 mb-2">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                        <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                            <div className="flex space-x-3">
                                                <span className=" font-bold">ENDS IN :</span>
                                                <p>28:25:45</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="text-yellow-300 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">₹ 5000</h2>
                                <Lottie loop animationData={lottietrophy} play style={{ width: "auto", height: 100, margin: 'auto' }} />
                                <p className="text-gray-100">Prize Pool</p>
                            </div>
                        </div>


                        <div className="bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] flex justify-between p-5 rounded-sm transition duration-500 hover:shadow-lg mb-3">

                            <div className="flex-shrink-0 relative">
                                <Image className="border-2 border-yellow-300 rounded-sm object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={160} height={160} />
                                <span className="flex items-center justify-center absolute top-4 right-4 animate-ping bg-green-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                    <em className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></em>
                                </span>
                            </div>
                            <div className="pl-6 text-center self-center">
                                <div className="mb-2">
                                    <h4 className="font-display text-[30px] text-white drop-shadow-lg font-bold">Quiz of the Day</h4>
                                </div>
                                <p className=" text-sm text-gray-100 mb-2">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>
                                </p>
                                <div className="flex flex-wrap gap-1">
                                    <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                        <div className="flex space-x-3">
                                            <span className=" font-bold">ENDS IN :</span>
                                            <p>28:25:45</p>
                                        </div>
                                    </div>

                                    <div className=" bg-slate-50 text-sm text-center p-2 rounded-sm">
                                        <div className="flex space-x-3">
                                            <span className=" font-bold">Slots:</span>
                                            <p>50</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-100">Prize Pool</p>
                                <h2 className="text-yellow-300 font-bold  drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">₹ 5000</h2>
                                <Lottie loop animationData={lottietrophy} play style={{ width: "auto", height: 100, margin: 'auto' }} />

                            </div>
                        </div>




                        <div className="bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] flex items-center justify-between p-5 rounded-sm transition duration-500 hover:shadow-lg mb-3">

                            <div className="flex-shrink-0 relative">
                                <Image className="border-2 border-yellow-300 rounded-sm object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={160} height={160} />
                                <span className="flex items-center justify-center absolute top-4 right-4 animate-ping bg-green-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                    <em className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></em>
                                </span>
                            </div>
                            <div className="pl-6 text-center self-center">
                                <div className="mb-2">
                                    <h4 className="font-display text-[30px] text-white drop-shadow-lg font-bold">Quiz of the Day</h4>
                                </div>
                                <h2 className="text-yellow-300  text-[22px]  mb-3">Prize Pool</h2>
                                <div className="px-3 py-1 border rounded-sm bg-[#0003] flex items-center space-x-3 justify-center">
                                    <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/rupee-coin-5169249-4314678.png"} width={64} height={64} alt="rupee" />
                                    <h2 className="text-yellow-300 font-bold text-[42px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">5000</h2>
                                </div>

                            </div>

                            <div className="text-center">

                                {/* <Lottie loop animationData={lottietrophy} play style={{ width: "auto", height: 100, margin: 'auto' }} /> */}
                                <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                <p className="text-gray-100 text-sm">Entry Fee: 20</p>
                            </div>
                        </div>



                        

                        <div className="bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] flex items-center justify-between p-5 rounded-sm transition duration-500 hover:shadow-lg mb-3">

                            <div className="flex-shrink-0 relative">
                                <Image className="border-2 border-yellow-300 rounded-sm object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={160} height={160} />
                                <span className="flex items-center justify-center absolute top-4 right-4 animate-ping bg-green-400 rounded-lg w-5 h-5 mx-auto mb-1">
                                    <em className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></em>
                                </span>
                            </div>
                            <div className="pl-6 text-center self-center">
                                <div className="mb-5">
                                    <h4 className="font-display text-[30px] text-white drop-shadow-lg font-bold">Quiz of the Day</h4>
                                </div>
                                
                                <div className="px-3 py-1 flex items-center space-x-3 text-left justify-center">
                                    <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/rupee-coin-5169249-4314678.png"} width={100} height={100} alt="rupee" />
                                    <div>
                                    <h2 className="text-yellow-50  text-[22px] ">Prize Pool</h2>
                                    <h2 className="text-yellow-300 font-bold text-[64px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mt-[-5px]">5000</h2>
                                    </div>
                                   
                                  
                                </div>

                            </div>

                            <div className="text-center">

                                {/* <Lottie loop animationData={lottietrophy} play style={{ width: "auto", height: 100, margin: 'auto' }} /> */}
                                <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                <p className="text-gray-100 text-sm">Entry Fee: 20</p>
                            </div>
                        </div>

                        {/*end tamplate for competition */}
                        {/*start tamplate for competition */}

                        <div className="flex justify-between bg-secondary-gradient-color rounded-md mb-3 ">
                            <div className="p-5 w-3/4">
                                <h2 className="text-yellow-300 font-bold text-[42px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Prize Pool: ₹ 5000</h2>
                                <div className=" space-x-5 flex flex-wrap my-3">

                                    <div className="flex space-x-1 text-white">
                                        <span>ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>
                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                </div>


                                <div className="flex space-x-3">
                                    <Image className="border-4 border-yellow-300 rounded-full object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={80} height={80} />
                                    <div className="title  self-center">
                                        <h4 className="text-white  font-bold mb-1 ">Quiz of the Day</h4>
                                        <p className="  text-gray-200 ">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>        </p>
                                    </div>
                                </div>

                            </div>

                            <div className=" flex justify-end w-1/4 bg-white " style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 35% 50%, 0% 0%)' }}>
                                <div className=" text-center p-5 ">
                                    <img src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png" alt="" width={120} height={120} className="mx-auto" />
                                    <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                </div>
                            </div>




                        </div>

                        {/*end tamplate for competition */}

                        {/*start tamplate for competition */}

                        <div className="flex justify-between bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] rounded-md mb-3 ">
                            <div className="p-5 w-3/4">
                                <h2 className="text-yellow-300 font-bold text-[42px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Prize Pool: ₹ 5000</h2>
                                <div className=" space-x-5 flex flex-wrap my-3">

                                    <div className="flex space-x-1 text-white">
                                        <span>ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>
                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                </div>


                                <div className="flex space-x-3">
                                    <Image className="border-4 border-yellow-300 rounded-full object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={80} height={80} />
                                    <div className="title  self-center">
                                        <h4 className="text-white  font-bold mb-1 ">Quiz of the Day</h4>
                                        <p className="  text-gray-200 ">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>        </p>
                                    </div>
                                </div>

                            </div>

                            <div className=" flex justify-end w-1/4 bg-white " style={{ clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 35% 50%, 0% 0%)' }}>
                                <div className=" text-center p-5 ">
                                    <img src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png" alt="" width={120} height={120} className="mx-auto" />
                                    <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                </div>
                            </div>




                        </div>

                        {/*end tamplate for competition */}

                        {/*start tamplate for competition */}

                        <div className="flex justify-between bg-[url('https://opengameart.org/sites/default/files/bg_02_h.png')] rounded-md mb-3 ">
                            <div className="p-5 w-3/4">
                                <h2 className="text-yellow-300 font-bold text-[42px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Prize Pool: ₹ 5000</h2>
                                <div className=" space-x-5 flex flex-wrap my-3">

                                    <div className="flex space-x-1 text-white">
                                        <span>ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>
                                    <div className="flex space-x-1 text-white">
                                        <span >ENDS IN :</span>
                                        <p >28:25:45</p>
                                    </div>

                                </div>


                                <div className="flex space-x-3">
                                    <Image className="border-4 border-yellow-300 rounded-full object-cover mb-4 sm:mb-0" src="/images/comp.jpg" alt="title" width={80} height={80} />
                                    <div className="title  self-center">
                                        <h4 className="text-white  font-bold mb-1 ">Quiz of the Day</h4>
                                        <p className="  text-gray-200 ">ENTRY FEE: <span className=" font-bold transition duration-500 ">₹50</span>        </p>
                                    </div>
                                </div>

                            </div>

                            <div className=" flex justify-end w-1/4 ">
                                <div className=" text-center p-5 ">
                                    <img src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png" alt="" width={120} height={120} className="mx-auto" />
                                    <Link href="/" className="gradiant-btn mt-3 ">Quick Play</Link>
                                </div>
                            </div>


                        </div>

                        {/*end tamplate for competition */}

                    </div>
                </section>
                {/* add cash modal */}
                {show ? (
                    <AddCashModal show={show} setShow={(bool) => setShow(bool)} />
                ) : null}
                {/* start withdraw Modal */}
            </Layout>
        </>
    )
}