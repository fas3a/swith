import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/sectionone.css"
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';
 


function SectionOne() {

    return (      
        <div className='sectionone px-4'>
            {/* Search Bar */}
            <nav className='navbar py-4 row'>
                    <div className='col-md-3'></div>
                    <form className='justify-content-center d-flex col-md-6 bg-white py-1'>
                            <input type="search" className='form-control py-1 px-2 pill search border-0' placeholder="Search for the product here!!" />
                            <div className='btn btn-sm'><AiOutlineSearch size="1.5em" color='black'/></div>
                    </form>
                    <div className='justify-content-end nav col-md-3'>
                        <a className='nav-link'><AiOutlineShoppingCart size="2em" color='white'/></a>
                        <a className='nav-link'><AiOutlineUnorderedList size="2em" color='white'/></a>
                    </div>
            </nav>

            {/* Popular Categories */}

            <div className='row mt-4'>
                <div className='col-md-3'>
                    <h6 className='rounded-pill text-center p-2 fs-6' style={{backgroundColor:"#785D42"}}>POPULAR CATERGORIES</h6>         
                </div>

                {/* Product you will like section */}
                <div className="col-md-6">
                    <div className='d-flex' >
                        <h6 className='text-start p-2 fs-6'>Products you’ll love</h6>
                        <h6 className='text-start p-2 fs-6'>Super hot deals</h6>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>

            <div className='row my-1'>
                <div className='col-md-3'>
                    <div className='nav text-white popular-categories px-1 flex-column'>
                        <a href='' className='nav-link text-white border-bottom'>Men’s Fashion</a>
                        <a href='' className='nav-link text-white border-bottom'>Women’s Fashion</a>
                        <a href='' className='nav-link text-white border-bottom'>Home Improvement and Tools</a>
                        <a href='' className='nav-link text-white border-bottom'>Automobile and Motorcycles</a>
                        <a href='' className='nav-link text-white border-bottom'>Phones and Telecommunications</a>
                        <a href='' className='nav-link text-white border-bottom'>Beauty, Health and Hair</a>
                        <a href='' className='nav-link text-white border-bottom'>Outdoor Fun and Sports</a>
                        <a href='' className='nav-link text-white border-bottom'>Consumer Electronics</a>
                        <a href='' className='nav-link text-white border-bottom'>Jewelry and Watches</a>
                        <a href='' className='nav-link text-white border-bottom'>Toys, Kids and Babies</a>
                        <a href='' className='nav-link text-white border-bottom'>Home , Pet and Appliances</a>
                        <a href='' className='nav-link text-white border-bottom'>Bags and Shoes</a>
                    </div>
                </div>

                {/* Product you will like section */}
                <div className="col-md-6 hot-deal px-1 " style={{borderRadius:"10px"}}>
                    <div className="row">
                        <h1 className='text-black col-md-4 fs-3 pt-4 ps-4' style={{color:"#412519"}}>We have all the devices you are looking for here</h1>
                        </div>
                </div>

                {/* contact us section */}
                <div className="col-md-3  contact-nav">
                    <div className='contact-container my-5'>
                        <AiOutlineUser size="7em" className='my-3'/>
                        <div className='row my-2'>
                            <div className='col-md-6'>
                                <button className=" btn btn-primary btn-sm px-3 mb-2 rounded-pill border-0" style={{backgroundColor:"#1E96A6"}}>Join Us</button>
                            </div>
                            <div className='col-md-6'>
                                <button className="btn btn-primary btn-sm px-3 rounded-pill border-0" style={{backgroundColor:"#1E96A6"}}>Sign In</button>
                            </div>
                        </div>
                        <p className='my-5'>We will get you the product you desire</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionOne

