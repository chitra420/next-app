import { useEffect } from "react";


export default function TestLogin(){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://otpless.com/auth.js";
        document.body.appendChild(script);
        const otplessInit = Reflect.get(window, 'otplessInit');
        otplessInit?.();
      Reflect.set(window, 'otpless', otpless);
      return () =>{
        document.body.removeChild(script);
      }
     }, []);
    const otpless = (otplessUser) => {
        console.log({
            otplessUser
    })
        // your_code_here
    }
    return (
        <>Login</>
    )
}