import Link from "next/link";
import { RiShieldUserLine } from "react-icons/ri";

export default function LoginAlert({ show, setShow }) {
    return (
        <>
            {show ? <> <div tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-sm shadow dark:bg-gray-700">
                        <button type="button" onClick={() => setShow(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-sm  p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <div className="p-6 text-center">
                           
                            <RiShieldUserLine className="mx-auto mb-4 text-yellow-400 w-14 h-14 " />
                            <h3 className="mb-5  font-normal text-primary ">To Play Quiz</h3>
                            <Link  href="" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50  font-medium rounded-sm px-5 py-2.5 text-center ">
                                Login
                            </Link>
                            <div className="inline-flex justify-center items-center w-full">
                                <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 " />
                                <div className="absolute left-1/2 px-4 bg-white -translate-x-1/2 ">
                                    <big>OR</big>
                                </div>
                            </div>
                            <Link href="" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300  shadow-lg shadow-red-500/50  font-medium rounded-sm  px-5 py-2.5 text-center ">Create new account</Link>
                        </div>
                    </div>
                </div>
            </div>
                <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div></> : ''}
        </>
    )
}

