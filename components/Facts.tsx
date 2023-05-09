import AliceCarousel from "react-alice-carousel";

import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item text-white p-3 border" data-value="1" key={1}>1</div>,
    <div className="item text-white p-3 border" data-value="2" key={2}>2</div>,
    <div className="item text-white p-3 border" data-value="3" key={3}>3</div>,
    <div className="item text-white p-3 border" data-value="4" key={4}>4</div>,
    <div className="item text-white p-3 border" data-value="5" key={5}>5</div>,
];

export default function Facts() {
    return (
        <>
            <div className="block">
            <AliceCarousel
                autoPlay
                autoPlayControls
                autoPlayStrategy="none"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={false}
                disableDotsControls
                disableButtonsControls
                items={items}
               
            />
            </div>
           
            {/* <AliceCarousel
                mouseTracking
                disableDotsControls={true}
                disableButtonsControls={true}
                //  innerWidth={initWidth}
                autoPlay={false}
                autoPlayInterval={3000}
                animationDuration={800}
                infinite={false}
                controlsStrategy="responsive"

                responsive={{
                    0: { items: 1 },
                    568: { items: 1 },
                    1024: { items: 1 },
                }}>

                <div className="p-1">
                    <div className="mt-5 mb-3 text-left bg-white/20 border border-gray-600 p-3 rounded-sm max-w-xl w-full">
                        <p className="text-sm text-yellow-300 mb-3"> Did You Know?</p>

                        <p className="text-gray-300">Amount will be refunded in your wallet within 24 hr</p>


                    </div>
                </div>
                <div className="p-1">
                    <div className="mt-5 mb-3 text-left bg-white/20 border border-gray-600 p-3 rounded-sm max-w-xl w-full">
                        <p className="text-sm text-yellow-300 mb-3"> Did You Know?</p>

                        <p className="text-gray-300">Amount will be refunded in your wallet within 24 hr</p>


                    </div>
                </div>






            </AliceCarousel> */}
        </>
    )
}

