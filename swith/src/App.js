import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
      
    <div className='App py-2' style={{background:"#062B46"}}>
      <Header/>
      <SectionOne/>
      
      {/* 
      
      
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
      <Login/> 
      */}
      <SectionThree />
    </div>
  )
}

export default App
