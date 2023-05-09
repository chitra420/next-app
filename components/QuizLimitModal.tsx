import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function QuizLimitModal({ showLimit, setShowLimit, quizLimitSec }) {
    return (
        <>
            {showLimit ? <> <div tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
                <div className="relative w-full h-full max-w-lg md:h-auto p-3">
                    <div className="relative bg-[url(/images/curved-background.jpg)] bg-cover rounded-sm shadow dark:bg-gray-700">

                        <div className="absolute top-2 right-2 ">

                            <button type="button" onClick={() => setShowLimit(false)} className="text-red-600 bg-red-100 hover:bg-red-300 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="p-5 text-center">
                            <Image src="/images/limit-time.png" alt="limit" className="mx-auto" width={150} height={150} />
                            <h4 className="mb-1 text-red-800">Oh No!</h4>
                            <p className="text-gray-600 text-lg">You used all your free credit</p>
                            <p>Wait for 12AM to get 10 free credits.</p>


                        </div>
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 bg-gray-600 border-0 " />
                            <span className="absolute text-xl px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 ">OR</span>
                        </div>
                        <div className="p-3  border-gray-400 rounded-b">
                            <h5 className="text-base mb-3">Play paid tournament and get chance to win</h5>
                            <div className="space-y-2 text-orange-700 text-sm mb-5">
                                <p className="  flex items-center">
                                    <AiOutlineCheckCircle className="mr-1" />bonus free credits,</p>
                                <p className="  flex items-center">
                                    <AiOutlineCheckCircle className="mr-1" />scratch card</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
                <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div></> : ''}
        </>
    )
}