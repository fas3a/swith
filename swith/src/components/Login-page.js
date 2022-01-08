import logo from "./images/Frame 4.png";
import logo2 from './images/log.png';
import logo3 from './images/Group 53.png';
import logo4 from './images/Group.png';
import logo5 from './images/instagram.png';
import '../css/Login-page';

function App() {
  return (
    <div className="container">
      <div className="first-box">
        <img src={logo} alt="swith logo"/></div>
      <div className="second-box-container">
        <div className="second-box">
          <p><img src={logo2}/></p>
        <h2>Welcome</h2>
        <form>
          <label for="email">Email Address</label><br/>
          <input type="email" name="email" id="email" placeholder="email@yahoo.com"></input><br/>
          <label for ="password">Password</label><br/>
          <input type ="password" id="psd" name="password" placeholder ="*****"></input><br/>
          <div className="check">
            <div><h4>
            <input type="checkbox" id="remember"></input>
            <label for="remember"> Remember me</label>
            </h4>
            </div>
            <h4>Forgot Password?</h4>
            </div>
            <button id="btn">Continue</button>
            <h5>Don't have an account? Create one <a href="#">here</a>
            </h5>
              <div className="writeup">
                <p><hr></hr>or continue with<hr></hr></p>
                <p id="icon">
                  <img src={logo5}/>
                  <img src={logo4}/>
                  <img src={logo3}/>
                  </p>
              </div>

        </form>
      </div>
      </div>
      
    </div>
  );
}

export default App;
