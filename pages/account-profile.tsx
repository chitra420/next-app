import Head from "next/head"
import Link from "next/link";
import React from "react";


export default function AccountProfile() {

    const districts = [
        {
          "district_title": "Almora",
          "id": 91
        },
        {
          "district_title": "Bageshwar",
          "id": 92
        },
        {
          "district_title": "Chamoli",
          "id": 93
        },
        {
          "district_title": "Champawat",
          "id": 94
        },
        {
          "district_title": "Dehradun",
          "id": 95
        },
        {
          "district_title": "Haridwar",
          "id": 96
        },
        {
          "district_title": "Nainital",
          "id": 97
        },
        {
          "district_title": "Pauri Garhwal",
          "id": 98
        },
        {
          "district_title": "Pithoragarh",
          "id": 99
        },
        {
          "district_title": "Rudraprayag",
          "id": 100
        },
        {
          "district_title": "Tehri Garhwal",
          "id": 101
        },
        {
          "district_title": "Udham Singh Nagar",
          "id": 102
        },
        {
          "district_title": "Uttarkashi",
          "id": 103
        }
      ];

    return (

        
        <>

            <Head>
                <title>My Account | GyanOK</title>
                <meta name="description" content="My Account Page" />

            </Head>

            <section className="py-5 relative">
                <div className="container">


                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                        <Link href="/my-account" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4  font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path></svg>
                            </Link>
                            <h4 className="inline-flex text-white">My Profile</h4>

                        </div>
                        <div>
                            <button type="button" className="text-white bg-gradient-to-br from-[#FF0080] to-[#FF8C00] hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-pink-200 shadow-sm  font-medium rounded-sm  px-5 py-2.5 text-center text-sm mb-2 ">Save</button>


                        </div>

                    </div>
                    <div className=" p-5 mb-3 bg-white rounded-sm shadow-sm">

                        <form action="#">


                            <div className="gap-3 md:gap-5 grid md:grid-cols-1">
                                <div className="relative">
                                    <label htmlFor="file_input" className="block text-sm mb-1 font-bold text-gray-900 ">Profile Photo</label>
                                    <input className="block w-full  text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 focus:outline-none " aria-describedby="file_input_help" id="file_input" type="file" />
                                    <p className="mt-1 text-sm text-gray-500 " id="file_input_help">PNG, JPG (MAX. 2MB).</p>
                                </div>
                                <div className="relative">
                                    <label htmlFor="username" className="block text-sm mb-1 font-bold text-gray-900 ">Name<span className="text-rose-600">*</span></label>
                                    <input type="text" id="name" name="username" placeholder="Enter full name" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1" required />
                                </div>

                                <div className="relative">
                                    <label htmlFor="useremail" className="block text-sm mb-1 font-bold text-gray-900 ">Email Address<span className="text-rose-600">*</span></label>
                                    <input type="email" id="useremail" name="useremail" placeholder="Enter email id" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1" required />
                                </div>

                                <div className="position-relative">
                                    <label htmlFor="usergender" className="block text-sm mb-1 font-bold text-gray-900 ">Gender<span className="text-rose-600">*</span></label>
                                    <select id="usergender" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1">
                                        <option>Select option</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                

                                <div className="relative">
                                    <label htmlFor="useraddress" className="block text-sm mb-1 font-bold text-gray-900 ">Address<span className="text-rose-600">*</span></label>
                                    <input type="text" id="useraddress" name="useraddress" placeholder="Enter address" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1" required />
                                </div>

                                <div className="position-relative">
                                    <label htmlFor="district" className="block text-sm mb-1 font-bold text-gray-900 ">District<span className="text-rose-600">*</span></label>
                                    <select value={94} id="district" className="block w-full text-black-color bg-[#F0EFFF] h-50 leading-[50px]  rounded-sm px-3  placeholder:text-optional-color outline-1">
                                        <option>Select option</option>
                                        {districts.map((item:any)=>{
                                           return <option value={item.id} key={item.id}>{item.district_title}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            <br />
                        </form>


                    </div>





                </div>

            </section>


        </>
    )
}