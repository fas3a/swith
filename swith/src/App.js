import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import SectionThree from "./components/SectionThree"
import Footer from "./components/Footer"
import Login from "./components/Login"

function App() {
  return (

    <div className="">
      <SectionOne/>
      {/* 
      <Header/>
      
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
      <Login/> 
      */}

      <header className="card">
        
        <div className="card-title text-primary mt-4">SWITH Global Market Hub</div>
        <p className="card-body"><b>Project Topic: </b>A startup that want to make it easier for companies to purchase goods from China.</p>
      </header>
    </div>
  );
}

export default App;
