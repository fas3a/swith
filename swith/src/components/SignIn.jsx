import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Frame4 from "../images/Frame4.png";
import Modal from "react-modal";
import "../css/loginModal.css";
import log from "../images/log.png";
import SocialMedia from "../data/socialMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/sectionone.css";
import SignUp from "./SignUp";

function SignIn() {
  const [isOpen, setisOpen] = useState(false);

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <div>
      <button
        className=" btn btn-primary btn-sm px-3 mb-2 rounded-pill border-0"
        style={{ backgroundColor: "#1E96A6" }}
        onClick={toggleModal}
      >
        Sign In
      </button>
      {/* <button className="btn btn-primary" onClick={toggleModal}>Sign In</button> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal loginModal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="d-flex justify-content-center">
          <div
            className="card h-100 justify-content-center"
            style={{ width: "40rem" }}
          >
            <div className="row">
              <img
                src={Frame4}
                alt=""
                className="col-md-6 pb-5 pt-2"
                style={{ backgroundColor: "#062B46" }}
              />
              <div className="col-md-6 text-center">
                <div className="d-flex mx-4 px-6 mt-4 justify-content-between ">
                  <a href="" style={{ textDecoration: "none" }}>
                    Home
                  </a>
                  <a
                    href={<SignIn />}
                    style={{
                      textDecoration: "none",
                      borderBottom: "2px solid blue",
                    }}
                    className="text-black bb-1"
                  >
                    Sign In
                  </a>
                  <SignUp />
                </div>
                <div className="d-flex justify-content-center">
                  <img
                    src={log}
                    style={{ width: "50px", height: "50px" }}
                    className=""
                    alt=""
                  />
                </div>
                <div className="text">Welcome</div>
                <form action="" className="form">
                  <div
                    className="justify-content-center pt-5 px-2 pb-2"
                    style={{ height: "auto" }}
                  >
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="email Address"
                      className="form-control mb-2"
                    />
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="password"
                      className="form-control"
                    />

                    <div
                      className="d-flex justify-content-around m-2"
                      style={{ fontSize: "10px" }}
                    >
                      <div className="d-flex">
                        <input type="checkbox" name="" id="" className="me-1" />
                        <span className="fs-10" style={{ fontSize: "10px" }}>
                          Remember Me
                        </span>
                      </div>
                      <div className="d-flex">
                        <span>Remember Me</span>
                        <input type="checkbox" name="" id="" className="ms-2" />
                      </div>
                    </div>

                    <input
                      type="button"
                      value="Continue"
                      className="btn btn-primary w-100 mt-3 mb-1 rounded-pill"
                      style={{}}
                    />

                    <div className="" style={{ fontSize: "12px" }}>
                      Don’t have an account. Create one
                      <a href="http://" style={{ textDecoration: "none" }}>
                        {" "}
                        here
                      </a>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                      <hr className="w-10" style={{ border: "" }} />
                      <span style={{ fontSize: "10px" }}>Or continue with</span>
                      <hr className="w-10" style={{ border: "" }} />
                    </div>

                    <div className="d-flex justify-content-center">
                      {SocialMedia.map((socialMedia) => {
                        const { id, link, socialImg } = socialMedia;
                        return (
                          <div>
                            <a
                              id={id}
                              href={link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src={socialImg}
                                alt={id}
                                style={{ height: "50%" }}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div className="card-body d-flex py-5">
                        <p className="card-text justify-content-center fs-4 ">We have what you are looking for enjoy comfort in finding your products with us
                        <br/><strong> Swith hub limited</strong>
                        </p>
                    </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SignIn;
