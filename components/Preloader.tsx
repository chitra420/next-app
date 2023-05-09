
export default function Preloader() {
  return (
  <>
      <section className="relative preloader-area text-center bg-[#0f172ac7] section-area h-full lg:h-[55vh]">
        <div className="flex items-center h-full flex-col justify-center">
          <div className="lds-ripple">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h4 className="text-yellow-300 text-[20px]">Please Wait</h4>
        </div>
        

      </section>
 
   <style jsx>{`
          
          .preloader-area.deactivate {
            display: none;
          }
          .lds-ripple {
            display: inline-block;
            position: relative;
            width: 110px;
            height: 110px;
          }
          .lds-ripple div {
            position: absolute;
            border: 5px solid #ffc107;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          }
          .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
          }
          .lds-ripple div:nth-child(3) {
            animation-delay: 0.01s;
          }
          @keyframes lds-ripple {
            0% {
              top: 50px;
              left: 50px;
              width: 0;
              height: 0;
              opacity: 0;
            }
            4.9% {
              top: 50px;
              left: 50px;
              width: 0;
              height: 0;
              opacity: 0;
            }
            5% {
              top: 50px;
              left: 50px;
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              top: 0px;
              left: 0px;
              width: 100px;
              height: 100px;
              opacity: 0;
            }
          }

      `}
      </style>
 </>
  )
}
