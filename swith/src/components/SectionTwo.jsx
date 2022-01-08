import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from "../images/logo.jpg"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.png"
import image7 from "../images/image7.png"
import { Height } from "@material-ui/icons";
import latestProduct from "../data/latestProduct"

const SectionTwo = () => {
   
  return (
    <div className="container-fluid pt-3">  
        
          <div className="row text-center">
            <div className="col-md-4">
               <div className="card" style={{borderRadius:"0px", backgroundColor: "#F6F5F3"}}>
                 <div className="card-title text-red py-0" style={{backgroundColor: "#1e96a6"}}>Latests Products in demand</div>
                  <div className="card-body px-0 py-0">

                    {/* editing started from here */}
                    <div className=" text-start">
                     
                        
                        {/* {latestProduct.map((latestProduct) => {
                          const {id, img1, prodtName} = latestProduct
                          return(
                            <>
                              <a href='' key={id} className='nav-link border-1 d-flex'>
                                <img 
                                  src={img1} 
                                  alt=""  
                                  className="" 
                                  style={{width:"30px", height:"30px"}}
                                />
                                <span 
                                  className="nav-text " 
                                  style={{fontSize:"14px"}}
                                >
                                  {prodtName}
                                </span>
                              </a>
                            </>
                          )
                        })} */}

                          <a href='' className='nav-link border-1 d-flex'>
                            <img src={image7} alt="" srcset="" className="" style={{width:"30px", height:"30px"}}/>
                            <span className="nav-text " style={{fontSize:"14px"}}>HP Pavilion, 9th generation core i9</span>
                          </a>

                          <a href='' className='nav-link border-1 d-flex'>
                            <img src={image4} alt="" srcset="" className="" style={{width:"30px", height:"30px"}}/>
                            <span className="nav-text " style={{fontSize:"14px"}}>T class pure grade motor cycle tyres</span>
                          </a>

                          <a href='' className='nav-link border-1 d-flex'>
                            <img src={image5} alt="" srcset="" className="" style={{width:"30px", height:"30px"}}/>
                            <span className="nav-text " style={{fontSize:"14px"}}>T class pure grade motor cycle rims</span>
                          </a>

                          <a href='' className='nav-link border-1 d-flex'>
                            <img src={image6} alt="" srcset="" className="" style={{width:"30px", height:"30px"}}/>
                            <span className="nav-text " style={{fontSize:"14px"}}>High quality beauty products </span>
                          </a>

                          <a href='' className='nav-link border-1 d-flex'>
                            <img src={image7} alt="" srcset="" className="" style={{width:"30px", height:"30px"}}/>
                            <span className="nav-text " style={{fontSize:"14px"}}>HP Pavilion, 9th generation core i9</span>
                          </a>
                      
                    </div>
                    
                  </div>
                </div>
            </div>
            <div className="col-md-4">
               <div className="card h-100" style={{background:"#062B46"}}>
                  <div className="card-body d-flex py-5">
                    <p className="card-text justify-content-center fs-4 text-white">We have what you are looking for enjoy comfort in finding your products with us
                      <br/><strong> Swith hub limited</strong>
                    </p>
                  </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card h-100" style={{backgroundColor: "#F6F5F3"}}>
                  <div className="card-title text-red py-0" style={{backgroundColor: "#1e96a6"}}>Latests Products in demand</div>
                    <div className="card-body text-start ps-1 py-5">
                        <p className="card-text"><b>Mr. Akin: </b>Swift is the Best</p>
                        <p className="card-text"><b>Mrs. Abel: </b>Their Services is supreme</p>
                    </div>
                </div>
          </div>  
        </div> 
    </div>
  );
};

export default SectionTwo;
