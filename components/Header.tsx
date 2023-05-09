import Link from "next/link";
import Image from "next/image"
import { useRouter } from 'next/router';
import { AiFillSetting, AiOutlineBell, AiOutlineGooglePlus, AiOutlineHistory, AiOutlineHome } from "react-icons/ai";
import { TbTournament } from "react-icons/tb";
import { GiBattleGear, } from "react-icons/gi";

import { useEffect, useState } from "react";
import { FaCompressArrowsAlt, FaInfo, FaMedal, FaPencilRuler, FaQuestion, FaRupeeSign, FaUserFriends, FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRegUserCircle, FaKey, FaGooglePlay, FaUsers } from "react-icons/fa";
import { MdAccountBalanceWallet, MdBugReport, MdEventNote, MdLanguage, MdLeaderboard, MdLocalPlay, MdOndemandVideo, MdOutlineKeyboardArrowRight, MdOutlineLogout, MdOutlinePoll, MdPolicy, MdQuiz, MdSupportAgent, MdVideogameAsset } from "react-icons/md";
import { BsFillBarChartLineFill, BsTranslate, BsWhatsapp } from "react-icons/bs";
import { HiDocumentCheck, HiHome, HiNewspaper, HiReceiptRefund, } from "react-icons/hi2";
import { RiFileUserFill, RiMenu2Fill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { TbBellPlus, TbCurrencyRupee } from "react-icons/tb";

import { GrClose } from "react-icons/gr";
import { Dropdown } from "flowbite-react";



export default function Header() {

   const router = useRouter();
   const [show, setShow] = useState(false);
   // const [showDownload, setShowDownload] = useState(true);
   useEffect(() => {
    
   
  }, [])


   return (
      <>
         {/* {showDownload &&
            <div className="sticky top-0 z-[11] flex items-center text-center justify-center w-full py-2 px-5 text-green-800 border-t-4 border-green-600 bg-green-50 download-app " >
               <div className="ml-3 font-medium  leading-loose text-sm">
                  <b>HEY !</b> Get ready to your pridction for GPL <Link href="/competition" className="playstore bg-green-600 inline-flex  items-center w-fit text-white px-3 text-xs rounded-sm py-1  "><FaGooglePlay className="mr-1" /> Play Now </Link>
               </div>
               <button onClick={() => setShowDownload(false)} type="button" className="absolute top-1 right-1 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-0.5 hover:bg-green-200 inline-flex items-center justify-center  ">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               </button>
            </div>
         } */}
    


         <header className="z-30 ">
            <div className="primary-menu px-1 fixed w-full top-0 z-30">
               <div className="container">
                  <nav className="flex items-center justify-between flex-wrap ">
                     <div className="flex items-center flex-shrink-0">
                        <div className="mr-1">
                           <button onClick={() => setShow(!show)} className="text-white"><RiMenu2Fill className="w-6 h-6" /></button>
                        </div>
                        <Link href="/" className="brand" id="ride_home">
                           <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
                        </Link>
                     </div>
                     <div className=" w-auto flex items-center space-x-1  ">
                        <div className="pr-1">
                           <Link href="/search-user" className="inline-block text-sm px-2 py-1.5 leading-none   rounded-sm text-white  hover:border-transparent hover:text-black hover:bg-slate-300 ">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                           </Link>

                           {/* <Image src="/images/hindi-eng-icon.png" alt="Logo" width={45} height={45} quality={100} /> */}

                        </div>
                        <div className="pr-2">
                           <Link href="/notification" className="relative inline-flex items-center  text-center text-white p-1">
                              <AiOutlineBell className="w-6 h-6" />
                              <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[8px] lg:text-[10px] text-white bg-red-600 border border-white rounded-full -top-1 -right-1 ">20</div>
                           </Link>

                        </div>

                        <div className="text-sm lg:flex-grow">

                           <Link href="/login" className="inline-block text-sm px-4 py-2 leading-none bg-gray-600  rounded text-white  hover:border-transparent hover:text-black hover:bg-white ">Login</Link>
                        </div>
                        <div>
                           <Link href="/register" className="inline-block text-sm px-4 py-2 leading-none  rounded text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br ">Register</Link>
                        </div>

                        {/* <div className="account-dropdown">

                           <Dropdown label={<Image width={40} height={40} className="rounded-full bg-white object-cover" src="/images/user-profile.jpg" alt="user profile" />} inline={true}>
                              <Dropdown.Header>
                                 <span className="block text-sm">
                                    Himanshu Verma
                                 </span>

                              </Dropdown.Header>
                              <Dropdown.Item icon={FaRegUserCircle}>
                                 My Profile
                              </Dropdown.Item>
                              <Dropdown.Item icon={FaKey}>
                                 Change Password
                              </Dropdown.Item>
                              <Dropdown.Item icon={MdLanguage}>
                                 Language: English हिंदी
                              </Dropdown.Item>

                              <Dropdown.Divider />
                              <Dropdown.Item icon={MdOutlineLogout}>
                                 Log out
                              </Dropdown.Item>
                           </Dropdown>

                        </div> */}



                     </div>
                  </nav>
               </div>
            </div>

            <div className="secondary-menu bg-[#0f172a] mt-20 ">
               <div className="container relative py-1">

                  <div className="grid grid-cols-2 gap-2">
                     <Link href="/competition" className={`menu-item  bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  px-5 rounded-sm ${router.pathname == "/competition" ? "active" : ""}`}>
                        <Image src="/images/q-comp.png" alt="competition" width={32} height={32} />
                        <span>Competition Quiz</span>
                     </Link>
                     <Link href="/quiz-tournaments" className={`menu-item bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  px-5 rounded-sm ${router.pathname == "/quiz-tournaments" ? "active" : ""}`}>
                        <Image src="/images/q-tour.webp" alt="competition" width={32} height={32} />
                        <span>Tournament Quiz</span>
                     </Link>
                  </div>

                  {/* <ul className="   text-indigo-300  space-x-8 justify-center ">
                      <li className="">
                        <Link href="/" className={`menu-item ${router.pathname == "/" ? "active" : ""}`}>
                           <span>Home</span>
                        </Link>
                     </li> 
                     <li className="text-center w-full">
                        <Link href="/competition" className={`menu-item inline-flex items-center bg-[#4e88fb] px-5 rounded-sm ${router.pathname == "/competition" ? "active" : ""}`}>
                           <Image src="/images/q-tour.webp" alt="competition" width={32} height={32} />
                           <span>Competition</span>
                        </Link>
                     </li>
                     <li className="text-center w-full">
                        <Link href="/quiz-tournaments" className={`menu-item inline-flex items-center bg-[#4e88fb] px-5 rounded-sm ${router.pathname == "/quiz-tournaments" ? "active" : ""}`}>
                           <Image src="/images/q-tour.webp" alt="competition" width={32} height={32} />
                           <span>Tournaments</span>
                        </Link>
                     </li>


                     <li className="">
                        <Link href="/polls" className={`menu-item ${router.pathname == "/polls" ? "active" : ""}`}>
                           <span>Polls</span>
                        </Link>
                     </li>
                     <li className="">
                        <Link href="/trivia-quizzes" className={`menu-item ${router.pathname == "/trivia-quizzes" ? "active" : ""}`}>
                           <span>Trivia</span>
                        </Link>
                     </li>
                     <li className="">
                        <Link href="/current-affairs-quiz" className={`menu-item ${router.pathname == "/current-affairs-quiz" ? "active" : ""}`}>
                           <span>Current Affairs Quiz</span>
                        </Link>
                     </li> 
                  </ul> */}
                  {/* <span className="block lg:hidden md:hidden absolute  top-0 right-0 text-blue-900 bg-gray-400 text-lg h-full line"><MdOutlineKeyboardArrowRight /></span> */}
               </div>
            </div>

            {/* ------ sidebar Menu-------- */}

            {show ? <>
               <aside id="menu_sidebar" className="fixed z-40 h-screen top-0 p-3 overflow-y-auto bg-white lg:w-1/3 w-11/12 " tabIndex={-1} aria-labelledby="sidebar-label">
                  <div>
                     <Link href="/" className="brand">
                        <Image src="/images/logo.png" alt="Logo" width={64} height={64} />
                     </Link>

                  </div>
                  <button type="button" onClick={() => setShow(!show)} className=" bg-gray-200  hover:bg-gray-300 rounded-lg text-sm p-2 absolute top-6 right-6 inline-flex items-center ">

                     <GrClose className="w-5 h-5" />

                  </button>

                  <div className="flex items-center text-sm justify-between py-3 border-b border-t bg-slate-50 text-slate-600">
                     <p><MdLanguage className="w-4 h-4" /> Language</p>
                     <button><BsTranslate className="w-4 h-4" /> English हिंदी </button>
                  </div>

                  <div className="main-navbar">
                     <div className="grid grid-cols-3 gap-1 ">
                        <Link href="/quiz-tournaments" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <TbTournament className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Tournaments</span>
                        </Link>
                        <Link href="/competition" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaCompressArrowsAlt className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Competition</span>
                        </Link>
                        <Link href="#" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <GiBattleGear className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Battle with friends</span>
                        </Link>

                        <Link href="/current-affairs-quiz" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdEventNote className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Current Affairs</span>
                        </Link>

                        <Link href="/trivia-quizzes" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdQuiz className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Trivia Quiz</span>
                        </Link>

                        <Link href="#" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaUserFriends className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Friend Quiz</span>
                        </Link>

                        <Link href="/polls" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <BsFillBarChartLineFill className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Poll</span>
                        </Link>

                        <Link href="#" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaPencilRuler className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Practise Quiz</span>
                        </Link>

                        <Link href="/current-affair-news" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <HiNewspaper className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Current Affairs News</span>
                        </Link>

                     </div>
                     <hr className="my-3 border-b-2 border-gray-200 sm:mx-auto h-1" />

                     <div className="grid grid-cols-3 gap-1 ">
                        <Link href="/index" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <HiHome className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Home</span>
                        </Link>
                        <Link href="/my-wallet" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdAccountBalanceWallet className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Wallet</span>
                        </Link>

                        <Link href="/quiz-leader-board" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">
                              <MdLeaderboard className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Leaderboard</span>
                        </Link>
                        <Link href="/my-account" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <RiFileUserFill className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">My Profile</span>
                        </Link>
                        <Link href="/my-account" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaRupeeSign className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Change UPI</span>
                        </Link>
                        <Link href="/my-account" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaMedal className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Refer & Earn</span>
                        </Link>

                     </div>

                     <hr className="my-3 border-b-2 border-gray-200 sm:mx-auto h-1" />

                     <div className="grid grid-cols-3 gap-1 ">
                        <Link href="/my-account" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <AiFillSetting className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Setting</span>
                        </Link>
                        <Link href="/my-account" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaQuestion className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">FAQ</span>
                        </Link>

                        <Link href="/contact-us" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdSupportAgent className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Support</span>
                        </Link>
                        <Link href="/contact-us" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdBugReport className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Report Error</span>
                        </Link>
                        <Link href="/all-videos" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdOndemandVideo className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">All Videos</span>
                        </Link>
                     </div>

                     <hr className="my-3 border-b-2 border-gray-200 sm:mx-auto h-1" />

                     <div className="grid grid-cols-3 gap-1 ">
                        <Link href="/about-us" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <FaInfo className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">About Us</span>
                        </Link>
                        <Link href="/privacy-policy" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdPolicy className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Privacy Policy</span>
                        </Link>
                        <Link href="/terms-and-condition" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <HiDocumentCheck className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Terms & Condition</span>
                        </Link>
                        <Link href="/refund-policy" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <HiReceiptRefund className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Refund</span>
                        </Link>
                        <Link href="/responsible-gaming" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdVideogameAsset className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Responsible Gaming</span>
                        </Link>
                        <Link href="/fair-play" className="p-2 rounded-sm text-[12px] lg:text-sm text-center  hover:bg-cyan-50 ">
                           <div className="flex justify-center items-center p-1 mx-auto mb-1  w-[36px] h-[36px]">

                              <MdLocalPlay className="inline w-5 h-5 text-cyan-600 " />
                           </div>
                           <span className="font-medium text-center text-black">Fair Play</span>
                        </Link>

                     </div>

                     <hr className="my-3 border-b-2 border-gray-200 sm:mx-auto h-1" />

                     <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-400  ">© 2022 <Link href="/" className="hover:underline">GyanOk™</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-2 space-x-6 sm:justify-center sm:mt-0">
                           <Link href="https://wa.me/9997526894?text=Hi%2C%0ACan%20you%20help%20me%20%3F" className="text-gray-500 hover:text-gray-900 ">
                              <BsWhatsapp />
                           </Link>

                           <Link href="https://www.facebook.com/gyanokofficial" className="text-gray-500 hover:text-gray-900 ">
                              <FaFacebookF />
                           </Link>
                           <Link href="https://www.instagram.com/gyanokofficial/" className="text-gray-500 hover:text-gray-900 ">
                              <FaInstagram />
                           </Link>
                           <Link href="https://twitter.com/Gyanokofficial" className="text-gray-500 hover:text-gray-900">
                              <FaTwitter />
                           </Link>
                           <Link href="https://www.youtube.com/@gyanokquiz" className="text-gray-500 hover:text-gray-900">
                              <FaYoutube />

                           </Link>
                           <Link href="https://www.linkedin.com/company/gyanok/" className="text-gray-500 hover:text-gray-900">
                              <FaLinkedinIn />

                           </Link>
                        </div>
                     </div>


                  </div>


               </aside>
               <div className="opacity-80 fixed inset-0 z-[30] bg-black" onClick={() => setShow(!show)}></div>
            </> : ''}

         </header>


         {/* bootom fixed Menu */}


         <div className="bottom-footer fixed bottom-0 w-full left-0 bg-[#fff]  z-10 shadow-[0px_0px_13px_0px_#bdbdbd] ">
            <div className="container">

               <div className="grid grid-cols-5 gap-1 text-gray-700  ">
             
                  <Link href="/quiz-leader-board" className={`text-center border-b-4  hover:bg-blue-100 pt-2 pb-1 ${router.pathname == "/quiz-leader-board" ? "text-primary border-blue-800" : "border-white"}`}>
                     <div className="flex justify-center items-center  mx-auto ">

                        <MdOutlinePoll className="inline w-5 h-5  " />
                     </div>
                     <span className="text-[11px] lg:text-[16px] text-center">Leaderboard</span>
                  </Link>

                  <Link href="/my-wallet" className={`text-center border-b-4  hover:bg-blue-100 pt-2 pb-1 ${router.pathname == "/my-wallet" ? "text-primary border-blue-800" : "border-white"}`}>

                     <div className="flex justify-center items-center  mx-auto">
                        <TbCurrencyRupee className="inline w-5 h-5" />
                     </div>
                     <span className="text-[11px] lg:text-[16px] text-center">Wallet</span>
                  </Link>
                  <Link href="/dashboard" className="flex items-center justify-center">
                     <div className={`inline-flex items-center justify-center -mt-8 w-12 h-12 bg-gradient-to-r  hover:bg-gradient-to-br rounded-full group focus:ring-2 focus:ring-blue-300 focus:outline-none ${router.pathname == "/dashboard" ? "from-blue-500 via-blue-600 to-blue-700 text-white  " : "text-black from-gray-100 via-gray-200 to-gray-300"} `} style={{ outline: '4px solid #fff' }}>
                        <AiOutlineHome className="w-6 h-6 " />

                     </div>
                  </Link>

                  <Link href="/notification" className={`text-center border-b-4  hover:bg-blue-100 pt-2 pb-1 ${router.pathname == "/notification" ? "text-primary border-blue-800" : "border-white"}`}>
                     <div className="flex justify-center items-center  mx-auto ">

                        <AiOutlineHistory className="inline w-5 h-5  " />
                     </div>
                     <span className="text-[11px] lg:text-[16px] text-center">History</span>
                  </Link>



                  <Link href="/my-account" className={`text-center border-b-4  hover:bg-blue-100 pt-2 pb-1 ${router.pathname == "/my-account" ? "text-primary border-blue-800" : "border-white"}`}>
                     <div className="flex justify-center items-center  mx-auto ">
                        <AiOutlineUser className="inline w-5 h-5  " />
                     </div>
                     <span className="text-[11px] lg:text-[16px] text-center">Account</span>
                  </Link>

               </div>
            </div>
         </div>

      </>

   )
}




