import React from "react";
import CarAb from "../IMG/Car-About.png";


function AboutData() {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{ minHeight: "400px;" }}>
                            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                <img className="position-absolute img-fluid w-100 h-100" src={CarAb} style={{ objectFit: "cover" }} alt="IMG" />
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: "rgba(0, 0, 0, .08);" }}></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase"> About Us </h6>
                            <h1 className="mb-4"><span className="text-primary">CarServ</span> Is The Best Place For Your Auto Care</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center m-3" style={{ width: " 45px", height: "45px;" }}>
                                            <span className="fw-bold text-secondary p-2">01</span>
                                        </div>
                                        <div className="ps-3  m-3">
                                            <h6>Professional & Expert</h6>
                                            <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center  m-3" style={{ width: " 45px", height: "45px;" }}>
                                            <span className="fw-bold text-secondary p-2">02</span>
                                        </div>
                                        <div className="ps-3  m-3">
                                            <h6>Quality Servicing Center</h6>
                                            <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center  m-3" style={{ width: " 45px", height: "45px;" }}>
                                            <span className="fw-bold text-secondary p-2">03</span>
                                        </div>
                                        <div className="ps-3  m-3">
                                            <h6>Awards Winning Workers</h6>
                                            <span>Diam dolor diam ipsum sit amet diam et eos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="/" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutData;