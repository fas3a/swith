import React from 'react'
import logo from "../images/logo.jpg"
import {ImUser} from "react-icons/im"
import banner from "../images/banner.png"
import "../css/header.css"


function Header() {
    return (
        <div>
            <nav className="navbar mt-2 mb-0" >
                <div className="container-fluid" style={{background:"linear-gradient(180deg, #785D42 18.75%, #1E96A6 82.81%)"}}>
                    <div className='d-flex'>
                        <img src={logo} className="navbar-brand" style={{width:"50px"}}></img>
                        <span className='navbar-text text-white'>Creating acces to the product you are looking for.</span>
                    </div>
                    <div className="d-flex ">
                        <div className=" me-3 text-white"> JOIN US TODAY</div>
                        <ImUser size="1.5em"/>
                    </div>
                </div>

            </nav>

            <nav className="navbar banner h-50px">
                <div className="container-fluid py-4"> 
                <h3 className='me-5 ms-3 my-6 text-left text-white mw-15 banner-text'>We will deliver your products at your door step, your safe delivery is guaranteed 
                Order with Swift port today!!! </h3>

                </div>
            </nav>
        </div>
    )
}

export default Header
