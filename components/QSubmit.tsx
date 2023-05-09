import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';

export default function QSubmit() {

    const [lottieprocess, setlottieprocess] = useState(null);

    useEffect(() => {
        import('../public/lottie/processing.json').then(setlottieprocess);

      }, []);
    return (

        <div className="section-area text-center">
                <div className="container">
                    <Lottie loop animationData={lottieprocess}  play style={{ width: 150, height: 'auto', margin: 'auto' }} />
                    <h4 className='text-slate-100 mt-3'>Processing please do not navigate away from the current window or refresh the page</h4>
                </div>
        </div>
    )
}