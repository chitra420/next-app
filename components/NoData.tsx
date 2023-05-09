import Image from "next/image";


export default function Nodata() {

 
    return (

        <div className="bg-white rounded-sm mb-5 shadow-lg">
                <div className="text-center p-5 lg:p-8">
                    <Image src="/images/no-data.png" width={130} height={130} className="m-auto" alt="no data"/>
                    <h4 className="text-red-600 mt-3">No Data Available Here</h4>
                    <p className=" text-gray-600">There is no data to show you right now.</p>
                </div>
        </div>
    )
}