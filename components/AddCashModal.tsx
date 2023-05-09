export default function AddCashModal({show, setShow}) {
    return (
        <>
        {show ? <> <div tabIndex={-1} aria-hidden="true" className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[1001] outline-none focus:outline-none">
             <div className="relative p-4 w-full max-w-2xl h-auto">

                 <div className="relative bg-white rounded-lg shadow ">

                     <div className="flex justify-between items-start p-4 rounded-t border-b ">
                         <h3 className="text-xl  text-gray-900">
                             Add Money
                         </h3>
                         <button type="button" onClick={() => setShow(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " >
                             <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                             <span className="sr-only">Close modal</span>
                         </button>
                     </div>

                     <div className="p-3 lg:p-5">
                         <div className="form-group mb-5">
                             <label htmlFor="amount" className="block mb-2  font-medium text-gray-900 ">Amount</label>
                             <input type="text" id="amount" placeholder="Enter amount" className="block w-full text-black-color bg-[#F0EFFF] h-50  leading-[50px]  rounded-sm pl-15 pr-15 placeholder:text-optional-color outline-0 placeholder:ease-in placeholder:duration-300 focus:placeholder:text-transparent text-13px md:text-15px lg:text-16px" />

                         </div>
                         <h5 className="mb-3">Amount will be added in your wallet</h5>
                         <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm  py-1 px-2 lg:px-3 lg:py-2 text-sm text-center mr-1 mb-2">+ ₹10</button>
                         <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm  py-1 px-2 lg:px-3 lg:py-2 text-sm text-center mr-1 mb-2">+ ₹20</button>
                         <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm  py-1 px-2 lg:px-3 lg:py-2 text-sm text-center mr-1 mb-2">+ ₹50</button>
                         <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm  py-1 px-2 lg:px-3 lg:py-2 text-sm text-center mr-1 mb-2">+ ₹100</button>

                     </div>

                     <div className="p-5 text-right space-x-2 rounded-b border-t border-gray-200 ">

                         <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-sm border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Decline</button>
                         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm  px-5 py-2.5 text-center dark:bg-blue-600 ">Pay Now</button>

                     </div>
                 </div>
             </div>
         </div>
       <div className="opacity-80 fixed inset-0 z-[100] bg-black"></div></>: ''}
     </>
    )
}

