import Header from "./Header";
import Footer from "./Footer";
import dynamic from 'next/dynamic'

export default  function LayoutCopy(props){
 
  const JoyRideNoSSR = dynamic(
    () => import('react-joyride'),
    { ssr: false }
  )
  

  

  const steps = [
    {
      title: 'Welcome to Home',
      content: 'This is the first page now you can play lots of quizzes',
      target: '#ride_home',
      disableBeacon: true,
          
    },
    {
      title: 'All Quizzes Area',
      content: 'This is my awesome feature! Here we see a list of all quizzes',
      target: '#ride_allquizzes',
     
    }
    
  ]

  return (
      <div>
      <Header />
      
      <div className="main_content">
        {props.children}
      </div>
       <JoyRideNoSSR
        run={true}
        continuous 
      
        hideCloseButton 
        scrollToFirstStep 
        showProgress 
        showSkipButton 
        steps={steps}
         
      />


      <Footer />
    </div>
  )
}