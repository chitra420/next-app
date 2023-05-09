import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function ResultWaitBox() {

    const [lottieresult, setlottieresult] = useState(null);

    useEffect(() => {
        import('../public/lottie/result-wait.json').then(setlottieresult);


      }, []);

    
    return (

        <div className="result-timer">
             <div className="p-3 lg:p-5 text-center rounded-sm bg-[#010a3a] drop-shadow">
        
             <Lottie loop animationData={lottieresult}  play style={{ width: 200, height: 'auto', margin: 'auto' }} />
                <h3 className="text-white text-xl my-5">Waiting for the other player to submit their quiz.</h3>
                <h5 className="text-yellow-300 mb-3">Note: Do not Press back or Close this window</h5>
            </div>
        </div>
    )
}