import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Header from './components/Header'

function App() {
  return (
    <div className='App py-2' style={{ background: '#062B46' }}>
      {/* <Header /> */}

      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <Footer /> */}
    </div>
  )
}

export default App
