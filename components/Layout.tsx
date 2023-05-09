import Header from "./Header";
import Footer from "./Footer";
export default  function Layout(props){
  return (
      <div>
      <Header />
      <div className="main_content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}